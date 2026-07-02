import type { IconType } from '../components/PixelIcon';
import type { Localized } from '../i18n/config';

/**
 * ─────────────────────────────────────────────────────────────
 *  PROYECTOS DEL PORTAFOLIO — fuente única de verdad (bilingüe)
 * ─────────────────────────────────────────────────────────────
 *
 *  Cada campo de texto es bilingüe: { es: '...', en: '...' }.
 *  El español es el idioma principal.
 *
 *  Para AÑADIR un proyecto: copia un bloque, cámbiale el `id`
 *  (único, minúsculas, con guiones) y traduce sus textos.
 *  Aparecerá en: sección "Proyectos" (home), hero (si featured)
 *  y su página /project/<id> (y /en/project/<id>).
 */

export type ScreenType = 'mobile' | 'desktop';

export interface ProjectScreen {
  type: ScreenType;
  label: string;
}

export interface Project {
  /** Identificador único; también es la URL: /project/<id>. */
  id: string;
  /** Nombre propio del proyecto (igual en ambos idiomas). */
  title: string;
  subtitle: Localized<string>;
  category: Localized<string>;
  description: Localized<string>;
  objectives: Localized<string[]>;
  achievements: Localized<string[]>;
  /** Tecnologías (neutro al idioma). */
  stack: string[];
  year: string;
  role: Localized<string>;
  screens: ProjectScreen[];

  // ── Presentación en el home ──────────────────────────────
  icon: IconType;
  iconColor: string;
  span?: string;
  featured?: boolean;
  draft?: boolean;
}

