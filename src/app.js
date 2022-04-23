const express = require('express');
const { 
  getNthElement, 
  arrayToCSVString, 
  addToArray, 
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2} = require('./lib/arrays');
const { 
  negate, 
  truthiness, 
  isOdd, 
  startsWith } = require('./lib/booleans');
const { 
  add, 
  subtract, 
  multiply, 
  divide, 
  remainder } = require('./lib/numbers');
const { 
  sayHello,  
  uppercase, 
  lowercase, 
  firstCharacter, 
  firstCharacters, } = require('./lib/strings')
const app = express();

app.use(express.json());

//----------------------------------STRINGS----------------------------------//
app.get('/strings/hello/:string', (req, res) => {
  const string  = req.params.string

  res.send(200).json({ result: sayHello(string) })
});

app.get('/strings/upper/:string', (req, res) => {
  const string = req.params.string

  res.send(200).json({ result: uppercase(string) })
});

app.get('/strings/lower/:string', (req, res) => {
  const string = req.params.string

  res.send(200).json({ result: lowercase(string) })
});

app.get('/strings/first-characters/:string', (req, res) => {
  const string = req.params.string

  !req.query.length ? 
  res.send(200).json({ result: firstCharacter(string) }) :
  res.send(200).json({ result: firstCharacters(string, req.query.length) })
});

//----------------------------------NUMBERS----------------------------------//
app.get('/numbers/add/:x/and/:y', (req, res) => {
  const x = parseInt(req.params.x)
  const y = parseInt(req.params.y)

  if (x >= 0 || y >= 0) {
    res.status(200).json({ result: add(x, y) })
  } else if (!x || !y) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' })
  }

});

app.get('/numbers/subtract/:x/from/:y', (req, res) => {
  const x = parseInt(req.params.x)
  const y = parseInt(req.params.y)

  if (x >= 0 || y >= 0) {
    res.status(200).json({ result: subtract(y, x) })
  } else if (!x || !y) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' })
  }

});

app.post('/numbers/multiply', (req, res) => {
  const a = req.body.a
  const b = req.body.b

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: `Parameters "a" and "b" are required.` })
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(b))) {
    res.status(400).json({ error: `Parameters "a" and "b" must be valid numbers.` })
  } else {
    res.status(200).json({ result: multiply(a, b) })
  }

});

app.post('/numbers/divide', (req, res) => {
  const a = req.body.a
  const b = req.body.b

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: `Parameters "a" and "b" are required.` })
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(b))) {
    res.status(400).json({ error: `Parameters "a" and "b" must be valid numbers.` })
  } else if (b === 0) {
    res.status(400).json({ error: `Unable to divide by 0.` })
  } else {
    res.status(200).json({ result: divide(a, b) })
  }

});

app.post('/numbers/remainder', (req, res) => {
  const a = req.body.a
  const b = req.body.b

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: `Parameters "a" and "b" are required.` })
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(b))) {
    res.status(400).json({ error: `Parameters must be valid numbers.` })
  } else if (b === 0) {
    res.status(400).json({ error: `Unable to divide by 0.`})
  } else {
    res.status(200).json({ result: remainder(a, b) })
  }

});

//----------------------------------BOOLEANS----------------------------------//
app.post('/booleans/negate', (req, res) => {
  const val = req.body.value

  res.status(200).json({ result: negate(val) })
});

app.post('/booleans/truthiness', (req, res) => {
  const val = req.body.value

  res.status(200).json({ result: truthiness(val) })
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const number = req.params.number

  Number.isNaN(parseInt(number)) ?
  res.status(400).json({ error: `Parameter must be a number.` }) :
  res.status(200).json({ result: isOdd(number) })
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const string = req.params.string
  const char = req.params.char

  char.length > 1 ?
  res.status(400).json({ error: `Parameter "character" must be a single character.` }) :
  res.status(200).json({ result: startsWith(char, string) })
});

//----------------------------------ARRAYS----------------------------------//
app.post('/arrays/element-at-index/:index', (req, res) => {
  const arr = req.body.array
  const index = parseInt(req.params.index)

  res.status(200).json({ result: getNthElement(index, arr) })
});

app.post('/arrays/to-string', (req, res) => {
  const arr = req.body.array

  res.status(200).json({ result: arrayToCSVString(arr) })
});

app.post('/arrays/append', (req, res) => {
  const arr = req.body.array
  const val = req.body.value

  res.status(200).json({ result: addToArray2(val, arr) })
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const arr = req.body.array

  res.status(200).json({ result: elementsStartingWithAVowel(arr) })
});

app.post('/arrays/remove-element', (req, res) => {
  const arr = req.body.array
  const index = parseInt(req.query.index)

  !req.query.index ? 
  res.status(200).json({ result: removeNthElement2(0, arr) }) :
  res.status(200).json({ result: removeNthElement2(index, arr) })
});

module.exports = app;
