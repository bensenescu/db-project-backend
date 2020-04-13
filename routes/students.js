const express = require('express');

const router = express.Router();
const students = require('../controllers/students');

router.route('/')
  .post(students.createStudent)
  .get(students.getStudents);

router.route('/:email')
  .get(students.getStudent)
  .delete(students.deleteStudent);

module.exports = router;
