const { connection } = require('../config/envConfig');

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

module.exports = {
  createCourse,
  deleteCourse,
  getCourses,
};
