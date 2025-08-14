const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Dhruv Barsenas server');
});

app.get('/about', (req, res) => {
  res.send('About Us Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Us Page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
