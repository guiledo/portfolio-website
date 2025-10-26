import React, { createContext, useState } from 'react';
import { translations } from '@/data/translations';

type Language = 'en-US' | 'pt-BR';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en-US');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en-US' ? 'pt-BR' : 'en-US'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en-US']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
