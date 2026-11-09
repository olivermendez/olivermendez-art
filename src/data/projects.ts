import type { CaseId } from '../i18n/cases.es';

// Imágenes y enlaces de cada proyecto (los textos viven en src/i18n/cases.*.ts).
// Capturas en public/shots, tomadas de los sitios en producción o de entornos locales con datos de prueba.

export interface Img {
  src: string;
  width: number;
  height: number;
}

const shot = (name: string, width = 1400, height = 875): Img => ({ src: `/shots/${name}.jpg`, width, height });
const phone = (name: string, height = 1298): Img => shot(name, 600, height);
const tablet = (name: string): Img => shot(name, 1400, 1049);

export interface Project {
  slug: string;
  site: string; // dominio que se muestra en la barra del navegador
  url: string | null; // sitio en vivo
  logo: Img;
  logoBg?: string; // fondo del recuadro del logo cuando el logo es claro
  card: Img; // captura de la portada (tarjetas del home)
  hero: Img; // visual grande del caso
  phone: Img;
  built: (Img | null)[]; // una por pieza de «Qué construí»; null = captura pendiente
  extra?: { url: string; built: Img[] }; // producto relacionado dentro del caso
  next: CaseId;
}

export const projects: Record<CaseId, Project> = {
  autolisto: {
    slug: 'autolisto',
    site: 'autolisto.net',
    url: 'https://autolisto.net',
    logo: { src: '/logos/autolisto.svg', width: 1123, height: 406 },
    card: shot('autolisto-ficha', 1400, 840),
    hero: shot('autolisto-home', 1600, 1100),
    phone: phone('autolisto-ios-buscar', 1304),
    built: [
      shot('autolisto-busqueda-ia', 2200, 1375),
      shot('autolisto-ficha', 1400, 840),
      shot('autolisto-dealer-inventario'),
      phone('autolisto-ios-garage', 1304),
      shot('autolisto-dealer-leads'),
      shot('autolisto-dealer-detalle'),
    ],
    next: 'mesapos',
  },
  mesapos: {
    slug: 'mesapos',
    site: 'mesapos.link',
    url: 'https://mesapos.link',
    logo: { src: '/logos/mesapos.png', width: 480, height: 106 },
    card: shot('mesapos', 1400, 840),
    hero: shot('mesapos', 1400, 840),
    phone: phone('mesapos-movil'),
    built: [
      tablet('mesapos-pos-mesas'),
      tablet('mesapos-pos-orden'),
      tablet('mesapos-pos-cobro'),
      shot('mesapos-panel-productos'),
      shot('mesapos-factura'),
      shot('mesapos-precios'),
    ],
    next: 'scanova',
  },
  premium: {
    slug: 'premium-diagnosticos',
    site: 'premiumdiagnosticos.com',
    url: 'https://www.premiumdiagnosticos.com',
    logo: { src: '/logos/premium.png', width: 480, height: 139 },
    card: shot('premium-diagnosticos', 1400, 840),
    hero: shot('premium-diagnosticos', 1400, 840),
    phone: phone('premium-movil'),
    built: [shot('premium-servicios'), shot('premium-resonancia'), shot('premium-scanova'), phone('premium-movil')],
    extra: {
      url: 'https://empleos.premiumdiagnosticos.com',
      built: [shot('empleos-publico'), shot('empleos-aplicar'), shot('empleos-panel'), shot('empleos-perfil')],
    },
    next: 'caceres',
  },
  scanova: {
    slug: 'scanova',
    site: 'scanova — portal de pacientes',
    url: null,
    logo: { src: '/logos/scanova.png', width: 480, height: 271 },
    card: shot('scanova-reporte'),
    hero: shot('scanova-bienvenida'),
    phone: phone('scanova-movil'),
    built: [shot('scanova-inicio'), shot('scanova-reporte'), shot('scanova-strapi-estudios'), shot('scanova-strapi-hallazgos')],
    next: 'premium',
  },
  caceres: {
    slug: 'caceres-torres',
    site: 'cacerestorres.com',
    url: 'https://www.cacerestorres.com',
    logo: { src: '/logos/caceres.png', width: 480, height: 175 },
    card: shot('caceres-torres', 1200, 2250),
    hero: shot('caceres-torres', 1200, 2250),
    phone: phone('caceres-movil'),
    built: [shot('caceres-en'), shot('caceres-area'), shot('caceres-equipo'), phone('caceres-movil')],
    next: 'cacebal',
  },
  cacebal: {
    slug: 'cacebal',
    site: 'cacebal.com',
    url: 'https://cacebal.com',
    logo: { src: '/logos/cacebal.png', width: 360, height: 198 },
    card: shot('cacebal', 1200, 2250),
    hero: shot('cacebal', 1200, 2250),
    phone: phone('cacebal-movil'),
    built: [shot('cacebal-aceites'), shot('cacebal-producto'), shot('cacebal-coppini'), phone('cacebal-movil')],
    next: 'medwork',
  },
  medwork: {
    slug: 'medwork-global',
    site: 'medworkglobal.com',
    url: 'https://www.medworkglobal.com',
    logo: { src: '/logos/medwork.png', width: 480, height: 198 },
    logoBg: '#273a62',
    card: shot('medwork', 1200, 2250),
    hero: shot('medwork', 1200, 2250),
    phone: phone('medwork-movil'),
    built: [shot('medwork-especialidades'), shot('medwork-wellness'), shot('medwork-urgencias'), shot('medwork-medicos')],
    next: 'autolisto',
  },
};

export const caseIds: CaseId[] = ['autolisto', 'mesapos', 'scanova', 'premium', 'caceres', 'cacebal', 'medwork'];
