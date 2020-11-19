/*Codigo no bloqueante*/

console.log('hola');

setTimeout(function timeoutCallback() {

console.log('mundo');

}, 500);

console.log('Ubykuo, everytime, everywhere');

/* 
 * Resultados:
 * => hola
 * => Ubykuo, everytime, everywhere
 * => mundo
 */