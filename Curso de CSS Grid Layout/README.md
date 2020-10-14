# Curso de CSS Grid Layout

## Contenido
1. [Clase 1: ¿Qué es CSS Grids?](#CSS-Grids).
2. [Clase 2: Conceptos fundamentales sobre CSS Grid Layout](#Conceptos-Fundamentales).

## CSS Grids

![](http://appatico.com/wp-content/uploads/2019/08/css-grid-layout.png)

El módulo de CSS Grids nos permite generar layouts o distribuciones del contenido en nuestros sitios web de forma eficiente. Controla esta estructura bidimensional de filas y columnas fácilmente con propiedades de CSS logrando un mejor flujo que el que se tiene al utilizar tags de HTML.

## Conceptos Fundamentales
```
HTML
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>
```
- **Grid Container**: Va a ser el elemento padre que va a tener puesto un nuevo tipo de display: grid. Nos permite colocar otras propiedades para manipular nuestro layaout.
```
CSS
.grid-container {
  display: grid;
}
```

```
CSS
.grid-container {
  display: inline-grid;
}
```
- **Grid Item**: Son nuestro componentes, contenido, lo que vamos a manejar. Nuestras filas o columnas que vamos a mover a nuestro gusto. Son hijos directos de grid.


- **Grid Line**: Lineas divisorias horizontales y verticales.
 ![](https://www.w3schools.com/css/grid_gaps.png).
- **Grid Track**: Espacio entre dos líneas adyacentes. Filas y columnas.
- **Grid Cell**: Celdas, espacio en dos filas adyacentes y 2 columnas adyacentes.
- **Grid Area**: Espacio rodeado por 4 grid lines.
- **Grid Gaps** (W3 Schools - Definición): Los espacios entre cada columna / fila se denominan espacios.
Puede ajustar el tamaño del espacio utilizando una de las siguientes propiedades:
```
CSS
grid-column-gap
grid-row-gap
grid-gap
```
Ejemplo 1, agregando espacio en las columnas:
```
CSS
.grid-container {
  display: grid;
  grid-column-gap: 50px;
}
```
Ejemplo 2, agregando espacio en las filas:
```
CSS
.grid-container {
  display: grid;
  grid-row-gap: 50px;
}
```
Ejemplo 3, agregando espacio en las filas y columnas al mismo tiempo:
```
CSS
.grid-container {
  display: grid;
  grid-gap: 50px 100px; /*izquierda = fila, derecha = columna*/
}
```
ó
.grid-container {
  display: grid;
  grid-gap: 50px; /*Fila y columna = 50px*/
}

**ReferenciaS**: 
- [CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/).
- [W3-Schools](https://www.w3schools.com/css/css_grid.asp).