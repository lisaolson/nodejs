const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send({
    name: 'Lisa',
    likes: [
      'Piano',
      'Cities'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000);
