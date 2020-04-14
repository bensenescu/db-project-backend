const express = require('express');

const router = express.Router();
const todo = require('../controllers/todo');

router.route('/')
  .post(todo.createTodoItem)
  .get(todo.getTodoItems)
  .put(todo.updateTodoItem);

router.route('/:todoId')
  .delete(todo.deleteTodoItem);

module.exports = router;
