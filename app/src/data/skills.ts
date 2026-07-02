import type { TagPillVariant } from '../components/TagPill';
import type { Localized } from '../i18n/config';

/**
 * Sección "Skills": 5 sub-bloques bilingües. El mockup visual vive en el
 * componente (SkillsSection), asociado por `id`. Aquí van copy y tags.
 */

export interface SkillGroup {
  id: 'mobile' | 'coding' | 'delivery' | 'custom' | 'infra';
  heading?: Localized<string>;
  description?: Localized<string>;
  cta?: { label: Localized<string>; href?: string };
  tags: Localized<string[]>;
  tagVariant: TagPillVariant;
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'mobile',
    tags: {
      es: ['SEO EMPRESARIAL', 'ANÁLISIS DE DATOS', 'DESARROLLO FLUTTER', 'FIREBASE Y AWS', 'INTEGRACIÓN DE APIS', 'INVESTIGACIÓN UX'],
      en: ['ENTERPRISE SEO', 'DATA ANALYSIS', 'FLUTTER DEVELOPMENT', 'FIREBASE & AWS', 'API INTEGRATION', 'UX RESEARCH'],
    },
    tagVariant: 'light',
  },
  {
    id: 'coding',
    heading: { es: 'Código limpio y probado.', en: 'Clean, tested code.' },
    description: {
      es: 'Entrega más rápido con un stack que se adapta a cómo trabajan los desarrolladores.',
      en: 'Ship faster with a stack that meets developers where they work.',
    },
    cta: { label: { es: 'Ver GitHub', en: 'View GitHub' }, href: 'https://github.com/olivermendez' },
    tags: {
      es: ['FLUTTER Y DART', 'REACT Y NEXT.JS', 'NESTJS Y NODE', 'FIREBASE Y AWS', 'STRIPE API', 'POSTGRESQL'],
      en: ['FLUTTER & DART', 'REACT & NEXT.JS', 'NESTJS & NODE', 'FIREBASE & AWS', 'STRIPE API', 'POSTGRESQL'],
    },
    tagVariant: 'dark',
  },
  {
    id: 'delivery',
    heading: { es: 'Entrega full-stack.', en: 'Full-stack delivery.' },
    description: {
      es: 'Construye y despliega apps con control total: desde móvil multiplataforma hasta sistemas listos para producción con herramientas de nivel empresarial.',
      en: 'Build and deploy apps with complete control — from cross-platform mobile to production-ready systems with enterprise-grade tooling.',
    },
    cta: { label: { es: 'Descubrir más', en: 'Discover more' } },
    tags: {
      es: ['PIPELINES CI/CD', 'APIS REST Y GRAPHQL', 'TESTING AUTOMATIZADO', 'DESPLIEGUE EN LA NUBE', 'MONITOREO DE RENDIMIENTO'],
      en: ['CI/CD PIPELINES', 'REST & GRAPHQL APIS', 'AUTOMATED TESTING', 'CLOUD DEPLOYMENT', 'PERFORMANCE MONITORING'],
    },
    tagVariant: 'white',
  },
  {
    id: 'custom',
    heading: { es: 'Soluciones a medida.', en: 'Custom solutions.' },
    description: {
      es: 'Convierte los retos de negocio en soluciones técnicas, arquitecturando sistemas escalables alineados con tus objetivos.',
      en: 'Turn business challenges into technical solutions by architecting scalable systems aligned with your goals.',
    },
    cta: { label: { es: 'Ver enfoque', en: 'Discover approach' } },
    tags: {
      es: ['ARQUITECTURA TÉCNICA', 'INTEGRACIÓN DE SISTEMAS', 'SISTEMAS DE PAGO', 'CMS HEADLESS', 'ENTREGA END-TO-END'],
      en: ['TECHNICAL ARCHITECTURE', 'SYSTEM INTEGRATION', 'PAYMENT SYSTEMS', 'HEADLESS CMS', 'END-TO-END DELIVERY'],
    },
    tagVariant: 'white',
  },
  {
    id: 'infra',
    heading: { es: 'Infraestructura y DevOps.', en: 'Infrastructure & DevOps.' },
    description: {
      es: 'La infraestructura en la nube y la orquestación detrás de productos escalables, ahora a tu servicio.',
      en: 'The cloud infrastructure and orchestration behind scalable products, now at your service.',
    },
    cta: { label: { es: 'Ver herramientas', en: 'Discover tools' } },
    tags: {
      es: ['AWS Y FIREBASE', 'DOCKER Y CI', 'ORQUESTACIÓN CLOUD', 'MONITOREO Y LOGS'],
      en: ['AWS & FIREBASE', 'DOCKER & CI', 'CLOUD ORCHESTRATION', 'MONITORING & LOGS'],
    },
    tagVariant: 'light',
  },
];

export const getSkillGroup = (id: SkillGroup['id']): SkillGroup =>
  skillGroups.find((g) => g.id === id)!;
