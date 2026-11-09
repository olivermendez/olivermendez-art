// Destinos reales de los botones. Mientras un valor sea `null`, el sitio
// muestra la etiqueta [PENDIENTE] del diseño en lugar de inventar una URL.
export const links = {
  cv: { es: null as string | null, en: null as string | null }, // p. ej. '/cv/oliver-mendez-cv.pdf'
  linkedin: 'https://www.linkedin.com/in/olivermendeza' as string | null,
  github: null as string | null,
  email: null as string | null,
  whatsapp: null as string | null, // p. ej. 'https://wa.me/1809XXXXXXX'
  calendly: null as string | null,
};

export const mailto = (email: string | null) => (email ? `mailto:${email}` : null);
