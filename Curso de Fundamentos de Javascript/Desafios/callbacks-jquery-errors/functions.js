/*implementando API | swapi.dev*/
const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/id/"; //SECTION = people, planets, starships

const onPeopleResponse = function(data) {
    //console.log(JSON.stringify(data, null, '\t'));
    console.log(data.name);
}

function getPeople(id) {
  const PERSON_URL = `${API_URL}${PEOPLE_URL.replace("id", id)}`;
  $.get(PERSON_URL, {"crossDomain": true}, onPeopleResponse);
}

/*con este ejemplo podemos observar que las peticiones HTTP realizadas por el metodo $.get() de jQuery, nunca llegan en el orden de secuencia que esperamos*/
for (let i = 1; i < 15; i++) {
  getPeople(i);
}