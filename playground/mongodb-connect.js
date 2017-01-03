
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // Destructuring example

// Regular object id from which is unique, and from which we can extract
// timestamp etc..
var obj = new ObjectID();
console.log(obj);


// ES6 for extracting(destructuring) the name from the user.
var user = {
  name: 'Asher',
  age: 42
};

var {name} = user;

console.log(name);

// In mongodb creating a db can be made by just asking for it
// without actually creating it (here the TodoApp).
// It is not created until an actual operation is made.
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // Connect to a new collection (no need to explicitly create).
  /*db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  }); */

  // Insert a new doc into Users (name, age, location)
  /*db.collection('Users').insertOne({
    name: 'Asher Genach',
    age: 42,
    location: 'Netanya, Israel'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    // result.ops will return all the inserted items as an
    // array.
    //console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id.getTimestamp());
  }); */

  db.close();
});

/*
_id is a type of "record" which if not explicitly set is a unique identifier
created by mongodb, it includes a time stamp + machine_id + processid and
a increment number.

It can be explicitly set, and then it holds the assigned value.
*/
