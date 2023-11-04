// Create web server
// Run: node comments.js
// Test: curl -i localhost:3000/comments
//       curl -i localhost:3000/comments/1

var express = require('express');
var app = express();

// Create a simple in-memory database of comments
var comments = [];
comments.push({ name: 'John', message: 'Hello' });
comments.push({ name: 'Jack', message: 'Hi' });
comments.push({ name: 'Joe', message: 'Howdy' });

// GET /comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// GET /comments/:id
app.get('/comments/:id', function(req, res) {
  var id = req.params.id;
  if (id >= 0 && id < comments.length) {
    res.json(comments[id]);
  } else {
    res.status(404).json({ error: 'Comment not found' });
  }
});

// Start the web server
var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});