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

export default Person;