import { projects, type Img } from './projects';

// Capturas reales de los flujos públicos de AutoListo.
export const autolistoGallery = [
  { id: 'home', image: projects.autolisto.hero, url: 'autolisto.net' },
  { id: 'listing', image: projects.autolisto.card, url: 'autolisto.net/carros' },
  { id: 'compare', image: { src: '/shots/autolisto-comparacion.jpg', width: 1440, height: 900 }, url: 'autolisto.net/comparar' },
  { id: 'ai', image: projects.autolisto.built[0]!, url: 'autolisto.net/buscar-con-ia' },
] as const satisfies readonly { id: string; image: Img; url: string }[];
