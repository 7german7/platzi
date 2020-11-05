const ADULT_AGE = 18;

var person = {
  name: "German",
  lastName: "Ceballos",
  age: 27
};

/*Resumida*/ 
var isAdult = person => {
  person.age >= ADULT_AGE ? console.log(person.name+" es adulto") : console.log(person.name+" no es adulto");
}

isAdult(person);

/*Larga*/ 
function isAdult(person) {
  if (person.age >= ADULT_AGE) {
    console.log(person.name+" es adulto");
  }
  else {
    console.log(person.name+" no es adulto");
  }
}

isAdult(person);