const express = require('express');

const router = express.Router();
const calendarItems = require('../controllers/calendarItems');

router.route('/')
  .post(calendarItems.createCalendarItem)
  .get(calendarItems.getCalendarItems)
  .delete(calendarItems.deleteCalendarItem);

module.exports = router;
