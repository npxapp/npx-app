CREATE TABLE downloads (
  id SERIAL PRIMARY KEY,
  payment_id INT REFERENCES payments(id) ON DELETE CASCADE,
  download_link TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  session_id VARCHAR(255) NOT NULL,
  payment_intent_id VARCHAR(255) NOT NULL UNIQUE,
  token INT NOT NULL,
  payment_status VARCHAR(50) NOT NULL,
  card_last4 VARCHAR(4) NOT NULL, 
  card_type VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE webhooks (
  id SERIAL PRIMARY KEY,
  stripe_event_id VARCHAR(255) NOT NULL UNIQUE,  -- unique Stripe event ID to ensure idempotency
  payment_intent_id VARCHAR(255) NOT NULL REFERENCES payments(payment_intent_id) ON DELETE CASCADE,
  event_type VARCHAR(50) NOT NULL,  -- e.g., 'payment_intent.succeeded'
  event_data JSONB,  -- stores all relevant webhook data for reference and debugging
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Grant all privileges on the payments table to the app user
GRANT ALL PRIVILEGES ON TABLE payments TO app;

-- Grant all privileges on the sequence for the id field in the payments table to the app user
GRANT ALL PRIVILEGES ON SEQUENCE payments_id_seq TO app;

-- Grant all privileges on the downloads table to the app user
GRANT ALL PRIVILEGES ON TABLE downloads TO app;

-- Grant all privileges on the sequence for the id field in the downloads table to the app user
GRANT ALL PRIVILEGES ON SEQUENCE downloads_id_seq TO app;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  download_link TEXT NOT NULL,
  product TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (download_link, product, created_at)
SELECT download_link, 
       'app.tar.gz' AS product, 
       created_at
FROM downloads;

CREATE TABLE assets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100) NOT NULL,
  slug VARCHAR(255) UNIQUE,
  asset_status VARCHAR(50) NOT NULL,
  webhook VARCHAR(50),
  text TEXT,
  blob BYTEA,
  hits INT DEFAULT 0,
  clicks INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);