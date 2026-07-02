import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import PixelIcon from '../components/PixelIcon';
import { visibleProjects } from '../data/projects';
import { ui } from '../i18n/ui';
import { useI18n } from '../i18n/I18nProvider';

const ProjectsSection = () => {
  const { t, path } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.children;
    if (!cards) return;

    if (prefersReducedMotion()) {
      gsap.set(cards, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="bg-cream py-16 md:py-20 lg:py-section px-6">
      <div className="max-w-[960px] mx-auto">
        {/* Icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <PixelIcon type="code" size={32} />
          <PixelIcon type="gear" size={32} />
          <PixelIcon type="chart" size={32} />
        </div>

        {/* Headline */}
        <h2 className="font-display text-section-sm md:text-section-md lg:text-section text-text-primary text-center mb-12">
          {t(ui.projects.heading)}
        </h2>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <Link
              key={project.id}
              to={path(`/project/${project.id}`)}
              className={`group bg-white border border-border-light rounded-card p-6 lg:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 opacity-0 ${project.span ?? ''}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-9 h-9 ${project.iconColor} rounded-lg flex items-center justify-center`}>
                  <PixelIcon type={project.icon} size={20} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-text-secondary/40 group-hover:text-accent-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>
              <h3 className="font-display text-card-title text-text-primary mb-2">{project.title}</h3>
              <p className="font-body text-body-sm text-text-secondary leading-relaxed">
                {t(project.subtitle)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
