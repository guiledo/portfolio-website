import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'Junior Fullstack Software Engineer',
    'hero.description': 'Passionate about building modern web applications with cutting-edge technologies',
    'about.title': 'About Me',
    'about.description': 'I\'m a junior fullstack software engineer with a passion for creating efficient, scalable, and user-friendly web applications. I enjoy working with modern technologies and continuously learning new skills to deliver high-quality solutions.',
    'education.title': 'Education',
    'projects.title': 'Projects',
    'contact.title': 'Get In Touch',
    'contact.description': 'Feel free to reach out for collaborations or opportunities',
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
  },
  pt: {
    'nav.about': 'Sobre',
    'nav.education': 'Educação',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'hero.greeting': 'Olá, eu sou',
    'hero.title': 'Engenheiro de Software Fullstack Júnior',
    'hero.description': 'Apaixonado por construir aplicações web modernas com tecnologias de ponta',
    'about.title': 'Sobre Mim',
    'about.description': 'Sou um engenheiro de software fullstack júnior com paixão por criar aplicações web eficientes, escaláveis e amigáveis. Gosto de trabalhar com tecnologias modernas e aprender continuamente novas habilidades para entregar soluções de alta qualidade.',
    'education.title': 'Educação',
    'projects.title': 'Projetos',
    'contact.title': 'Entre em Contato',
    'contact.description': 'Sinta-se à vontade para entrar em contato para colaborações ou oportunidades',
    'contact.email': 'E-mail',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
