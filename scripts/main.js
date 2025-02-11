import { fetchSimpsonsQuote } from "./modules.js";


pageSetup();

document.querySelector('#reloadBtn').addEventListener('click', () => {
    reloadPage();
})

async function pageSetup() {
    let data = await fetchSimpsonsQuote();
    let quote = data.quote;
    let character = data.character;
    let image = data.image;
    renderCharacter(character);
    renderQuotes(quote);
    renderImage(image);
    console.log(data);
}

async function renderQuotes(quote) {
        let quoteRef = document.createElement('p');
        quoteRef.textContent = quote;
        let quoteDiv = document.querySelector('.simpsons-quote');
        quoteDiv.appendChild(quoteRef);
}

function renderCharacter(character) {
        let characterRef = document.createElement('h3');
        characterRef.textContent = character;
        let quoteDiv = document.querySelector('.simpsons-quote');
        quoteDiv.appendChild(characterRef);
}

function renderImage(image) {
        let imageRef = document.createElement('img');
        imageRef.src = image;
        imageRef.alt = 'Simpsons character';
        let quoteDiv = document.querySelector('.simpsons-quote');
        quoteDiv.appendChild(imageRef);
}

function reloadPage() {
    let quoteDiv = document.querySelector('.simpsons-quote');
    quoteDiv.innerHTML = '';
    pageSetup();
}







