const express = require('express');
const pool = require('./db');
const router = express.Router();

router.delete('/registry/delete/:id', async (req, res) => {
  const { id } = req.params; // Extract id from the route parameters

  try {
    // Delete the record from the assets table
    const deleteResult = await pool.query(
      `DELETE FROM assets 
       WHERE id = $1 
       RETURNING *`,
      [id]
    );

    // Check if the record was found and deleted
    if (deleteResult.rowCount === 0) {
      return res.status(404).json({ message: 'Asset not found' });
    }

    // Respond with the deleted record
    res.status(200).json({
      status: 'OK',
      asset: deleteResult.rows[0],
    });
  } catch (error) {
    console.error('Error processing /register/delete route:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;