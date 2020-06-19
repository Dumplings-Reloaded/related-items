const Item = require('./index.js');
const mock = require("./generator.js");

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
