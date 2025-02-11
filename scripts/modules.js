async function fetchSimpsonsQuote() {
    try { let response = await fetch ('https://thesimpsonsquoteapi.glitch.me/quotes');
            if(!response.ok) {
                throw new Error('Something went wrong!')
            } let data = await response.json();
                return data[0];
        
    } catch (error) {
        console.log(error.message);
        return {};
        
    }
}

export {fetchSimpsonsQuote};