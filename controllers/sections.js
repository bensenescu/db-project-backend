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
  const { sectionId } = req.params;
  const sql = 'DELETE FROM sections WHERE sectionId = ?';

  connection.query(sql, sectionId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function updateSection(req, res) {
  const section = req.body;
  const sql = 'Update sections set ? where sectionId = ? ';

  connection.query(sql, [section, section.sectionId], (error, results) => {
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
  updateSection,
};
