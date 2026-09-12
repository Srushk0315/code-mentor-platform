require('dotenv').config();
const { Client } = require('pg');

const client = new Client({ connectionString: process.env.DATABASE_URL });
client.connect()
  .then(() => console.log('Connected to Supabase!'))
  .then(() => client.query('SELECT NOW()'))
  .then(res => console.log(res.rows))
  .catch(err => console.error('Connection failed:', err))
  .finally(() => client.end());