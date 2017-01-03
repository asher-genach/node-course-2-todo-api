
const {MongoClient, ObjectID} = require('mongodb'); // Destructuring example

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // find() with no arguments means find all.
  // find(filter) with  a JSON filer will apply a filter according to the JSON
  // criteria.
  // find() returns a cursor(pointer) to the results.
  // toArray() put the result objects inside an array, and puts it
  // (returns it inside) a promise.


  // To query based on _id we need to create an ObjectID object.

  /*db.collection('Todos').find({completed:false}).toArray().then((docs) => {*/
  db.collection('Todos').find({_id: new ObjectID("58683b6dcb1e9a175417eaf4")}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos',err);
  });

  // We can count the number of items pointed by the pointer => count()
  // count also returns a promise.
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch Todos',err);
  });

  // Task - query all the objects in the Users collection that their name is
  // "Asher Genach" and print them to the screen.
  // I expect to get 2 back.
  db.collection('Users').find({name:"Asher Genach"}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos',err);
  });
  
  // db.close();
});
