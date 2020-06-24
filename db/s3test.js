const Item = require("./index.js");
const aws = require('aws-sdk');
const config = require('../config/config.json');
const faker = require('faker');

(async function () {
  try {

      aws.config.setPromisesDependency();
      aws.config.update({
        accessKeyId: config.aws.accessKey,
        secretAccessKey: config.aws.secretKey,
        region: 'us-west-1'
      });

      const s3 = new aws.S3();
      const response = await s3.listObjectsV2({
        Bucket: 'aloyoga-mock-data'
      }).promise()

      .then(function(data) {

        relatedItems = [];
        for (var i = 1; i < 346; i++) {
          const name = faker.commerce.productName();
          const price = faker.commerce.price();
          const img = faker.image.fashion();
          const cat = faker.commerce.department();
          const link =
            "http://aloyoga-mock-data.s3-us-west-1.amazonaws.com/" +
            data.Contents[i].Key;
          const entry = new Item({
            name: name,
            price: price,
            img: img,
            cat: cat,
            link: link,
          });

          relatedItems.push(entry);
        }

        Item.insertMany(relatedItems, (err, results) => {
          if (err) {
            console.error(err);
          } else {
            console.log('success in seed from s3')
          }
        })
      })

  } catch (e) {
    console.error(e);
  }

  debugger;
})();

