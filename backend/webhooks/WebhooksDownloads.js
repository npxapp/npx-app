const express = require('express');
const pool = require('./db');
const fs = require('fs').promises;  // Use fs.promises for async file operations
const router = express.Router();

router.get('/downloads/:token/:session_id', async (req, res) => {
    try {
        const { token, session_id } = req.params;

        // Check if the provided token and session_id exist in the payments table
        const paymentResult = await pool.query(
            'SELECT id, payment_intent_id FROM payments WHERE token = $1 AND session_id = $2',
            [token, session_id]
        );

        if (paymentResult.rows.length === 0) {
            return res.status(404).json({ error: 'Payment not found.' });
        }

        const paymentId = paymentResult.rows[0].id;

        // Check if the payment_id exists in the downloads table
        const downloadResult = await pool.query(
            'SELECT download_link FROM downloads WHERE payment_id = $1',
            [paymentId]
        );

        if (downloadResult.rows.length === 0) {
            return res.status(404).json({ error: 'Download link not found.' });
        }

        // Extract download_link from the result
        const downloadLink = downloadResult.rows[0].download_link;

        // Select the product (filename) from the products table based on the download_link
        const productResult = await pool.query(
            'SELECT product FROM products WHERE download_link = $1',
            [downloadLink]
        );

        if (productResult.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found for the download link.' });
        }

        // Get the filename from the product field
        const filename = productResult.rows[0].product;

        // Construct the file path dynamically
        const filePath = `./${filename}`;

        // Read the file and send it as a response
        const fileData = await fs.readFile(filePath);
        res.set({
            'Content-Type': 'application/gzip',  // Adjust content type based on file extension
            'Content-Disposition': `attachment; filename="${filename}"`
        });
        res.send(fileData);

    } catch (error) {
        console.error('Error processing download request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;