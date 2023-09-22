const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Define a port for your server to listen on
const port = process.env.PORT || 3000;

// Middleware for serving static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for different pages
app.get('/', (req, res) => {
  // Serve the homepage (index.html)
  res.sendFile(path.join(__dirname, 'public', '/views/index.html'));
});

// app.get('/about', (req, res) => {
//   // Serve the "about" page (about.html)
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// app.get('/contact', (req, res) => {
//   // Serve the "contact" page (contact.html)
//   res.sendFile(path.join(__dirname, 'public', 'contact.html'));
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
