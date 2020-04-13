const fs = require('fs');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '34.73.147.161',
  user: 'root',
  password: 'password1',
  database: 'calendar',
  ssl: {
    ca: fs.readFileSync(`${process.cwd()}/certs/server-ca.pem`),
    key: fs.readFileSync(`${process.cwd()}/certs/client-key.pem`),
    cert: fs.readFileSync(`${process.cwd()}/certs/client-cert.pem`),
  },
});

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
  const { studentId } = req.params;
  const sql = 'SELECT * FROM students WHERE studentId = ?';

  connection.query(sql, studentId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results[0]);
    }
  });
}

async function deleteStudent(req, res) {
  const { studentId } = req.body;
  const sql = 'INSERT INTO students SET ?';

  connection.query(sql, student, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send({ results });
    }
  });
}

async function createCourse(req, res) {
  const course = req.body;
  const sql = 'INSERT INTO courses SET ?';

  connection.query(sql, course, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function deleteCourse(req, res) {
  const { courseId } = req.body;
  const sql = 'DELETE FROM courses WHERE courseId = ?';

  connection.query(sql, courseId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function getCourses(req, res) {
  const sql = 'SELECT * FROM courses';

  connection.query(sql, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

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


async function createTodoItem(req, res) {
  const todoItem = req.body;
  const sql = 'INSERT INTO todoItems SET ?';

  connection.query(sql, todoItems, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function getTodoItems(req, res) {
  const { todoItemId } = req.params;
  const sql = 'SELECT * FROM todoItems WHERE todoitemId = ?';

  connection.query(sql, todoItemId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function deleteTodoItem(req, res) {
  const { todoItemId } = req.body;
  const sql = 'DELETE FROM todoItems WHERE todoItemId = ?';

  connection.query(sql, todoItemId, (error, results) => {
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
  createStudent,
  getStudent,
  getStudents
};
