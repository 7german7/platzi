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
      let name = prompt("Nombre: ");
      let lastName = prompt("Apellido: ");
      let age = parseInt( prompt("Edad: ") );
      person.setPerson(name, lastName, age);
      persons.push(person.getPerson());
      break;
    case 2:
      console.log("[2]---Eliminar Persona");
      name = prompt("Nombre: ");
      break;
    case 3:
      console.log("[3]---Listar Personas");
      console.table(persons);
      break;
  }
} while(opt==1 || opt==2 || opt==3);