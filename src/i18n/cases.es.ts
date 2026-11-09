// Contenido de cada caso de estudio. Fuentes en docs/material-proyectos.md.
// Cada pieza de «Qué construí» se muestra en un marco de navegador con `url`;
// con `url: null`, en un iPhone; con `frame: 'tablet'`, en un iPad.

type Value = string | null;

export interface CaseText {
  name: string;
  no: string;
  kind: string;
  desc: string;
  metaDesc: string;
  spec: { year: Value; role: Value; platform: Value; stack: Value; status: Value };
  problem?: { title: string; desc: string };
  built: Piece[];
  decisions?: { tag: string; quote: string; desc: string }[];
  seo?: { done: { title: string; desc: string }; evidence: { title: string; desc: string } };
  // Un producto relacionado que vive dentro del mismo caso (p. ej. el portal de empleos de Premium)
  extra?: { label: string; title: string; desc: string; points: string[]; built: Piece[] };
  stack: [string, string][];
}

export interface Piece {
  url: string | null;
  title: string;
  desc: string;
  frame?: 'tablet';
  pending?: string;
}

export type CaseId = 'autolisto' | 'mesapos' | 'premium' | 'scanova' | 'caceres' | 'cacebal' | 'medwork';

export const casesEs: Record<CaseId, CaseText> = {
  autolisto: {
    name: 'AutoListo',
    no: 'Nº 01',
    kind: 'Marketplace',
    desc: 'Marketplace de compra y venta de vehículos en República Dominicana.',
    metaDesc:
      'Cómo diseñé y construí AutoListo, un marketplace de vehículos en República Dominicana: web, app iOS e integraciones de IA.',
    spec: {
      year: '2026',
      role: 'Fundador · diseño y desarrollo completo',
      platform: 'Web · App iOS · Servidor MCP',
      stack: 'Next.js · TypeScript · Supabase · SwiftUI · Groq',
      status: 'En producción (beta)',
    },
    problem: {
      title: 'Comprar un carro usado en República Dominicana es lento y opaco.',
      desc: 'Y del otro lado, los dealers no tienen herramientas para publicar y gestionar su inventario en línea.',
    },
    built: [
      { url: 'autolisto — búsqueda en lenguaje natural con ia', title: 'Búsqueda en lenguaje natural con IA', desc: 'Escribes lo que buscas como se lo dirías a una persona; la IA lo convierte en filtros.' },
      { url: 'autolisto — ficha del vehículo', title: 'Ficha del vehículo', desc: 'Toda la información del carro en una sola página.' },
      { url: 'autolisto — panel del dealer', title: 'Panel del dealer', desc: 'Inventario con búsqueda, filtros por estado y métricas de cada vehículo. Captura local con datos de demostración.' },
      { url: null, title: 'App iOS nativa', desc: 'Hecha en SwiftUI.' },
      { url: 'autolisto — gestión de leads', title: 'Seguimiento de compradores', desc: 'Consultas por vehículo, estados de seguimiento y notas internas. Captura local con clientes ficticios.' },
      { url: 'autolisto — rendimiento del anuncio', title: 'Rendimiento del anuncio', desc: 'Vistas diarias, contactos, favoritos e historial de precio en una sola pantalla. Las métricas mostradas son de demostración.' },
    ],
    decisions: [
      {
        tag: '01 · Calidad de datos',
        quote: '“136 de 174 carros decían ‘caja sincronizada’. No era un dato: era el valor por defecto de otro formulario.”',
        desc: 'Al importar el inventario del primer dealer real, detecté que el campo era un valor por defecto y no una medición. Publicarlo habría puesto jeepetas nuevas con caja manual. Recuperé las que el texto del anuncio confirmaba y dejé el resto vacío.',
      },
      {
        tag: '02 · Observabilidad',
        quote: '“El monitor de errores solo reportaba desde mi laptop.”',
        desc: 'Sentry no veía nada de producción. Lo encontré, lo corregí y verifiqué el envío real de errores.',
      },
      {
        tag: '03 · Validación en servidor',
        quote: '“Un usuario podía saltarse el límite gratis eligiendo su plan en la petición.”',
        desc: 'Todo lo que decide precio o cupo pasó a decidirse en el servidor.',
      },
    ],
    seo: {
      done: {
        title: 'Trabajo realizado',
        desc: 'Dominio nuevo: en septiembre de 2026 Google tenía las 55 URLs del sitio como «descubiertas, sin indexar». Monté la base técnica (metadata por anuncio, sitemap, robots, JSON-LD con escape contra XSS y rutas por provincia, marca y modelo) y herramientas gratuitas que responden búsquedas reales: la calculadora de peajes y el historial de precios de combustibles del MICM.',
      },
      evidence: {
        title: 'Evidencia y resultados',
        desc: 'Primer export de Google Search Console, cuatro semanas entre septiembre y octubre de 2026: 2,194 impresiones y 60 clics. El 82 % de las impresiones vino de la calculadora de peajes (CTR 1 %, posición media 6.6). Lo siguiente es medir cuántas de esas visitas terminan en un registro o una publicación.',
      },
    },
    stack: [
      ['Web', 'Next.js · TypeScript'],
      ['App', 'SwiftUI (iOS)'],
      ['Datos', 'Supabase'],
      ['IA', 'Groq'],
      ['Integraciones', 'Servidor MCP'],
    ],
  },

  mesapos: {
    name: 'MesaPOS',
    no: 'Nº 02',
    kind: 'Punto de venta',
    desc: 'Punto de venta para restaurantes en República Dominicana que sigue vendiendo aunque se caiga el internet.',
    metaDesc:
      'Cómo diseñé y construí MesaPOS, un punto de venta para restaurantes en República Dominicana que funciona sin internet y emite factura electrónica.',
    spec: {
      year: '2026',
      role: 'Fundador · diseño y desarrollo completo',
      platform: 'App (iPad · Android · Mac · Windows) · Panel web · Menú QR',
      stack: 'Flutter · Supabase · React · Cloudflare',
      status: 'En producción',
    },
    problem: {
      title: 'Un restaurante no puede dejar de cobrar porque se cayó el internet.',
      desc: 'Y cada venta tiene que salir con el ITBIS correcto y, cada vez más, como factura electrónica e-CF ante la DGII.',
    },
    built: [
      { url: null, frame: 'tablet', title: 'Mapa de mesas', desc: 'El quiosco del mesero: cada mesa por zona, libre u ocupada y desde hace cuánto.' },
      { url: null, frame: 'tablet', title: 'Tomar la orden', desc: 'Catálogo por categoría a un lado y la cuenta al otro, con notas para cocina y el ITBIS ya sumado.' },
      { url: null, frame: 'tablet', title: 'Cobro', desc: 'Efectivo, tarjeta o transferencia, cuenta completa o dividida, con el ITBIS al 18 % desglosado.' },
      { url: 'app.mesapos.link — productos', title: 'Panel web', desc: 'Donde el dueño administra el menú, el equipo, las cajas, la facturación y los reportes.' },
      { url: 'mesapos.link/factura-electronica', title: 'Factura electrónica e-CF', desc: 'Mesa emite el e-CF de cada venta al cobrar y lo envía a la DGII.' },
      { url: 'mesapos.link/precios', title: 'Sitio comercial', desc: 'La web de ventas, con precios en pesos y páginas por tipo de negocio.' },
    ],
    decisions: [
      {
        tag: '01 · Sin internet',
        quote: '“Si se cae el internet en pleno servicio, el restaurante sigue vendiendo.”',
        desc: 'La pantalla de servicio lee de una base local (Drift sobre SQLite) y una cola sube los cambios en orden cada 10 segundos cuando vuelve la red.',
      },
      {
        tag: '02 · El servidor pone el precio',
        quote: '“El precio de un plato no lo decide la tablet que cobra.”',
        desc: 'Dinero, inventario y permisos solo cambian por funciones de Postgres en el servidor. Tras una auditoría, las 11 funciones de dinero bloquean la orden y comprueban que es del restaurante de la sesión.',
      },
      {
        tag: '03 · Entorno de práctica',
        quote: '“El personal nuevo practica sin tocar las ventas de verdad.”',
        desc: 'Un proyecto aparte sirve un quiosco de entrenamiento, marcado con una franja, para aprender a usar Mesa sin ensuciar los reportes del negocio.',
      },
    ],
    stack: [
      ['App', 'Flutter (iPad · Android · Mac · Windows · navegador)'],
      ['Datos locales', 'Drift (SQLite)'],
      ['Backend', 'Supabase · Postgres · Edge Functions'],
      ['Web', 'React · Vite'],
      ['Infra', 'Cloudflare'],
    ],
  },

  premium: {
    name: 'Premium Diagnósticos',
    no: 'Nº 04',
    kind: 'Web de salud',
    desc: 'Web de un centro de imágenes médicas en Piantini, Santo Domingo.',
    metaDesc:
      'Cómo diseñé y construí la nueva web de Premium Diagnósticos y la migré desde Wix sin perder sus URLs en Google.',
    spec: {
      year: '2026',
      role: 'Diseño y desarrollo · migración desde Wix',
      platform: 'Web · Portal de empleos',
      stack: 'Astro · Tailwind · Flask · Cloudflare',
      status: 'En línea',
    },
    problem: {
      title: 'Un centro de diagnóstico con tecnología de punta necesitaba una web que transmitiera esa precisión y llevara a agendar.',
      desc: 'El sitio anterior estaba en Wix, con URLs que Google ya tenía indexadas y que no se podían perder en el cambio.',
    },
    built: [
      { url: 'premiumdiagnosticos.com/servicios', title: 'Catálogo de estudios', desc: 'Los 18 estudios del centro en un solo lugar, con el detalle de cada uno al seleccionarlo.' },
      { url: 'premiumdiagnosticos.com/servicios/resonancia-magnetica', title: 'Página por estudio', desc: 'Cada estudio tiene su URL propia y se agenda por WhatsApp desde ahí.' },
      { url: 'premiumdiagnosticos.com/scanova', title: 'Scanova', desc: 'Página propia para la resonancia magnética de cuerpo completo del centro.' },
      { url: null, title: 'Versión móvil', desc: 'Horario, dirección y WhatsApp a un toque desde el celular.' },
    ],
    decisions: [
      {
        tag: '01 · Migración',
        quote: '“Ninguna URL del sitio viejo coincidía con una nueva, salvo la portada.”',
        desc: 'Inventarié las URLs de Wix (sitemaps, menú e índice de Google), las redirigí con 301 y moví el DNS de Wix a Cloudflare en dos fases para que el sitio nunca dejara de responder.',
      },
      {
        tag: '02 · Rendimiento',
        quote: '“La fuente de la marca pesaba 39 KB por grosor.”',
        desc: 'La recorté a caracteres latinos: 14 KB por grosor, un 63 % menos. Los cuatro grosores del primer pantallazo ahora pesan menos que los dos de antes.',
      },
      {
        tag: '03 · Una URL por página',
        quote: '“El canonical decía /prevox/ y Cloudflare servía /prevox.”',
        desc: 'Unifiqué la barra final: canonical, sitemap, enlaces internos y lo que sirve el servidor dicen lo mismo.',
      },
    ],
    extra: {
      label: 'Portal de empleos',
      title: 'Bolsa de empleo y banco de talento',
      desc: 'Un sistema aparte, en empleos.premiumdiagnosticos.com, que reemplazó la versión de escritorio de Gestión Humana: vacantes públicas, postulación con hoja de vida y un panel interno para todo el proceso de selección. En producción desde octubre de 2026.',
      points: [
        'El candidato postula sin crear cuenta. Si ya estaba en el banco (mismo correo o teléfono), se actualiza su perfil en vez de duplicarlo.',
        'Lee hojas de vida en PDF y Word y las clasifica por área, subárea y nivel con reglas, sin IA.',
        'Los archivos son privados: solo se descargan con firma y con sesión. Tres roles: administrador, reclutador y consulta.',
        'Python y Flask en Cloudflare Workers, con base de datos D1 y 197 pruebas automáticas. Los datos se migraron de la versión de escritorio.',
      ],
      built: [
        { url: 'empleos.premiumdiagnosticos.com', title: 'Vacantes abiertas', desc: 'El frente público, con el mismo sistema visual de la web del centro.' },
        { url: 'empleos.premiumdiagnosticos.com/aplicar', title: 'Postulación', desc: 'El detalle de la vacante y el formulario con la hoja de vida.' },
        { url: 'empleos — panel de gestión humana', title: 'Panel interno', desc: 'El banco de talento de un vistazo: candidatos por área, nivel y etapa.' },
        { url: 'empleos — perfil del candidato', title: 'Perfil del candidato', desc: 'Lo que se leyó de la hoja de vida, dónde quedó archivada y su seguimiento.' },
      ],
    },
    stack: [
      ['Web', 'Astro (estático)'],
      ['Estilos', 'Tailwind CSS v4'],
      ['Tipografía', 'Axiforma, recortada a latín'],
      ['Empleos', 'Python · Flask · D1 · Cloudinary'],
      ['Hosting', 'Cloudflare Workers'],
    ],
  },

  scanova: {
    name: 'Scanova',
    no: 'Nº 03',
    kind: 'Portal de pacientes',
    desc: 'Portal de resultados médicos de Premium Diagnósticos: el paciente ve su resonancia órgano por órgano.',
    metaDesc:
      'Cómo diseñé y construí Scanova, el portal de resultados de Premium Diagnósticos: portal del paciente, panel médico en Strapi y API.',
    spec: {
      year: '2025',
      role: 'Diseño y desarrollo completo',
      platform: 'Portal web de pacientes · Panel médico · API',
      stack: 'Flutter · Strapi · Node.js · MongoDB',
      status: 'En producción',
    },
    problem: {
      title: 'Un reporte de resonancia de cuerpo completo es largo y técnico, y el paciente no sabe por dónde empezar a leerlo.',
      desc: 'Hacía falta mostrarle sus resultados de forma clara, avisarle en cuanto estuvieran listos y darle el reporte en su idioma.',
    },
    built: [
      { url: 'scanova — inicio del paciente', title: 'Inicio del paciente', desc: 'Sus estudios, cuántas regiones se analizaron y el hallazgo más importante de cada uno.' },
      { url: 'scanova — reporte por regiones', title: 'Reporte por regiones', desc: 'Cada órgano con un estado de cinco niveles, de «sin anomalías» a «atención inmediata», y el PDF para descargar.' },
      { url: 'strapi — estudios', title: 'Panel médico en Strapi', desc: 'Donde el equipo médico registra pacientes y estudios y los publica.' },
      { url: 'strapi — hallazgos por órgano', title: 'Hallazgos por órgano', desc: 'Región, estado, descripción y recomendación de cada parte del cuerpo, más el reporte, el laboratorio y la densitometría.' },
    ],
    decisions: [
      {
        tag: '01 · Aviso automático',
        quote: '“Cuando la doctora publica un estudio, el paciente se entera en menos de un minuto.”',
        desc: 'Una tarea revisa cada minuto los estudios publicados sin aviso, envía el correo con el enlace al portal y la opción de agendar una cita, y marca el estudio para no repetir el envío.',
      },
      {
        tag: '02 · En el idioma del paciente',
        quote: '“El reporte sale en el idioma que eligió el paciente.”',
        desc: 'Cada paciente guarda su idioma. El portal, los nombres de los órganos y el PDF, que se genera con Puppeteer desde una plantilla HTML, salen en español o en inglés.',
      },
      {
        tag: '03 · Strapi como fuente',
        quote: '“El PDF salía sin los nombres de los órganos.”',
        desc: 'Strapi no devolvía las relaciones anidadas. Creé un endpoint con populate profundo explícito y pasé pacientes y formularios a Strapi, sin depender de la base vieja.',
      },
    ],
    stack: [
      ['Portal', 'Flutter (web) · español e inglés'],
      ['Panel médico', 'Strapi 5 · PostgreSQL'],
      ['API', 'Node.js · Express · MongoDB'],
      ['Reportes', 'Puppeteer (PDF)'],
      ['Correo', 'SendGrid'],
    ],
  },

  caceres: {
    name: 'Cáceres Torres',
    no: 'Nº 05',
    kind: 'Web corporativa',
    desc: 'Web bilingüe para un bufete de abogados con más de 50 años.',
    metaDesc:
      'Cómo migré la web del bufete Cáceres Torres de WordPress a un sitio bilingüe en React sin perder sus URLs.',
    spec: {
      year: '2026',
      role: 'Desarrollo · migración desde WordPress',
      platform: 'Web bilingüe (ES / EN)',
      stack: 'React · TypeScript · Tailwind · i18next',
      status: 'En línea',
    },
    problem: {
      title: 'La web de un bufete con más de 50 años corría en WordPress, en hosting compartido y sin URLs propias en inglés.',
      desc: 'Había que migrarla sin perder las URLs que Google ya conocía ni los artículos publicados durante años.',
    },
    built: [
      { url: 'cacerestorres.com/en', title: 'Versión en inglés', desc: '28 páginas en inglés con URL propia y hreflang, prerenderizadas para los buscadores.' },
      { url: 'cacerestorres.com — áreas de práctica', title: 'Áreas de práctica', desc: 'Una página por especialidad: corporativo, bancario, litigios y fiscal.' },
      { url: 'cacerestorres.com/equipo', title: 'Equipo', desc: 'Los socios fundadores y el equipo del bufete.' },
      { url: null, title: 'Versión móvil', desc: 'La misma web, adaptada al celular.' },
    ],
    decisions: [
      {
        tag: '01 · Migración',
        quote: '“El sitio nuevo conserva las mismas URLs en español que tenía el WordPress.”',
        desc: 'Respaldé la base de datos y los archivos antes de tocar nada, pasé el blog a /publicaciones y dejé el WordPress viejo aparte como plan de vuelta atrás.',
      },
      {
        tag: '02 · Caída del firewall',
        quote: '“Un día el sitio dejó de existir para el público.”',
        desc: 'El firewall de SiteLock dejó de responder por el dominio. Vi que era DNS, no el servidor; apunté el dominio directo al origen y verifiqué las 56 URLs del sitemap desde 7 resolvers.',
      },
      {
        tag: '03 · CDN sin aviso',
        quote: '“El hosting puso su CDN delante del sitio sin avisar.”',
        desc: 'Ese CDN habla HTTP con el servidor, así que forzar HTTPS en el .htaccess creaba un bucle de redirecciones. Lo condicioné a las cabeceras del CDN.',
      },
    ],
    stack: [
      ['Web', 'React 19 · TypeScript · Vite'],
      ['Estilos', 'Tailwind CSS'],
      ['Idiomas', 'i18next (ES / EN)'],
      ['Hosting', 'Apache (Network Solutions)'],
    ],
  },

  cacebal: {
    name: 'Cacebal',
    no: 'Nº 06',
    kind: 'Tienda en línea',
    desc: 'Tienda en línea de productos gourmet importados.',
    metaDesc: 'La tienda en línea de Cacebal, importadora de productos gourmet italianos en Santo Domingo.',
    spec: {
      year: null,
      role: null,
      platform: 'Tienda en línea',
      stack: 'Shopify',
      status: 'En línea',
    },
    problem: {
      title: 'Cacebal importa marcas italianas como Coppini y Solania, y las vende en línea en Santo Domingo.',
      desc: 'Una tienda con catálogo por marca y categoría, retiro en tienda y entregas dentro del Distrito Nacional.',
    },
    built: [
      { url: 'cacebal.com — aceites de oliva', title: 'Catálogo por categoría', desc: 'Aceites, tomates, vinagres, aceitunas y productos asiáticos, con filtros por disponibilidad y precio.' },
      { url: 'cacebal.com — ficha de producto', title: 'Ficha de producto', desc: 'Tamaños, cantidad y si se retira en tienda o se entrega a domicilio.' },
      { url: 'cacebal.com — coppini', title: 'Página por marca', desc: 'La historia de cada productor junto a sus productos destacados.' },
      { url: null, title: 'Versión móvil', desc: 'La tienda completa desde el celular.' },
    ],
    stack: [['Comercio', 'Shopify']],
  },

  medwork: {
    name: 'MedWork Global',
    no: 'Nº 07',
    kind: 'Web de salud',
    desc: 'Web de un centro de salud con más de 20 especialidades en Piantini, Santo Domingo.',
    metaDesc: 'La web de MedWork Global, centro de salud en Piantini con especialidades, urgencias, estudios ambulatorios y wellness.',
    spec: {
      year: null,
      role: null,
      platform: 'Web',
      stack: 'WordPress · Elementor',
      status: 'En línea',
    },
    problem: {
      title: 'MedWork Global reúne más de 20 especialidades, urgencias, estudios ambulatorios y una unidad de wellness en un solo centro.',
      desc: 'La web presenta cada servicio, lleva al paciente a llamar o escribir por WhatsApp y ofrece consultorios a los médicos.',
    },
    built: [
      { url: 'medworkglobal.com/especialidades', title: 'Especialidades médicas', desc: 'Las más de 20 especialidades del centro, con páginas para las principales.' },
      { url: 'medworkglobal.com/wellness', title: 'Wellness', desc: 'La unidad de wellness y antienvejecimiento, con su propia identidad dentro del sitio.' },
      { url: 'medworkglobal.com/urgencias-medicas', title: 'Urgencias médicas', desc: 'Qué es una urgencia médica y cómo contactar al centro.' },
      { url: 'medworkglobal.com/servicios-medicos', title: 'Servicios para médicos', desc: 'Consultorios por tandas para especialistas, con el soporte administrativo incluido.' },
    ],
    stack: [
      ['CMS', 'WordPress'],
      ['Diseño', 'Elementor'],
      ['Medición', 'Google Tag Manager'],
    ],
  },
};
