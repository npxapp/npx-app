const fs = require('fs');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const cookieParser = require('cookie-parser');
const Authorize = require('./Authorize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const pool = require('./db');

const app = express();
const config = JSON.parse(fs.readFileSync('server.json', 'utf8'));
const port = config.port || 3000;

const WebhooksProcess = require('./WebhooksProcess');
const WebhooksConfirm = require('./WebhooksConfirm');
const WebhooksSuccess = require('./WebhooksSuccess');

const WebhooksSample = require('./WebhooksSample');

const WebhooksPayments = require('./WebhooksPayments');

const WebhooksSampleSuccess = require('./WebhooksSampleSuccess');

const WebhooksDownload = require('./WebhooksDownload');

const WebhooksSampleRestore = require('./WebhooksSampleRestore');


app.use(express.json());
app.use(cookieParser());

app.use('/npx', WebhooksProcess);
app.use('/npx', WebhooksConfirm);
app.use('/npx', WebhooksSuccess);

app.use('/npx', WebhooksSample);

app.use('/npx', WebhooksPayments);

app.use('/npx', WebhooksSampleSuccess);

app.use('/npx', WebhooksDownload);

app.use('/npx', WebhooksSampleRestore);


app.listen(port, () => console.log(`Server running on port ${port}`));