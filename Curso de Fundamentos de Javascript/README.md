# Fundamentos de Javascript

**Profesor**: Sacha Lifszyc, Desarrollador Full Stack.

## Contenido

- [Variables](#Variables).
- [Variables: Strings](#Variables-Strings).
- [Numeros](#Numeros).
- [Funciones](#Funciones).
- [Funciones: Alcance](#Funciones-Alcance).
- [Objetos](#Objetos).
- [Comparaciones](#Comparaciones).
- [Parametros como referencia y como valor](#Parametros-como-referencia-y-como-valor).
- [Arrow functions](#Arrow-functions).
- [Clases](#Clases).
- [Modificando un prototipo](#Modificando-un-prototipo).
- [El contexto de las funciones: quién es this](El-contexto-de-las-funciones-quién-es-this).
- [Clases en ECMAScript 6](#Clases-en-ECMAScript-6).
- [Herencia](#Herencia).
- [Funciones como parámetros](#Funciones-como-parámetros).
- [Asincronismo](#Asincronismo).
- [Cómo funciona el tiempo en JavaScript](#Cómo-funciona-el-tiempo-en-JavaScript).
- [Promesas](#Promesas).
- [Memorización](#Memorización).
- [Closures](#Closures).
- [Estructuras de datos inmutables](#Estructuras-de-datos-inmutables).
- [Contexto(this)](#Contexto).

## Variables

Las variables son contenedores de datos que asignan un espacio en memoria. Existen 3 formas de declarar una variable:

- `var`: Declara un variable con _scope global_, lo que quiere decir que su declaracion siempre ocurrira fuera de los bloques de instrucciones pero su inicializacion ocurrira donde se le asigne un valor.
- `let`: Declara un variable con _scope de bloque_ dentro de una funcion o secmento de codigo bien sea dentro de un `if`, `while`, `for`, etc.
- `const`: Al igual que `let` posee un _scope de bloque_ , y nos crea un espacio de memoria para un dato especifico y su valor no puede ser modificado.

Javascript es debilmente tipado, lo que quiere decir que al declarar una variable utilizando `let` o `var`, el contenido de la misma puede ser modificado, independientemente del tipo de dato, por ejemplo:

```
var numero = 25;
numero = '25';
console.log(numero);
```

Otro ejemplo seria:

```
4 + "7"; // 47
4 * "7"; // 28
2 + true; // 3
false - 3; // -3
```

- [Subir](#Contenido).

## Variables Strings

En Javascript, para definir un tipo de dato string(cadena de texto) solo debemos encerrarlos entre comillas(`"texto1"` o `'texto2'`). Algunos metodos son los siguientes:

- `toUpperCase()`: Transforma un String a mayúsculas.
- `toLowerCase()`: Transforma el string a minúsculas.
- `length`: Nos indica la cantidad de caractéres que tiene un string.
- `charAt()`: Retorna la posicion del caracter (empieza desde 1).

Ejemplo 1: Imprimiento nombres en mayusculas y minusculas.

```
var name = 'german';
var lastName = 'CEBALLOS';
var fullName = name.toUpperCase() + lastName.toLowerCase();  /*El signo (+) nos ayuda a concatenar*/
console.log(fullName);
```

Ejemplo 2: Accediendo a los caracteres

```
var name = 'german';
var characters = name.length;
console.log(characters);
var characters = charAt(1);
console.log(character);
```

Ejemplo 3: Concatenando con interpolacion

```
var name = 'German';
var lastName = 'Ceballos';
var fullName = `${name} ${lastName}`;
console.log(fullName);
```

**Referencias**:

- [Strings en Javascript | W3C](https://www.w3schools.com/js/js_strings.asp).
- [Metodos de Strings en Javascript | W3C](https://www.w3schools.com/js/js_string_methods.asp).
- [Convenciones de Javascript | tutobasico][https://tutobasico.com/convenciones-javascript/].

- [Subir](#Contenido).

## Numeros

A diferencia de otros lenguajes de programacion, las operaciones matematicas en Javascript son un poco diferentes, especialmente en las operaciones que tienen que ver con valores decimales. Para comprender esto a profundidad es recomendable checar sus diferentes metodos y ejemplos en su documentacion.

**Referencias**:

- [Numeros | W3C](https://www.w3schools.com/js/js_numbers.asp).
- [Metodos de Numeros | W3C](https://www.w3schools.com/js/js_number_methods.asp).

- [Subir](#Contenido).

## Funciones

Las funciones en Javascript tienen ciertas diferencias comparadas con las de otros lenguajes de programacion, esto incluye: Su declaracion (declarativas o expresivas), su llamada (pueden ser auto-invocadas).

**Referencia**:

- [Funciones | W3C](https://www.w3schools.com/js/js_function_definition.asp).

- [Subir](#Contenido).

## Funciones Alcance

**Variables Globales**: Son las que se declaran fuera del todo. Estas pueden ser accedidas por funciones y se pueden acceder a ellas de forma mas especifica de la siguiente manera: `window.variable`.
**Variables Locales**: Son las que se declaran dentro de las funciones y solo pueden ser manipuladas por las mismas.

- [Subir](#Contenido).

## Objetos

Los objetos nos ayudan a crear colecciones de datos que nos pueden servir como plantillas para crear otros objetos con las mismas propiedades, por ejemplo:

```
var Persona = {
  nombre: "German",
  apellido: "Ceballos",
  edad: 27
}

/*Accediendo a sus propiedades directamente*/
Persona.nombre;
Persona.apellido;
Persona.edad;
```

**Sintaxis**:

```
var objectName = {
  key: "value"
}
```

**Funciones y Objetos**:

```
var carro = {
  marca: "Ford",
  modelo: "EcoSport",
  annio: "2019"
};

/*
Al agregar atributos dentro de las llaves ( {} ):
- Le indica a la funcion que recibira un objeto como parametro
- Al agregar una propiedad dentro de las llaves, se asigna el valor de la propiedad.
*/

function imprimir( {marca} ) { //La funcion espera recibir un objeto como parametro y su atributo "marca".
  console.log(marca);
}

imprimir(carro);

```

**Métodos de objetos**:

```
var carro = {
  marca: "Ford",
  modelo: "EcoSport",
  annio: "2019",
  mostrarDatos: function() {
    return this.marca+" "+this.modelo+" "+this.annio;
  }
};

carro.mostrarDatos(); //Sin los parentesis imprime el codigo de la funcion.
```

**Checar**:

- [Desestructurar objetos
  ](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment).

- [Subir](#Contenido).

## Comparaciones

`==` : Compara valor sin tomar en cuenta el tipo de datos.

```
var x,y;
x = 4;
y = "4";
x == y; //true
```

`===` : Compara valor tomando en cuenta el tipo de datos.

```
var [x, y] = [4, "4"];
x === y; //false
```

Un objeto es diferente de otro, independientemente si posee las mismas propiedades y valores.

```
var persona = {
  nombre: "German",
  apellido: "Ceballos",
  age: 27
};

var otraPersona = {
  ...persona
};

persona == otraPersona; //false
persona === otraPersona; //false
```

- [Subir](#Contenido).

## Parametros como referencia y como valor

Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro.

Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función. Para solucionar esto se puede crear un objeto diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.

![Parametros como referencia y como valor](https://es.stackoverflow.com/questions/1493/cu%C3%A1l-es-la-diferencia-entre-paso-de-variables-por-valor-y-por-referencia).

Cuando es **por valor**, la información de la variable se almacenan en una dirección de memoria diferente al recibirla en la funcion, por lo tanto si el valor de esa variable cambia no afecta la variable original, solo se modifica dentro del contexto de la función.

Cuando es **por referencia**, la variable que se recibe como parámetro en la función apunta exactamente a la misma dirección de memoria que la variable original por lo que si dentro de la función se modifica su valor también se modifica la variable original.

**Referencia**:

- [stackoverflow](https://es.stackoverflow.com/questions/1493/cu%C3%A1l-es-la-diferencia-entre-paso-de-variables-por-valor-y-por-referencia).
- [spread operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator).

- [Subir](#Contenido).

## Arrow functions

Permiten una nomenclatura más corta para escribir expresiones de funciones. Este tipo de funciones deben definirse antes de ser utilizadas.

Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves.

```
var mensaje = "Bienvenido";
var myFunction = (mensaje) => {
  return mensaje;
};

myFunction(mensaje);

var mensaje = "Bienvenido";
var myFunction = (mensaje) => { mensaje; };

myFunction(mensaje);
```

- [Subir](#Contenido).

## Clases

- Hablar de objetos en javascript es hablar de _prototipos_.
- `this` hace referencia al nuevo objeto que se acaba de crear.
- la función que define al prototipo retorna implícitamente _this_, es decir que por defecto _retorna_ el nuevo objeto que se creo.
- La palabra reservada `new` se utiliza para crear un nuevo objeto con el prototipo indicado.

**Sintaxis**:

```
function Class() {
  propertiy: value;
}

Class.prototype.method = function() = {
  code...
};
```

- [Subir](#Contenido).

## Modificando un prototipo

El prototipo es un objeto más de JS , a partir de que lo modifiquemos, éste va a quedar modificado.

Es de mucha importancia donde colocamos las funciones que va a tener el prototipo . Estos se deben de colocar juntos, ya que con ellos se va creando el prototipo del objeto, y deseamos que tenga juntas todas sus funciones.

Por ello definimos los prototipos arriba, y los utilizamos a lo largo del código.

**NOTA**: Cuando tenemos un error en JS, éste no se sigue ejecutando, se corta ahí la ejecución del código.

- [Subir](#Contenido).

## El contexto de las funciones quién es this

`debugger`: nos permite observar las propiedades de cada objeto en la consola de Javascript("deveveloper tools").

**this**:

- Cuando definimos un `prototype` con `=>`, `this` = `window`, por lo cual no podriamos acceder a las propiedades de nuestros objetos creados con nuestra clase.
- Por lo tanto, cuando definimos un `prototype` debemos hacerlo con `function`.

- [Subir](#Contenido).

## Clases en ECMAScript 6

A partir del 2015 la actualizacion de Javascript _ECMAScript 6_, nos permite crear clases al igual que otros lennguajes de programacion.

**Sintaxis**:

```
class Name {
  constructor(parameters) {
    this.property = value;
  }
}
```

- [Subir](#Contenido).

# Herencia]

**Sintaxis**:

```
class Father {
  constructor(parameters) {
    this.property = value;
  }
}

class Son extends Father {
  constructor(parameters) {
    super(parameters); //Father properties
    this.sonProperty = value;
  }
}
```

- [Subir](#Contenido).

## Funciones como parámetros

Javascript nos permite enviar las funciones en si como parametros, un ejemplo sencillo seria el siguiente:

```
function sayHello() {
  console.log("Hello World");
}

function show(fn) {
  fn(); // Llamada de la funcion 'sayHello()'
  console.log("Hola Mundo");
}

show(sayHello);
```

- [Subir](#Contenido).

## Asincronismo

- Javascript solo puede hacer una cosa a la vez, ya que **no es multitarea**.
- Puede delegar las ciertas funciones a otros procesos, este modelo de concurrencia se llama **event loop**.
- Javascript tiene algo llamado `callstack`, donde coloca las llamadas de funciones segun el orden de ejecucion de nuestro programa.
- Cuando Javascript delega un proceso al navegador, se le llama `callback`, mientras que el `callback` se ejecuta, Javascript continuara con sus instrucciones, cuando reciba respuesta del servidor, Javascript colocara esta respuesta en la **cola de tareas** (**tareas**: peticiones a servidores, interacciones visuales, la navegacion client-side).
- Solo hasta que el programa se quede sin funciones en la pila de instrucciones es cuando ejecutara las instrucciones de la cola de tareas.
- Hay que tener cuidado en no generar un cuello de botella en la pila de ejecucion.
- NO BLOQUEAR EL **EVENT LOOP**.

**NOTA**:

- Un `callback`, se genera cuando pasamos una funcion como parametro, y al momento de hacer esto debemos tomar en cuenta que debemos colocar el nombre de nuestro parametro sin parentesis, o tambien podriamos colocar toda la funcion en si.

- [Subir](#Contenido).

## Cómo funciona el tiempo en JavaScript

![el tiempo en JavaScript](https://static.platzi.com/media/user_upload/Event%20Loop-533432a6-81a5-4fcf-a801-b637b0848590.jpg).

En principio, cualquier tarea que se haya delegado al navegador a través de un callback, deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado. Por esta razón el tiempo de espera definido en funciones como setTimeout, no garantizan que el callback se ejecute en ese tiempo exactamente, sino en cualquier momento a partir de allí, sólo cuando la cola de tareas se haya vaciado.

- [Subir](#Contenido).

## Promesas

- **Bluwer**: libreria externa para manipular `callbacks`.

- Las promesas nos permiten manejar de una mejor manera nuestros `callbacks`, actualmente estan siendo soportadas por la mayoria de los navegadores web.
- Para asegurarnos de que nuestros programas funcionen de forma correcta utilizando promesas, podriamos implementar `polifield`, lo cual detecta si el navegador web soporta las `promesas` o no, de ser negativo este nos ayuda a crear la clase de las promesas por nosotros.
- **Recursos**:

- [Promesas | Platzi PDF](https://static.platzi.com/media/public/uploads/promesas_e7100aa0-540e-4d37-83fc-113b890c350e.pdf).

- [Subir](#Contenido).

## Memorización

La memorización es una técnica de programación que nos permite ahorrar cómputo o procesamiento en JavaScript, al ir almacenando el resultado invariable de una función para que no sea necesario volver a ejecutar todas las instrucciones de nuevo, cuando se vuelva a llamar con los mismos parámetros. Es similar a usar memoria cache.

## Closures

[Aporte | Platzi](https://platzi.com/comentario/919765/).

## Estructuras de datos inmutables

[Aporte | Platzi](https://platzi.com/comentario/674547/).

- [Subir](#Contenido).

## Contexto

El contexto (o alcance) de una función es por lo general, window. Así que en ciertos casos, cuando intentamos referirnos a this en alguna parte del código, es posible que tengamos un comportamiento inesperado, porque el contexto quizás no sea el que esperamos.

Existen al menos tres maneras de cambiar el contexto de una función.

Usando el método `.bind`, enviamos la referencia a la función sin ejecutarla, pasando el contexto como parámetro.
Usando el método `.call`, ejecutamos inmediatamente la función con el contexto indicado
Usando el método `.apply`, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores

## Adicional

### jQuery: crossDomain

En general, un request Ajax a un dominio diferente del que estás visitando en este momento es bloqueado por el navegador por motivos de seguridad. Esto se llama Same Origin Policy o SOP.

El servidor puede configurarse para que reciba requests de dominios diferentes al propio con una funcionalidad llamada Cross Origin Resource Sharing o CORS.

Con esta línea, le estamos indicando al navegador que queremos hacer un request a un dominio diferente del nuestro, y si el servidor lo permite, el request termina como lo esperas.

Según la documentación de JQuery (https://api.jquery.com/jquery.ajax/), el valor se pone por defecto en true si vas a hacer una petición a otro dominio, por lo que esta línea no es realmente necesaria para que funcione pero hace más claro que el recurso que se va a consultar no está en el mismo dominio.

Te dejo la parte relevante de la documentación por si te da curiosidad:

crossDomain (default: false for same-domain requests, true for cross-domain requests)
Type: Boolean
If you wish to force a crossDomain request (such as JSONP) on the same domain, set the value of crossDomain to true. This allows, for example, server-side redirection to another domain. (version added: 1.5)

### Cache

Son archivos (vídeos,audios,imágenes,textos,etc) pertenecientes a cierto ordenador (que no es el tuyo) de una pagina web pero que una parte de dichos archivos se guardan en tu ordenador con el objetivo de que cuando vuelvas otra vez a dicha pagina web tengas la sensación que la pagina haya cargado mucho mas rápido.
La ventaja del caché es la velocidad con la que carga la página web y su desventaja es que puede ocupar bastante espacio en tu memoria del CPU.

- [Subir](#Contenido).

## Repositorio de Github

- [Aqui](https://github.com/platzi/FundamentosJSCurso).

- [Subir](#Contenido).
