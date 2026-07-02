import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import TagPill from '../components/TagPill';
import { getSkillGroup, type SkillGroup } from '../data/skills';
import { useI18n } from '../i18n/I18nProvider';

const MockupContainer = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`relative max-w-[700px] mx-auto ${className}`}>{children}</div>
);

/** Cabecera (título + descripción + CTA) de un sub-bloque, desde la data. */
const SkillHeader = ({ group, light = false }: { group: SkillGroup; light?: boolean }) => {
  const { t } = useI18n();
  if (!group.heading) return null;

  const headingColor = light ? 'text-text-primary' : 'text-white';
  const descColor = light ? 'text-text-primary/80' : 'text-white/80';
  const ctaClass = light
    ? 'text-text-primary border-text-primary/30 hover:bg-text-primary/5'
    : 'text-white border-white/30 hover:bg-white/10';

  const cta = group.cta;
  const isExternal = cta?.href?.startsWith('http');
  const href = cta?.href ?? '#contact';

  return (
    <div className="max-w-content mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h3 className={`font-display text-section-sm md:text-section-md lg:text-section ${headingColor} mb-4 md:mb-0`}>
          {t(group.heading)}
        </h3>
        {cta && (
          <a
            href={href}
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={`inline-flex items-center gap-2 font-body text-[15px] font-medium border px-5 py-2.5 rounded-button transition-colors ${ctaClass}`}
          >
            {t(cta.label)} <ArrowUpRight size={16} />
          </a>
        )}
      </div>
      {group.description && (
        <p className={`font-body text-body-lg ${descColor} mb-10 max-w-[700px]`}>{t(group.description)}</p>
      )}
    </div>
  );
};

