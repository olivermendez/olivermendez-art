import { createContext, useContext, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import {
  type Lang,
  type Localized,
  DEFAULT_LANG,
  langFromPath,
  localizePath,
  stripLangPrefix,
} from './config';

interface I18nContextValue {
  lang: Lang;
  /** Resuelve un valor localizado al idioma actual. */
  t: <T>(value: Localized<T>) => T;
  /** Prefija una ruta con el idioma actual (ej. '/project/x'). */
  path: (to: string) => string;
  /** La misma página en el otro idioma (para el selector). */
  otherLang: Lang;
  otherLangPath: string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const lang = langFromPath(location.pathname);

  // Mantiene <html lang> sincronizado para lectores de pantalla y SEO.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<I18nContextValue>(() => {
    const basePath = stripLangPrefix(location.pathname);
    const otherLang: Lang = lang === 'es' ? 'en' : 'es';
    return {
      lang,
      t: (v) => v[lang],
      path: (to) => localizePath(to, lang),
      otherLang,
      otherLangPath: localizePath(basePath, otherLang),
    };
  }, [lang, location.pathname]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>');
  return ctx;
};

export { DEFAULT_LANG };
