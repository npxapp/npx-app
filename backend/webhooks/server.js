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

const WebhooksSendmail = require('./WebhooksSendmail');
const WebhooksSample = require('./WebhooksSample');
const WebhooksSampleReconciliation = require('./WebhooksSampleReconciliation');
const WebhooksDownload = require('./WebhooksDownload');
const WebhooksSpans = require('./WebhooksSpans');
const WebhooksSpansPush = require('./WebhooksSpansPush');
const WebhooksRegistryCreate = require('./WebhooksRegistryCreate');
const WebhooksRegistryRead = require('./WebhooksRegistryRead');
const WebhooksRegistryUpdate = require('./WebhooksRegistryUpdate');
const WebhooksRegistryDelete = require('./WebhooksRegistryDelete');
const WebhooksSources = require('./WebhooksSources');

app.use(express.json());
app.use(cookieParser());

app.use('/npx', WebhooksSendmail);
app.use('/npx', WebhooksSample);
app.use('/npx', WebhooksSampleReconciliation);
app.use('/npx', WebhooksDownload);
app.use('/npx', WebhooksRegistryCreate);
app.use('/npx', WebhooksRegistryRead);
app.use('/npx', WebhooksRegistryUpdate);
app.use('/npx', WebhooksRegistryDelete);
app.use('/api', WebhooksSpans);
app.use('/api', WebhooksSpansPush);
app.use('/api', WebhooksSources);

app.listen(port, () => console.log(`Server running on port ${port}`));