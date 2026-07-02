import type { Localized } from '../i18n/config';

/**
 * Sección "Experiencia": marquee de empresas y tarjetas de caso (bilingüe).
 * Cada caso puede enlazar a un proyecto (por `projectId`).
 */

/** Nombres que rotan en el marquee superior (neutro al idioma). */
export const companies = [
  'Simlimites Corp',
  'Altrovedanza',
  'Universal Caribbean Supply',
  'Ennova',
  'MedWork Global',
  'Cáceres Torres',
] as const;

export interface CaseStudy {
  company: string;
  roleTag: Localized<string>;
  headline: Localized<string>;
  image: string;
  alt: string;
  projectId?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    company: 'Simlimites Corp',
    roleTag: { es: 'Líder Técnico', en: 'Technical Lead' },
    headline: {
      es: 'Escalé el rendimiento del eCommerce de eSIM, logrando un aumento del 20% en ingresos.',
      en: 'Scaled eSIM eCommerce performance, achieving a 20% uplift in revenue.',
    },
    image: '/assets/simlimites-card-bg.jpg',
    alt: 'Simlimites Corp',
    projectId: 'esim-travel-app',
  },
  {
    company: 'Altrovedanza™ By BCC SRL',
    roleTag: { es: 'SEO Manager y eCommerce', en: 'SEO Manager & eCommerce' },
    headline: {
      es: 'Logré un aumento del 30% en alcance orgánico en los mercados de EE. UU. y Europa.',
      en: 'Delivered a 30% increase in organic reach across U.S. and European markets.',
    },
    image: '/assets/altrovedanza-card-bg.jpg',
    alt: 'Altrovedanza',
  },
];
