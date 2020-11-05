# Fundamentos de Javascript

**Profesor**: Sacha Lifszyc, Desarrollador Full Stack.

## Contenido

- [Variables](#Variables).
- [Variables: Strings](#Variables:-Strings).
- [Numeros](#Numeros).
- [Funciones](#Funciones).
- [Funciones: Alcance](#Funciones:-Alcance).
- [Objetos](#Objetos).
- [Comparaciones](#Comparaciones).
- [Parametros como referencia y como valor](#Parametros-como-referencia-y-como-valor).
- [Arrow functions](#Arrow-functions).

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

## Variables: Strings

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

## Funciones: Alcance

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

## Repositorio de Github

- [Aqui](https://github.com/platzi/FundamentosJSCurso).
