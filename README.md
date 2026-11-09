# Oliver Méndez — Portafolio

Portafolio bilingüe en español e inglés, publicado en [olivermendez.art](https://olivermendez.art).

## Desarrollo

```sh
npm ci
npm run dev
npm run build
npm run preview
```

El proyecto usa Astro y genera páginas estáticas. El español vive en `/` y el inglés en `/en/`.
Incluye temas claro y oscuro, casos de estudio y una sección de tecnologías y herramientas con logos locales.

## Contenido

- `src/components/HomePage.astro`: portada y proyectos destacados.
- `src/components/Tools.astro`: sección de tecnologías y herramientas.
- `src/components/ProjectGallery.astro`: galería manual de los flujos de AutoListo.
- `src/data/gallery.ts`: capturas y orden de las vistas de la galería.
- `src/data/projects.ts`: imágenes, destinos y orden de navegación entre casos.
- `src/data/tools.ts`: tecnologías y herramientas agrupadas por uso.
- `src/data/links.ts`: perfiles y vías de contacto.
- `src/i18n/`: textos generales y casos de estudio en ambos idiomas.
- `public/`: capturas de proyectos, logos y otros recursos estáticos.

Los proyectos destacados aparecen en este orden: AutoListo, MesaPOS, Scanova y Premium Diagnósticos.
Los datos pendientes se mantienen explícitos; no se generan destinos de contacto ficticios.

## Producción

El sitio se sirve mediante Cloudflare Workers Static Assets. `wrangler.jsonc` define el Worker
`olivermendez-art` y los dominios `olivermendez.art` y `www.olivermendez.art`.

```sh
npm run deploy
```

Este comando compila el sitio y despliega `dist/` usando la sesión autenticada de Wrangler.
Las credenciales no se guardan en el repositorio. `public/.assetsignore` excluye los metadatos de Finder.

La implementación actual en Astro reemplaza a la versión anterior en React, conservada en el historial de Git.
