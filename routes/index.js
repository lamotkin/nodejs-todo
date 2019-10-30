const Todo = require('../models/Todo');

module.exports = async (app) => {
  app.get('/', async (request, reply) => {
    Todo.find((error, result) => {
      if (error) {
        reply.send(error);
      }

      reply.send(result);
    });
  });

  app.post('/', async (request, reply) => {
    Todo.create({
      title: request.body.title
    }, function (error, result) {
      if (error) {
        reply.send(error);
      }

      reply.send(result);
    });
  });

  app.delete('/:id', async (request, reply) => {
    Todo.remove({
      _id: request.params.id
    }, function (error, result) {
      if (error) {
        reply.send(error);
      }

      reply.send(result);
    });
  });
};
