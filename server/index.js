const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const Item = require('../db/index.js');
const port = 8080;
const app = express();

const myDB = "mongodb://localhost/alotest1"; //Database name

mongoose.connect(myDB, { useNewUrlParser: true }, () => {
  console.log("Database connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(morgan('dev'));
app.use(cors());
app.listen(port, () => {console.log('Server running on localhost:', port)});

app.get('/related', (req, res) => {
  console.log('Getting books!')
  Item.find({})
    .exec((err, items) => {
      if (err) {
        console.error(err)
      } else {
        console.log(items);
        res.json(items);
      }
    })
})

app.get('/', (req, res) => {res.send('Hello from server!')})