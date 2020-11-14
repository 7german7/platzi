# Curso de JavaScript Engine (V8) y el Navegador

## Contenido

1. [Historia de Javascript](#Historia-deJavascript).
2. [V8](#V8).
3. [Engine](#Engine)
4. [Call Stack](#Call-Stack).
5. [Garbage Collection](#Garbage-Collection).
6. [Run Time](#Run-Time).
7. [Asincronía](#Asincronía).

## Historia de Javascript

- Creado por [Brendan Eich](https://www.instagram.com/p/B4nPBx4BNFt/).
- Nace en 1995.
- Antes de Javascript, las paginas eran muy estaticas.
- ECMA, es un grupo de desarroladores que se encargan de estandarizar el lenguaje de programacion para los navegadores (JavaScript).

**Referencias**:

1. https://www.marvel.com/captainmarvel/
2. http://www.savewalterwhite.com/
3. http://www.homerswebpage.com/
4. https://www.spacejam.com/

[Ir Arriba](#Contenido).

## V8

- Motor de Javascript de Chrome.
- Ayuda a que el lenguaje sea mas rapido.
- V8 nace desde Google Maps para que esta funcione rapidamente.
- Cada navegador tiene su propio motor de Javascript.

## Engine

![](https://static.platzi.com/media/user_upload/js-engine-complete%402x-285ce1e4-709b-4842-b4e4-90ec6d940f9f.jpg).

1. Genera un objeto global (window).
2. Genera una variable `this`, que en entorno global `this` = `window` dentro de una funcion `this` = `global`, dentro de una clase `this` = `nombre de la clase`.
3. Se crea un contexto de ejecucion, el cual luego de crear el contexto global empieza a correr nuestro codigo.

![](https://static.platzi.com/media/user_upload/Engine%20V8-7ee73612-fd87-42db-8b1d-2ec0d21d0d97.jpg).

[Ir Arriba](#Contenido).

## Memory Heap

- Donde se almacena los valores de las variables y las funciones.
- Se destina un espacio en memoria para las variables.
- La información en el memory heap, No se guarda de manera lineal.

[Ir Arriba](#Contenido).

## Call Stack

- Es una pila donde se agrupan funciones/tareas de abajo hacia arriba.
- `debugger`: Nos permite ejecutar nuestro codigo JavaScript linea por linea observando como este se comporta.

[Ir Arriba](#Contenido).

## Garbage Collection

Limpia la memoria de los datos no utilizados para no sobrecargarla y seguir trabajando sin problemas. En otras palabras se hace el proceso de `Mark and Sweep` para limpiar estas variables que fueron renombradas, Cuando hay un ciclo for las variable siempre se renombrar y las anteriores se quedan hay pero bueno para eso esta Garbage collection que limpia estas variables inservibles.

[Ir Arriba](#Contenido).

## Run Time

![](https://aseemrb.me/images/weird-awesome-javascript/chrome.png).

[Ir Arriba](#Contenido).

## Asincronía

![](https://static.platzi.com/media/user_upload/apunte-95fbf5ad-b63e-4130-b40f-de9d3bcca256.jpg).

Taquería DeGranda presenta a:

🌮 - call stack : el taquero (órdenes rápidas)
👨‍🍳 - web APIs : la cocina
🌯 - callback queue : las órdenes preparadas
💁‍♂️ - event loop : el mesero

[Ir Arriba](#Contenido).

## Recursos

1. [Evelution of the Web](http://www.evolutionoftheweb.com/)
2. [JavaScript Engine](https://dev.to/lydiahallie/javascript-visualized-the-javascript-engine-4cdf).
3. [Motores JS](https://kangax.github.io/compat-table/es6/).
4. [AST - Abstract Syntax Three](https://astexplorer.net/).
5. [Parse - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/parse).
6. [Call Stack](https://www.youtube.com/watch?reload=9&v=ygA5U7Wgsg8&feature=youtu.be).
7. [33 Conceptos de JS](https://github.com/leonardomso/33-js-concepts).
8. [Run Time - Tester](http://latentflip.com/).
9. [WEB APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API).

[Ir Arriba](#Contenido).
