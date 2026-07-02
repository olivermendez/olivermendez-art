import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import { getFeaturedProject } from '../data/projects';
import { ui } from '../i18n/ui';
import { useI18n } from '../i18n/I18nProvider';

const gridColors = [
  '#0D9488', '#059669', '#34D399', '#0F766E',
  '#059669', '#34D399', '#0D9488', '#059669',
  '#34D399', '#0F766E', '#059669', '#0D9488',
  '#0D9488', '#059669', '#34D399', '#0F766E',
];

const HeroSection = () => {
  const { t, path } = useI18n();
  const headlineRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const featured = getFeaturedProject();

  // Entrada animada del hero (respeta prefers-reduced-motion).
  useEffect(() => {
    const targets = [headlineRef.current, descRef.current, gradientRef.current, cardRef.current];

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.fromTo(headlineRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
      .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.4)
      .fromTo(gradientRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, 0.3)
      .fromTo(cardRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.6 }, 0.6);

    return () => { tl.kill(); };
  }, []);

  // Parallax del grid, throttled con requestAnimationFrame.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let ticking = false;

    const update = () => {
      if (gradientRef.current) {
        gradientRef.current.style.transform = `translateY(${window.scrollY * 0.05}px)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* Top Row */}
      <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center pt-[80px] lg:pt-[60px] px-6 max-w-content mx-auto w-full gap-8 lg:gap-0">
        {/* Headline */}
        <div ref={headlineRef} className="lg:w-[60%] opacity-0">
          <h1 className="font-display text-hero-sm md:text-hero-md lg:text-hero text-text-primary max-w-[600px]">
            {t(ui.hero.titleLine1)}
            <br />
            {t(ui.hero.titleLine2)}
          </h1>
          {/* Scroll chevrons */}
          <div className="hidden lg:flex flex-col items-start mt-8" aria-hidden="true">
            <ChevronDown size={20} className="text-text-secondary/40 animate-bounce-chevron chevron-delay-1" />
            <ChevronDown size={20} className="text-text-secondary/40 animate-bounce-chevron chevron-delay-2 -mt-2" />
            <ChevronDown size={20} className="text-text-secondary/40 animate-bounce-chevron chevron-delay-3 -mt-2" />
          </div>
        </div>

        {/* Description */}
        <div className="lg:w-[40%] lg:pl-8">
          <p ref={descRef} className="font-body text-body-lg text-text-secondary max-w-[400px] opacity-0">
            {t(ui.hero.description)}
          </p>
          {/* Mobile chevrons */}
          <div className="flex lg:hidden flex-col items-start mt-6" aria-hidden="true">
            <ChevronDown size={18} className="text-text-secondary/40 animate-bounce-chevron chevron-delay-1" />
            <ChevronDown size={18} className="text-text-secondary/40 animate-bounce-chevron chevron-delay-2 -mt-1.5" />
            <ChevronDown size={18} className="text-text-secondary/40 animate-bounce-chevron chevron-delay-3 -mt-1.5" />
          </div>
        </div>
      </div>

      {/* Bottom Row — Gradient Grid */}
      <div ref={gradientRef} className="relative w-full h-[45vh] min-h-[280px] opacity-0">
        {/* Grid squares */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4" aria-hidden="true">
          {gridColors.map((color, i) => (
            <div
              key={i}
              className={`w-full h-full animate-gradient-shimmer shimmer-delay-${(i % 7) + 1}`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern-white opacity-[0.08]" aria-hidden="true" />

        {/* IN YOUR HANDS label */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/70">
            {t(ui.hero.inYourHands)}
          </span>
        </div>

        {/* Pixel Cat */}
        <div className="absolute bottom-4 right-8 z-10" aria-hidden="true">
          <svg width="64" height="64" viewBox="0 0 16 16" fill="none" style={{ imageRendering: 'pixelated' }}>
            <path d="M4 2L3 5H2v2h1l1 7h8l1-7h1V5h-1l-1-3h-1l1 3H5l1-3z" fill="#0F1F17" />
            <rect x="6" y="10" width="1" height="1" fill="white" />
            <rect x="9" y="10" width="1" height="1" fill="white" />
          </svg>
        </div>

        {/* Featured Project Card */}
        {featured && (
          <div ref={cardRef} className="absolute bottom-4 right-24 lg:right-32 z-20 opacity-0">
            <Link
              to={path(`/project/${featured.id}`)}
              className="block bg-white rounded-card shadow-card p-4 w-[260px] lg:w-[280px] hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                    {t(ui.hero.featured)}
                  </span>
                  <p className="font-display text-base font-medium text-text-primary mt-1">
                    {featured.title}
                  </p>
                </div>
                <ArrowUpRight size={18} className="text-text-secondary mt-1" />
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
