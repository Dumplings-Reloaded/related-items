const db = require('./index.js');

module.exports = {
  get: (params, callback) => {
    //select * from relateditems where cat ='Health' order by id desc limit 20;
    // select * from relateditems where cat ='Garden' order by id desc limit 20;
    // select * from relateditems where cat ='Tools' order by id desc limit 20;
    // SELECT * FROM relateditems WHERE id>=100 AND id<(100 + 20)
    var queryString = `select * from relateditems where id>=${params.id} order by id asc limit 20;`;
    // var queryString = `SELECT * FROM relateditems WHERE id=${params.id}`;
    db.query(queryString, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res.rows);
      }
    });
  },
  getAll: (callback) => {
    var queryString = 'SELECT * FROM relateditems';
    db.query(queryString, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res.rows);
      }
    });
  },
  post: (body, callback) => {
    var queryString = `INSERT INTO relateditems (id, name, price, img, cat, link) VALUES (${body.id}, '${body.name}', ${body.price}, '${body.img}', '${body.cat}', '${body.link}')`;
    db.query(queryString, (err, res) => {
      if (err) {
        console.log(err)
        callback(err);
      } else {
        callback(null, res);
      }
    });
  },
  update: (params, body, callback) => {
    var queryString = `UPDATE relateditems SET name='${body.name}' WHERE id=${params.id}`;
    db.query(queryString, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  },
  delete: (params, callback) => {
    var queryString = `DELETE FROM relateditems WHERE id=${params.id}`;
    db.query(queryString, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  }
};