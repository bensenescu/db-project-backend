const express = require('express');

const router = express.Router();
const calendarController = require('../controllers/calendarController');

router.route('/sections')
  .get(calendarController.getSections)
  .post(calendarController.createSection)
  .delete(calendarController.deleteSection);

router.route('/students')
  .post(calendarController.createStudent);

router.route('/students/:email')
  .get(calendarController.getStudent);

router.route('/professors')
  .post(calendarController.createProfessor);

router.route('/professors/:email')
  .get(calendarController.getProfessor);

router.route('/courses')
  .post(calendarController.createCourse)
  .get(calendarController.getCourses)
  .delete(calendarController.deleteCourse);

router.route('/calendarItems')
  .post(calendarController.createCalendarItem)
  .get(calendarController.getCalendarItems)
  .delete(calendarController.deleteCalendarItem);

router.route('/enrollment')
  .post(calendarController.createEnrollment)
  .get(calendarController.getUserEnrollments)
  .get(calendarController.getSectionEnrollments)
  .delete(calendarController.deleteEnrollment);

module.exports = router;
