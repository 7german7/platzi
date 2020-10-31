# Apuntes del "Curso de Responsive Design: Maquetación Mobile First"

## Contenido
- [Aplicando media queries](#aplicando-media-queries)
- [Scroll horizontal con CSS](#scroll-horizontal-con-css).
- [Análisis con Lighthouse](#análisis-con-lighthouse).
- [Pasos para crear una página web](#pasos-para-crear-una-página-web).
- [Buenas Practicas](#buenas-practicas).
- [Malas Practicas](#malas-practicas).
- [Notas importantes](#notas-importantes).
- [Artículos](#artículos).

## Aplicando media queries

- **320px** = Smartphones.
- **480px** = Tablets.
- **768px** = Laptops.
- **1024px** = Television.

**NOTA**:
- [Tipos de media queries](https://vanseodesign.com/web-design/3-breakpoint-types/).
- [Breackpoints](https://www.youtube.com/watch?v=T-_4YTAfmbA&feature=emb_logo).

## Scroll horizontal con CSS
```
CSS
.container {
  overflow-x: scroll;
  overscroll-behavior-x: contain;
	scroll-snap-type: x proximity;
}

.item {
  scroll-snap-align: center;
}
```

## Análisis con Lighthouse

Lighthouse, es una herramienta que nos permite evaluar nuestras paginas web como:

1. Accesibilidad.
2. Buenas practicas.
3. Performance.
4. Progressive Web App y más.

Se encuentra instalada en el navegador Google Chrome(Dev Tools).

## Pasos para crear una página web

1. Una vez obtengamos el wireframe, debemos observar detallamente la **arquitectura web del diseño**, con la finalidad de identificar las partes/secciones del sitio web.
2. Crear directorios 'assets/img' y 'assets/icons' y organizar nuestro **contenido estático** (imágenes e iconos) en ellos.
  ![Formatos de Imágenes](https://static.platzi.com/media/user_upload/tabla-73965bc6-f22a-4ddb-9413-236043b9ef7a.jpg)

    **NOTA**: Tomar en cuenta los formatos de imágenes.

3. Identificar los **tipos de fuentes** y grosores (bold) que incluiran nuestro proyecto.
4. Identificar nuestra paleta de colores.
5. Contruir nuestros sitios web por secciones.
6. Identificar los elementos y componentes de la estructura del wireframe.
7. Implementar media queries.
8. Analizar nuestras web con Lighthouse, para obtimizar su funcionamiento.

## Buenas Practicas

 - Obtimizar imágenes preferiblemente usar formato `.jpg`.
 - Utilizar [Tinypng](https://tinypng.com/), para comprimir imágenes.
 - Nombrar variables CSS de la siguiente forma `--primary-color`.
 - Organizar nuestro código CSS con una estructura definida.
    1. **Posicionamiento** --> static, absolute, relative, fixed.
    2. **Modelo de caja** (Box model) --> margin, border, padding, content.
    3. **Tipografía** --> tipos, tamaños de fuente, etc.
    4. **Estilos visuales** --> box-shadow, border-radius, gradient, etc.
    5. **Otros** --> reglas CSS y más.
  - Las páginas web solo deben tener un `<h1>` por temas de SEO.
  - Implementar metodologías de desarrollo ([BEM](http://getbem.com/)).
  - Los textos se deben manejar con medidas responsivas `rem`.
  - Las separaciones entre elementos se recomiendan hacerlas con medidas absolutas `px`.
  - Iniciar maquetación con mobile first.
  - Cuando son muchos iconos, se recomienda agregarlos en formato `.svg`.

## Malas Practicas

- Utilizar más de 2 tipos de fuentes.
- Utilizar etiquetas `<table></table>`.

## Notas importantes

- Las etiquetas ancla `<a href=''></a>`, nos permiten utilizar su atributo `href` para navegar entre las diferentes secciones.
- Las etiquetas `<span></span>`, es una etiqueta comodin que podemos utilizarla para incluir iconos.
- ¿Cómo implementar [BEM](https://platzi.com/comentario/1858259/)?
- **Botón flotante**: Es aquel que se posiciona entre 2 secciones.
- Los elementos de `position:absolute;` se ubicarán de acuerdo al elemento `position: relative` más cercano.

## Artículos

- [JPG to WEBP Compression](https://www.keycdn.com/support/jpg-to-webp).
- [Background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size).

## Proyecto en Figma

- [Figma | Batatabit](https://www.figma.com/file/sMmlQaZldfDcLERYYWe6h4/Bata-Bit).
