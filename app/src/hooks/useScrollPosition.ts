import { useEffect, useState } from 'react';

/**
 * Indica si la página está desplazada más allá de `threshold` px.
 * Throttle con requestAnimationFrame para no recalcular en cada evento.
 */
export function useScrollPosition(threshold = 80) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setIsScrolled(window.scrollY > threshold);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return { isScrolled };
}
