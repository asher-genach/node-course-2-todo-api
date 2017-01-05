
const {MongoClient, ObjectID} = require('mongodb'); // Destructuring example

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

// findOneAndUpdate - find a single (first) record that
// is confirm with the filter and update it.
// arguments:
// filter - as the name suggests.
// update - an update document.
//          see update operators.
//          here we use $set which sets a value of a field
//          in a document.
//          see https://docs.mongodb.com/v3.2/reference/operator/update/
// options - see
//           https://docs.mongodb.com/php-library/master/reference/method/MongoDBCollection-findOneAndUpdate/
//           in our case we use the returnOriginal as false
//           to return the updated record and not the original one.
// callback - if non supplied it returns a promise.
/*  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('586c1d1a2ca5fa58370c3bef')
  }, {
    $set: {
      completed: true
    }
  }, {
      returnOriginal: false
    }).then((result) => {
    console.log(result);
  }); */

  // Excercise - update in Users the name, and increment the
  // age.

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('586842441384fc2dc419e2c2')
  }, {
    $set: {
      name: 'Asher Genach'
    },
    $inc: {
      age: 1
    }
  }, {
      returnOriginal: false
    }).then((result) => {
    console.log(result);
  });

  // db.close();
});
