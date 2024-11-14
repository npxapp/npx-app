const express = require('express');
const pool = require('./db');
const router = express.Router();

router.post('/payments', async (req, res) => {
  const { session_id } = req.body;

  try {
    // Delay the response by 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Retrieve all payment records
    const paymentCheck = await pool.query('SELECT * FROM payments');
    
    // Prepare the response payload
    const responsePayload = {
      status: 'OK',
      payments: paymentCheck.rows
    };

    // Send the response
    res.status(200).json(responsePayload);
    
  } catch (error) {
    console.error('Error processing /payments route:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;