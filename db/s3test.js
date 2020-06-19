const aws = require('aws-sdk');
const config = require('../config/config.json');

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
      }).promise();

      console.log(response);

  } catch (e) {
    console.err(e);
  }

  debugger;
})();