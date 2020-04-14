const express = require('express');

const router = express.Router();
const students = require('../controllers/students');

router.route('')
  .get(students.getStudents)
  .post(students.createStudent)
  .put(students.updateStudent);

router.route('/:email')
  .get(students.getStudent)
  .delete(students.deleteStudent);

router.route('/calendarItems/:studentId')
  .get(students.getStudentCalendarItems);

module.exports = router;
