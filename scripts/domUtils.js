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

export {renderQuotes, renderCharacter, renderImage};