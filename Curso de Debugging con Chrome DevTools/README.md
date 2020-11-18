# Curso de Debugging con Chrome DevTools

## Contenido

1. [Debugging](#Debugging).
2. [Shortcuts y Funcionalidades](Shortcuts-y-Funcionalidades).
3. [Caracteristicas](#Caracteristicas).
4. [Animaciones](#Animaciones).
5. [Medir codigo ocupado](#Medir-codigo-ocupado).
6. [JS y el DOM](#JS-y-el-DOM).
7. [DevTools como editor](#DevTools-como-editor).
8. [Network](#Network).

## Debugging

Es el proceso de buscar e identificar problemas que ocacionan fallas en el funcionamiento de nuestra aplicacion.

- Toma mucho tiempo.
- Desde el inicio del desarrollo de software y hardware puede que existan problemas en el proceso y debido a esto el software puede dejar de funcionar.
- **DevTools**: Son herramientas de depuracion que nos ayudan identificar problemas en nuestro codigo.

[Subir](#Contenido).

## Shortcuts y Funcionalidades

- `Control` + `F`: Buscar palabras especificas dentro del documento HTML. (Se debe estar en la sección de elementos)
- Los tres puntos `...` al lado izquierdo de cada elemento HTML nos ayudan a mover estos a otras posiciones. Por ejemplo: cambiar de posición los elementos de una lista del nav.
- `Settings` -> `Shorcouts`: Te permiten ver los atajos de teclado que puedes utilizar en las dev tools dependiendo de tu sistema operativo.

[Subir](#Contenido).

## Caracteristicas

- Editar elementos en tiempo real.
- Seleccionar colores.
- Paletas de colores.
- Generador de Sombras.

[Subir](#Contenido).

## Animaciones

animaciones y efectos CSS:

- Hover
- CSShake
- Anijs
- CSS Wand
- Animate Components
- Keyframes
- AniCollection
- SpinKit Loader
- Animate

Animaciones y Efectos con JS:

- [Greensock](https://greensock.com/gsap/).
- [Animejs](https://animejs.com/).

[Subir](#Contenido).

## Medir codigo ocupado

**Ruta**: `Options(...)` > `More Tools` > `Coverage`.

**Rojo**: Codigo que no se utiliza.
**Azul**: Codigo que se utiliza.

**Nota**: En Coverage aparece en _rojo_ las clases que tienen la _pseudoclase hover_, para que pase a _verde_ solo deben hacer hover sobre los elementos y así visualizan mejor el código que si ocupan.

[Subir](#Contenido).

## JS y el DOM

Para optener un elemento del DOM lo seleccionamos desde la DevTool de navegador y despues vamos a consola y copiamos `$0`
esto nos traera ese elemento en HTML.

Para agregarle javascript podemos usar estas dos formas:

- getElementById() = para llamar a un id.
- Vamos al elemento, damos click derecho, nos saldra un menu vamos a donde dice (copy) y despues donde dice ( copy JS-PATH ), querySelector(“Body > header”).

[Subir](#Contenido).

## DevTools como editor

Nos permite utilizar el `filesystem` de chrome devtools como editor de texto.

**Ruta**: `console` > `filesystem` > `add folder`.

[Subir](#Contenido).

## Manejo de Desempeño(perfomance)

Nos permite configurar el rendimiendo del simulador mobile que nos ofrece Chrome DevTools.

**Ruta**: `Configurations` > `Perfomance` > `Capture Setting (engranaje)`.

**Referencias**:

- [Práctica](https://googlechrome.github.io/devtools-samples/jank/).

[Subir](#Contenido).

## Manejo de sensores

Nos permite configurar la `geolocalizacion` y la `orientacion` del simulador mobile.

**Ruta**: `Configurations` > `Sensors`.

[Subir](#Contenido).

## Network

El panel de network, nos **permite evaluar si los archivos fueron descargados o no** una vez que se carga una página web, estos pueden ser: HTML, imágenes, CSS, JS, entre otros. Cada uno demora cierto tiempo dependiendo de su peso y la velocidad de conexion de internet.

**Secciones de Network**:

- **Name**: Nombre del archivo.
- **Status**: Estatus del http. En este caso 200 significa OK (Todo bien).
- **Type**: Tipo de archivo. Por ejemplo: document (html), stylesheet(css), js, png, etc…
- **Inialitator**: Cuál archivo solicitó a otro archivo. En este caso, el documento html solicitó a todos los demás archivos.
- **Size**: Tamaño del archivo. Se muestra el tamaño no optimizado y optimizado por el navegador.
- **Time**: Tiempo total que tarda en descargarse el archivo.
- **Waterfall**: Tiempo (sección por sección) que le tomó al archivo descargarse.

**NOTA**: Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:

- Respuestas informativas (100–199),
- Respuestas satisfactorias (200–299),
- Redirecciones (300–399),
- Errores de los clientes (400–499),
- y errores de los servidores (500–599).

**Referencias**:

- [Códigos de estado de respuesta HTTP | MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status).
- [Códigos de estado de respuesta HTTP | cat](https://http.cat/).
- [Inspect Network Activity In Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/network/).
- [Práctica](https://devtools.glitch.me/network/getstarted.html).
- [Ejercicio](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance).

[Subir](#Contenido).

## Referencias

- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools).
- [Tutorial de Platzi | Funcionalidades DevTools](https://platzi.com/tutoriales/1867-devtools/5283-funcionalidades-utiles-de-chrome-devtools-no-cubiertas-en-el-curso/).
- [Overrides](https://platzi.com/tutoriales/1867-devtools/5334-overrides-como-activarlo-y-usarlo-2/).
- Responsive Design
  - [Responsively](https://responsively.app/).
  - [Screensiz](https://screensiz.es/).
  - [Material](https://material.io/blog/device-metrics).
- [Debugging en JS](https://platzi.com/comentario/1216260/).
