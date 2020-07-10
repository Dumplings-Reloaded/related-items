const Item = require('./index.js');
// const aws = require('aws-sdk');
// const config = require('../config/config.json');
const faker = require('faker');
const fs = require('fs');
const csvtojson = require('csvtojson');

//creates a csv file and streams to the file until end()
const relatedItems = fs.createWriteStream('./relatedItems.csv');

//writes headers to the csv file
relatedItems.write('name,price,img,cat,link\n', 'utf8');


var writeTenMillItems = function(writer, encoding, callback) {
  let i = 1e7;
  var write = function() {
    let ok = true;

    //do..while loop
    //basiically, do (this), while (condition is met)
    do {
      i--;
      const name = faker.commerce.productName();
      const price = faker.commerce.price();
      const img = faker.image.fashion();
      const cat = faker.commerce.department();
      const link = faker.image.fashion();
      const data = `${name},${price},${img},${cat},${link}\n`;

      //last time
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        //still writing so dont pass cb
        //returns false if the stream wishes for the calling code to wait for the 'drain'; otherwise true
        //https://nodejs.org/api/all.html#stream_writable_write_chunk_encoding_callback
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);

    //not done yet but ok is false(because internal buffer is more than the highWaterMark), 'drain' = eventname, listener = callbackfunction
    //https://nodejs.org/api/all.html#events_emitter_once_eventname_listener
    if ( i > 0 ) {
      writer.once('drain', write);
    }
  };
  write();
};

//invoke the TenMill generator
writeTenMillItems(relatedItems, 'utf-8', () => {
  relatedItems.end();
  csvtojson()
    .fromFile('./relatedItems.csv')
    .then(csvData => {
      Item.insertMany(csvData)
        .then((results) => {
          console.log('successful seeding to MongoDB');
        })
        .catch((err) => {
          console.log('unsuccessful seeding to MongoDB', err);
        });
    });
});
