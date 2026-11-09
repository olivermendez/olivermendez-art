# Galería de AutoListo

La portada del portafolio muestra cuatro capturas reales dentro del mismo marco de navegador:
inicio, anuncio, comparación y búsqueda con IA. El usuario cambia de vista mediante pestañas,
flechas del teclado, Home/End o desplazamiento horizontal nativo en móvil y trackpad.
No hay reproducción ni avance automáticos.

- Componente: `src/components/ProjectGallery.astro`.
- Imágenes y orden: `src/data/gallery.ts`.
- Etiquetas, descripciones y texto alternativo: `demo.slides` en los diccionarios ES/EN.
- Solo la primera captura tiene prioridad alta; las otras se cargan de forma diferida.
- El encuadre conserva la captura completa, sin recortar los controles del producto.

## Capturas

| Vista | Archivo | Procedencia |
|---|---|---|
| Inicio | `public/shots/autolisto-home.jpg` | Captura existente de la portada pública de AutoListo. |
| Anuncio | `public/shots/autolisto-ficha.jpg` | Captura existente de la ficha pública de un Kia Sorento. |
| Comparación | `public/shots/autolisto-comparacion.jpg` | Capturada el 2026-11-09 en el comparador público, sin iniciar sesión. Hyundai Sonata 2020 y 2022, tema claro, 1440 × 900. |
| IA | `public/shots/autolisto-busqueda-ia.jpg` | Captura existente de la búsqueda en lenguaje natural y sus resultados. |

La comparación se abrió desde la búsqueda pública, seleccionando dos anuncios y continuando
sin cuenta. No se accedió a paneles privados ni se modificaron los anuncios.
