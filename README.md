# Oliver Mendez — Portfolio

Portafolio personal bilingüe (🇪🇸 español principal · 🇬🇧 inglés) de Oliver Mendez,
Ingeniero de Software y Estratega de Producto. Desplegado en Cloudflare Pages en
[olivermendez.art](https://olivermendez.art).

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v3**
- **GSAP + ScrollTrigger** (animaciones)
- **react-router-dom** (rutas por idioma: `/` español, `/en` inglés)

## Desarrollo

```bash
cd app
npm install
npm run dev       # servidor local
npm run build     # build de producción (genera sitemap y compila)
npm run preview   # sirve el build
npm run lint      # oxlint
```

## Estructura

```
app/src/
├── data/         # 📝 CONTENIDO (fuente única de verdad, bilingüe)
│   ├── projects.ts      · proyectos del portafolio
│   ├── experience.ts    · experiencia / case studies
│   ├── services.ts, skills.ts, education.ts
│   └── siteConfig.ts    · datos personales, redes, SEO
├── i18n/         # sistema de idiomas (ES principal + EN)
├── sections/     # secciones de la home (solo presentación)
├── components/   # componentes reutilizables
├── pages/        # página de detalle de proyecto
└── lib/, hooks/  # utilidades (gsap, seo, scroll)
```

## Cómo actualizar el contenido

Todo el contenido vive en `app/src/data/` como archivos `.ts` tipados. Cada texto
es bilingüe: `{ es: '...', en: '...' }`.

**Añadir un proyecto:** edita `app/src/data/projects.ts`, copia un bloque, cambia
el `id` (único, en minúsculas y con guiones) y traduce sus textos. Aparecerá
automáticamente en la home, el hero (si `featured: true`) y en su página
`/project/<id>` (y `/en/project/<id>`). El `sitemap.xml` se regenera en cada build.

## SEO

- Meta tags + Open Graph + Twitter Card por página e idioma
- `hreflang` (es / en / x-default) y `canonical`
- Datos estructurados JSON-LD (`Person`)
- `sitemap.xml` (auto-generado) y `robots.txt`

## Despliegue

Cloudflare Pages (subida directa del build):

```bash
cd app && npm run build
npx wrangler pages deploy dist --project-name=portfolio
```
