const express = require('express');
const pool = require('./db');
const router = express.Router();

// Helper function to generate a new token
function generateCode() {
  return Math.floor(100000 + Math.random() * 900000);
}

router.post('/sample', async (req, res) => {
  const { session_id, token, product, bad } = req.body;
  const downloadLink = 'https://example.com/test-download'; // Replace with actual download link

  try {
    if (bad) {
      // If 'bad' is sent in req.body, return an error response
      return res.status(400).json({ message: 'BAD' });
    }

    // Delay the response by 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Prepare the response payload
    const responsePayload = {
      status: 'OK',
      download_link: downloadLink,
      product,
    };

    // If token is not sent, generate a new token and include it in the response
    if (!token) {
      responsePayload.token = generateCode();
    }

    // Send the response
    res.status(200).json(responsePayload);
    
  } catch (error) {
    console.error('Error processing /sample route:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;