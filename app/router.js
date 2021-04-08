'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/todos', 'home.todos');

  router.get('/api/todos', 'todos.index');
  router.post('/api/todos/save', 'todos.save');
};
