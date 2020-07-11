const express = require('express');
const router = express.Router();
const controller = require('./controller.js');


router
  .route('/')
  .post(controller.post)
  .get(controller.getAll);

router
  .route('/:id')
  .get(controller.get)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;