class Person {
  constructor() {
    this.name = " ";
    this.lastName = " ";
    this.age = 0;
    this.weight = 0;
  }
  setPerson(name, lastName, age, weight) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.weight = weight;
  }
  getPerson() {
    return {
      "name": this.name,
      "lastName": this.lastName,
      "age": this.age,
      "weight": this.weight
    };
  }
}


function mostWeight(person1, person2) {
  if (person1.weight > person2.weight) {
    console.log(person1.name+" Es mas pesado");
  }
  else {
    console.log(person2.name+" Es mas pesado");
  }
}


let person1 = new Person();
person1.setPerson("German","Ceballos",27, 70);

let person2 = new Person();
person2.setPerson("Dunahisy","Llerena",37, 80);

mostWeight(person1, person2);