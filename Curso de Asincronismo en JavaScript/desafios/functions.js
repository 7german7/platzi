const URL_API = "https://rickandmortyapi.com/api/character/1";


let http = new XMLHttpRequest();
http.open("GET", URL_API, true);
http.onreadystatechange = function (event) {
    if(http.readyState === 4) {
        if(http.status === 200) {
            console.log("Se cargo la peticion http");
            console.log(JSON.parse(http.responseText));
        }
        else {
            console.log("Error en la peticion http");
        }
    }
}

http.send();