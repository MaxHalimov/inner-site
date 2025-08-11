import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations, SupportedLang } from './translations';

type I18nContextValue = {
  lang: SupportedLang;
  t: (key: string) => string;
  setLang: (lang: SupportedLang) => void;
  toggleLang: () => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<SupportedLang>((localStorage.getItem('lang') as SupportedLang) || 'ru');

  const t = useCallback((key: string): string => {
    const dict = translations[lang] || {};
    return dict[key] ?? key;
  }, [lang]);

  const changeLang = useCallback((l: SupportedLang) => {
    setLang(l);
    localStorage.setItem('lang', l);
  }, []);

  const toggleLang = useCallback(() => {
    changeLang(lang === 'ru' ? 'en' : 'ru');
  }, [lang, changeLang]);

  const value = useMemo<I18nContextValue>(() => ({ lang, t, setLang: changeLang, toggleLang }), [lang, t, changeLang, toggleLang]);

  // Attach language class to <html> for language-specific styling (e.g., fonts)
  useEffect(() => {
    const root = document.documentElement;
    // reflect active language for :lang CSS and accessibility
    root.setAttribute('lang', lang);
    root.classList.remove('lang-ru', 'lang-en');
    root.classList.add(lang === 'ru' ? 'lang-ru' : 'lang-en');
  }, [lang]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};


