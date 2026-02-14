import React, { createContext, useState, useEffect } from 'react';
import { translations } from '@/data/translations';

export type Language = 'en-US' | 'pt-BR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isInitialized: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en-US');
  const [isInitialized, setIsInitialized] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && (savedLanguage === 'en-US' || savedLanguage === 'pt-BR')) {
      setLanguageState(savedLanguage);
      setIsInitialized(true);
    }
    setIsChecking(false);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
    setIsInitialized(true);
  };

  const toggleLanguage = () => {
    const newLang = language === 'en-US' ? 'pt-BR' : 'en-US';
    setLanguage(newLang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en-US']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isInitialized }}>
      {!isChecking && children}
    </LanguageContext.Provider>
  );
};
