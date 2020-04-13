const { connection } = require('../config/envConfig');

async function createCalendarItem(req, res) {
  const calendarItem = req.body;
  const sql = 'INSERT INTO calendarItems SET ?';

  connection.query(sql, calendarItem, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function getCalendarItems(req, res) {
  const sql = 'SELECT * FROM calendarItems';

  connection.query(sql, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function deleteCalendarItem(req, res) {
  const { itemId } = req.body;
  const sql = 'DELETE FROM calendarItems WHERE itemId = ?';

  connection.query(sql, itemId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

module.exports = {
  createCalendarItem,
  getCalendarItems,
  deleteCalendarItem,
};
