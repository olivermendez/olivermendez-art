import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import PixelIcon from '../components/PixelIcon';
import { services } from '../data/services';
import { ui } from '../i18n/ui';
import { useI18n } from '../i18n/I18nProvider';

const ServicesSection = () => {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const cards = cardsRef.current?.children;

    if (prefersReducedMotion()) {
      gsap.set([header, ...(cards ? Array.from(cards) : [])], { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
        }
      );
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: 'expo.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', once: true },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream py-16 md:py-20 lg:py-section px-6">
      <div className="max-w-content mx-auto">
        <div ref={headerRef} className="mb-12 opacity-0">
          <h2 className="font-display text-section-sm md:text-section-md lg:text-section text-text-primary mb-4">
            {t(ui.services.heading)}
          </h2>
          <p className="font-body text-body-lg text-text-secondary max-w-[600px] mb-6">
            {t(ui.services.description)}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-body text-[15px] font-medium text-text-primary hover:gap-2.5 transition-all duration-200"
          >
            {t(ui.services.cta)} <ArrowUpRight size={16} />
          </a>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.icon}
              className="bg-white border border-border-light rounded-card p-8 lg:p-10 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 min-h-[240px] opacity-0"
            >
              <PixelIcon type={service.icon} size={40} className="mb-5" />
              <h3 className="font-display text-card-title text-text-primary mb-2">{t(service.title)}</h3>
              <p className="font-body text-base text-text-secondary leading-relaxed">{t(service.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
