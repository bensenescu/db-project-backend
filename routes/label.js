const express = require('express');

const router = express.Router();
const label = require('../controllers/label');

router.route('/')
  .post(label.createLabel)
  .get(label.getLabels)
  .put(label.updateLabel);

router.route('/:labelId')
  .delete(label.deleteLabel);

module.exports = router;
