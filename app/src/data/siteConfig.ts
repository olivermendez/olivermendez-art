/**
 * Configuración global del sitio: datos personales, redes, SEO y navegación.
 * Edita aquí para actualizar el header, footer, meta tags y enlaces sociales
 * en todo el portafolio desde un solo lugar.
 */

export const siteConfig = {
  name: 'Oliver Mendez',
  initials: 'OM',
  role: 'Software Engineer & Product Strategist',
  email: 'olivermendezarias@gmail.com',

  /** URL absoluta del sitio en producción (para meta tags Open Graph). */
  url: 'https://olivermendez.art',

  /** Descripción por defecto para SEO / previews al compartir el enlace. */
  description:
    'Oliver Mendez Arias — Software Engineer & Product Strategist con 7+ años de experiencia en desarrollo móvil, consultoría eCommerce y SEO.',

  /** Imagen de preview al compartir en redes (ruta en /public). */
  ogImage: '/og-image.jpg',

  socials: {
    github: 'https://github.com/olivermendez',
    linkedin: 'https://www.linkedin.com/in/olivermendez/',
  },
} as const;

/**
 * Enlaces de la navegación principal (anclas a secciones de la home).
 * `key` referencia el label traducido en i18n/ui.ts → ui.nav[key].
 */
export const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'education', href: '#education' },
] as const;
