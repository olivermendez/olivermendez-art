// Destinos reales de los botones. Mientras un valor sea `null`, el sitio
// muestra la etiqueta [PENDIENTE] del diseño en lugar de inventar una URL.
export const links = {
  linkedin: 'https://www.linkedin.com/in/olivermendeza/' as string | null,
  github: 'https://github.com/olivermendez' as string | null,
  email: 'olivermendezarias@gmail.com' as string | null,
  whatsapp: null as string | null, // p. ej. 'https://wa.me/1809XXXXXXX'
};

export const mailto = (email: string | null) => (email ? `mailto:${email}` : null);
