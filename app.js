const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Debugging Middleware
console.log(`Serving static files from: ${path.join(__dirname, 'public')}`);
app.use((req, res, next) => {
  console.log(`Request for: ${req.url}`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/git', (req, res) => {
  res.render('git', { title: 'Git' });
});

app.get('/linux', (req, res) => {
  res.render('linux', { title: 'Linux' });
});

app.get('/tips', (req, res) => {
  res.render('tips', { title: 'Tips' });
});

app.get('/webtech', (req, res) => {
  res.render('webtech', { title: 'Web Technologies' });
});

// Test Route for CSS File
app.get('/test-css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/css/webtech.css'));
});

// Catch-all for Undefined Routes
app.use((req, res) => {
  console.log(`Unhandled request for: ${req.url}`);
  res.status(404).send(`Cannot GET ${req.url}`);
});

// Start the Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
