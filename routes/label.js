const express = require('express');

const router = express.Router();
const label = require('../controllers/label');

router.route('/')
  .post(label.createLabel)
  .get(label.getStudentLabels);

module.exports = router;
