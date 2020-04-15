const express = require('express');

const router = express.Router();
const sections = require('../controllers/sections');

router.route('/')
  .get(sections.getSections)
  .post(sections.createSection)
  .put(sections.updateSection);

router.route('/:sectionId')
  .delete(sections.deleteSection);

router.route('/item')
  .post(sections.addItemToSection);

module.exports = router;
