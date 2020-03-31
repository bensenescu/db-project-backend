const express = require('express');

const router = express.Router();
const calendarController = require('../controllers/calendarController');

router.route('/sections')
  .get(calendarController.getSections)
  .post(calendarController.createSection)
  .delete(calendarController.deleteSection);

router.route('/users')
  .post(calendarController.createUser);

router.route('/users/:email')
  .get(calendarController.getUser);

router.route('/courses')
  .post(calendarController.createCourse)
  .get(calendarController.getCourses)
  .delete(calendarController.deleteCourse);

router.route('/calendarItems')
  .post(calendarController.createCalendarItem)
  .get(calendarController.getCalendarItems)
  .delete(calendarController.deleteCalendarItem);

module.exports = router;
