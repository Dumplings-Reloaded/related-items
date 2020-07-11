const db = require('../dbPostgres/models.js');

const controller = {
  get: (req, res) => {
    db.get(req.params, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  getAll: (req, res) => {
    db.getAll((err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  post: (req, res) => {
    db.post(req.body, (err, results) => {
      if (err) {
        res.status(401).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  update: (req, res) => {
    db.update(req.params, req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  delete: (req, res) => {
    db.delete(req.params, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  }
};

module.exports = controller;