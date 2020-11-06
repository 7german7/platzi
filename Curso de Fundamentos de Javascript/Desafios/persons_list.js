class Person {
  constructor() {
    this.name = " ";
    this.lastName = " ";
    this.age = " ";
  }
  setPerson(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  getPerson() {
    return {
      "name": this.name,
      "lastName": this.lastName,
      "age": this.age
    };
  }
}

let person1 = new Person();
person1.setPerson("German","Ceballos",27);

let person2 = new Person();
person2.setPerson("Dunahisy","Llerena",37);

let persons = [];
persons.push(person1);
persons.push(person2);

console.table(persons);