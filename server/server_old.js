var  mongoose = require('mongoose');

// ensure mongoose will work with promises.
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoAppExp');

// No need to record a field that tracks when the task was started since
// it is available within the _id fiels which is added automatically to the
// document.

// Mongoose model
var Todo = mongoose.model('Todo',{
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number /* A unix like timestamp that can be reresented as a number */
  }
});

/*var newTodo = new Todo({
  text: 'Cook dinner'
});*/

// Save into the mongodb database
/*newTodo.save().then((doc) => {
  console.log('Saved todo.', doc);
}, (error) => {
  console.log('Unable to save todo.');
}); */

// Excercise - create a new document with all 3 fiels values set.

var newTodo = new Todo({
  text: 'Eat dinner',
  completed: true,
  completedAt: 1230
});

// Save into the mongodb database
newTodo.save().then((doc) => {
  console.log('Saved todo.', doc);
}, (error) => {
  console.log('Unable to save todo.',e);
});
