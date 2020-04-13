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

module.exports = {
  getProfessor,
  createProfessor,
};
