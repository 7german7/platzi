/*
HTML
  
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Clase 28 - Callbacks</title>
  </head>
  <body>
    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossorigin="anonymous"></script>
    <script src="clase28.js"></script>
  </body>
</html>
*/

/*CLASE 32*/
// const API_URL = 'https://swapi.co/api/'
// const PEOPLE_URL = 'people/:id'


// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
// const opts = { crossDomain: true }

// const onPeopleResponse = function (persona) {
//   console.log(`Hola yo soy, ${persona.name}`)
// }

// $.get(lukeUrl, opts, onPeopleResponse)

/*CLASE 33*/

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const opts = { crossDomain: true}
const onPeopleResponse = function(person){
    console.log(person.name)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)