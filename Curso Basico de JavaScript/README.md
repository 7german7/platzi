# Curso Basico de JavaScript

## Contenido

### Introducción a JavaScript
  1. [¿Qué es JavaScript?](#¿Qué-es-JavaScript?).
  2. [¿Por qué JavaScript?](#¿Por-qué-JavaScript?).
  3. [Elementos de un Lenguaje de Programación](#Elementos-de-un-Lenguaje-de-Programación).
  4. [Variables](#Variables).
### Bases de JavaScript
  1. [Scope](#Scope).
  2. [Hoisting](#Hoisting).
  3. [Valores: Truthy y Falsy](#Valores:-Truthy-y-Falsy).
  4. [Operadores](#Operadores).
### Objects
  1. [Objects](#Objects).
  2. [Función constructora](#Función-constructora).
### Metodos de Arrays
  1. [Métodos de recorridos de Arrays](#Métodos-de-recorridos-de-Arrays).

## ¿Qué es JavaScript?

Es un lenguaje `interpretado`, `orientado a objetos`, `debilmente tipado` y `dinámico`.

- *¿Cómo nace JavaScript?*
  Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros.
- *Débilmente tipado*
Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc). Ejemplo:

```
4 + "7"; // 47
4 * "7"; // 28
2 + true; // 3
false - 3; // -3
```

- *Dinámico*
Corre directamente en la etapa de Runetime sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores se muestren hasta que se ejecuta el programa.

- *¿Realmente es Javascript un lenguaje interpretado?*
Si, y la razón es que le navegador lee linea por linea nuestro código el cuál le indica lo que tiene que hacer, sin la necesidad de compilar. Todo esto es controlado por el motor de Javascript V8 del navegador

- *Javascript es Basckwards Compatible*
Todas las funciones nuevas que salen de Javascript no dañarán el trabajo ya hecho, pero no se podrá utilizar en nuestro entorno de trabajo inmediatamente. Para solucionar esto está Babel que permite utilizar las nuevas características del lenguaje pero lo transforma a una versión que el navegador pueda entender.

**NOTA**: [Comentario](https://platzi.com/comentario/1004606/).

## ¿Por qué JavaScript?

JavaScript tiene una comunidad enorme de desarrolladores que te pueden ir ayudando a generar diferentes cosas.

- Si solo estuvieras interesado en trabajar **aplicaciones web** tienes muchos *frameworks* y librerías construidas en JavaScript que te van a ayudar a hacer proyectos de forma mucho mas rápida, eficiente y robusta (**Angular**, **Vue**, **React**,entre otros)

- Si no quieres trabajar solo en aplicaciones Web puedes utilizar JavaScript con un *framework* que se llama **React Native** para poder construir aplicaciones nativas como **Android** y **IOS**.

- Puedes construir aplicaciones de escritorio con JavaScript, usando un **framework** llamado **Electron**, pueden correr en **Mac** o **Windows**.

- También puedes trabajar en la parte del Back-end o **IOT**(Internet Od Things) es un concepto que se refiere a una interconexion digital de objetos cotidianos con Internet. Esto con un *Framework* llamado **NodeJS**, el cual es un entorno de ejecución de JavaScript que corre directamente en el Back-end.

- **WebAssembly**: Es un nuevo tipo de código que puede ser ejecutado en navegadores modernos es un lenguaje de bajo nivel, similar al lenguaje ensamblador, con un formato binario compacto que se ejecuta con rendimiento casi nativo y provee un objetivo de compilación para lenguajes como C/C++ y Rust que les permite correr en la web. También está diseñado para correr a la par de JavaScript, permitiendo que ambos trabajen juntos.

**Seguridad Web**: *OAuth*, *OWASP* (fundación que se esfuerza por ayudar a mejorar la seguridad en la web).

## Elementos de un Lenguaje de Programación

![Imagen](https://static.platzi.com/media/user_upload/CU01112E_1-f9d2b6fc-f60c-4bf4-a61d-6bf9df36b268.jpg).

- `undefined`, preferiblemente evitar su uso debido a que JavaScript los utiliza.
- `typeof`: Palabra reservada de JS, retorna el tipo de dato.

## Variables

Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: **var**, **const** y **let**.

1. `Var`: Era la forma en que se declaraban las variables hasta ECMAScript 5. Casi ya no se usa porque es de forma global y tiene las siguientes.

2. `const`: sirve para declarar variables que nunca van a ser modificadas.

3. `Let`: Son variables que pueden ser modificadas, su valor puede cambiar.

## Funciones

Las funciones son las tareas que va a llevar a cabo el navegador. Existen 2 tipos de funciones
1. Declarativas
  ```
  function functionName(parameters){
    Instruccions
  }
  ```
2. De expresión
  ```
  var varName = function(parameters){
    Instruccions
  }
  ```
Ambas pueden llevar parámetros, que son los datos que necesitan para ejecutarse.
Cada parámetro va separado por una coma.

**Diferencias**:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

## Scope

![Scope](https://www.stevethedev.com/storage/app/uploads/public/5aa/d54/a47/5aad54a47d2e0123286333.png)

Existen 2 tipos de scope: `global` y `local`.

- **Scope global**: Las variables globales son declaradas fuera de toda función o bloque de codigo, éstas pueden ser accedidas desde cualquier lugar de nuestro programa sin importar si las declaramos con `var`, `let` o `const`.
- **Scope local**: Hace referencia a las variables e instrucciones declaradas dentro de una función, puede acceder a variables globales.

**Referencias**:
- [33 Concepts Every JavaScript Developer Should Know](https://github.com/leonardomso/33-js-concepts/blob/master/README.md).
- [EL SCOPE en JAVASCRIPT | JS en ESPAÑOL](https://www.youtube.com/watch?v=s-7C09ymzK8).

## Hoisting

**Referencias**:

- [Hoisting](https://www.youtube.com/watch?v=uI6o97A4IrI).

## Coerción

Es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
- **Coerción implícita**: Es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
- **Coerción explicita**: Es cuando obligamos a que cambie el tipo de valor.

## Valores: Truthy y Falsy

¿Que tipos por default son verdaderos y falsos?

Usamos la función de JS que es `Boolean()` dentro del paréntesis ponemos el valor y nos dice si el mismo el `False` o `True`.

### Falsy
- `Boolean()` —> sin ningun valor es false
- `Boolean(0)` —> false
- `Boolean(null)` —> false
- `Boolean(NaN)` —> false // NaN es Not and Number
- `Boolean(Undefined)` —> false
- `Boolean(false)` —> false
- `Boolean("")` —> false

### Truthy
- `Boolean(1)` —> true //cualquier numero que no sea igual a cero es true
- `Boolean(“a”)` —> true
- `Boolean(" ")` —> true // siendo un espacio el valor es true
- `Boolean([])` —> true // un array nos da un true
- `Boolean({})` —> true // un objeto nos da el valor de true
- `Boolean(function() {})` —> true //una funcion tambien es true
- `Boolean(true)` —> true

Todo esto lo vamos a usar en condiciones esto valida si es verdadero o falso para ejecutar cierta acción.

**Referencias**:
- [Mozilla | Falsy](https://developer.mozilla.org/es/docs/Glossary/Falsy).
- [Mozilla | Truthy](https://developer.mozilla.org/es/docs/Glossary/Truthy).

## Operadores
### Operador de Asignación
- `=`	operador de asignacion
### Operadores de Comparación
- `==`	igual que
- `===`	estrictamente igual que
- `>` or `>=` or `>==`	mayor o mayor igual que
- `<` or <= or <==	menor o menor igual que
- `!=` or `!==`	diferente que
### Operadores Aritméticos
- `+`	operador suma este se utiliza para concatener dos cadenas de texto.
- `-`	operador resta
- `*`	operador de multicacion
- `/`	operador de division
- `%`	operador de modulo
- `**`	operador de potenciacion
tambien se les conoce como operadores binarios. por que toman dos valores y generan un resultado.

### Operadores logicos
- `!`	NOT niega un valor
- `&&`	AND
- `||`	OR

Referencias:

- [Mozilla | Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators).

## Arrays

Los arreglos son estructuras de datos, en ellos podemos agregar diferentes tipos de datos dentro de otro.

Su sintaxis es la siguiente:

```
JavaScript
var arreglo = [valor1, valor2, valor3];
```

## Loops: For y For...of

Nos ayudan a repetir instrucciones `n` veces, su sintaxis en la siguiente:

For:
```
JavaScript
for (var i = 0; i < estudiantes.length; i++) {
  instrucciones...
}
```

For...of:
```
JavaScript
for (var estudiante of estudiantes) {
  instrucciones...
}
```

## Objects

JS es un lenguaje que está diseñado en un paradigma de objetos.

Ejemplo:
```
JavaScript
var miAuto = {
marca: "Toyota",
modelo: "Corolla",
anio: 2020
}
```

Acceder a una propiedad del objeto:
```
JavaScript
miAuto.marca; // "Toyota"
```

Se pueden agregar propiedades que van a ser una función, se les llama métodos de objetos.
```
JavaScript
var miAuto = {
marca: "Toyota",
modelo: "Corolla",
anio: 2020, 
detallesDelAuto: function () {
	console.log(`Auto ${this.modelo} ${this.anio}`);
}

// miAuto.detallesDelAuto();
//Auto Corolla 2020
```

## Función constructora

```
JavaScript
function Autos(brand, model, year) {
  this.brand = "Ford";
  this.model = "Mustang";
  this.year = 2020
}
```
## Métodos de recorridos de Arrays

- map()
- filter()
- find()
- forEach()
- some()

referencia: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).