import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/i18n';

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('gisa_lang') || 'en';
  });

  const changeLanguage = (newLang) => {
    setLang(newLang.toLowerCase());
    localStorage.setItem('gisa_lang', newLang.toLowerCase());
  };

  const t = (key, defaultText = '') => {
    const currentDict = translations[lang] || translations.en;
    return currentDict[key] || defaultText || key;
  };

  return (
    <I18nContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    return {
      lang: 'en',
      changeLanguage: () => {},
      t: (key, defaultText) => defaultText || key
    };
  }
  return context;
}

