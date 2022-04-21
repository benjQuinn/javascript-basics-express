const express = require('express');
const { sayHello } = require('./lib/strings')

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  const string  = req.params.string;
  const result = sayHello(string);
  
  res.json({ result: `${result}` }).sendStatus(200);
});

module.exports = app;
