# Curso Basico de JavaScript

## Contenido

- ### Introducción a JavaScript
  1. [Clase #1 - ¿Qué es JavaScript?](#¿Qué-es-JavaScript?).
  2. [Clase #2 - ¿Por qué JavaScript?](#¿Por-qué-JavaScript?).
  3. [Clase #3 - Elementos de un Lenguaje de Programación](#Elementos-de-un-Lenguaje-de-Programación).
  4. [Clase #3 - Variables](#Variables).


## ¿Qué es JavaScript?

Es un lenguaje `interpretado`, `orientado a objetos`, `debilmente tipado` y `dinámico`.

- ¿Cómo nace JavaScript?
  Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros.
- Débilmente tipado
Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc). Ejemplo:

```
4 + "7"; // 47
4 * "7"; // 28
2 + true; // 3
false - 3; // -3
```

- Dinámico
Corre directamente en la etapa de Runetime sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores se muestren hasta que se ejecuta el programa.

- ¿Realmente es Javascript un lenguaje interpretado?
Si, y la razón es que le navegador lee linea por linea nuestro código el cuál le indica lo que tiene que hacer, sin la necesidad de compilar. Todo esto es controlado por el motor de Javascript V8 del navegador

- Javascript es Basckwards Compatible
Todas las funciones nuevas que salen de Javascript no dañarán el trabajo ya hecho, pero no se podrá utilizar en nuestro entorno de trabajo inmediatamente. Para solucionar esto está Babel que permite utilizar las nuevas características del lenguaje pero lo transforma a una versión que el navegador pueda entender.

NOTA: [Comentario](https://platzi.com/comentario/1004606/).

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