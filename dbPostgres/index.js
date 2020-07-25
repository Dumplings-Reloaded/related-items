//connect to database
const {Client} = require('pg');

const client = new Client ({
  user: 'ubuntu',
  password: "pw",
  host: '172.31.21.140',
  port: 5432,
  database: 'alotest'
});

client.connect()
  .then(() => console.log('connected to pg database'))
  .catch((err) => console.log(err));


module.exports = client;
