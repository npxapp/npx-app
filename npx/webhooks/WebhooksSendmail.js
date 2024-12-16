const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/mail', async (req, res) => {
    try {
        const { message, phoneNumber } = req.body;

        if (!message || !phoneNumber) {
            return res.status(400).json({ error: 'Missing message or phoneNumber' });
        }

        let transporter = nodemailer.createTransport({
            sendmail: true,
            newline: 'unix',
            path: '/usr/sbin/sendmail'
        });

        let mailOptions = {
            from: '"Hello Team" <support@example.com>',
            to: 'root@localhost',
            subject: 'Hello ✔',
            html: `<h1>Contact</h1><p>Contact ${phoneNumber} sent ${message}</p>`
        };

        let info = await transporter.sendMail(mailOptions);

        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

module.exports = router;