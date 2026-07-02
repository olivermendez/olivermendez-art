import { siteConfig } from '../data/siteConfig';
import { ui } from '../i18n/ui';
import { useI18n } from '../i18n/I18nProvider';

const CTABanner = () => {
  const { t } = useI18n();

  return (
    <section id="contact" className="bg-accent-teal py-16 lg:py-20 px-6">
      <div className="max-w-content mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <h2 className="font-display text-3xl md:text-4xl lg:text-[48px] font-medium text-white tracking-tight">
          {t(ui.cta.heading)}
        </h2>
        <div className="flex gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-body text-[15px] font-medium bg-white text-text-primary px-7 py-3.5 rounded-pill hover:bg-white/90 transition-colors"
          >
            {t(ui.cta.viewProjects)}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-body text-[15px] font-medium bg-text-primary text-white px-7 py-3.5 rounded-pill hover:bg-text-primary/80 transition-colors"
          >
            {t(ui.cta.contactMe)}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
