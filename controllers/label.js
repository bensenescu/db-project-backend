const { connection } = require('../config/envConfig');

async function createLabel(req, res) {
  const label = req.body;
  const sql = 'INSERT INTO labels SET ?';

  connection.query(sql, label, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function getStudentLabels(req, res) {
  const studentId = req.params;
  const sql = 'Select * from labels where studentId = ?';

  connection.query(sql, studentId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

module.exports = {
  createLabel,
  getStudentLabels,
};
