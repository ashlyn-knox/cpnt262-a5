const path = require('path');
const express = require('express');
const index = require('./routes')
const dotenv = require('dotenv').config()

const app = express();

// load static file
app.use(express.static(path.join(__dirname, 'public')));

// views engine
app.set('view engine', 'ejs');

// router for pages
app.use('/', index);

// error page
app.use((req, res) => {
  res.status(404);
  res.sendFile('404.html');
});

// Port
const PORT = process.env.PORT || 3000;

// Listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
