CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  session_id VARCHAR(255) NOT NULL,
  payment_intent_id VARCHAR(255) NOT NULL UNIQUE,
  access_code INT NOT NULL,
  token_code INT NOT NULL,
  payment_status VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE downloads (
  id SERIAL PRIMARY KEY,
  payment_id INT REFERENCES payments(id) ON DELETE CASCADE,
  download_link TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS payments CASCADE;

CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  session_id VARCHAR(255) NOT NULL,
  payment_intent_id VARCHAR(255) NOT NULL UNIQUE,
  token INT NOT NULL,
  payment_status VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE downloads
ADD CONSTRAINT downloads_payment_id_fkey
FOREIGN KEY (payment_id) REFERENCES payments(id)
ON DELETE CASCADE;