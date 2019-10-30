const app = require('fastify')();
const port = 8000;

app.register(require('./routes'));

app.listen(port, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
