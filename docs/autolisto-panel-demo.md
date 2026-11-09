# Capturas del panel de AutoListo

Fecha: 9 de noviembre de 2026.

Se capturaron en el navegador las pantallas reales del frontend de AutoListo:

- `InventarioFeature`: búsqueda, filtros, estados y métricas del inventario.
- `LeadsFeature`: consultas de compradores, estado y mensaje desplegado.
- `ListingDetailFeature`: métricas del anuncio, gráfica diaria, leads e historial de precio.

Se utilizó una copia temporal local del frontend, con sus componentes originales,
y adaptadores de páginas/API que suministraron fixtures basados en `lib/mock/data.ts`.
El dealer, los compradores, teléfonos y métricas son ficticios. Las fotos proceden
del conjunto de imágenes de prueba que ya incluye AutoListo; son ilustrativas.
Los textos ES/EN del portafolio indican que son capturas de demostración.

La copia no cargó archivos de entorno originales ni credenciales reales. Las
peticiones de escritura se bloquearon y el backend se apuntó a un puerto local
sin servicio. No se inició sesión en producción ni se creó una base de datos.
La copia y el servidor temporal se eliminaron al terminar.

Archivos finales, JPEG de 1400 × 875:

- `public/shots/autolisto-dealer-inventario.jpg`
- `public/shots/autolisto-dealer-leads.jpg`
- `public/shots/autolisto-dealer-detalle.jpg`

No representan métricas comerciales reales de AutoListo.
