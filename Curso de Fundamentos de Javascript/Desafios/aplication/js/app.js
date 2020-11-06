import Menu from './menu.js';
import Person from './person.js';

let menu = new Menu;
let persons = [];


do {
  menu.show();
  var opt = parseInt( prompt("Opcion: ") );
  switch(opt) {
    case 1:
      console.log("[1]---Agregar Persona");
      let person = new Person;
      person.setPerson();
      persons.push(person.getPerson());
      break;
    case 2:
      console.log("[2]---Eliminar Persona");
      if (persons.length>=1) {
        name = prompt("Nombre: ");
      }
      else {
        console.log("No hay personas");
      }
      break;
    case 3:
      console.log("[3]---Listar Personas");
      if (persons.length>=1) {
        console.table(persons);
      }
      else {
        console.log("No hay personas");
      }
      break;
      case 4:
        console.log("[4]---Buscar Persona");
        if (persons.length >=1) {
          name = prompt("Nombre: ");
          console.log(persons.find(name));
        }
        else {
          console.log("No hay personas");
        }
        break;
  }
} while(opt==1 || opt==2 || opt==3 || opt==4);