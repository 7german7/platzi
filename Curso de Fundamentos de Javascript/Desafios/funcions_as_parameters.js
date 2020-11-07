function sayHello() { 
  console.log("Hello World");
}

function show(fn) {
  fn();
  console.log("Hola Mundo");
}

show(sayHello);