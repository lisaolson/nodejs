var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
      type: Number
  }
});

var newTodo = new Todo({
  text: 'Walk the dog'
});

var secondTodo = new Todo({
  text: 'Get ring resized',
  completed: false
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
})
  .catch(function(e){
    console.log('Error saving todo', e);
  });

secondTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
})
  .catch(function(e) {
    console.log('Error saving todo', e);
  });
