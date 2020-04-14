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

async function getStudentCalendarItems(req, res) {
  const { studentId } = req.params;
  console.log(req.params);
  console.log(typeof studentId);
  const sql = 'Call get_student_calendar_items(?)';

  connection.query(sql, studentId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results[0]);
    }
  });
}

async function updateStudent(req, res) {
  const student = req.body;
  const sql = 'Update students set ? where studentId = ? ';

  connection.query(sql, [student, student.studentId], (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results[0]);
    }
  });
}

async function getStudentTodos(req, res) {
  const { studentId } = req.params;
  const sql = 'Select * from todoItems where studentId = ?';

  connection.query(sql, studentId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function enrollInSection(req, res) {
  const { section, user } = req.body;
  const enrollment = { studentId: user.studentId, sectionId: section.sectionId };
  const sql = 'Insert into enrollment set ?';

  connection.query(sql, enrollment, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

module.exports = {
  createStudent,
  getStudents,
  getStudent,
  deleteStudent,
  updateStudent,
  getStudentCalendarItems,
  getStudentTodos,
  enrollInSection,
};
