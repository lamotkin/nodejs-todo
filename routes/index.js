const routes = async (app) => {
  const todos = [];
  const responseCreator = (data, success) => ({
    payload: {
      ...data,
    },
    success
  });



  app.get('/', async (request, reply) => {
    return responseCreator({
      todos
    }, true);
  });

  app.post('/', async (request) => {
    const todo = {
      id: todos.length,
      title: request.body.title,
    };

    await todos.push(todo);
    return responseCreator({}, true);
  });

  app.delete('/:id(\\d+)', async (request, reply) => {
    const id = Number(request.params.id);
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const todo = todos[todoIndex];

    if (todoIndex !== -1) {
      todos.splice(todoIndex, 1);

      return responseCreator({
        todo,
      }, true);
    }

    reply.callNotFound();
  });

  app.put('/:id(\\d+)', async (request, reply) => {
    const id = Number(request.params.id);
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const todo = todos[todoIndex];

    if (todoIndex !== -1) {
      todo.title = request.body.title;

      return responseCreator({
        todo,
      }, true);
    }

    reply.callNotFound();
  });
};

module.exports = routes;
