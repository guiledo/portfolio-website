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
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'Computer Science Student & Aspiring Software Engineer',
    'hero.description': 'Passionate about learning and building innovative solutions with modern technologies',
    'about.title': 'About Me',
    'about.description': 'I\'m a Computer Science student passionate about software development and technology. Currently learning full-stack development, I enjoy exploring new technologies and building projects that solve real-world problems. I\'m eager to gain practical experience and contribute to meaningful software solutions.',
    'education.title': 'Education',
    'projects.title': 'Projects',
    'contact.title': 'Get in Touch',
    'contact.description': 'Open to internships, collaborations, and learning opportunities. Let\'s connect!',
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
  },
  pt: {
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.certifications': 'Certificações',
    'nav.contact': 'Contato',
    'hero.greeting': 'Olá, eu sou',
    'hero.title': 'Estudante de Ciência da Computação & Aspirante a Engenheiro de Software',
    'hero.description': 'Apaixonado por aprender e construir soluções inovadoras com tecnologias modernas',
    'about.title': 'Sobre Mim',
    'about.description': 'Sou um estudante de Ciência da Computação apaixonado por desenvolvimento de software e tecnologia. Atualmente aprendendo desenvolvimento full-stack, gosto de explorar novas tecnologias e construir projetos que resolvem problemas do mundo real. Estou ansioso para ganhar experiência prática e contribuir para soluções de software significativas.',
    'education.title': 'Educação',
    'projects.title': 'Projetos',
    'contact.title': 'Entre em Contato',
    'contact.description': 'Aberto a estágios, colaborações e oportunidades de aprendizado. Vamos nos conectar!',
    'contact.email': 'Email',
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
