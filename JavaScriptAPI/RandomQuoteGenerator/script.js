let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');
const url = 'https://dummyjson.com/quotes/random';

let getQuote = () => {
  fetch(url)
    .then((res) => res.json())
    .then((item) => {
      console.log(item.quote);
      console.log(item.author);
      quote.innerText = item.quote;
      author.innerText = item.author;
    });
};

window.addEventListener('load', getQuote);
btn.addEventListener('click', getQuote);
