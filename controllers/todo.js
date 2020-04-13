const { connection } = require('../config/envConfig');


async function createTodoItem(req, res) {
  const todoItem = req.body;
  const sql = 'INSERT INTO todoItem SET ?';

  connection.query(sql, todoItem, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function getTodoItems(req, res) {
  const { itemId } = req.params;
  const sql = 'SELECT * FROM todoItem WHERE itemId = ?';

  connection.query(sql, itemId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function deleteTodoItem(req, res) {
  const { itemId } = req.body;
  const sql = 'DELETE FROM todoItem WHERE itemId = ?';

  connection.query(sql, itemId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

module.exports = {
  createTodoItem,
  getTodoItems,
  deleteTodoItem,
};
