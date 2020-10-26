# Apuntes del "Curso de Responsive Design: Maquetación Mobile First"

## Contenido
- [Pasos para crear una página web](#pasos-para-crear-una-página-web).
- [Buenas Practicas](#buenas-practicas).
- [Malas Practicas](#malas-practicas).
- [Notas importantes](#notas-importantes).
- [Artículos](#artículos).

## Pasos para crear una página web

1. Una vez obtengamos el wireframe, debemos observar detallamente la **arquitectura web del diseño**, con la finalidad de identificar las partes/secciones del sitio web.
2. Crear directorios 'assets/img' y 'assets/icons' y organizar nuestro **contenido estático** (imágenes e iconos) en ellos.
  ![Formatos de Imágenes](https://static.platzi.com/media/user_upload/tabla-73965bc6-f22a-4ddb-9413-236043b9ef7a.jpg)

    **NOTA**: Tomar en cuenta los formatos de imágenes.

3. Identificar los **tipos de fuentes** y grosores (bold) que incluiran nuestro proyecto.
4. Identificar nuestra paleta de colores.
5. Contruir nuestros sitios web por secciones.

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

## Malas Practicas

- Utilizar más de 2 tipos de fuentes.
- Utilizar etiquetas `<table></table>`.

## Notas importantes

- Las etiquetas ancla `<a href=''></a>`, nos permiten utilizar su atributo `href` para navegar entre las diferentes secciones.
- Las etiquetas `<span></span>`, es una etiqueta comodin que podemos utilizarla para incluir iconos.
- ¿Cómo implementar [BEM](https://platzi.com/comentario/1858259/)?
- **Botón flotante**: Es aquel que se posiciona entre 2 secciones.

## Artículos

- [JPG to WEBP Compression](https://www.keycdn.com/support/jpg-to-webp).
- [Background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size).