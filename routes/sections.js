const express = require('express');

const router = express.Router();
const sections = require('../controllers/sections');

router.route('/')
  .get(sections.getSections)
  .post(sections.createSection)
  .delete(sections.deleteSection);

module.exports = router;
