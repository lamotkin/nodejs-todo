const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Todo', TodoSchema);