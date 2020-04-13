const { connection } = require('../config/envConfig');

async function createEnrollment(req, res) {
  const enrollment = req.body;
  const sql = 'INSERT INTO enrollment SET ?';

  connection.query(sql, enrollment, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}


async function getUserEnrollments(req, res) {
  const { userId } = req.params;
  const sql = 'SELECT * FROM enrollment WHERE userId = ?';

  connection.query(sql, userId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function getSectionEnrollments(req, res) {
  const { sectionId } = req.params;
  const sql = 'SELECT * FROM enrollment WHERE sectionId = ?';

  connection.query(sql, sectionId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function deleteEnrollment(req, res) {
  const { sectionId } = req.body;
  const { userId } = req.body;
  const sql = 'DELETE FROM enrollment WHERE sectionId = ? AND userId = ?';

  connection.query(sql, sectionId, userId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

module.exports = {
  getSectionEnrollments,
  getUserEnrollments,
  createEnrollment,
  deleteEnrollment,
};
