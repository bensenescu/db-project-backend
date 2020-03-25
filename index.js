const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const calendarRouter = require('./routes/calendarRouter');

app.use(cors());
app.use(bodyParser.json({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/calendar', calendarRouter);

module.exports = app;
