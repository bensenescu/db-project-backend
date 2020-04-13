const express = require('express');

const router = express.Router();
const courses = require('../controllers/courses');

router.route('/')
  .post(courses.createCourse)
  .get(courses.getCourses)
  .delete(courses.deleteCourse);

module.exports = router;
