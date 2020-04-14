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

async function getLabels(req, res) {
  const sql = 'Select * from labels ';

  connection.query(sql, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function deleteLabel(req, res) {
  const { labelId } = req.params;
  const sql = 'Delete from labels where labelId = ?';

  connection.query(sql, labelId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function updateLabel(req, res) {
  const label = req.body;
  const sql = 'Update labels set ? where labelId = ? ';

  connection.query(sql, [label, label.labelId], (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

module.exports = {
  createLabel,
  getLabels,
  deleteLabel,
  updateLabel,
};
