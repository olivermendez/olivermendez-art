import { Link, useLocation } from 'react-router-dom';
import { LANGS, LANG_LABELS, localizePath, stripLangPrefix, langFromPath } from '../i18n/config';
import { ui } from '../i18n/ui';
import { useI18n } from '../i18n/I18nProvider';

/**
 * Selector ES / EN. Cada idioma enlaza a la MISMA página en ese idioma,
 * lo que además ayuda al SEO (enlaces internos entre versiones).
 */
const LanguageSwitcher = ({ className = '' }: { className?: string }) => {
  const { t } = useI18n();
  const location = useLocation();
  const current = langFromPath(location.pathname);
  const basePath = stripLangPrefix(location.pathname);

  return (
    <div
      className={`flex items-center gap-1 font-mono text-xs ${className}`}
      aria-label={t(ui.langSwitcher.aria)}
    >
      {LANGS.map((lang, i) => (
        <span key={lang} className="flex items-center gap-1">
          {i > 0 && <span className="text-text-secondary/40">/</span>}
          <Link
            to={localizePath(basePath, lang)}
            aria-current={current === lang ? 'true' : undefined}
            className={`transition-opacity hover:opacity-100 ${
              current === lang ? 'text-text-primary font-medium opacity-100' : 'text-text-secondary opacity-70'
            }`}
          >
            {LANG_LABELS[lang]}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
