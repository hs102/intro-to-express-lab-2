const express = require('express');
const app = express();


const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'Yaseen Autograph', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 },
  { name: 'Potato', price: 9.99 }
];




app.get('/greetings/:username', (req, res) => {
  const username = req.params.username;
  res.send(`Hello there, ${username}!`);
});

app.get('/hello', (req, res) => {
    res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});

app.get('/roll/:number', (req, res) => {
  const number = parseInt(req.params.number, 10);
  if (isNaN(number)) {
    res.send('You must specify a number.');
  } else {
    const roll = Math.floor(Math.random() * (number + 1));
    res.send(`You rolled a ${roll}.`);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});