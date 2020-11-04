/*Imprime la ultima letra de tu(s) nombre(s)*/

/*Entrada de datos*/ 
console.log('******************Bienvenido******************');
var fullName = prompt('¿Cómo te llamas?');
console.log(`¡Hola, ${fullName}!`);

/*Proceso de datos*/ 
var names = fullName.split(" ");

/*Salida de datos*/ 
console.log('******************Las ultimas letras de tu(s) nombre(s) es/son:******************');
names.forEach(name => {
  console.log(`${name} => ${name.charAt(name.length-1)}`);
});