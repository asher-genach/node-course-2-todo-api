var mongoose = require('mongoose');

// Mongoose model
var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    required: true, // if text is not set throw error.
    trim: true // remove any leading or trailing whitespace.
  },
  completed: {
    type: Boolean,
    default: false // Set default to false
  },
  completedAt: {
    type: Number, /* A unix like timestamp that can be reresented as a number */
    default: null
  }
});

module.exports = {Todo};
