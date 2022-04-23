const express = require('express');
const { add, subtract, multiply } = require('./lib/numbers');
const { 
  sayHello,  
  uppercase, 
  lowercase, 
  firstCharacter, 
  firstCharacters, } = require('./lib/strings')

const app = express();

app.use(express.json());

///////////STRINGS///////////
app.get('/strings/hello/:string', (req, res) => {
  const string  = req.params.string;
  const result = sayHello(string);
  
  res.send(200).json({ result: `${result}` })
});

app.get('/strings/upper/:string', (req, res) => {
  const string = req.params.string;

  res.send(200).json({ result: uppercase(string) });
})

app.get('/strings/lower/:string', (req, res) => {
  const string = req.params.string;

  res.send(200).json({ result: lowercase(string) });
})

app.get('/strings/first-characters/:string', (req, res) => {
  const string = req.params.string;

  if (!req.query.length) {
    res.send(200).json({ result: firstCharacter(string) });
  } else {
    res.send(200).json({ result: firstCharacters(string, req.query.length) });
  }

});

///////////NUMBERS///////////
app.get('/numbers/add/:x/and/:y', (req, res) => {
  const x = parseInt(req.params.x);
  const y = parseInt(req.params.y);

  if (x >= 0 || y >= 0) {
    res.status(200).json({ result: add(x, y) });
  } else if (!x || !y) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }

});

app.get('/numbers/subtract/:x/from/:y', (req, res) => {
  const x = parseInt(req.params.x);
  const y = parseInt(req.params.y);

  if (x >= 0 || y >= 0) {
    res.status(200).json({ result: subtract(y, x) });
  } else if (!x || !y) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }

});

app.post('/numbers/multiply', (req, res) => {
  const a = req.body.a;
  const b = req.body.b

  res.status(200).json({ result: multiply(a, b) });
});

module.exports = app;
