import type { CaseId, CaseText } from './cases.es';

export const casesEn: Record<CaseId, CaseText> = {
  autolisto: {
    name: 'AutoListo',
    no: 'Nº 01',
    kind: 'Marketplace',
    desc: 'A marketplace for buying and selling vehicles in the Dominican Republic.',
    metaDesc:
      'How I designed and built AutoListo, a vehicle marketplace in the Dominican Republic: web, iOS app and AI integrations.',
    spec: {
      year: '2026',
      role: 'Founder · end-to-end design and development',
      platform: 'Web · iOS app · MCP server',
      stack: 'Next.js · TypeScript · Supabase · SwiftUI · Groq',
      status: 'In production (beta)',
    },
    problem: {
      title: 'Buying a used car in the Dominican Republic is slow and opaque.',
      desc: 'And on the other side, dealers have no tools to list and manage their inventory online.',
    },
    built: [
      { url: 'autolisto — natural-language ai search', title: 'Natural-language AI search', desc: 'You type what you want the way you’d say it to a person; the AI turns it into filters.' },
      { url: 'autolisto — vehicle page', title: 'Vehicle page', desc: 'Everything about the car on a single page.' },
      { url: 'autolisto — dealer dashboard', title: 'Dealer dashboard', desc: 'Inventory search, status filters and per-vehicle metrics. Captured locally with demo data.' },
      { url: null, title: 'Native iOS app', desc: 'Built with SwiftUI.' },
      { url: 'autolisto — lead management', title: 'Buyer follow-up', desc: 'Vehicle inquiries, follow-up statuses and internal notes. Captured locally with fictional customers.' },
      { url: 'autolisto — listing performance', title: 'Listing performance', desc: 'Daily views, contacts, favorites and price history on one screen. All displayed metrics are demo data.' },
    ],
    decisions: [
      {
        tag: '01 · Data quality',
        quote: '“136 of 174 cars said ‘synchronized gearbox’. It wasn’t data: it was another form’s default value.”',
        desc: 'While importing the first real dealer’s inventory, I noticed the field was a default value, not a measurement. Publishing it would have listed brand-new SUVs as manual. I recovered the ones the listing text confirmed and left the rest empty.',
      },
      {
        tag: '02 · Observability',
        quote: '“The error monitor only reported from my laptop.”',
        desc: 'Sentry wasn’t seeing anything from production. I found the cause, fixed it and verified that real errors were being sent.',
      },
      {
        tag: '03 · Server-side validation',
        quote: '“A user could skip the free limit by choosing their plan in the request.”',
        desc: 'Everything that decides price or quota is now decided on the server.',
      },
    ],
    seo: {
      done: {
        title: 'Work done',
        desc: 'A brand-new domain: in September 2026 Google listed all 55 of the site’s URLs as “discovered, not indexed”. I built the technical foundation (per-listing metadata, sitemap, robots, XSS-safe JSON-LD and routes by province, make and model) plus free tools that answer real searches: a toll calculator and a history of the MICM’s official fuel prices.',
      },
      evidence: {
        title: 'Evidence and results',
        desc: 'First Google Search Console export, four weeks between September and October 2026: 2,194 impressions and 60 clicks. 82% of impressions came from the toll calculator (1% CTR, average position 6.6). Next step: measuring how many of those visits end in a sign-up or a listing.',
      },
    },
    stack: [
      ['Web', 'Next.js · TypeScript'],
      ['App', 'SwiftUI (iOS)'],
      ['Data', 'Supabase'],
      ['AI', 'Groq'],
      ['Integrations', 'MCP server'],
    ],
  },

  mesapos: {
    name: 'MesaPOS',
    no: 'Nº 02',
    kind: 'Point of sale',
    desc: 'A point-of-sale system for restaurants in the Dominican Republic that keeps selling even when the internet goes down.',
    metaDesc:
      'How I designed and built MesaPOS, a point of sale for restaurants in the Dominican Republic that works offline and issues e-invoices.',
    spec: {
      year: '2026',
      role: 'Founder · end-to-end design and development',
      platform: 'App (iPad · Android · Mac · Windows) · Web dashboard · QR menu',
      stack: 'Flutter · Supabase · React · Cloudflare',
      status: 'In production',
    },
    problem: {
      title: 'A restaurant can’t stop charging customers because the internet went down.',
      desc: 'And every sale has to carry the right ITBIS tax and, more and more, go out as an e-CF electronic invoice to the DGII.',
    },
    built: [
      { url: null, frame: 'tablet', title: 'Table map', desc: 'The server’s kiosk: every table by area, free or taken, and for how long.' },
      { url: null, frame: 'tablet', title: 'Taking the order', desc: 'The catalog by category on one side and the bill on the other, with kitchen notes and ITBIS already added.' },
      { url: null, frame: 'tablet', title: 'Checkout', desc: 'Cash, card or transfer, full or split bill, with the 18% ITBIS broken out.' },
      { url: 'app.mesapos.link — products', title: 'Web dashboard', desc: 'Where the owner manages the menu, staff, cash registers, invoicing and reports.' },
      { url: 'mesapos.link/factura-electronica', title: 'e-CF electronic invoicing', desc: 'Mesa issues the e-CF for each sale at checkout and sends it to the DGII.' },
      { url: 'mesapos.link/precios', title: 'Marketing site', desc: 'The sales website, with prices in pesos and pages for each type of business.' },
    ],
    decisions: [
      {
        tag: '01 · Offline',
        quote: '“If the internet goes down mid-service, the restaurant keeps selling.”',
        desc: 'The service screen reads from a local database (Drift on SQLite), and a queue uploads changes in order every 10 seconds once the connection is back.',
      },
      {
        tag: '02 · The server sets the price',
        quote: '“The price of a dish isn’t decided by the tablet that charges for it.”',
        desc: 'Money, stock and permissions only change through Postgres functions on the server. After an audit, all 11 money functions lock the order and check it belongs to the session’s restaurant.',
      },
      {
        tag: '03 · Practice environment',
        quote: '“New staff practice without touching real sales.”',
        desc: 'A separate project serves a training kiosk, marked with a banner, so people can learn Mesa without polluting the business’s reports.',
      },
    ],
    stack: [
      ['App', 'Flutter (iPad · Android · Mac · Windows · browser)'],
      ['Local data', 'Drift (SQLite)'],
      ['Backend', 'Supabase · Postgres · Edge Functions'],
      ['Web', 'React · Vite'],
      ['Infra', 'Cloudflare'],
    ],
  },

  premium: {
    name: 'Premium Diagnósticos',
    no: 'Nº 04',
    kind: 'Healthcare site',
    desc: 'Website for a medical imaging center in Piantini, Santo Domingo.',
    metaDesc:
      'How I designed and built the new Premium Diagnósticos website and migrated it from Wix without losing its Google URLs.',
    spec: {
      year: '2026',
      role: 'Design and development · migration from Wix',
      platform: 'Web · Careers portal',
      stack: 'Astro · Tailwind · Flask · Cloudflare',
      status: 'Live',
    },
    problem: {
      title: 'A diagnostic center with cutting-edge equipment needed a website that conveyed that precision and led people to book.',
      desc: 'The old site ran on Wix, with URLs Google had already indexed that couldn’t be lost in the move.',
    },
    built: [
      { url: 'premiumdiagnosticos.com/servicios', title: 'Study catalog', desc: 'All 18 of the center’s studies in one place, with each one’s details on selection.' },
      { url: 'premiumdiagnosticos.com/servicios/resonancia-magnetica', title: 'A page per study', desc: 'Every study has its own URL and can be booked over WhatsApp from there.' },
      { url: 'premiumdiagnosticos.com/scanova', title: 'Scanova', desc: 'A dedicated page for the center’s full-body MRI.' },
      { url: null, title: 'Mobile version', desc: 'Hours, address and WhatsApp one tap away on a phone.' },
    ],
    decisions: [
      {
        tag: '01 · Migration',
        quote: '“No URL from the old site matched a new one, except the home page.”',
        desc: 'I inventoried the Wix URLs (sitemaps, menu and Google’s index), redirected them with 301s and moved DNS from Wix to Cloudflare in two phases so the site never stopped responding.',
      },
      {
        tag: '02 · Performance',
        quote: '“The brand font weighed 39 KB per weight.”',
        desc: 'I subset it to Latin characters: 14 KB per weight, 63% less. The four weights above the fold now weigh less than the two used before.',
      },
      {
        tag: '03 · One URL per page',
        quote: '“The canonical said /prevox/ while Cloudflare served /prevox.”',
        desc: 'I unified the trailing slash: canonical, sitemap, internal links and what the server returns all say the same thing.',
      },
    ],
    extra: {
      label: 'Careers portal',
      title: 'Job board and talent pool',
      desc: 'A separate system at empleos.premiumdiagnosticos.com that replaced HR’s desktop app: public openings, applications with a CV and an internal dashboard for the whole hiring process. In production since October 2026.',
      points: [
        'Candidates apply without creating an account. If they were already in the pool (same email or phone), their profile is updated instead of duplicated.',
        'It reads CVs in PDF and Word and sorts them by area, sub-area and level with rules, no AI.',
        'Files are private: they can only be downloaded signed and with a session. Three roles: admin, recruiter and read-only.',
        'Python and Flask on Cloudflare Workers, with a D1 database and 197 automated tests. Data was migrated from the desktop app.',
      ],
      built: [
        { url: 'empleos.premiumdiagnosticos.com', title: 'Open positions', desc: 'The public front, with the same visual system as the center’s website.' },
        { url: 'empleos.premiumdiagnosticos.com/aplicar', title: 'Application', desc: 'The job details and the form with the CV upload.' },
        { url: 'empleos — HR dashboard', title: 'Internal dashboard', desc: 'The talent pool at a glance: candidates by area, level and stage.' },
        { url: 'empleos — candidate profile', title: 'Candidate profile', desc: 'What was read from the CV, where it was filed and its follow-up.' },
      ],
    },
    stack: [
      ['Web', 'Astro (static)'],
      ['Styles', 'Tailwind CSS v4'],
      ['Typography', 'Axiforma, subset to Latin'],
      ['Careers', 'Python · Flask · D1 · Cloudinary'],
      ['Hosting', 'Cloudflare Workers'],
    ],
  },

  scanova: {
    name: 'Scanova',
    no: 'Nº 03',
    kind: 'Patient portal',
    desc: 'Premium Diagnósticos’ medical results portal: patients see their MRI organ by organ.',
    metaDesc:
      'How I designed and built Scanova, Premium Diagnósticos’ results portal: patient portal, Strapi medical dashboard and API.',
    spec: {
      year: '2025',
      role: 'End-to-end design and development',
      platform: 'Patient web portal · Medical dashboard · API',
      stack: 'Flutter · Strapi · Node.js · MongoDB',
      status: 'In production',
    },
    problem: {
      title: 'A full-body MRI report is long and technical, and patients don’t know where to start reading it.',
      desc: 'Results had to be shown clearly, patients had to be notified as soon as they were ready, and the report had to come in their language.',
    },
    built: [
      { url: 'scanova — patient home', title: 'Patient home', desc: 'Their studies, how many regions were analyzed and the most important finding of each.' },
      { url: 'scanova — report by region', title: 'Report by region', desc: 'Every organ with a five-level status, from “no anomalies” to “immediate attention”, plus the PDF to download.' },
      { url: 'strapi — studies', title: 'Medical dashboard in Strapi', desc: 'Where the medical team registers patients and studies and publishes them.' },
      { url: 'strapi — findings by organ', title: 'Findings by organ', desc: 'Region, status, description and recommendation for each body part, plus the report, lab and densitometry files.' },
    ],
    decisions: [
      {
        tag: '01 · Automatic notice',
        quote: '“When the doctor publishes a study, the patient knows within a minute.”',
        desc: 'A job checks every minute for published studies with no notice sent, emails the link to the portal with the option to book an appointment, and flags the study so it’s never sent twice.',
      },
      {
        tag: '02 · In the patient’s language',
        quote: '“The report comes out in the language the patient chose.”',
        desc: 'Each patient stores their language. The portal, the organ names and the PDF, generated with Puppeteer from an HTML template, come out in Spanish or English.',
      },
      {
        tag: '03 · Strapi as the source',
        quote: '“The PDF came out without the organ names.”',
        desc: 'Strapi wasn’t returning nested relations. I built an endpoint with explicit deep populate and moved patients and forms to Strapi, off the old database.',
      },
    ],
    stack: [
      ['Portal', 'Flutter (web) · Spanish and English'],
      ['Medical dashboard', 'Strapi 5 · PostgreSQL'],
      ['API', 'Node.js · Express · MongoDB'],
      ['Reports', 'Puppeteer (PDF)'],
      ['Email', 'SendGrid'],
    ],
  },

  caceres: {
    name: 'Cáceres Torres',
    no: 'Nº 05',
    kind: 'Corporate site',
    desc: 'Bilingual website for a law firm with over 50 years of practice.',
    metaDesc:
      'How I migrated the Cáceres Torres law firm website from WordPress to a bilingual React site without losing its URLs.',
    spec: {
      year: '2026',
      role: 'Development · migration from WordPress',
      platform: 'Bilingual website (ES / EN)',
      stack: 'React · TypeScript · Tailwind · i18next',
      status: 'Live',
    },
    problem: {
      title: 'The website of a law firm with over 50 years of practice ran on WordPress, on shared hosting, with no English URLs of its own.',
      desc: 'It had to be migrated without losing the URLs Google already knew or the articles published over the years.',
    },
    built: [
      { url: 'cacerestorres.com/en', title: 'English version', desc: '28 English pages with their own URLs and hreflang, prerendered for search engines.' },
      { url: 'cacerestorres.com — practice areas', title: 'Practice areas', desc: 'A page per specialty: corporate, banking, litigation and tax.' },
      { url: 'cacerestorres.com/equipo', title: 'Team', desc: 'The founding partners and the firm’s team.' },
      { url: null, title: 'Mobile version', desc: 'The same website, adapted to phones.' },
    ],
    decisions: [
      {
        tag: '01 · Migration',
        quote: '“The new site keeps the same Spanish URLs the WordPress site had.”',
        desc: 'I backed up the database and files before touching anything, moved the blog to /publicaciones and kept the old WordPress aside as a rollback plan.',
      },
      {
        tag: '02 · Firewall outage',
        quote: '“One day the site simply stopped existing for the public.”',
        desc: 'The SiteLock firewall stopped serving the domain. I found it was DNS, not the server; pointed the domain straight at the origin and verified all 56 sitemap URLs from 7 resolvers.',
      },
      {
        tag: '03 · Unannounced CDN',
        quote: '“The host put its CDN in front of the site without notice.”',
        desc: 'That CDN talks HTTP to the server, so forcing HTTPS in .htaccess created a redirect loop. I made it conditional on the CDN’s headers.',
      },
    ],
    stack: [
      ['Web', 'React 19 · TypeScript · Vite'],
      ['Styles', 'Tailwind CSS'],
      ['Languages', 'i18next (ES / EN)'],
      ['Hosting', 'Apache (Network Solutions)'],
    ],
  },

  cacebal: {
    name: 'Cacebal',
    no: 'Nº 06',
    kind: 'Online store',
    desc: 'Online store for imported gourmet products.',
    metaDesc: 'The online store of Cacebal, an importer of Italian gourmet products in Santo Domingo.',
    spec: {
      year: null,
      role: null,
      platform: 'Online store',
      stack: 'Shopify',
      status: 'Live',
    },
    problem: {
      title: 'Cacebal imports Italian brands like Coppini and Solania and sells them online in Santo Domingo.',
      desc: 'A store with a catalog by brand and category, in-store pickup and delivery within the National District.',
    },
    built: [
      { url: 'cacebal.com — olive oils', title: 'Catalog by category', desc: 'Oils, tomatoes, vinegars, olives and Asian products, with filters by availability and price.' },
      { url: 'cacebal.com — product page', title: 'Product page', desc: 'Sizes, quantity and whether it’s picked up in store or delivered.' },
      { url: 'cacebal.com — coppini', title: 'A page per brand', desc: 'Each producer’s story alongside its featured products.' },
      { url: null, title: 'Mobile version', desc: 'The whole store from a phone.' },
    ],
    stack: [['Commerce', 'Shopify']],
  },

  medwork: {
    name: 'MedWork Global',
    no: 'Nº 07',
    kind: 'Healthcare site',
    desc: 'Website for a health center with over 20 specialties in Piantini, Santo Domingo.',
    metaDesc: 'The website of MedWork Global, a health center in Piantini with specialties, urgent care, outpatient studies and wellness.',
    spec: {
      year: null,
      role: null,
      platform: 'Web',
      stack: 'WordPress · Elementor',
      status: 'Live',
    },
    problem: {
      title: 'MedWork Global brings over 20 specialties, urgent care, outpatient studies and a wellness unit together in one center.',
      desc: 'The website presents each service, leads patients to call or message on WhatsApp and offers consulting rooms to doctors.',
    },
    built: [
      { url: 'medworkglobal.com/especialidades', title: 'Medical specialties', desc: 'The center’s 20+ specialties, with pages for the main ones.' },
      { url: 'medworkglobal.com/wellness', title: 'Wellness', desc: 'The wellness and anti-aging unit, with its own identity inside the site.' },
      { url: 'medworkglobal.com/urgencias-medicas', title: 'Urgent care', desc: 'What a medical emergency is and how to reach the center.' },
      { url: 'medworkglobal.com/servicios-medicos', title: 'Services for doctors', desc: 'Consulting rooms by shift for specialists, with administrative support included.' },
    ],
    stack: [
      ['CMS', 'WordPress'],
      ['Design', 'Elementor'],
      ['Analytics', 'Google Tag Manager'],
    ],
  },
};
