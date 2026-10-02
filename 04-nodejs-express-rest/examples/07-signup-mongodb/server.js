// The PDF shows this app in pieces. This file assembles those pieces into one runnable server.
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/User');

const app = express();
app.use(express.json());

// Serve the pages in /public from this same server, so the browser page and the API
// share one address. (This is the express.static() idea from "Concepts Worth Exploring".)
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://127.0.0.1:27017/schoolApp')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Could not connect to MongoDB:', error.message));
console.log('Connecting to MongoDB...');

app.post('/signup', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email
    });

    await newUser.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Could not create the user' });
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
