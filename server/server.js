// Library imports
var express = require('express');
var bodyParser = require('body-parser');

// Local imports
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

// middleware
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  // Save and Send result to the client.
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e); // 400 - Bad request.
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app}; // ES6 syntax

// No need to record a field that tracks when the task was started since
// it is available within the _id fiels which is added automatically to the
// document.



// Should throw error text is required but not set
// Look at mongoose validators reference(google it) for more info
// regrding what could be validated and how.
/*var newTodo = new Todo({
  //text: 'Asher',
  completed: true,
  completedAt: 1230
});*/

// Save into the mongodb database
/*newTodo.save().then((doc) => {
  console.log('Saved todo.', doc);
}, (error) => {
  console.log('Unable to save todo.',e);
}); */

// Excercise - User: email - require, trim, set type, set minLength 1


/*var newUser = new User({
  email: 'Asher'
});

newUser.save().then((doc) => {
  console.log('Saved user.', doc);
}, (error) => {
  console.log('Unable to save user.',e);
}); */
