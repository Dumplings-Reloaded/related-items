const mongoose = require("mongoose");
const mock = require("./generator.js");
const myDB = "mongodb://localhost/alotest"; //Database name
//Connect to the database
mongoose.connect(myDB, { useNewUrlParser: true }, () => {
  console.log("Database connected!");
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
const Item = mongoose.model("RelatedItem", ItemSchema); //Collection name

//Seed the data into the db
function seed(data) {
  relatedItems = [];
  for (var i = 0; i < data.length; i++) {
    let entry = new Item(data[i]);
    relatedItems.push(entry);
  }

  Item.insertMany(relatedItems, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Successful seeding");
    }
  });
}

seed(mock);