export const projects: Project[] = [
  {
    id: 'esim-travel-app',
    title: 'eSIM Travel App',
    subtitle: {
      es: 'Aplicación móvil full-stack para comprar y gestionar planes de eSIM para viajeros.',
      en: 'Full-stack mobile application for purchasing and managing travel eSIM plans.',
    },
    category: { es: 'Desarrollo Móvil', en: 'Mobile Development' },
    description: {
      es: 'Una aplicación móvil totalmente autogestionable que permite a los viajeros comprar planes de datos eSIM para cualquier país sin necesidad de una SIM física. La app gestiona todo el ciclo, desde la selección del plan hasta la activación, incluyendo el procesamiento de pagos con Stripe y el seguimiento del consumo de datos en tiempo real.',
      en: 'A fully self-managed mobile application that allows travelers to purchase eSIM data plans for any country without needing a physical SIM card. The app handles the entire lifecycle from plan selection to activation, including payment processing via Stripe and real-time data usage tracking.',
    },
    objectives: {
      es: [
        'Crear una experiencia sin fricciones para comprar planes eSIM en más de 100 países',
        'Integrar Stripe para procesar pagos de forma segura e instantánea',
        'Construir una integración con kioscos de hardware para compras presenciales',
        'Implementar seguimiento del consumo de datos y gestión de planes en tiempo real',
        'Garantizar compatibilidad multiplataforma con una sola base de código',
      ],
      en: [
        'Create a frictionless experience for buying eSIM plans across 100+ countries',
        'Integrate Stripe for secure, instant payment processing',
        'Build a hardware kiosk integration for in-person eSIM purchases',
        'Implement real-time data usage tracking and plan management',
        'Ensure cross-platform compatibility with a single codebase',
      ],
    },
    achievements: {
      es: [
        'Aumento del 20% en ingresos gracias a la optimización de UX y del funnel de conversión',
        'Reducción del 60% en tickets de soporte con la activación self-service',
        'Integración con 3 operadores eSIM principales para cobertura global',
        'Sistema de kiosco de hardware desplegado en 5 puntos de venta',
        'Calificación de 4.8 estrellas en App Store y Google Play',
      ],
      en: [
        'Achieved 20% revenue uplift through optimized UX and conversion funnel',
        'Reduced customer support tickets by 60% with self-service activation',
        'Integrated with 3 major eSIM carriers for global coverage',
        'Built hardware kiosk system deployed in 5 retail locations',
        'Maintained 4.8 star rating on App Store and Google Play',
      ],
    },
    stack: ['Flutter', 'Firebase', 'Stripe API', 'Bloc Pattern', 'REST APIs', 'AWS'],
    year: '2022 - Present',
    role: { es: 'Líder Técnico', en: 'Technical Lead' },
    screens: [
      { type: 'mobile', label: 'Home' },
      { type: 'mobile', label: 'Plans' },
      { type: 'mobile', label: 'Checkout' },
      { type: 'mobile', label: 'My eSIM' },
      { type: 'mobile', label: 'Data Usage' },
      { type: 'mobile', label: 'Profile' },
    ],
    icon: 'phone',
    iconColor: 'bg-accent-teal',
    span: 'md:col-span-2',
    featured: true,
  },
  {
    id: 'medwork-global',
    title: 'MedWork Global',
    subtitle: {
      es: 'Sitio web para un centro de salud con urgencias, diagnóstico y servicios de bienestar.',
      en: 'Healthcare center website with urgent care, diagnostics, and wellness services.',
    },
    category: { es: 'Desarrollo Web', en: 'Web Development' },
    description: {
      es: 'Un sitio web moderno y responsivo para un centro de salud que ofrece atención médica de urgencia, servicios de diagnóstico ambulatorio y una innovadora unidad de bienestar y antienvejecimiento. El proyecto se enfocó en mejorar la presencia online y la experiencia del paciente.',
      en: 'A modern, responsive website for a healthcare center offering urgent medical care, outpatient diagnostic services, and an innovative wellness and anti-aging unit. The project focused on improving online presence and patient experience.',
    },
    objectives: {
      es: [
        'Diseñar una presencia web sanitaria profesional y de confianza',
        'Implementar un sistema de reserva de citas online',
        'Crear catálogos de servicios de diagnóstico y programas de bienestar',
        'Optimizar el SEO local para atraer pacientes cercanos',
        'Garantizar el cumplimiento de accesibilidad WCAG para todos los usuarios',
      ],
      en: [
        'Design a trustworthy, professional healthcare web presence',
        'Implement online appointment booking system',
        'Create service catalogs for diagnostics and wellness programs',
        'Optimize for local SEO to attract nearby patients',
        'Ensure WCAG accessibility compliance for all users',
      ],
    },
    achievements: {
      es: [
        'Aumento del 150% en reservas de citas online en el primer trimestre',
        'Top 3 en Google para 8 términos clave de salud local',
        'Reducción del tiempo de carga a menos de 2 segundos',
        'Diseño responsivo con puntuación Lighthouse de 95+',
        'Satisfacción del paciente mejorada a un promedio de 4.7 estrellas',
      ],
      en: [
        'Improved online appointment bookings by 150% in first quarter',
        'Achieved top 3 Google rankings for 8 key local healthcare terms',
        'Reduced page load time to under 2 seconds',
        'Implemented responsive design with 95+ Lighthouse score',
        'Patient satisfaction feedback improved to 4.7 star average',
      ],
    },
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Sanity CMS', 'Vercel'],
    year: '2023',
    role: { es: 'Desarrollador Web y Consultor SEO', en: 'Web Developer & SEO Consultant' },
    screens: [
      { type: 'desktop', label: 'Homepage' },
      { type: 'desktop', label: 'Services' },
      { type: 'mobile', label: 'Home' },
      { type: 'mobile', label: 'Booking' },
    ],
    icon: 'heart',
    iconColor: 'bg-accent-emerald',
  },
  {
    id: 'caceres-torres',
    title: 'Caceres Torres',
    subtitle: {
      es: 'Sitio web corporativo para un prestigioso bufete especializado en derecho empresarial y bancario.',
      en: 'Corporate website for a prestigious law firm specializing in business and banking law.',
    },
    category: { es: 'Desarrollo Web', en: 'Web Development' },
    description: {
      es: 'Un rediseño y reconstrucción completa del sitio web de un bufete boutique con más de 50 años de experiencia en derecho corporativo, empresarial, bancario y financiero. El objetivo era modernizar su presencia digital manteniendo la autoridad y la confianza.',
      en: 'A complete redesign and rebuild of the website for a boutique law firm with over 50 years of experience in corporate, business, banking, and financial law. The goal was to modernize their digital presence while maintaining authority and trust.',
    },
    objectives: {
      es: [
        'Modernizar una marca de más de 50 años para la era digital',
        'Transmitir autoridad y confianza a través del diseño',
        'Mostrar las áreas de práctica y los perfiles de los abogados',
        'Implementar formularios seguros de contacto y solicitud de consulta',
        'Optimizar para búsquedas profesionales del sector legal',
      ],
      en: [
        'Modernize a 50+ year old brand for the digital age',
        'Convey authority and trustworthiness through design',
        'Showcase practice areas and attorney profiles',
        'Implement secure contact and consultation request forms',
        'Optimize for professional search queries in legal sector',
      ],
    },
    achievements: {
      es: [
        'Aumento del 80% en tráfico orgánico en 6 meses',
        'Más de 40 solicitudes de consulta cualificadas al mes',
        'Reducción de la tasa de rebote del 68% al 32%',
        'Identidad de marca consistente en todas las páginas',
        'Reconocimiento del sector al mejor diseño web legal',
      ],
      en: [
        'Increased organic traffic by 80% within 6 months',
        'Generated 40+ qualified consultation requests monthly',
        'Reduced bounce rate from 68% to 32%',
        'Established consistent brand identity across all pages',
        'Received industry recognition for best legal web design',
      ],
    },
    stack: ['WordPress', 'PHP', 'Custom Theme', 'SEO', 'Figma'],
    year: '2022',
    role: { es: 'Desarrollador Web y Diseñador', en: 'Web Developer & Designer' },
    screens: [
      { type: 'desktop', label: 'Homepage' },
      { type: 'desktop', label: 'Practice Areas' },
      { type: 'desktop', label: 'Attorneys' },
      { type: 'mobile', label: 'Home' },
    ],
    icon: 'building',
    iconColor: 'bg-deep-forest',
  },
  {
    id: 'cacebal',
    title: 'Cacebal',
    subtitle: {
      es: 'Plataforma eCommerce completa para un minorista de productos de cocina en República Dominicana.',
      en: 'Full eCommerce platform for a kitchen products retailer in the Dominican Republic.',
    },
    category: { es: 'Soluciones eCommerce', en: 'eCommerce Solutions' },
    description: {
      es: 'Una solución eCommerce integral construida desde cero para un minorista dominicano que vende productos de cocina como aceites, tomates, productos asiáticos y más. El proyecto abarcó todo, desde el catálogo de productos hasta el procesamiento de pagos y la gestión de inventario.',
      en: 'An end-to-end eCommerce solution built from scratch for a Dominican retailer selling kitchen products including oils, tomatoes, Asian products, and more. The project covered everything from product catalog to payment processing and inventory management.',
    },
    objectives: {
      es: [
        'Construir una tienda online completa desde cero',
        'Integrar métodos de pago locales (tarjetas, transferencias bancarias)',
        'Implementar gestión de inventario con alertas de stock bajo',
        'Crear una estructura de catálogo optimizada para SEO',
        'Diseñar una experiencia de compra mobile-first',
      ],
      en: [
        'Build a complete online store from the ground up',
        'Integrate local payment methods (credit cards, bank transfers)',
        'Implement inventory management with low-stock alerts',
        'Create an SEO-optimized product catalog structure',
        'Design mobile-first shopping experience',
      ],
    },
    achievements: {
      es: [
        'Alcance de $50K en ingresos mensuales a los 8 meses del lanzamiento',
        '35% de clientes recurrentes mediante email marketing',
        'Crecimiento del tráfico orgánico a 15K visitantes mensuales vía SEO',
        'Reducción del 25% en abandono de carrito con mejoras de UX',
        'Más de 1000 pedidos procesados en los primeros 6 meses',
      ],
      en: [
        'Reached $50K monthly revenue within 8 months of launch',
        'Achieved 35% returning customer rate through email marketing',
        'Grew organic traffic to 15K monthly visitors via SEO',
        'Reduced cart abandonment by 25% with UX improvements',
        'Successfully processed 1000+ orders in first 6 months',
      ],
    },
    stack: ['PrestaShop', 'PHP', 'MySQL', 'Mailchimp', 'Google Analytics', 'SEO'],
    year: '2021 - 2022',
    role: { es: 'Especialista en eCommerce y SEO Manager', en: 'eCommerce Specialist & SEO Manager' },
    screens: [
      { type: 'desktop', label: 'Homepage' },
      { type: 'desktop', label: 'Product' },
      { type: 'desktop', label: 'Cart' },
      { type: 'mobile', label: 'Home' },
      { type: 'mobile', label: 'Checkout' },
    ],
    icon: 'cart',
    iconColor: 'bg-warm-amber',
    span: 'md:col-span-2',
  },
];

/** Proyectos visibles en listados (excluye borradores). */
export const visibleProjects = projects.filter((p) => !p.draft);

/** Busca un proyecto por su id (incluye borradores, para URLs directas). */
export const getProject = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);

/** Proyecto marcado como destacado (para la tarjeta del hero). */
export const getFeaturedProject = (): Project | undefined =>
  visibleProjects.find((p) => p.featured);
