const express = require('express');
const pool = require('./db');
const router = express.Router();

router.put('/registry/update/:id', async (req, res) => {
  const { id } = req.params; // Extract id from the route parameters
  const { name, type, slug, asset_status, webhook, text, blob } = req.body; // Extract fields from the request body

  console.log(`Updating asset with ID: ${id}`); // Log the ID we're working with

  try {
    // Create a new variable to construct the exact query (without executing it)
    const query = `
      UPDATE assets 
      SET name = '${name}', type = '${type}', slug = '${slug}', 
          asset_status = '${asset_status}', webhook = '${webhook}', 
          text = '${text}', blob = '${blob}' 
      WHERE id = '${id}' 
      RETURNING *`;

    // Log the query before executing it
    console.log('Generated SQL Query:', query);

    // Now execute the query
    const updateResult = await pool.query(
      `UPDATE assets 
       SET name = $1, type = $2, slug = $3, asset_status = $4, webhook = $5, text = $6, blob = $7 
       WHERE id = $8 
       RETURNING *`,
      [name, type, slug, asset_status, webhook, text, blob, id]
    );

    console.log('Update result:', updateResult); // Log the result of the update query

    // Check if the record was found and updated
    if (updateResult.rowCount === 0) {
      console.warn('No asset found with ID:', id); // Log if no record was updated
      return res.status(404).json({ message: 'Asset not found' });
    }

    // Respond with the updated record
    res.status(200).json({
      status: 'OK',
      asset: updateResult.rows[0],
    });
  } catch (error) {
    console.error('Error processing /registry/update route:', error); // Log the full error message

    // Log additional details for debugging
    if (error.stack) {
      console.error('Error stack:', error.stack); // Log the stack trace
    }
    if (error.detail) {
      console.error('Error detail:', error.detail); // Log any additional details (PostgreSQL specific)
    }

    // Handle unique constraint violation for the slug field
    if (error.code === '23505' && error.constraint === 'assets_slug_key') {
      console.error('Unique constraint violation on slug:', error); // Log specific error details
      return res.status(400).json({ message: 'Slug must be unique.' });
    } else {
      console.error('Unexpected error occurred:', error); // Log any unexpected errors
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

module.exports = router;