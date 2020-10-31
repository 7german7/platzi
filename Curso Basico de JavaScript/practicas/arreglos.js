//Practicando con arreglos
var frutas = ['manzana', 'pera', 'uva'];
console.log(frutas.length); // imprime la cantidad de elementos del arreglo

//Acceder a posiciones especificas del arreglo
console.log(frutas[0]); //manzana
console.log(frutas[1]); //pera
console.log(frutas[2]); //uva

//Metodos de Arreglos en JavaScript
frutas = frutas.push('mango'); // Agrega elemento ['manzana', 'pera', 'uva', 'mango']
frutas = frutas.pop('uva'); // Elimina elemento ['manzana', 'pera', 'mango']
frutas = frutas.unshift('guanabana'); // Agrega elemento en la 1era posicion ['guanabana', 'manzana', 'pera', 'uva', 'mango']
frutas = frutas.shift('guanabana'); // Elemina elemento en la 1era posicion ['manzana', 'pera', 'uva', 'mango']
frutas = frutas.indexOf('pera'); // Devuelve la posicion donde se encuentre (1)