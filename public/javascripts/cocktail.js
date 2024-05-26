document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('percentageValue').textContent =  `${document.getElementById('percentage').value}%`;
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', async function() {
        event.preventDefault();

        const alcoholSelected = document.getElementById('alcoholSelector').value;
        const softSelected = document.getElementById('softSelector').value;
        const percentageSelected = document.getElementById('percentage').value;
        const sizeSelected = document.getElementById('size').value;
        const recipeSelected = {
            alcohol : alcoholSelected,
            soft : softSelected,
            percentage : percentageSelected,
            size:sizeSelected
        }
        const response = await makeCocktail(recipeSelected);
        alert(response.message);
    })
})

async function makeCocktail(recipe){
    const response = await fetch("http://localhost:3000/cocktail",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe)})
        .then(response => response.json())
        .catch(error => console.log(error));
    return response;
}

const percentageSelector = document.getElementById('percentage');

percentageSelector.addEventListener('input', async event => {
    document.getElementById('percentageValue').textContent =  `${this.event.currentTarget.value}%`;
})