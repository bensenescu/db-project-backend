const express = require('express');

const router = express.Router();
const calendarController = require('../controllers/calendarController');

router.route('/sections')
  .get(calendarController.getSections)
  .post(calendarController.createSection)
  .delete(calendarController.deleteSection);

router.route('/students')
  .post(calendarController.createStudent)
  .get(calendarController.getStudents);

router.route('/students/:studentId')
  .get(calendarController.getStudent);

// router.route('/courses')
//   .post(calendarController.createCourse)
//   .get(calendarController.getCourses)
//   .delete(calendarController.deleteCourse);

// router.route('/calendarItems')
//   .post(calendarController.createCalendarItem)
//   .get(calendarController.getCalendarItems)
//   .delete(calendarController.deleteCalendarItem);

// router.route('/enrollment')
//   .post(calendarController.createEnrollment)
//   .get(calendarController.getUserEnrollments)
//   .delete(calendarController.deleteEnrollment);

// router.route('/enrollment/:sectionId')
//   .get(calendarController.getSectionEnrollments)

// router.route('/todo')
//   .post(calendarController.createTodoItem)
//   .get(calendarController.getTodoItems)
//   .delete(calendarController.deleteTodoItem);

module.exports = router;
