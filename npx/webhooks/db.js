const fs = require('fs');
const { Pool } = require('pg');

const config = JSON.parse(fs.readFileSync('server.json', 'utf8'));

const pool = new Pool({
  user: config.username,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.databaseport,
});

module.exports = pool;