# Fundamentos de Javascript

**Profesor**: Sacha Lifszyc, Desarrollador Full Stack.

## Contenido

- [Variables](#Variables).

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

## Repositorio de Github

- [Aqui](https://github.com/platzi/FundamentosJSCurso).
