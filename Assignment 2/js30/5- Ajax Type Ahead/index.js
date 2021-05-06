const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(cityList => cities = cityList);


function findMatch(wordSearched, cities) {

    return cities.filter(place => {

        const regex = new RegExp(wordSearched, 'gi');
        return place.city.match(regex) || place.state.match(regex);

    });

}

function DisplayMatch() {
    const placeFound = findMatch(this.value, cities);
    const suggestionsText = placeFound.map(place => {

        const regex = new RegExp(this.value , 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
    <li>
    <span class="name"> ${cityName} , ${stateName}  </span>  
    <span class="population"> ${place.population} </span>
    </li>`

    }).join('');

    suggestions.innerHTML = suggestionsText;
    
  
    


}

const suggestions = document.querySelector(".suggestions");
const searchBox = document.querySelector(".search");

searchBox.addEventListener("change", DisplayMatch);
searchBox.addEventListener("keyup", DisplayMatch);
