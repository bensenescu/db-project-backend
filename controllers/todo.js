const { connection } = require('../config/envConfig');


async function createTodoItem(req, res) {
  const todoItem = req.body;
  const sql = 'INSERT INTO todoItems SET ?';

  connection.query(sql, todoItem, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function getTodoItems(req, res) {
  const sql = 'SELECT * FROM todoItems';

  connection.query(sql, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function deleteTodoItem(req, res) {
  const { todoId } = req.params;
  const sql = 'DELETE FROM todoItems WHERE itemId = ?';

  connection.query(sql, todoId, (error, results) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(results);
    }
  });
}

async function updateTodoItem(req, res) {
  const todoItem = req.body;
  const sql = 'update todoItems SET ? where itemId = ?';

  connection.query(sql, [todoItem, todoItem.itemId], (error, results) => {
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
  updateTodoItem,
};
