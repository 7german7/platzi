# Curso de CSS Grid Layout

## Contenido
1. [Clase 1: ¿Qué es CSS Grids?](#CSS-Grids).
2. [Clase 2: Conceptos Fundamentales sobre CSS Grid Layout](#Conceptos-Fundamentales).
3. [Clase 3: Definiendo Columnas](#Definiendo-Columnas).
4. [Definiendo Filas](#Definiendo-Filas).
5. [Grids identados y tipos de displays](#Grids-identados-y-tipos-de-displays).
6. [Espaciado entre filas y columnas](#Espaciado-entre-filas-y-columnas).
7. [Repetidores, unidades de medida y funciones](#Repetidores,-unidades-de-medida-y-funciones).
8. [Definiendo áreas de contenido](#Definiendo-áreas-de-contenido).
99. [Referencias](#Referencias).
100. [Soporte](#Soporte).
101. [Herramientas Adicionales](#Herramientas-Adicionales).
102. [Funciones CSS](#Funciones-css).

## CSS Grids

![](http://appatico.com/wp-content/uploads/2019/08/css-grid-layout.png)

El módulo de CSS Grids nos permite generar layouts o distribuciones del contenido en nuestros sitios web de forma eficiente. Controla esta estructura bidimensional de filas y columnas fácilmente con propiedades de CSS logrando un mejor flujo que el que se tiene al utilizar tags de HTML.

## Conceptos Fundamentales

![](https://www.w3schools.com/css/grid_lines.png).

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

```
CSS
.grid-container {
  display: grid;
  grid-gap: 50px; /*Fila y columna = 50px*/
}
```

**Terminos**:
- **Grid explicito** (explicit grid) es cuando nosotros definimos el numero de filas o columnas.
- **Grid implicito** (implicit grid) es cuando tenemos filas o columnas que no definimos pero son parte de nuestro grid.

## Definiendo Columnas

- Se debe poner el display de grid al contenedor.
```
CSS
.container{
	display: grid;
}
```
- Para definir columnas debemos ponerle la propiedad de grid-template-columns al contenedor, en esta debemos definir el tamaño de cada una de las columnas, por ejemplo: si en la propiedad ponemos los siguientes valores.
```
CSS
.container{
 	grid-template-columns: 200px 200px 200px;
}
```
- Estamos estableciendo tres columnas, cada una de 200px.
También podemos poner medidas dinámicas, tales como porcentajes, se definen exactamente igual que como en el ejemplo anterior:
```
CSS
.container{
 	grid-template-columns: 25% 50% 25%;
}
```
- También podemos combinar las medidas relativas con las medidas absolutas:
```
CSS
.container{
 	grid-template-columns: 25% 200px 25%;
}
```

## Definiendo filas

- Para definir filas:
```
CSS
grid-template-rows: valores;
```

- Para definir filas y columnas:
```
CSS
grid-template: filas / columnas;
```

## Grids identados y tipos de displays

- Con display: subgrid; heredamos la configuración de filas y columnas que asignemos en el grid padre.
```
CSS
/*Display subgrid para heredar la configuración del grid padre (cuando se esten anidando grids).*/

display: subgrid; // No disponible aun
```
```
CSS
/*Display inline-grid muestra el grid en una sola linea.*/

display: inline-grid; // No disponible aun
```

**Artículo**:

- [subgrid](https://rachelandrew.co.uk/archives/2017/03/16/subgrid-moved-to-level-2-of-the-css-grid-specification/).

## Espaciado entre filas y columnas

La propiedad grid-gap define el tamaño del espacio entre las filas y columnas en un diseño de cuadrícula, y es una propiedad abreviada para las siguientes propiedades:

```
CSS
grid-row-gap: valor;
grid-column-gap: valor;
```

Syntaxis directa para agregar tamaños a las filas y columnas.
```
CSS
grid-gap: grid-row-gap grid-column-gap;
```

**Artículos**:

- [cssreference](#https://cssreference.io/property/grid-gap/).
- [W3-Schools](https://www.w3schools.com/cssref/pr_grid-gap.asp).

## Repetidores, unidades de medida y funciones

- **Unidad de medida**: fracciones fr distrubuye el espacio disponible en formas iguales.

**Funciones**:
- repeat(cantidad, valor) para usar el mismo valor varias veces.
- minmax(min, max), agrega un valor minimo y maximo para el tamaño al hacer responsive.

**NOTAS**: 
- Si asignamos como valor: auto al espaciado de las columnas, estas se ajustaran de acuerdo al tamaño de referencia que tenga su contenido.
- repeat(4, 1fr); CSS3, nos proporciona el uso de funciones, en éste caso multiplicará 4 veces la misma fracción.
- minmax(valor,valor). Nos permite asignar un valor mínimo y máximo.

## Definiendo áreas de contenido

Si vamos a usar área en más de una columna colocamos el mismo donde del área donde la queramos.

```
CSS
grid-template-areas: "header header" 
                     "left contenido" 
                     "footer footer";
```

Para usar las áreas
```
CSS
.header {
  grid-area: header:
}
```
**grid-column**: Define cuántos espacios de columna va a tomar un grid item. El inicio toma desde la primera línea del grid.

```
CSS
grid-column-start: 1;
grid-column-end: 3;
grid-column: inicio / final;
```

Para definir por fracciones (columnas): span #fracciones

Para usar el espacio de toda la fila usamos -1 al final.
Ejemplo: grid-column: 1/ -1;

**grid-row**: Define cuántos espacios de fila va a tomar un grid item. El inicio toma desde la primera línea del grid.

```
CSS
grid-row-start: 1;
grid-row-end: 3;
grid-row: inicio / final;
```
Para definir por fracciones (columnas): span #fracciones Para usar el espacio de toda la fila usamos -1 al final.
**Ejemplo**: grid-column: 1/ -1;

## Referencias

- [CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/).
- [W3-Schools](https://www.w3schools.com/css/css_grid.asp).
- [Explicit vs Implicit Grids](https://www.quackit.com/css/grid/tutorial/explicit_vs_implicit_grid.cfm).

## Soporte

- [Caniuse](https://caniuse.com/css-grid).

## Herramientas Adicionales

- [Emmet Shortcuts](https://docs.emmet.io/cheat-sheet/).

## Funciones CSS