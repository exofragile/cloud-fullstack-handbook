const express = require('express');
const app = express();
app.use(express.json());

// Dummy data to simulate the server's data;
// a real app would usually load this from a database.
let tasks = [
  { id: 1, title: 'Learn Node.js', done: false },
  { id: 2, title: 'Build a REST API', done: false }
];
let nextId = 3;

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

app.post('/tasks', (req, res) => {
  const newTask = { id: nextId++, title: req.body.title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  task.title = req.body.title ?? task.title;
  task.done = req.body.done ?? task.done;
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter((t) => t.id !== Number(req.params.id));
  res.status(204).end();
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
