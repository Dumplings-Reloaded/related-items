const mongoose = require('mongoose');
const myDB = 'mongodb://localhost/alotest3'; //Database name
//Connect to the database
mongoose.connect(myDB, { useNewUrlParser: true }, () => {
  console.log('Database connected!');
});
//Use for created new schemas
const Schema = mongoose.Schema;

//Schema
const ItemSchema = new Schema({
  name: String,
  price: Number,
  img: String,
  cat: String,
  link: String,
});

//Create a model based off the schema
const Item = mongoose.model('RelatedItem', ItemSchema); //Collection name

module.exports = Item;

