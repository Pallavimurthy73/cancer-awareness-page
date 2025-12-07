// Select elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');

// Local dummy quotes (no internet needed)
const quotes = [
  {
    text: 'Strength does not come from physical capacity. It comes from an indomitable will.',
    author: 'Mahatma Gandhi'
  },
  {
    text: 'You never know how strong you are until being strong is your only choice.',
    author: 'Bob Marley'
  },
  {
    text: 'Hope is the companion of power and mother of success.',
    author: 'Samuel Smiles'
  },
  {
    text: 'Cancer is a word, not a sentence.',
    author: 'John Diamond'
  }
];

// Get a random quote from the local array
function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author ? `- ${quote.author}` : '- Unknown';
}

// Load a quote on button click
newQuoteBtn.addEventListener('click', getQuote);

// Load one when page opens
getQuote();
