import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { type Lang, LANGS, localizePath } from '../i18n/config';

interface SeoOptions {
  lang: Lang;
  title: string;
  description: string;
  /** Ruta base SIN prefijo de idioma, ej. '/' o '/project/x'. */
  path: string;
  image?: string;
}

const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertLink = (rel: string, href: string, hreflang?: string) => {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const OG_LOCALE: Record<Lang, string> = { es: 'es_ES', en: 'en_US' };

/**
 * SEO por página y por idioma: <title>, description, canonical,
 * hreflang alternates (es / en / x-default) y Open Graph / Twitter.
 */
export function useSeo({ lang, title, description, path, image }: SeoOptions) {
  useEffect(() => {
    const url = `${siteConfig.url}${localizePath(path, lang)}`;
    const img = `${siteConfig.url}${image ?? siteConfig.ogImage}`;

    document.title = title;
    upsertMeta('name', 'description', description);

    // Canonical de esta versión + alternates hreflang para cada idioma.
    upsertLink('canonical', url);
    LANGS.forEach((l) => {
      upsertLink('alternate', `${siteConfig.url}${localizePath(path, l)}`, l);
    });
    // x-default apunta al idioma principal (español).
    upsertLink('alternate', `${siteConfig.url}${localizePath(path, 'es')}`, 'x-default');

    // Open Graph
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', img);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:locale', OG_LOCALE[lang]);
    upsertMeta('property', 'og:locale:alternate', OG_LOCALE[lang === 'es' ? 'en' : 'es']);

    // Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', img);
  }, [lang, title, description, path, image]);
}
