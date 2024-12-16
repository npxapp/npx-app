const fs = require('fs');
const express = require('express');
const cookieParser = require('cookie-parser');
const Authorize = require('./Authorize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const pool = require('./db');

const app = express();
const config = JSON.parse(fs.readFileSync('server.json', 'utf8'));
const port = config.port || 3000;

app.use(express.json());
app.use(cookieParser());

app.get('/npx/test', (req, res) => {
  res.json({ message: 'OK' });
});

app.listen(port, () => console.log(`Server running on port ${port}`));