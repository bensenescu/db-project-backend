const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const calendarItems = require('./routes/calendarItems');
const courses = require('./routes/courses');
const enrollment = require('./routes/enrollment');
const professors = require('./routes/professors');
const sections = require('./routes/sections');
const students = require('./routes/students');
const todo = require('./routes/todo');

app.use('/api/calendar/calendarItems', calendarItems);
app.use('/api/calendar/courses', courses);
app.use('/api/calendar/enrollment', enrollment);
app.use('/api/calendar/professors', professors);
app.use('/api/calendar/sections', sections);
app.use('/api/calendar/students', students);
app.use('/api/calendar/todo', todo);

module.exports = app;
