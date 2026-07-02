import type { IconType } from '../components/PixelIcon';
import type { Localized } from '../i18n/config';

/**
 * Sección "Services" — las 4 tarjetas de "Con el respaldo de un partner experto".
 */

export interface Service {
  icon: IconType;
  title: Localized<string>;
  desc: Localized<string>;
}

export const services: Service[] = [
  {
    icon: 'lightning',
    title: { es: 'Aceleración de casos de uso.', en: 'Use case acceleration.' },
    desc: {
      es: 'Prioriza los proyectos de mayor valor y llévalos a producción rápido.',
      en: 'Prioritize high-value projects and take them to production fast.',
    },
  },
  {
    icon: 'star',
    title: { es: 'Experiencia de élite.', en: 'Elite expertise.' },
    desc: {
      es: 'Un perfil multidisciplinar que lleva las iniciativas desde el kickoff hasta producción a escala.',
      en: 'A cross-functional skillset that takes initiatives from kickoff to production at scale.',
    },
  },
  {
    icon: 'cog',
    title: { es: 'Personalización profunda.', en: 'Deep customization.' },
    desc: {
      es: 'Personaliza y optimiza soluciones para tu dominio y tu audiencia.',
      en: 'Customize and optimize solutions for your domain and audience.',
    },
  },
  {
    icon: 'building',
    title: { es: 'Activación empresarial.', en: 'Enterprise activation.' },
    desc: {
      es: 'Despliega soluciones en tu entorno con control y privacidad totales.',
      en: 'Deploy solutions in your environment with full control and privacy.',
    },
  },
];
