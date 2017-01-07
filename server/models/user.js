
var mongoose = require('mongoose');

var User = mongoose.model('User',{
  email: {
    type: String,
    required: true, // if text is not set throw error.
    trim: true, // remove any leading or trailing whitespace.
    minlength: 1
  }
});

module.exports = {User};
