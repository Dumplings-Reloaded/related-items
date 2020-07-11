const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');

const mongoose = require('mongoose');
const Item = require('../db/index.js');
const port = 8090;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(morgan('dev'));
app.use(cors());
//MONGO CONNECTION
    // const myDB = 'mongodb://localhost/alotest3'; //Database name
    // //DB CONNECTION
    // mongoose.connect(myDB, { useNewUrlParser: true }, () => {
    //   console.log('Database connected!');
    // });

//POSTGRES ROUTER
//create a router to a new endpoint
//create a controller/model


app.use('/related/pg', router);
app.listen(port, () => { console.log('Server running on localhost:', `http://localhost:${port}`); });



app.get('/related/:id', (req, res) => {
  console.log('Getting items!');
  Item.find({_id=req.params._id})
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
  })
    .then((results) => {
      res.status(201).send(results);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
});

app.put('/related/:id', (req, res) => {
  console.log('Updating items!');
  Item.updateOne({_id: req.params.id}, {$set: {'name': req.body.name}})
    .exec()
    .then((results) => {
      res.status(202).send(results);
    })
    .catch((err) => {
      res.status(402).send(err);
    });
});

app.delete('/related/:id', (req, res) => {
  console.log('Deleting item!');
  Item.deleteOne({_id: req.params.id})
    .exec() //returns a promise
    .then((results) => {
      res.status(204).send(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
});

app.use('/', express.static(path.join(__dirname, '../client/dist')));