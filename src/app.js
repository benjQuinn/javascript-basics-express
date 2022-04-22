const express = require('express');
const { 
  sayHello,  
  uppercase, 
  lowercase, 
  firstCharacter, 
  firstCharacters } = require('./lib/strings')

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  const string  = req.params.string;
  const result = sayHello(string);
  
  res.json({ result: `${result}` }).sendStatus(200);
});

app.get('/strings/upper/:string', (req, res) => {
  const string = req.params.string;

  res.json({ result: uppercase(string) }).sendStatus(200);
})

app.get('/strings/lower/:string', (req, res) => {
  const string = req.params.string;

  res.json({ result: lowercase(string) }).sendStatus(200);
})

app.get('/strings/first-characters/:string', (req, res) => {
  const string = req.params.string;

  if (!req.query.length) {
    res.json({ result: firstCharacter(string) }).sendStatus(200); 
  } else {
    res.json({ result: firstCharacters(string, req.query.length) }).sendStatus(200); 
  }
})


module.exports = app;
