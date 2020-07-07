const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const Item = require('../db/index.js');
const port = 8090;
const app = express();

const myDB = "mongodb://localhost/alotest3"; //Database name

mongoose.connect(myDB, { useNewUrlParser: true }, () => {
  console.log("Database connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(morgan('dev'));
app.use(cors());
app.listen(port, () => {console.log('Server running on localhost:', port)});

app.get('/related', (req, res) => {
  console.log('Getting items!')
  Item.find({})
    .exec((err, items) => {
      if (err) {
        console.error(err)
      } else {
        res.send(items);
      }
    })
})


app.use('/', express.static(path.join(__dirname, "../client/dist")));