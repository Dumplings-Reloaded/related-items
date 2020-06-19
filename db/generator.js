const faker = require("faker");

gen = () => {
  //Create a results array for each entry
  results = [];
  //Loop 100 times
  for (var j = 0; j < 500; j++) {
    //Create variables for each key
    const name = faker.commerce.productName();
    const price = faker.commerce.price();
    const img = faker.image.fashion();
    const cat = faker.commerce.department();
    const link = faker.internet.url();
    //Structure data into schema
    const data = {
      name: name,
      price: price,
      img: img,
      cat: cat,
      link: link,
    };
    //Add each entry to the array
    results.push(data);
  }
  return results;
};

module.exports = gen();
