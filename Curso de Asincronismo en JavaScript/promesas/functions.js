const fetchData = (URL_API) => {
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open("GET", URL_API, true);
        http.onreadystatechange = (() => {
            if(http.readyState === 4) {
                (http.status === 200)
                ? resolve(JSON.parse(http.responseText))
                : reject(new Error("Error" + URL_API))
            }
        })
        http.send();
    });
}

//module.exports = fetchData;
//const fetchData = require('../functions');


let URL_API = "https://rickandmortyapi.com/api/character/";

fetchData(URL_API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${URL_API}${data.results[0].id}`);
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(error => console.error(error))