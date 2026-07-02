import { useEffect, useState } from 'react';

/**
 * Devuelve el id de la sección visible más cercana al top del viewport,
 * usando IntersectionObserver (no lee layout en cada evento de scroll).
 *
 * @param ids  Lista de ids de <section> a observar.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState('');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Guarda la visibilidad de cada sección y elige la primera visible.
    const visibility = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting);
        }
        const current = ids.find((id) => visibility.get(id));
        setActive(current ?? '');
      },
      // La "línea de activación" está al 20% desde arriba del viewport.
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
