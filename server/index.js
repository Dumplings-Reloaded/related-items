const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const Item = require('../db/index.js');
const port = 8090;
const app = express();

const myDB = 'mongodb://localhost/alotest3'; //Database name
//DB CONNECTION
mongoose.connect(myDB, { useNewUrlParser: true }, () => {
  console.log('Database connected!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(morgan('dev'));
app.use(cors());
app.listen(port, () => { console.log('Server running on localhost:', `http://localhost:${port}`); });

app.get('/related', (req, res) => {
  console.log('Getting items!');
  Item.find({})
    .exec((err, items) => {
      if (err) {
        console.error(err);
      } else {
        res.send(items);
      }
    });
});


app.post('/related', (req, res) => {
  console.log('Posting items!', req.body);
  Item.create({
    'name': req.body.name,
    'price': req.body.price,
    'img': req.body.img,
    'cat': req.body.cat,
    'link': req.body.link,
  }, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

app.put('/related/:id', (req, res) => {
  console.log('Updating items!');
  Item.updateOne(
    {_id: req.params.id},
    {$set: {'name': req.body.name}},
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    });
});

app.delete('/related/:id', (req, res) => {
  console.log('Deleting item!');
  Item.deleteOne({_id: req.params.id},
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    });
});

app.use('/', express.static(path.join(__dirname, '../client/dist')));