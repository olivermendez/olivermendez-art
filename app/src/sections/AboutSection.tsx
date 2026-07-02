import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import PixelIcon from '../components/PixelIcon';
import { ui } from '../i18n/ui';
import { useI18n } from '../i18n/I18nProvider';

const AboutSection = () => {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(
        [
          ...(iconsRef.current ? Array.from(iconsRef.current.children) : []),
          headlineRef.current,
          ...(bodyRef.current ? Array.from(bodyRef.current.children) : []),
        ],
        { opacity: 1, y: 0 }
      );
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
      });

      tl.fromTo(
        iconsRef.current?.children || [],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'expo.out' },
          0.2
        )
        .fromTo(
          bodyRef.current?.children || [],
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'expo.out' },
          0.4
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-cream py-16 md:py-20 lg:py-section px-6">
      <div className="max-w-content mx-auto flex flex-col items-center">
        {/* Icons */}
        <div ref={iconsRef} className="flex items-center gap-4 mb-8">
          <PixelIcon type="briefcase" size={32} />
          <PixelIcon type="robot" size={32} />
          <PixelIcon type="globe" size={32} />
        </div>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="font-display text-section-sm md:text-section-md lg:text-section text-text-primary text-center max-w-[900px] opacity-0"
        >
          {t(ui.about.headline)}
        </h2>

        {/* Body — Two Columns */}
        <div ref={bodyRef} className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-[900px] mt-12">
          <p className="font-body text-base text-text-secondary leading-relaxed opacity-0">
            {t(ui.about.p1)}
          </p>
          <p className="font-body text-base text-text-secondary leading-relaxed opacity-0">
            {t(ui.about.p2)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
