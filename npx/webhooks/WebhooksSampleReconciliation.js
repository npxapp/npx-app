const express = require('express');
const pool = require('./db');
const fs = require('fs').promises;  // Use fs.promises for async file operations
const router = express.Router();

router.post('/test/reconciliation', async (req, res) => {
  const { session_id, token: receivedToken, product, last4, type } = req.body;  // Accept session_id and token from frontend
  
  // Generate a Token if not sent in the request
  const token = receivedToken || generateCode();
  
  try {
    // Fake session object matching Stripe's structure
    const session = {
      payment_intent: `pi_${Math.random().toString(36).substring(2, 18)}`,  // Generate a fake payment intent ID
      payment_method_details: {
        card: {
          last4: last4,  // Random 4-digit number as last4
          brand: type,  // Randomly selected card type in lowercase
        }
      }
    };

    // Retrieve paymentIntentId from session object as per original structure
    const paymentIntentId = session.payment_intent;

    // Fake paymentIntent object to match structure
    const paymentIntent = {
      id: paymentIntentId,
      status: 'succeeded'  // Set payment status to 'succeeded'
    };

    // Check if payment status is 'succeeded'
    if (paymentIntent.status !== 'succeeded') {
      return res.status(400).json({ message: 'Payment not confirmed as succeeded' });
    }

    // Extract last 4 digits and card type from session object
    const cardLast4 = session.payment_method_details.card.last4;
    const cardType = session.payment_method_details.card.brand;

    // Check if payment is already stored
    const paymentCheck = await pool.query('SELECT id FROM payments WHERE payment_intent_id = $1', [paymentIntentId]);
    let paymentId;

    if (paymentCheck.rows.length > 0) {
      paymentId = paymentCheck.rows[0].id;
    } else {

      // Store new payment info if not in database, including card_last4 and card_type
      const insertPayment = await pool.query(
        'INSERT INTO payments (session_id, payment_intent_id, token, payment_status, card_last4, card_type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
        [session_id, paymentIntentId, token, paymentIntent.status, cardLast4, cardType]
      );
      paymentId = insertPayment.rows[0].id;
    }

    // Check if a download link already exists for this payment
    const downloadCheck = await pool.query('SELECT download_link FROM downloads WHERE payment_id = $1', [paymentId]);

    if (downloadCheck.rows.length > 0) {
      // If download link exists, return it with status OK and the token
      return res.status(200).json({
        status: 'OK',
        download_link: downloadCheck.rows[0].download_link,
        token,  // Respond with token
        product,
        card_last4: cardLast4,
        card_type: cardType,
      });
    }

    // If no download link exists, create custom download link based on the full URL (including port)
    const protocol = req.protocol;  // 'http' or 'https'
    const host = req.get('host');  // Includes domain and port (e.g., 'localhost:8080')
    const fullUrl = `${protocol}://${host}/npx/download/${token}/${session_id}`;

    // Store the generated download link in the database
    await pool.query(
      'INSERT INTO downloads (payment_id, download_link) VALUES ($1, $2)',
      [paymentId, fullUrl]
    );
    
    // Insert the record into the products table
    await pool.query(
      'INSERT INTO products (download_link, product) VALUES ($1, $2)',
      [fullUrl, product]
    );

    // Respond with the new download link and token
    res.status(200).json({
      status: 'OK',
      download_link: fullUrl,
      token,  // Respond with token
      product,
      card_last4: cardLast4,
      card_type: cardType,
    });

  } catch (error) {
    console.error('Error processing /test/restore route:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Helper function to generate a random 6-digit token
function generateCode() {
  return Math.floor(100000 + Math.random() * 900000);
}

// Helper function to randomly select a card type
function getRandomCardBrand() {
  const cardTypes = ['visa', 'discover', 'mastercard', 'amex'];
  return cardTypes[Math.floor(Math.random() * cardTypes.length)];
}

module.exports = router;