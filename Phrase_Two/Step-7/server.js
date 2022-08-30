const express = require('express');
const app = express();
const port = 3000;

let counter = 0

app.get('/', (req, res) => {
  res.send('One is the first number after 0')
});

app.post('/counter', (req, res) => {
  counter ++
  res.send('increase number')
});

app.get('/counter', (req, res) => {
  res.send('counter equal ${counter}')
});

app.delete('/counter', (req, res) => {
  counter = 0
  res.send('Reset counter to zero')
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);