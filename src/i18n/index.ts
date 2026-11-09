import { es } from './es';
import { en } from './en';
import { projects } from '../data/projects';
import type { CaseId } from './cases.es';

export type Lang = 'es' | 'en';
export type Paths = Record<Lang, string>;

const dicts = { es, en };

export const t = (lang: Lang) => dicts[lang];

export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');

// Rutas equivalentes en cada idioma.
export const homePaths: Paths = { es: '/', en: '/en/' };

export const casePaths = (id: CaseId): Paths => ({
  es: `/proyectos/${projects[id].slug}/`,
  en: `/en/projects/${projects[id].slug}/`,
});
