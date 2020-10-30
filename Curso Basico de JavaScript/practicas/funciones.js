// Declarativas
function myFunction(){
  return 1;
}

// Expresivas / expresión / anónimas
var  myFunction2 = function(){
  return 0;
}

// Funciones con parametros
function myFunction(a,b){
  return a + b;
}

// Ejemplo 1

let name = "Enrique";
function printName(name){
  console.log(name);
  console.log(`Hola ${name}`);
}

// Ejemplo 2
let a = 5;
let b = 2;

function suma(a,b) {
  let result = a + b;
  return result;
}