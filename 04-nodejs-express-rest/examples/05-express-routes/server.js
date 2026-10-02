const express = require('express');
const app = express();

app.get('/tasks', (req, res) => {
  res.send('Here is the list of tasks');
});

app.post('/tasks', (req, res) => {
  res.send('A new task was created');
});

app.delete('/tasks', (req, res) => {
  res.send('A task was deleted');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
