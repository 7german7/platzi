# Fundamentos de Javascript

**Profesor**: Sacha Lifszyc, Desarrollador Full Stack.

## Contenido

- [Variables](#Variables).
- [Variables: Strings](#Variables:-Strings).
- [Numeros](#Numeros).
- [Funciones](#Funciones).

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

## Repositorio de Github

- [Aqui](https://github.com/platzi/FundamentosJSCurso).
