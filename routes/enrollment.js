const express = require('express');

const router = express.Router();
const enrollment = require('../controllers/enrollment');

router.route('/')
  .post(enrollment.createEnrollment)
  .get(enrollment.getUserEnrollments)
  .get(enrollment.getSectionEnrollments)
  .delete(enrollment.deleteEnrollment);

module.exports = router;
