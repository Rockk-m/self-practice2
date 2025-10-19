// 1. Create an empty array to hold the quotes
const quotes = [];

/*
  2. Function: addQuote
  - Accepts a quote object
  - Adds it to the quotes array
*/
function addQuote(quote) {
  quotes.push(quote);
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  const index = quotes.findIndex(quote => quote.id === id);

  if (index !== -1) {
    quotes.splice(index, 1);
  }
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updates) {
  const quote = quotes.find(q => q.id === id);

  if (quote) {
    if (updates.content) {
      quote.content = updates.content;
    }
    if (updates.author) {
      quote.author = updates.author;
    }
  }
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  return quotes;
}

// 6. Test your functions below

// Add 3 quotes
addQuote({ id: 1, content: 'Stay hungry, stay foolish.', author: 'Steve Jobs' });
addQuote({ id: 2, content: 'Do or do not. There is no try.', author: 'Yoda' });
addQuote({ id: 3, content: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' });

// Delete 1 quote (the one with id: 2)
deleteQuote(2);

// Update 1 quote (the one with id: 1)
updateQuote(1, { content: 'Stay hungry. Stay foolish.', author: 'Jobs' });

// Print all quotes
console.log(getAllQuotes());