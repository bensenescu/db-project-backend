const express = require('express');

const router = express.Router();
const todo = require('../controllers/todo');

router.route('/')
  .post(todo.createTodoItem)
  .get(todo.getTodoItems)
  .delete(todo.deleteTodoItem);

module.exports = router;
