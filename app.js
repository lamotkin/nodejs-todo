const app = require('fastify')({
  logger: true,
});
const port = 8000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected...');
}).catch(err => {
  console.log(err);
});

app.register(require('./routes'));

app.listen(port, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
