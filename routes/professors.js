const express = require('express');

const router = express.Router();
const professors = require('../controllers/professors');

router.route('/')
  .post(professors.createProfessor);

router.route('/:email')
  .get(professors.getProfessor);

router.route('/section/:professorId')
  .get(professors.getSections);

router.route('/teaching')
  .post(professors.addTeacherToSection);

router.route('/calendarItems/:professorId')
  .get(professors.getCalendarItems);

module.exports = router;
