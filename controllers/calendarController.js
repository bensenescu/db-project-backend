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

async function getUser(req, res) {
  const { email } = req.params;

  const sql = 'SELECT * FROM users WHERE email = ? LIMIT 1';

  connection.query(sql, email, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results[0]);
    }
  });
}

async function createUser(req, res) {
  const user = req.body;
  const sql = 'INSERT INTO users SET ?';

  connection.query(sql, user, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send({ results });
    }
  });
}

module.exports = {
  getSections,
  createSection,
  deleteSection,
  getUser,
  createUser,
};
