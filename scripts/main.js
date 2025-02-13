import { fetchSimpsonsQuote } from "./api.js";
import { renderImage, renderQuotes, renderCharacter } from "./domUtils.js";
import { reloadBtnListener } from "./eventHandler.js";


initQuoteGenerator();

function initQuoteGenerator() {
pageSetup();
reloadBtnListener(reloadPage);
}

async function pageSetup() {
    let data = await fetchSimpsonsQuote();
    data.forEach(quoteObj => {
        renderCharacter(quoteObj.character);
        renderQuotes(quoteObj.quote);
        renderImage(quoteObj.image);
    });
}

function reloadPage() {
    let quoteDiv = document.querySelector('.simpsons-quote');
    quoteDiv.innerHTML = '';
    pageSetup();
}


// let data = await fetchSimpsonsQuote();
// let quote = data.quote;
// let character = data.character;
// let image = data.image;
// renderCharacter(character);
// renderQuotes(quote);
// renderImage(image);
// console.log(data);




