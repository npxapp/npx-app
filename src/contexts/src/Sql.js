export const Sql = {
  "5555555555": {
    title: 'SQL',
    language: 'sql',
    code: `
    -- Create payments table
    CREATE TABLE payments (
      id SERIAL PRIMARY KEY,
      payment_id VARCHAR(255) NOT NULL,
      amount INT NOT NULL,
      currency VARCHAR(3) NOT NULL,
      payment_method VARCHAR(255) NOT NULL,
      token VARCHAR(255),
      isAdmin BOOLEAN,
      created_at TIMESTAMP NOT NULL
    );
    `
  }
};