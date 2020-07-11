//connect to database
const {Client} = require('pg');

const client = new Client ({
  user: 'user1',
  password: 'pw',
  host: 'localhost',
  port: 5432,
  database: 'alotest'
});

client.connect()
  .then(() => console.log('connected to pg database'))
  .catch((err) => console.log(err));


module.exports = client;