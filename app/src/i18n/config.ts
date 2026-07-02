/**
 * Configuración de internacionalización (i18n).
 * Español es el idioma PRINCIPAL (raíz "/"); inglés vive bajo "/en".
 */

export const LANGS = ['es', 'en'] as const;
export type Lang = (typeof LANGS)[number];

/** Idioma por defecto del sitio (el principal). */
export const DEFAULT_LANG: Lang = 'es';

/** Un valor que existe en los dos idiomas. */
export type Localized<T> = Record<Lang, T>;

/** Etiquetas legibles de cada idioma (para el selector). */
export const LANG_LABELS: Record<Lang, string> = {
  es: 'ES',
  en: 'EN',
};

/** hreflang oficial para los meta tags de SEO. */
export const LANG_HREFLANG: Record<Lang, string> = {
  es: 'es',
  en: 'en',
};

/**
 * Deriva el idioma a partir de un pathname.
 * Todo lo que empiece con "/en" es inglés; el resto, español.
 */
export const langFromPath = (pathname: string): Lang =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';

/**
 * Construye una ruta con el prefijo de idioma correcto.
 * localizePath('/project/x', 'es') -> '/project/x'
 * localizePath('/project/x', 'en') -> '/en/project/x'
 * localizePath('/', 'en')          -> '/en'
 */
export const localizePath = (path: string, lang: Lang): string => {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'es') return clean;
  return clean === '/' ? '/en' : `/en${clean}`;
};

/** Quita el prefijo "/en" de un pathname para obtener la ruta base (ES). */
export const stripLangPrefix = (pathname: string): string => {
  if (pathname === '/en') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3);
  return pathname;
};
