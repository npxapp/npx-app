const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const pool = require('./db');
const fs = require('fs');
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET; // Ensure you set the webhook secret key
const router = express.Router();

// Use express.json() middleware to parse JSON payloads for webhook events
router.post('/webhooks', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature']; // Retrieve the signature from the request headers
  const payload = req.body;

  let event;

  try {
    // Verify the Stripe webhook signature
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);

    // Handle the payment_intent.succeeded event
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object; // The PaymentIntent object from the event

      // Retrieve the payment intent ID
      const paymentIntentId = paymentIntent.id;

      try {
        // Check if the payment intent has already been stored in the database
        const paymentCheck = await pool.query(
          'SELECT id FROM payments WHERE payment_intent_id = $1',
          [paymentIntentId]
        );
        let paymentId;

        if (paymentCheck.rows.length > 0) {
          paymentId = paymentCheck.rows[0].id;
        } else {
          // Store new payment info if it doesn’t exist in the database
          const insertPayment = await pool.query(
            'INSERT INTO payments (payment_intent_id, token, payment_status) VALUES ($1, $2, $3) RETURNING id',
            [paymentIntentId, generateCode(), paymentIntent.status]
          );
          paymentId = insertPayment.rows[0].id;
        }

        // Check if a download link already exists for this payment
        const downloadCheck = await pool.query(
          'SELECT download_link FROM downloads WHERE payment_id = $1',
          [paymentId]
        );

        if (downloadCheck.rows.length === 0) {
          // Generate and upload file if no existing link
          const fileBuffer = fs.readFileSync('/root/App.tar.gz');
          const fileUpload = await stripe.files.create({
            purpose: 'dispute_evidence',
            file: { data: fileBuffer, name: 'App.tar.gz', type: 'application/gzip' }
          });

          if (!fileUpload || fileUpload.status !== 'succeeded') {
            return res.status(500).json({ message: 'File upload failed' });
          }

          const downloadLink = fileUpload.url;

          // Store the download link in the database
          await pool.query(
            'INSERT INTO downloads (payment_id, download_link) VALUES ($1, $2)',
            [paymentId, downloadLink]
          );
        }

        // Send success response
        res.status(200).json({ status: 'OK' });

      } catch (error) {
        console.error('Error processing payment_intent.succeeded event:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }

    } else {
      // Log and handle other event types (optional)
      console.log(`Unhandled event type: ${event.type}`);
      return res.status(200).json({ status: 'OK' });
    }

  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return res.status(400).json({ message: 'Webhook Error: Signature verification failed' });
  }
});

// Helper function to generate token codes
function generateCode() {
  return Math.floor(100000 + Math.random() * 900000);
}

module.exports = router;