
const temp = document.getElementById("temp");
const search = document.getElementById("search");
const country = document.getElementById("country");
const name = document.getElementById("name");
const region = document.getElementById("region");
const form = document.getElementById("form");


let townName = 'Cuttack';

search.value = townName;

const apiKey = 'fdd548b74fmsh7827446d4f224e5p1a25cdjsnd5f67a28289c';

const options = {

    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fdd548b74fmsh7827446d4f224e5p1a25cdjsnd5f67a28289c',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

async function fetchData() {


    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(townName)}`;


    try {

        const response = await fetch(url, options);
        const result = await response.json();

        console.log(result);

        temp.innerHTML = result.current.temp_c + " °C";
        country.innerText = result.location.country;
        name.innerText = result.location.name;
        region.innerText = result.location.region;


    } catch (error) {

        console.error(error);
    }
}

fetchData();



form.addEventListener('submit', function (event) {

    event.preventDefault();

    townName = search.value;

    fetchData();
})
