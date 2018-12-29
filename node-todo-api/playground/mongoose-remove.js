const {ObjectID} = require('mongoDb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({})

Todo.findByIdAndRemove('5c1acc608b1a01db5bb3b671').then((todo) => {
  console.log(todo);
});

Todo.findOneAndRemove('5c1acc608b1a01db5bb3b671').then((todo) => {
  console.log(todo);
});
