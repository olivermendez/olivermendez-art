/**
 * Punto único de configuración de GSAP.
 * Registra ScrollTrigger una sola vez y re-exporta gsap para que las
 * secciones no tengan que registrar el plugin cada una por su cuenta.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** True si el usuario prefiere reducir el movimiento (accesibilidad). */
export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export { gsap, ScrollTrigger };
