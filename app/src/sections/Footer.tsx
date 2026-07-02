import type { MouseEvent } from 'react';
import { Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { ui } from '../i18n/ui';
import { useI18n } from '../i18n/I18nProvider';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const linkClass =
  'font-body text-[15px] text-text-secondary hover:text-text-primary transition-colors duration-150 leading-[2.2]';

interface FLink {
  label: string;
  href: string;
}

const Footer = () => {
  const { t } = useI18n();

  const columns: { title: string; links: FLink[] }[] = [
    {
      title: t(ui.footer.explore),
      links: [
        { label: t(ui.nav.about), href: '#about' },
        { label: t(ui.nav.experience), href: '#experience' },
        { label: t(ui.nav.projects), href: '#projects' },
      ],
    },
    {
      title: t(ui.footer.expertise),
      links: [
        { label: t(ui.nav.skills), href: '#skills' },
        { label: t(ui.nav.education), href: '#education' },
        { label: t(ui.nav.contact), href: '#contact' },
      ],
    },
    {
      title: t(ui.footer.connect),
      links: [
        { label: 'GitHub', href: siteConfig.socials.github },
        { label: 'LinkedIn', href: siteConfig.socials.linkedin },
        { label: 'Email', href: `mailto:${siteConfig.email}` },
      ],
    },
  ];

  const handleAnchor = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-cream border-t border-border-light pt-16 lg:pt-20 pb-10 px-6">
      <div className="max-w-content mx-auto">
        {/* Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-body text-sm font-medium text-text-secondary uppercase tracking-wider mb-5">
                {col.title}
              </h4>
              <ul className="space-y-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ? (
                      <a href={link.href} onClick={(e) => handleAnchor(e, link.href)} className={linkClass}>
                        {link.label}
                      </a>
                    ) : (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-light mt-12 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-body text-sm text-text-secondary">
            {siteConfig.name} &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-4">
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${siteConfig.email}`} className="text-text-secondary hover:text-text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
