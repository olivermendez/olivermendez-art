import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useActiveSection } from '../hooks/useActiveSection';
import { navLinks, siteConfig } from '../data/siteConfig';
import { ui } from '../i18n/ui';
import { useI18n } from '../i18n/I18nProvider';
import LanguageSwitcher from './LanguageSwitcher';

const sectionIds = navLinks.map((l) => l.href.slice(1));

const Navigation = () => {
  const { t } = useI18n();
  const { isScrolled } = useScrollPosition();
  const activeSection = useActiveSection(sectionIds);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cierra el menú móvil con Escape y bloquea el scroll de fondo.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 60;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[60px] transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/90 backdrop-blur-xl border-b border-border-light'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto h-full flex items-center justify-between px-6">
          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-display text-xl font-medium text-text-primary tracking-tight"
          >
            {siteConfig.initials}
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={activeSection === link.href.slice(1) ? 'true' : undefined}
                className={`font-body text-[15px] font-medium transition-opacity duration-150 hover:opacity-60 ${
                  activeSection === link.href.slice(1) ? 'opacity-60' : 'opacity-100'
                } text-text-primary`}
              >
                {t(ui.nav[link.key])}
              </a>
            ))}
          </div>

          {/* Language + Contact + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher className="hidden sm:flex" />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:inline-flex font-body text-[15px] font-medium bg-accent-coral text-white px-5 py-2.5 rounded-pill hover:bg-accent-coral-hover transition-colors duration-150"
            >
              {t(ui.nav.contact)}
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center"
              aria-label={t(ui.nav.contact)}
              aria-expanded={isMobileMenuOpen}
            >
              <Menu size={24} className="text-text-primary" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-0 z-[60] bg-cream transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-4">
          <div className="flex items-center justify-between mb-12">
            <span className="font-display text-xl font-medium text-text-primary">
              {siteConfig.initials}
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={24} className="text-text-primary" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-display text-3xl font-medium text-text-primary hover:opacity-60 transition-opacity"
              >
                {t(ui.nav[link.key])}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-4 inline-flex self-start font-body text-lg font-medium bg-accent-coral text-white px-8 py-3 rounded-pill"
            >
              {t(ui.nav.contact)}
            </a>
            <LanguageSwitcher className="mt-6 text-sm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
