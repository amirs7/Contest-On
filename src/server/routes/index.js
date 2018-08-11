const express = require('express');

const app = express();

app.get('/home', (req, res, next) => {
  res.json({message: 'Hello World'});
  return next();
});

module.exports = app;
