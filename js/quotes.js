const quotes = [
  {
    quo:"Some things have to be believed to be seen",
    author:"Ralph Hodgson"
  },
  {
    quo:"Just because you are blind, and unable to see my beauty doesn't mean it does not exist",
    author:"Margaret Cho"
  },
  {
    quo:"True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment",
    author:"William Penn"
  },
      
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quo;
author.innerText = todaysQuote.author;