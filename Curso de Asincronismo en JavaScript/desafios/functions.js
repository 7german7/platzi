let URL_API = "https://rickandmortyapi.com/api/character/";


function fetchData(URL_API, callback) {
    let http = new XMLHttpRequest();
    http.open("GET", URL_API, true);
    http.onreadystatechange = function (event) {
        if(http.readyState === 4) {
            if(http.status === 200) {
                callback(null, JSON.parse(http.responseText));
            }
            else {
                const error = new Error("Error" + URL_API);
                return callback(error, null);
            }
        }
    }
    http.send();
}


/*Callback hell, considerado una mala practica se pueden anidar hasta 3*/

fetchData(URL_API, function (error1, data1) {
    if(error1) return console.error(error1);
    fetchData(URL_API + data1.results[0].id, function (error2, data2) {
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
});

