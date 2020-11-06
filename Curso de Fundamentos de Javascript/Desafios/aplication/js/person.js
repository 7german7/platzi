class Person {
  constructor() {
    this.name = " ";
    this.lastName = " ";
    this.age = " ";
  }
  setPerson() {
    this.name = prompt("Nombre: ");
    this.lastName = prompt("Apellido: ");
    this.age = parseInt( prompt("Edad: ") );
  }
  getPerson() {
    return {
      "name": this.name,
      "lastName": this.lastName,
      "age": this.age
    };
  }
}

export default Person;