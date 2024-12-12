const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const pool = require('./db');
const fs = require('fs').promises;
const router = express.Router();

router.post('/success', async (req, res) => {
  const { session_id, token: receivedToken, product } = req.body;
  const token = receivedToken || generateCode();

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    const paymentIntentId = session.payment_intent;

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== 'succeeded' && paymentIntent.status !== 'authorized') {
      return res.status(400).json({ message: 'Payment not confirmed as succeeded or authorized' });
    }

    const paymentMethodId = paymentIntent.payment_method;
    const paymentMethod = await stripe.paymentMethods.retrieve(paymentMethodId);
    const cardLast4 = paymentMethod.card.last4;
    const cardType = paymentMethod.card.brand;

    const paymentCheck = await pool.query('SELECT id FROM payments WHERE payment_intent_id = $1', [paymentIntentId]);
    let paymentId;

    if (paymentCheck.rows.length > 0) {
      paymentId = paymentCheck.rows[0].id;
    } else {
      const insertPayment = await pool.query(
        'INSERT INTO payments (session_id, payment_intent_id, token, payment_status, card_last4, card_type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
        [session_id, paymentIntentId, token, paymentIntent.status, cardLast4, cardType]
      );
      paymentId = insertPayment.rows[0].id;
    }

    const downloadCheck = await pool.query('SELECT download_link FROM downloads WHERE payment_id = $1', [paymentId]);

    if (downloadCheck.rows.length > 0) {
      return res.status(200).json({
        status: 'OK',
        download_link: downloadCheck.rows[0].download_link,
        token,
        product,
        card_last4: cardLast4,
        card_type: cardType,
      });
    }

    const protocol = req.protocol;
    const host = req.get('host');
    const fullUrl = `${protocol}://${host}/npx/download/${token}/${session_id}`;

    await pool.query('INSERT INTO downloads (payment_id, download_link) VALUES ($1, $2)', [paymentId, fullUrl]);
    await pool.query('INSERT INTO products (download_link, product) VALUES ($1, $2)', [fullUrl, product]);

    res.status(200).json({
      status: 'OK',
      download_link: fullUrl,
      token,
      product,
      card_last4: cardLast4,
      card_type: cardType,
    });
  } catch (error) {
    console.error('Error in /success route:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000);
}

module.exports = router;