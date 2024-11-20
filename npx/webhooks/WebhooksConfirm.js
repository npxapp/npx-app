const express = require('express');
const pool = require('./db');
const router = express.Router();

router.post('/access', async (req, res) => {
  const { token } = req.body;

  try {
    if (!token) {
      return res.status(400).json({ message: 'Token is required' });
    }

    // Verify token in the payments table
    const paymentCheck = await pool.query(
      'SELECT id FROM payments WHERE token = $1',
      [token]
    );

    if (paymentCheck.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    const paymentId = paymentCheck.rows[0].id;

    // Retrieve the download link from the downloads table
    const downloadCheck = await pool.query(
      'SELECT download_link FROM downloads WHERE payment_id = $1',
      [paymentId]
    );

    if (downloadCheck.rows.length === 0) {
      return res.status(404).json({ message: 'Download link not found' });
    }

    const downloadLink = downloadCheck.rows[0].download_link;
    res.status(200).json({ status: 'OK', download_link: downloadLink });

  } catch (error) {
    console.error('Error processing /access route:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;