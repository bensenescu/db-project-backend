const express = require('express');

const router = express.Router();
const professors = require('../controllers/professors');

router.route('/')
  .post(professors.createProfessor);

router.route('/:email')
  .get(professors.getProfessor);

module.exports = router;
