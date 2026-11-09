# Revisión móvil de las páginas de proyectos

9 de noviembre de 2026.

## Cambios

- La pantalla del navegador principal tenía altura cero por combinar `height: auto` con capturas posicionadas absolutamente. Ahora conserva una proporción 8:5 en móvil.
- Las tarjetas ya no usan una altura fija de 240 px. Los navegadores siguen la proporción de cada captura y los teléfonos/tablets se muestran completos, con el marco y la imagen dentro de sus límites.
- Cada captura principal y de las secciones tiene un enlace para ampliarla. El visor permite ajustar al ancho o ver a tamaño original, con desplazamiento en ambos ejes. Admite teclado, Escape y devuelve el foco al enlace de apertura. Sin JavaScript, el enlace abre la imagen directamente.
- Los enlaces de idioma, el botón del menú y los enlaces del pie tienen objetivos táctiles de al menos 44 px.
- El desplazamiento de imágenes al pasar el cursor solo se activa con ratón; los toques no desplazan la captura accidentalmente.

## Comprobaciones

- Los siete proyectos en español e inglés a 320, 390 y 768 px: 42 comprobaciones de geometría sin desbordamientos, textos recortados ni dispositivos fuera de sus marcos. La captura principal es visible en todos.
- Siete proyectos en horizontal a 844 × 390 y en escritorio a 1400 px.
- Revisión visual de AutoListo, los quioscos de MesaPOS, la versión móvil de Cacebal y el portal de empleos de Premium.
- Apertura del visor desde la captura principal y desde una sección adicional, tamaño original, desplazamiento de una captura larga, cierre con botón/Escape, confinamiento del foco y retorno al enlace original.
- Menú móvil, tema claro/oscuro, selector de idioma y navegación Scanova → Premium Diagnósticos.
- Compilación estática y comprobación de enlaces a imágenes en las catorce páginas generadas.

Las capturas y los datos de los proyectos no se alteraron en esta revisión.
