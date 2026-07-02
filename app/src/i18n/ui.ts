import type { Localized } from './config';

/**
 * Diccionario de strings de INTERFAZ (no de contenido de proyectos).
 * Español primero (idioma principal), luego inglés.
 * Uso en componentes: t(ui.nav.contact)
 */

const L = (es: string, en: string): Localized<string> => ({ es, en });

export const ui = {
  nav: {
    about: L('Sobre mí', 'About'),
    experience: L('Experiencia', 'Experience'),
    projects: L('Proyectos', 'Projects'),
    skills: L('Habilidades', 'Skills'),
    education: L('Educación', 'Education'),
    contact: L('Contacto', 'Contact'),
  },
  hero: {
    titleLine1: L('Ingeniero de Software.', 'Software Engineer.'),
    titleLine2: L('Estratega de Producto.', 'Product Strategist.'),
    description: L(
      'Conecto la arquitectura de software con la estrategia digital para generar impacto de negocio, maximizando el ROI mientras elevo la experiencia del usuario final.',
      'I bridge the gap between software architecture and digital strategy to drive business impact, maximizing ROI while elevating the end-user experience.'
    ),
    inYourHands: L('EN TUS MANOS', 'IN YOUR HANDS'),
    featured: L('PROYECTO DESTACADO', 'FEATURED PROJECT'),
  },
  about: {
    headline: L(
      'Ayudo a las organizaciones a construir soluciones digitales a medida para resolver problemas de negocio complejos.',
      'I help organizations build tailored digital solutions to solve complex business problems.'
    ),
    p1: L(
      'Con más de 7 años de experiencia en desarrollo de software, consultoría de eCommerce y SEO, he dirigido ciclos de producto de principio a fin, sincronizando objetivos de negocio, iniciativas de marketing y KPIs centrados en el usuario.',
      "With over 7 years of experience across software development, eCommerce consulting, and SEO, I've directed end-to-end product lifecycles by synchronizing business goals, marketing initiatives, and user-centric KPIs."
    ),
    p2: L(
      'Me especializo en unir la arquitectura de software con la estrategia digital: desde escalar el rendimiento de eCommerce con SEO basado en datos hasta gestionar la entrega full-stack con Flutter, Firebase e infraestructura en la nube.',
      'I specialize in bridging software architecture and digital strategy — from scaling eCommerce performance with data-driven SEO tactics to managing full-stack product delivery with Flutter, Firebase, and cloud infrastructure.'
    ),
  },
  experience: {
    learnMore: L('Ver más', 'Learn more'),
  },
  projects: {
    heading: L('Trabajo seleccionado.', 'Selected work.'),
  },
  services: {
    heading: L('Con el respaldo de un partner experto.', 'Supported by expert partnership.'),
    description: L(
      'Trabaja con un ingeniero multidisciplinar para habilitar una transformación que genere impacto real.',
      'Work with a cross-functional engineer to enable transformation that drives impact.'
    ),
    cta: L('Mis servicios', 'My services'),
  },
  education: {
    heading: L('Educación y Aprendizaje Continuo.', 'Education & Continuous Learning.'),
  },
  cta: {
    heading: L('Toma el control de tu futuro digital.', 'Own your digital future.'),
    viewProjects: L('Ver proyectos', 'View Projects'),
    contactMe: L('Contáctame', 'Contact Me'),
  },
  footer: {
    explore: L('Explorar', 'Explore'),
    expertise: L('Especialidad', 'Expertise'),
    connect: L('Conecta', 'Connect'),
  },
  project: {
    back: L('Volver al portafolio', 'Back to portfolio'),
    screens: L('Pantallas', 'Screens'),
    objectives: L('Objetivos', 'Objectives'),
    achievements: L('Lo que se logró', 'What was achieved'),
    techStack: L('Stack Tecnológico', 'Tech Stack'),
    previous: L('Anterior', 'Previous'),
    next: L('Siguiente', 'Next'),
    ctaText: L('¿Quieres trabajar en algo similar?', 'Want to work on something similar?'),
    getInTouch: L('Hablemos', 'Get in touch'),
    notFound: L('Proyecto no encontrado', 'Project not found'),
  },
  langSwitcher: {
    aria: L('Cambiar idioma', 'Switch language'),
  },
  seo: {
    homeTitle: L(
      'Oliver Mendez — Ingeniero de Software y Estratega de Producto',
      'Oliver Mendez — Software Engineer & Product Strategist'
    ),
    homeDescription: L(
      'Oliver Mendez Arias — Ingeniero de Software y Estratega de Producto con más de 7 años de experiencia en desarrollo móvil, consultoría eCommerce y SEO.',
      'Oliver Mendez Arias — Software Engineer & Product Strategist with 7+ years of experience in mobile development, eCommerce consulting, and SEO.'
    ),
  },
} as const;
