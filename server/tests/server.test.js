const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// Remove all DB data before running the test
// done as it is Async
var todos = [{
  text: 'First test todo'
}, {
  text: 'Second test todo'
}];

// Remove all
// Then insert the above array => So we will have something for GET/todos.
// Then done.
beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {

    var text = 'Test todo text';

    request(app)
     .post('/todos')
     .send({text}) // ES6 syntax
     .expect(200) //Pass OK
     .expect((res) => {
       expect(res.body.text).toBe(text); // check the actual test.
     })
     .end((err, res) => {
       if (err) {
         return done(err);
       }

       // Search in DB
       Todo.find({text}).then((todos) => { // We search only for text because we want the result to still be 1
         expect(todos.length).toBe(1);
         expect(todos[0].text).toBe(text);
         done();
       }).catch((e) => done(e))
     });
  });

  // Excercise - send Empty body which is invalid
  // check error.
  // check db is empty.
  // No need to verify the body
  it('should not create todo with invalid body data', (done) => {
    request(app)
     .post('/todos') // route
     .send({}) // ES6 syntax
     .expect(400) // Error
     .end((err, res) => {
       if (err) {
         return done(err);
       }

       // Search in DB
       Todo.find().then((todos) => {
         expect(todos.length).toBe(2); // Only the two initial items are in the database data since the post failed.
         done();
       }).catch((e) => done(e))
     });
  });
});

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
          expect(res.body.todos.length).toBe(2);
      })
      .end(done);

  });
});
