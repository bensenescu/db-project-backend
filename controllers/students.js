const { connection } = require('../config/envConfig');

async function createStudent(req, res) {
  const student = req.body;
  const sql = 'INSERT INTO students SET ?';

  connection.query(sql, student, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send({ results });
    }
  });
}

async function getStudents(req, res) {
  const sql = 'SELECT * FROM students';

  connection.query(sql, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function getStudent(req, res) {
  const { email } = req.params;
  const sql = 'SELECT * FROM students WHERE email = ? limit 1';

  connection.query(sql, email, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results[0]);
    }
  });
}

async function deleteStudent(req, res) {
  const { email } = req.params;
  const sql = 'DELETE FROM students WHERE email = ?';

  connection.query(sql, email, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results[0]);
    }
  });
}

async function updateStudent(req, res) {
  const student = req.body;
  console.log(student);
  const sql = 'Update students set ? where studentId = ? ';

  connection.query(sql, [student, student.studentId], (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results[0]);
    }
  });
}

module.exports = {
  createStudent,
  getStudents,
  getStudent,
  deleteStudent,
  updateStudent,
};
