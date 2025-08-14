const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Welcome to the Cookie Demo!');
});

app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'DhruvBarsena', { maxAge: 3600000 }); // 1 hour
  res.send('Cookie has been set!');
});

app.get('/get-cookie', (req, res) => {
  res.send(`Cookies: ${JSON.stringify(req.cookies)}`);
});

app.get('/delete-cookie', (req, res) => {
  res.clearCookie('username');
  res.send('Cookie has been deleted.');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
