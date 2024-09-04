require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'about.html'));
});
app.get('/contact-me', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'contact-me.html'));
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', '404.html'), 404);
});

const port = process.env.PORT;
app.listen(port);