const SkillTags = ({ group }: { group: SkillGroup }) => {
  const { t } = useI18n();
  return (
    <div className="skill-tags flex flex-wrap justify-center gap-3 mt-10 max-w-content mx-auto opacity-0">
      {t(group.tags).map((tag) => (
        <TagPill key={tag} variant={group.tagVariant}>
          {tag}
        </TagPill>
      ))}
    </div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const mobile = getSkillGroup('mobile');
  const coding = getSkillGroup('coding');
  const delivery = getSkillGroup('delivery');
  const custom = getSkillGroup('custom');
  const infra = getSkillGroup('infra');

  useEffect(() => {
    const subsections = sectionRef.current?.querySelectorAll('.skill-subsection');
    if (!subsections) return;

    if (prefersReducedMotion()) {
      sectionRef.current
        ?.querySelectorAll('.skill-mockup, .skill-tags')
        .forEach((el) => gsap.set(el, { opacity: 1, scale: 1 }));
      return;
    }

    const ctx = gsap.context(() => {
      subsections.forEach((sub) => {
        const mockup = sub.querySelector('.skill-mockup');
        const tags = sub.querySelector('.skill-tags');

        if (mockup) {
          gsap.fromTo(
            mockup,
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: 'expo.out',
              scrollTrigger: { trigger: sub, start: 'top 80%', once: true },
            }
          );
        }
        if (tags) {
          gsap.fromTo(
            tags,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.4,
              delay: 0.3,
              scrollTrigger: { trigger: sub, start: 'top 80%', once: true },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      {/* Sub-section 1: Mobile & Product — Teal */}
      <div className="skill-subsection bg-accent-teal grid-pattern-white relative py-20 lg:py-[100px] px-6">
        <MockupContainer>
          <div className="skill-mockup bg-white/95 backdrop-blur-sm rounded-card shadow-elevated p-6 opacity-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-accent-emerald" />
              <div className="w-3 h-3 rounded-full bg-warm-amber" />
              <div className="w-3 h-3 rounded-full bg-[#0F766E]" />
            </div>
            <p className="font-mono text-sm text-text-secondary mb-4">What would you like to do today?</p>
            <div className="space-y-3">
              {[
                'Optimize eCommerce conversion funnel',
                'Structure a SaaS pricing model',
                'Build a Flutter app with Firebase backend',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                  <div className="w-4 h-4 border-2 border-border-medium rounded" />
                  <span className="font-body text-sm text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </MockupContainer>
        <SkillTags group={mobile} />
      </div>

      {/* Sub-section 2: Coding & Development — Deep Forest */}
      <div className="skill-subsection bg-deep-forest relative py-20 lg:py-[100px] px-6">
        <SkillHeader group={coding} />
        <MockupContainer>
          <div className="skill-mockup bg-[#021C16] rounded-card shadow-elevated p-6 font-mono text-sm opacity-0 overflow-x-auto">
            <div className="flex items-center gap-2 mb-4 text-text-secondary">
              <span className="text-accent-light">●</span>
              <span className="text-warm-amber">●</span>
              <span className="text-accent-teal">●</span>
              <span className="ml-2 text-xs">lib/main.dart</span>
            </div>
            <pre className="text-text-secondary">
              <code>
                <span className="text-accent-light">class</span>{' '}
                <span className="text-warm-amber">UserProfile</span>{' '}
                <span className="text-accent-light">extends</span>{' '}
                <span className="text-warm-amber">StatelessWidget</span>{' '}{'{'}{'\n'}
                {'  '}<span className="text-accent-light">@override</span>{'\n'}
                {'  '}<span className="text-accent-teal">Widget</span>{' '}
                <span className="text-accent-teal">build</span>(
                <span className="text-accent-teal">BuildContext</span>{' '}context) {'{'}{'\n'}
                {'    '}<span className="text-accent-light">return</span>{' '}
                <span className="text-warm-amber">BlocProvider</span>({'\n'}
                {'      '}create: (_) =&gt;{' '}
                <span className="text-warm-amber">UserBloc</span>(),{'\n'}
                {'      '}child:{' '}
                <span className="text-warm-amber">UserView</span>(),{'\n'}
                {'    '});{'\n'}
                {'  '}{'}'}{'\n'}
                {'}'}
              </code>
            </pre>
            <div className="mt-4 p-3 bg-accent-emerald/10 border border-accent-emerald/20 rounded-lg flex items-center gap-2">
              <span className="text-accent-light">✓</span>
              <span className="text-accent-light/90 text-xs">Added validation to src/api/users.ts</span>
            </div>
          </div>
        </MockupContainer>
        <SkillTags group={coding} />
      </div>

      {/* Sub-section 3: Full-Stack Delivery — Emerald */}
      <div className="skill-subsection bg-accent-emerald grid-pattern relative py-20 lg:py-[100px] px-6">
        <SkillHeader group={delivery} />
        <MockupContainer>
          <div className="skill-mockup bg-deep-forest/90 rounded-card shadow-elevated p-6 opacity-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Build', desc: 'Leverage cutting-edge frameworks to create custom app experiences.', color: 'bg-accent-teal' },
                { title: 'Capture', desc: 'Analytics and tracking that capture user behavior and insights.', color: 'bg-[#0F766E]' },
                { title: 'Govern', desc: 'Monitor every request and response across your systems.', color: 'bg-warm-amber' },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-lg p-4">
                  <div className={`w-8 h-8 ${card.color} rounded-md mb-3`} />
                  <h4 className="font-display text-base font-medium text-text-primary mb-1">{card.title}</h4>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </MockupContainer>
        <SkillTags group={delivery} />
      </div>

      {/* Sub-section 4: Custom Solutions — Gradient Grid Teal */}
      <div className="skill-subsection relative py-20 lg:py-[100px] px-6 overflow-hidden">
        {/* Background gradient grid */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6" aria-hidden="true">
          {Array.from({ length: 36 }).map((_, i) => {
            const colors = ['#0D9488', '#059669', '#34D399', '#0F766E', '#0D9488', '#059669'];
            return (
              <div
                key={i}
                className="w-full h-full animate-gradient-shimmer"
                style={{ backgroundColor: colors[i % colors.length], animationDelay: `${(i % 7) * 0.4}s` }}
              />
            );
          })}
        </div>
        <div className="absolute inset-0 grid-pattern-white opacity-[0.08]" aria-hidden="true" />

        <div className="relative z-10">
          <SkillHeader group={custom} />
          <MockupContainer>
            <div className="skill-mockup bg-[#021C16] rounded-card shadow-elevated p-6 font-mono text-sm opacity-0">
              <div className="text-text-secondary space-y-1">
                <p><span className="text-accent-light">project</span>: <span className="text-warm-amber">oliver-mendez-portfolio</span></p>
                <p><span className="text-accent-light">stack</span>:</p>
                <p className="pl-4"><span className="text-accent-teal">mobile</span>: <span className="text-accent-light">"Flutter + Firebase"</span></p>
                <p className="pl-4"><span className="text-accent-teal">web</span>: <span className="text-accent-light">"Next.js + React"</span></p>
                <p className="pl-4"><span className="text-accent-teal">backend</span>: <span className="text-accent-light">"NestJS + PostgreSQL"</span></p>
                <p className="pl-4"><span className="text-accent-teal">cloud</span>: <span className="text-accent-light">"AWS + Stripe"</span></p>
              </div>
              <div className="flex justify-center mt-6" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 16 16" fill="none" style={{ imageRendering: 'pixelated' }}>
                  <path d="M8 14S1 9.5 1 5.5C1 3 3 1 5.5 1c1.5 0 2.5 1 2.5 1s1-1 2.5-1C13 1 15 3 15 5.5 15 9.5 8 14 8 14z" fill="#0D9488" />
                </svg>
              </div>
            </div>
          </MockupContainer>
          <SkillTags group={custom} />
        </div>
      </div>

      {/* Sub-section 5: Infrastructure — Light Emerald */}
      <div className="skill-subsection bg-accent-light grid-pattern relative py-20 lg:py-[100px] px-6">
        <SkillHeader group={infra} light />
        <MockupContainer>
          <div className="skill-mockup bg-white/95 backdrop-blur-sm rounded-card shadow-elevated p-6 opacity-0">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-text-secondary">CLOUD ARCHITECTURE</span>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-accent-emerald text-white text-[10px] font-mono rounded">PROD</span>
                <span className="px-2 py-1 bg-[#0F766E] text-white text-[10px] font-mono rounded">DEV</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: 'AWS', color: 'bg-accent-teal', h: 'h-16' },
                { label: 'Firebase', color: 'bg-warm-amber', h: 'h-12' },
                { label: 'Stripe', color: 'bg-[#0F766E]', h: 'h-10' },
                { label: 'PostgreSQL', color: 'bg-accent-emerald', h: 'h-14' },
              ].map((node) => (
                <div key={node.label} className="flex flex-col items-center gap-2">
                  <div className={`w-full ${node.h} ${node.color} rounded-lg opacity-80`} />
                  <span className="font-mono text-[10px] text-text-secondary">{node.label}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-4" aria-hidden="true">
              {[0, 0.3, 0.6].map((delay) => (
                <div key={delay} className="w-px h-6 bg-text-secondary/20 relative">
                  <div
                    className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent-teal rounded-full animate-pulse"
                    style={{ animationDelay: `${delay}s` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </MockupContainer>
        <SkillTags group={infra} />
      </div>
    </section>
  );
};

export default SkillsSection;
