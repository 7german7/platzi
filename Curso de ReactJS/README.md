## Curso de React.JS

![React.js](https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png)

## Contenido

### Introducción

- [¿Que es React.js?](#¿Que-es-React.js?).
- [Herramientas](#Herramientas).
- [Create-react-app](#Create-react-app).

### Fundamentos

- [ReactDOM.render](#ReactDOM.render).
- [JSX](#JSX).

## ¿Que es React.js?

Cumple su función como biblioteca ya que para utilizar su código se debe importar. También es un Framework aunque las convenciones de cómo debe ser organizado todo no son estrictas. React está estructurado por componentes que son como pequeños bloques de lego que al ser unidos forman aplicaciones de React. Estos componentes pueden tener estilos, ser enlazados a eventos y sus estados pueden ser modificados.
Con React también se tiene la ventaja de que será escrito una sola vez y podrá ser utilizado en aplicaciones web, móviles, entre otras.

**JSX**: HTML dentro de Javascript.

## Herramientas

- Navegador (Google Chrome).
- Plugin (React Developer Tools).
- Editor de Texto (Visual Studio Code).
- Extensión de VSC (Prettier).

[Volver Arriba](#Contenido).

## Create-react-app

Es una aplicación moderna que se usa desde una línea de comando. Antes de ella se configuraba todo el entorno manualmente lo cual tomaba mucho tiempo.

Pasos:

- Instalar nodeJS.
- `npm install -g npx`.
- `npx create-react-app my-app`.
- `cd my-app`.
- `npm start`.

**Referencias**:

- [Pasos para instalar NodeJS](https://platzi.com/clases/1759-fundamentos-node/25640-instalacion-de-nodejs/).
- [Pasos para instalar ReactJS](https://create-react-app.dev/docs/getting-started/).

**Otras herramientas**:

**Babel**: Traduce Javascript moderno (JSX) a un Javascript que todos los navegadores puedan interpretar.
**Eslint**: Lee el código y avisa de errores.

[Volver Arriba](#Contenido).

## ReactDOM.render

![React.js](https://i.imgur.com/WN9YFEW.png)

`import React from 'react'`: Nos permite escribir codigo jsx
`import ReactDOM from 'react-dom'`: Nos permite renderizar elementos utilizando el DOM de Reac.js

[Volver Arriba](#Contenido).

## JSX

JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.

JSX tiene su alternativa que es **React.createElement** pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.

**React.createElement** recibe 3 argumentos:

- El tipo de elemento que estamos creando
- sus atributos o props
- y el children que es el contenido.
  Ejemplo:
  ```
  React.createElement(
    ‘a’,
    { href: ‘https://platzi.com’ },
    ‘Ir a Platzi’);
  ```

En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.

Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.

[Volver Arriba](#Contenido).

## Web

- [Español](https://es.reactjs.org/).
- [Ingles](https://reactjs.org/).

## Repositorio de Github

- [platzi-badges](https://github.com/sparragus/platzi-badges).
