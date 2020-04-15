const { connection } = require('../config/envConfig');


async function getProfessor(req, res) {
  const { email } = req.params;

  const sql = 'SELECT * FROM professors WHERE email = ? LIMIT 1';

  connection.query(sql, email, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results[0]);
    }
  });
}

async function createProfessor(req, res) {
  const professor = req.body;
  const sql = 'INSERT INTO professors SET ?';

  connection.query(sql, professor, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send({ results });
    }
  });
}

async function addTeacherToSection(req, res) {
  const { section, user } = req.body;
  const { professorId } = user;
  const { sectionId } = section;
  const sql = 'INSERT INTO teaching SET ?';

  connection.query(sql, { sectionId, professorId }, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send({ results });
    }
  });
}

async function getSections(req, res) {
  const { professorId } = req.params;

  const sql = 'Select * from sections natural join teaching natural join professors where professorId = ?';

  connection.query(sql, professorId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function getCalendarItems(req, res) {
  const { professorId } = req.params;

  const sql = 'Select * from teaching natural join sections natural join calendarItems where professorId = ?;';
  connection.query(sql, professorId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

module.exports = {
  getProfessor,
  createProfessor,
  addTeacherToSection,
  getSections,
  getCalendarItems,
};
