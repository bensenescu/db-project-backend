const { connection } = require('../config/envConfig');

async function getSections(req, res) {
  const sql = 'SELECT * FROM sections';

  connection.query(sql, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function createSection(req, res) {
  const section = req.body;
  const sql = 'INSERT INTO sections SET ?';

  connection.query(sql, section, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function deleteSection(req, res) {
  const { sectionId } = req.body;
  const sql = 'DELETE FROM sections WHERE sectionId = ?';

  connection.query(sql, sectionId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

module.exports = {
  getSections,
  createSection,
  deleteSection,
};
