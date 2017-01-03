
const {MongoClient, ObjectID} = require('mongodb'); // Destructuring example

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  //deleteMany
/*  db.collection('Todos').deleteMany({text: 'Eat lunch'})
  .then((result) => {
    console.log(result);
  });*/

  // deleteOne
  // The same as deleteMany, but deletes only the first item out of
  // the collection.
/*  db.collection('Todos').deleteOne({text: 'Eat lunch'})
  .then((result) => {
    console.log(result);
  }); */

  // findOneAndDelete
  // delete the object (one) and return the deleted object.
  // If the filter returns multiple items only the first
  // returns.
  // This returns the deleted object.
  /*db.collection('Todos').findOneAndDelete({completed: false})
  .then((result) => {
    console.log(result);
  });*/

 //Excercise - delete all records with name === 'Asher Genach'
  /*db.collection('Users').deleteMany({name: 'Asher Genach'})
  .then((result) => {
    console.log(result);
  });*/

  // Delete record with _id === "586841fd9c9ce52a4477e3d7"
  db.collection('Users').findOneAndDelete({_id: new ObjectID('586841fd9c9ce52a4477e3d7')})
  .then((result) => {
    console.log(result);
  });


  // db.close();
});
