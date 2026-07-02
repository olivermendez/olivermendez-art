/**
 * Genera public/sitemap.xml a partir de los proyectos y la URL del sitio.
 * Se ejecuta automáticamente antes de cada build (script "prebuild").
 * Incluye ambas versiones de idioma (es en "/", en en "/en") con hreflang.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

// URL del sitio desde siteConfig.ts
const siteConfig = readFileSync(resolve(root, 'src/data/siteConfig.ts'), 'utf8');
const SITE = (siteConfig.match(/url:\s*'([^']+)'/)?.[1] ?? 'https://olivermendez.art').replace(/\/$/, '');

// IDs de proyectos NO borrador desde projects.ts
const projectsSrc = readFileSync(resolve(root, 'src/data/projects.ts'), 'utf8');
const ids = [...projectsSrc.matchAll(/\bid:\s*'([a-z0-9-]+)'/g)].map((m) => m[1]);

// Rutas base (sin prefijo de idioma)
const basePaths = ['/', ...ids.map((id) => `/project/${id}`)];
const LANGS = ['es', 'en'];
const localize = (path, lang) => (lang === 'es' ? path : path === '/' ? '/en' : `/en${path}`);
const today = new Date().toISOString().split('T')[0];

const urlEntries = basePaths
  .map((path) => {
    // Un <url> por idioma, cada uno declarando todos los alternates hreflang.
    return LANGS.map((lang) => {
      const alternates = [...LANGS, 'x-default']
        .map((l) => {
          const hl = l === 'x-default' ? 'x-default' : l;
          const p = l === 'x-default' ? path : localize(path, l);
          return `    <xhtml:link rel="alternate" hreflang="${hl}" href="${SITE}${p}" />`;
        })
        .join('\n');
      return `  <url>
    <loc>${SITE}${localize(path, lang)}</loc>
${alternates}
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
    }).join('\n');
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;

writeFileSync(resolve(root, 'public/sitemap.xml'), xml);
console.log(`✓ sitemap.xml generado: ${basePaths.length} rutas × ${LANGS.length} idiomas`);
