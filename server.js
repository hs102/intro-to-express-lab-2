const express = require('express');
const app = express();


const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
app.get('/collectibles/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);
  if (isNaN(index) || index < 0 || index >= collectibles.length) {
    res.send('This item is not yet in stock. Check back soon!');
  } else {
    const item = collectibles[index];
    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
  }
});




const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
  let result = shoes;
  if (req.query['min-price']) {
    const min = parseFloat(req.query['min-price']);
    result = result.filter(shoe => shoe.price >= min);
  }
  if (req.query['max-price']) {
    const max = parseFloat(req.query['max-price']);
    result = result.filter(shoe => shoe.price <= max);
  }
  if (req.query.type) {
    result = result.filter(shoe => shoe.type === req.query.type);
  }
  res.json(result);
});




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