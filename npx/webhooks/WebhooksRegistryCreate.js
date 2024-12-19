const express = require('express');
const pool = require('./db');
const router = express.Router();

router.post('/registry/create', async (req, res) => {
  const { name, type, slug, asset_status, webhook, text, blob } = req.body;

  try {
    // Insert the record into the assets table
    const insertResult = await pool.query(
      `INSERT INTO assets (name, type, slug, asset_status, webhook, text, blob) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`,
      [name, type, slug, asset_status, webhook, text, blob]
    );

    // Respond with the newly created record
    res.status(201).json({
      status: 'OK',
      asset: insertResult.rows[0],
    });
  } catch (error) {
    console.error('Error processing /register/create route:', error);

    // Handle unique constraint violation for the slug field
    if (error.code === '23505' && error.constraint === 'assets_slug_key') {
      res.status(400).json({ message: 'Slug must be unique.' });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

module.exports = router;