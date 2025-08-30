<h1>
  <span class="headline">Intro to Express Lab</span>
  <span class="subhead">Exercise</span>
</h1>

## Introduction

For each section in this lab, you will create an Express route that accepts requests at a specific URL and responds with `res.send`.

### 1. Be Polite, Greet the User 

**Task**: Create a route that responds to URLs like `/greetings/<username-parameter>`.

**Examples**: Matches routes like `/greetings/Christy` or `/greetings/Mathilda`.

**Response**: Include the username from the URL in the response, such as "Hello there, Christy!" or "What a delight it is to see you once more, Mathilda."

### 2. Rolling the Dice

**Task**: Set up a route to handle URLs following the pattern `/roll/<number-parameter>`.

**Examples**: Matches routes like `/roll/6` or `/roll/20`.

**Validation**: If the parameter is not a number, respond with "You must specify a number." For instance, `/roll/potato` should trigger this response.

**Functionality**: If a valid number is provided, respond with a random whole number between 0 and the given number. For example, a request to `/roll/16` might respond with "You rolled a 14."

### 3. I Want THAT One!

**Task**: Create a route for URLs like `/collectibles/<index-parameter>`.

**Examples**: Matches routes such as `/collectibles/2` or `/collectibles/0`.

**Data Array**:

  ```javascript
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
  ```
**Validation**: If the index does not correspond to an item in the array, respond with "This item is not yet in stock. Check back soon!"

**Response**: Should describe the item at the given index, like "So, you want the shiny ball? For 5.95, it can be yours!" Include both the `name` and `price` properties.

## Using Query Parameters

In this section, you practice using query parameters to pass information from the URL to the server in an Express application.

Query parameters are added to the end of a URL after a `?` and are formatted as `key=value` pairs. Multiple query parameters can be added to a URL by separating them with `&`. For example, the following URL has two query parameters, `name` and `age`:

`localhost:3000/hello?name=Christy&age=32`

Query parameters are available in the server's `req.query` object. We can access the values of the `name` and `age` query parameters like so:

```js
app.get('/hello', (req, res) => {
    res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});
```

### 4. Filter Shoes by Query Parameters

Use the following array of shoes in this challenge:


```js
  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];
```

**Task**: Create a route `/shoes` that filters the list of shoes based on query parameters.

**Query Parameters**:
  - `min-price`: Excludes shoes below this price.
  - `max-price`: Excludes shoes above this price.
  - `type`: Shows only shoes of the specified type.
  - No parameters: Responds with the full list of shoes.

