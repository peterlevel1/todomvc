module.exports = (app, model) => {
  const { STRING, BOOLEAN, DATE } = app.Sequelize;

  const Todos = model.define('todos', {
    title: STRING,
    completed: BOOLEAN
  });

  return Todos;
};
