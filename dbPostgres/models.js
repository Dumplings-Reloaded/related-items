const db = require('./index.js');

module.exports = {
  get: (params, callback) => {
    var queryString = `SELECT * FROM relateditems WHERE id>=${params.id} AND id<(${params.id} + 300)`;
    // var queryString = `SELECT * FROM relateditems WHERE id=${params.id}`
    db.query(queryString, (err, res) => {
      if (err) {
        console.log(err)
        callback(err);
      } else {
        console.log(res.rows)
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