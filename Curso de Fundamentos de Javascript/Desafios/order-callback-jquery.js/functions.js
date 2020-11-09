/*implementando API | swapi.dev*/
const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/id/"; //SECTION = people, planets, starships
const OPTS = { "crossDomain": true };


function obtenerPersonaje_v2(id, callback){
  const URL =  `${API_URL}${PEOPLE_URL.replace("id", id)}`;
  $.get(URL, OPTS, callback)
  .fail( () => {
      console.log(`Ocurrio Error no se pudo obtener el personaje ${id}`)
  });
};


obtenerPersonaje_v2(1,function (personaje) {
  console.log(`Hola,yo soy${personaje.name}`)

  obtenerPersonaje_v2(2,function (personaje) {
    console.log(`Hola,yo soy${personaje.name}`)

    obtenerPersonaje_v2(3,function (personaje) {
      console.log(`Hola,yo soy${personaje.name}`)

      obtenerPersonaje_v2(4,function (personaje) {
        console.log(`Hola,yo soy${personaje.name}`)

        obtenerPersonaje_v2(5,function (personaje) {
          console.log(`Hola,yo soy ${personaje.name}`)

          obtenerPersonaje_v2(6,function (personaje) {
            console.log(`Hola,yo soy ${personaje.name}`)

            obtenerPersonaje_v2(7,function (personaje) {
              console.log(`Hola,yo soy ${personaje.name}`)
            })
          })
        })
      })
    })
  })
})