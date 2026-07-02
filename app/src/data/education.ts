import type { Localized } from '../i18n/config';

/**
 * Sección "Educación": título académico, idiomas y cursos (bilingüe).
 * Los nombres de cursos y proveedores son nombres propios (no se traducen).
 */

export const degree = {
  title: {
    es: 'Ingeniero en Sistemas y Computación',
    en: 'Systems and Computer Engineer',
  } as Localized<string>,
  school: 'Pontificia Universidad Católica Madre y Maestra (PUCMM)',
  period: '2017 – 2022',
};

export interface Language {
  name: Localized<string>;
  level: Localized<string>;
}

export const languages: Language[] = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'Profesional', en: 'Professional' } },
];

export interface Course {
  name: string;
  provider: string;
  date: string;
}

export const courses: Course[] = [
  { name: 'Technical SEO', provider: 'Semrush', date: 'Feb 2022' },
  { name: 'Fundamentals SEO', provider: 'Semrush', date: 'Feb 2022' },
  { name: 'Mobile Development: Flutter', provider: 'Platzi', date: 'Aug 2021' },
  { name: 'Change Management', provider: 'LinkedIn', date: 'Jan 2021' },
  { name: 'Technical Debt Management', provider: 'LinkedIn', date: 'Jan 2021' },
  { name: 'Pro Website with WordPress', provider: 'Domestika', date: 'Jan 2020' },
  { name: 'Good Practices in Development', provider: 'Platzi', date: 'Aug 2019' },
  { name: 'Information Security for Businesses', provider: 'Platzi', date: 'Aug 2019' },
  { name: 'Website Optimization', provider: 'Platzi', date: 'Aug 2019' },
  { name: 'SEO Expert', provider: 'Platzi', date: 'Aug 2019' },
];
