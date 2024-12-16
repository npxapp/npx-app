const express = require('express');
const pool = require('./db');
const router = express.Router();

router.get('/registry/read/:id?', async (req, res) => {
  const { id } = req.params;

  try {
    let result;

    if (id) {
      // Fetch the record with the specific ID from the assets table
      result = await pool.query('SELECT * FROM assets WHERE id = $1', [id]);
    } else {
      // Fetch all records from the assets table
      result = await pool.query('SELECT * FROM assets');
    }

    // Prepare and send the response
    res.status(200).json({
      status: 'OK',
      assets: result.rows,
    });
  } catch (error) {
    console.error('Error processing /registry route:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;