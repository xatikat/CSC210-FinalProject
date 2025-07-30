let quoteText = document.getElementById('quote-text');
let authorText = document.getElementById('author-text');
let url = 'https://www.quoterism.com/api/quotes/quote-of-the-day';

fetch(url)
    .then((response) => response.json())
    .then((body) => {
        //console.log(body)
        quoteText.innerText = body.text;
        authorText.innerText = body.author.name;

        quoteText.style.opacity = 1;
        authorText.style.opacity = 1;
    })
    .catch(e => {
        console.log(e);
    });