import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Target, CheckCircle2, Layers } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import { visibleProjects, getProject } from '../data/projects';
import type { ScreenType } from '../data/projects';
import { siteConfig } from '../data/siteConfig';
import { useSeo } from '../lib/useSeo';
import { ui } from '../i18n/ui';
import { useI18n } from '../i18n/I18nProvider';
import TagPill from '../components/TagPill';
import LanguageSwitcher from '../components/LanguageSwitcher';

const screenColors = [
  ['bg-accent-teal', 'bg-accent-emerald'],
  ['bg-accent-emerald', 'bg-[#0F766E]'],
  ['bg-[#0F766E]', 'bg-accent-teal'],
  ['bg-accent-teal', 'bg-[#0F766E]'],
  ['bg-accent-emerald', 'bg-accent-teal'],
  ['bg-[#0F766E]', 'bg-accent-emerald'],
];

const ScreenPlaceholder = ({ type, label, index }: { type: ScreenType; label: string; index: number }) => {
  const [bg1, bg2] = screenColors[index % screenColors.length];

  if (type === 'mobile') {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-[200px] h-[400px] rounded-[28px] bg-white border-4 border-text-primary/10 shadow-elevated overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-text-primary/10 rounded-b-xl z-10" />
          <div className="absolute inset-0 pt-6">
            <div className={`w-full h-full ${bg1} opacity-80`} />
          </div>
          <div className="absolute top-10 left-4 right-4 z-10 space-y-2">
            <div className={`h-3 w-1/2 ${bg2} rounded-full opacity-50`} />
            <div className={`h-3 w-3/4 ${bg2} rounded-full opacity-30`} />
            <div className={`h-3 w-2/3 ${bg2} rounded-full opacity-40`} />
          </div>
          <div className="absolute bottom-16 left-4 right-4 z-10">
            <div className={`h-20 ${bg2} rounded-xl opacity-60`} />
          </div>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-text-primary/20 rounded-full" />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">{label}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-full max-w-[640px] h-[380px] rounded-lg bg-white border border-border-medium shadow-elevated overflow-hidden">
        <div className="h-8 bg-cream border-b border-border-light flex items-center gap-2 px-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-emerald/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-warm-amber/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent-teal/60" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-4 bg-text-primary/5 rounded-full w-full" />
          </div>
        </div>
        <div className="absolute inset-0 top-8">
          <div className={`w-full h-full ${bg1} opacity-60`} />
        </div>
        <div className="absolute top-14 left-6 right-6 z-10 space-y-3">
          <div className={`h-4 w-1/3 ${bg2} rounded-full opacity-50`} />
          <div className={`h-3 w-1/2 ${bg2} rounded-full opacity-30`} />
          <div className={`h-3 w-2/5 ${bg2} rounded-full opacity-40`} />
        </div>
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <div className="flex gap-3">
            <div className={`flex-1 h-24 ${bg2} rounded-lg opacity-50`} />
            <div className={`flex-1 h-24 ${bg2} rounded-lg opacity-40`} />
            <div className={`flex-1 h-24 ${bg2} rounded-lg opacity-50`} />
          </div>
        </div>
      </div>
      <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">{label}</span>
    </div>
  );
};

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const { lang, t, path } = useI18n();
  const project = getProject(id || '');
  const contentRef = useRef<HTMLDivElement>(null);

  useSeo({
    lang,
    title: project
      ? `${project.title} — ${siteConfig.name}`
      : `${t(ui.project.notFound)} — ${siteConfig.name}`,
    description: project ? t(project.subtitle) : t(ui.seo.homeDescription),
    path: project ? `/project/${project.id}` : '/',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!contentRef.current) return;
    const items = contentRef.current.querySelectorAll('.animate-in');

    if (prefersReducedMotion()) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'expo.out', delay: 0.2 }
      );
    }, contentRef);
    return () => ctx.revert();
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-text-primary mb-4">{t(ui.project.notFound)}</h1>
          <Link to={path('/')} className="font-body text-[15px] font-medium text-accent-teal hover:underline">
            {t(ui.project.back)}
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = visibleProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? visibleProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < visibleProjects.length - 1 ? visibleProjects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-cream/90 backdrop-blur-xl border-b border-border-light">
        <div className="max-w-content mx-auto h-full flex items-center justify-between px-6">
          <Link
            to={path('/')}
            className="flex items-center gap-2 font-body text-[15px] font-medium text-text-primary hover:text-accent-teal transition-colors"
          >
            <ArrowLeft size={18} />
            {t(ui.project.back)}
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link to={path('/')} className="font-display text-xl font-medium text-text-primary tracking-tight">
              {siteConfig.initials}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-[60px]">
        <div className="bg-accent-teal grid-pattern-white relative py-16 lg:py-24 px-6">
          <div className="max-w-content mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <TagPill variant="white">{t(project.category)}</TagPill>
              <TagPill variant="white">{project.year}</TagPill>
              <TagPill variant="white">{t(project.role)}</TagPill>
            </div>
            <h1 className="font-display text-hero-sm md:text-hero-md lg:text-hero text-white mb-4">
              {project.title}
            </h1>
            <p className="font-body text-body-lg text-white/80 max-w-[600px]">{t(project.subtitle)}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="max-w-content mx-auto px-6 py-16 lg:py-20">
        {/* Description */}
        <div className="animate-in opacity-0 mb-16">
          <p className="font-body text-lg text-text-secondary leading-relaxed max-w-[800px]">
            {t(project.description)}
          </p>
        </div>

        {/* Screens Gallery */}
        <div className="animate-in opacity-0 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Layers size={20} className="text-accent-teal" />
            <h2 className="font-display text-subsection text-text-primary">{t(ui.project.screens)}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
            {project.screens.map((screen, i) => (
              <ScreenPlaceholder key={`${screen.type}-${screen.label}`} type={screen.type} label={screen.label} index={i} />
            ))}
          </div>
        </div>

        {/* Objectives & Achievements */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="animate-in opacity-0">
            <div className="flex items-center gap-3 mb-6">
              <Target size={20} className="text-accent-teal" />
              <h2 className="font-display text-subsection text-text-primary">{t(ui.project.objectives)}</h2>
            </div>
            <ul className="space-y-4">
              {t(project.objectives).map((obj, i) => (
                <li key={obj} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-mono text-xs text-accent-teal">{i + 1}</span>
                  </div>
                  <span className="font-body text-base text-text-secondary leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-in opacity-0">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 size={20} className="text-accent-emerald" />
              <h2 className="font-display text-subsection text-text-primary">{t(ui.project.achievements)}</h2>
            </div>
            <ul className="space-y-4">
              {t(project.achievements).map((ach) => (
                <li key={ach} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-emerald flex-shrink-0 mt-1" />
                  <span className="font-body text-base text-text-secondary leading-relaxed">{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="animate-in opacity-0 mb-20">
          <div className="bg-white border border-border-light rounded-card p-8 lg:p-10">
            <h3 className="font-display text-card-title text-text-primary mb-6">{t(ui.project.techStack)}</h3>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-cream border border-border-light rounded-pill font-body text-sm text-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="animate-in opacity-0 border-t border-border-light pt-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {prevProject ? (
              <Link to={path(`/project/${prevProject.id}`)} className="flex items-center gap-3 group">
                <ArrowLeft size={18} className="text-text-secondary group-hover:text-accent-teal transition-colors" />
                <div className="text-left">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-text-secondary">{t(ui.project.previous)}</span>
                  <p className="font-display text-base font-medium text-text-primary group-hover:text-accent-teal transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link to={path(`/project/${nextProject.id}`)} className="flex items-center gap-3 group sm:flex-row-reverse">
                <ArrowRight size={18} className="text-text-secondary group-hover:text-accent-teal transition-colors" />
                <div className="text-left sm:text-right">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-text-secondary">{t(ui.project.next)}</span>
                  <p className="font-display text-base font-medium text-text-primary group-hover:text-accent-teal transition-colors">
                    {nextProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="animate-in opacity-0 mt-16 text-center">
          <p className="font-body text-text-secondary mb-4">{t(ui.project.ctaText)}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 font-body text-[15px] font-medium bg-accent-teal text-white px-7 py-3.5 rounded-pill hover:bg-accent-emerald transition-colors"
          >
            {t(ui.project.getInTouch)} <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-cream border-t border-border-light py-10 px-6">
        <div className="max-w-content mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-body text-sm text-text-secondary">
            {siteConfig.name} &copy; {new Date().getFullYear()}
          </p>
          <Link to={path('/')} className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors">
            {t(ui.project.back)}
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPage;
