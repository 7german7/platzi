# Curso de CSS Grid Layout

## Contenido
1. [Clase 1: ¿Qué es CSS Grids?](#CSS-Grids).
2. [Clase 2: Conceptos fundamentales sobre CSS Grid Layout](#Conceptos-Fundamentales).

## CSS Grids

![](http://appatico.com/wp-content/uploads/2019/08/css-grid-layout.png)

El módulo de CSS Grids nos permite generar layouts o distribuciones del contenido en nuestros sitios web de forma eficiente. Controla esta estructura bidimensional de filas y columnas fácilmente con propiedades de CSS logrando un mejor flujo que el que se tiene al utilizar tags de HTML.

## Conceptos Fundamentales

- **Grid Container**: Va a ser el elemento padre que va a tener puesto un nuevo tipo de display: grid. Nos permite colocar otras propiedades para manipular nuestro layaout.
```
HTML
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
- **Grid Track**: Espacio entre dos líneas adyacentes. Filas y columnas.
- **Grid Cell**: Celdas, espacio en dos filas adyacentes y 2 columnas adyacentes.
- **Grid Area**: Espacio rodeado por 4 grid lines.

**Referencia**: [CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/).