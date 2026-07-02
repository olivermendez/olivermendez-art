import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import { degree, languages, courses } from '../data/education';
import { ui } from '../i18n/ui';
import { useI18n } from '../i18n/I18nProvider';

const EducationSection = () => {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.edu-animate');
    if (!items || items.length === 0) return;

    if (prefersReducedMotion()) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="bg-white border-t border-border-light py-16 md:py-20 lg:py-section px-6"
    >
      <div className="max-w-content mx-auto">
        <h2 className="font-display text-section-sm md:text-section-md lg:text-section text-text-primary mb-12 edu-animate opacity-0">
          {t(ui.education.heading)}
        </h2>

        <div className="grid lg:grid-cols-[35%_65%] gap-12 lg:gap-16">
          {/* Education */}
          <div className="edu-animate opacity-0">
            <h3 className="font-display text-subsection text-text-primary mb-2">{t(degree.title)}</h3>
            <p className="font-body text-base text-text-secondary mb-2">{degree.school}</p>
            <p className="font-mono text-sm text-text-secondary mb-8">{degree.period}</p>

            <div className="space-y-2">
              {languages.map((lang) => (
                <p key={lang.name.en} className="font-body text-base text-text-primary">
                  <span className="text-text-secondary">{t(lang.name)}</span> — {t(lang.level)}
                </p>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div className="grid sm:grid-cols-2 gap-x-8">
            {courses.map((course) => (
              <div key={course.name} className="edu-animate border-b border-border-light py-4 opacity-0">
                <p className="font-body text-base font-medium text-text-primary">{course.name}</p>
                <p className="font-body text-sm text-text-secondary mt-0.5">
                  {course.provider} — {course.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
