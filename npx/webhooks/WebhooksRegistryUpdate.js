const express = require('express');
const pool = require('./db');
const router = express.Router();

router.put('/registry/update/:id', async (req, res) => {
  const { id } = req.params; // Extract id from the route parameters
  const { name, type, slug, asset_status, webhook, text, blob } = req.body; // Extract fields from the request body

  try {
    // Update the record in the assets table
    const updateResult = await pool.query(
      `UPDATE assets 
       SET name = $1, type = $2, slug = $3, asset_status = $4, webhook = $5, text = $6, blob = $7 
       WHERE id = $8 
       RETURNING *`,
      [name, type, slug, asset_status, webhook, text, blob, id]
    );

    // Check if the record was found and updated
    if (updateResult.rowCount === 0) {
      return res.status(404).json({ message: 'Asset not found' });
    }

    // Respond with the updated record
    res.status(200).json({
      status: 'OK',
      asset: updateResult.rows[0],
    });
  } catch (error) {
    console.error('Error processing /register/update route:', error);

    // Handle unique constraint violation for the slug field
    if (error.code === '23505' && error.constraint === 'assets_slug_key') {
      res.status(400).json({ message: 'Slug must be unique.' });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

module.exports = router;