var searchResults = {};


// document.querySelector('#searchTerm').value;

document.querySelector('#searchButton').addEventListener('click', getSearchResults);

document.querySelector('#searchTerm').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getSearchResults();
    }
});

// getSearchResults('board games');

// this code doesn't work ... but I feel like I'm close.
document.addEventListener("keypress", searchWithEnterKey, true);

function searchWithEnterKey(e) {
    if (e.key == 'Enter') {
        document.querySelector('#cards').innerHTML = '';
        getSearchResults();
        
    }
    
}

document.addEventListener('click', function(searchButton) {
    var searchButton = document.querySelector('.btn-search');
    document.querySelector('#cards').innerHTML = '';
    getSearchResults();
});
// End of code that doesn't work.

function getSearchResults(searchTerm) {
    var searchTerm = document.querySelector('#searchTerm').value;

    if (searchTerm !== '') {
        fetch('api data goes here' + encodeURIComponent(searchTerm) + '&includes=Images,Shop')
        .then(response => response.json())
        .then(renderResultCards)
        };
}

function renderResultCards(data) {
    document.querySelector('#cards').innerHTML = '';
    searchResults.results.forEach(createUserCard())
}

function createUserCard(card) {
    var resultCard = `<div class="col-sm-4 col-md-3">
        <div class="card">
            <img src=${card.Images[0].url_170x135} />
            <div class="card-caption">
            <div>${card.title.slice(0, 50)}...</div>
            <div>
            <span class="text-muted card-shop">${card.Shop.shop_name}</span> <span class="pull-right text-success card-price">${card.price}</span>
            </div>
            </div>
        </div>
    </div>`

    document.querySelector('#cards').innerHTML += resultCard;
    
};