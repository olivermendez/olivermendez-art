import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import TagPill from '../components/TagPill';
import { companies, caseStudies } from '../data/experience';
import { ui } from '../i18n/ui';
import { useI18n } from '../i18n/I18nProvider';

const ExperienceSection = () => {
  const { t, path } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;

    if (prefersReducedMotion()) {
      gsap.set(cards, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="bg-cream border-t border-border-light">
      {/* Logo Scroll Strip */}
      <div className="h-[100px] lg:h-[120px] bg-white border-y border-border-light overflow-hidden relative">
        <div className="absolute inset-0 flex items-center animate-scroll-left whitespace-nowrap" aria-hidden="true">
          {[...companies, ...companies].map((name, i) => (
            <span
              key={i}
              className="font-body text-base lg:text-lg font-medium text-text-secondary/60 hover:text-text-secondary transition-opacity duration-200 px-10 lg:px-16"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Case Study Cards */}
      <div ref={cardsRef} className="max-w-content mx-auto px-6 py-10 lg:py-16 grid md:grid-cols-2 gap-6">
        {caseStudies.map((cs) => {
          const cardInner = (
            <>
              <img
                src={cs.image}
                alt={cs.alt}
                width={1200}
                height={750}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <span className="font-display text-lg lg:text-xl font-medium text-white">{cs.company}</span>
                  <div className="mt-3">
                    <TagPill variant="white">{t(cs.roleTag)}</TagPill>
                  </div>
                </div>
                <div>
                  <p className="font-display text-xl lg:text-[28px] font-medium text-white leading-tight max-w-[400px]">
                    {t(cs.headline)}
                  </p>
                  {cs.projectId && (
                    <span className="inline-flex items-center gap-1.5 text-white font-body text-[15px] font-medium mt-4 group-hover:gap-2.5 transition-all duration-200">
                      {t(ui.experience.learnMore)} <ArrowUpRight size={16} />
                    </span>
                  )}
                </div>
              </div>
            </>
          );

          const cardClass =
            'relative rounded-card overflow-hidden aspect-[16/10] group block opacity-0';

          return cs.projectId ? (
            <Link key={cs.company} to={path(`/project/${cs.projectId}`)} className={`${cardClass} cursor-pointer`}>
              {cardInner}
            </Link>
          ) : (
            <div key={cs.company} className={cardClass}>
              {cardInner}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
