import React, { createContext, useContext, useState } from 'react';

type Language = 'en-US' | 'pt-BR';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  'en-US': {
    'nav.about': 'About',
    'nav.technologies': 'Technologies',

    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'experience.title': 'Experience',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'Software Engineer',
    'hero.description': 'Passionate about learning and building innovative solutions with modern technologies',
    'hero.resume': 'Resume',
    'about.title': 'About Me',
    'about.description': 'I\'m a Computer Science student passionate about software development and technology. Currently learning full-stack development, I enjoy exploring new technologies and building projects that solve real-world problems. I\'m eager to gain practical experience and contribute to meaningful software solutions.',
    'about.frontend.label': 'Frontend',
    'backend.label': 'Backend',
    'skills.tools.label': 'Tools',
    'careerObjectives.goals.title': 'Career Goals',
    'careerObjectives.goals.content': 'Seeking my first professional opportunity as a Software Developer Intern or Junior Developer. Passionate about contributing to real-world projects and growing within a collaborative team environment.',
    'careerObjectives.location.title': 'Location & Availability',
    'careerObjectives.location.content': 'Based in São Paulo, Brazil. Available for remote work, hybrid, or on-site positions. Open to relocation for exceptional opportunities.',
    'careerObjectives.availability.title': 'Availability',
    'careerObjectives.availability.content': 'Available for internships starting immediately. Flexible schedule to accommodate academic commitments. Ready to commit 20-40 hours per week.',
    'careerObjectives.language.title': 'Language Proficiency',
    'careerObjectives.language.content': 'Fluent in English with strong written and verbal communication skills. Comfortable working in international teams and collaborating with global stakeholders.',
    'education.title': 'Education & Certifications',
    'projects.title': 'Projects',
    'contact.title': 'Get in Touch',
    'contact.description': 'Open to internships, collaborations, and learning opportunities. Let\'s connect!',
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
  },
  'pt-BR': {
    'nav.about': 'Sobre',
    'nav.technologies': 'Tecnologias',

    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'experience.title': 'Experiência',
    'education.title': 'Educação e Certificações',
    'nav.contact': 'Contato',
    'hero.greeting': 'Olá, eu sou',
    'hero.title': 'Desenvolvedor de Software',
    'hero.description': 'Apaixonado por aprender e construir soluções inovadoras com tecnologias modernas',
    'hero.resume': 'Currículo',
    'about.title': 'Sobre Mim',
    'about.description': 'Sou um estudante de Ciência da Computação apaixonado por desenvolvimento de software e tecnologia. Atualmente aprendendo desenvolvimento full-stack, gosto de explorar novas tecnologias e construir projetos que resolvem problemas do mundo real. Estou ansioso para ganhar experiência prática e contribuir para soluções de software significativas.',
    'about.frontend.label': 'Frontend',
    'backend.label': 'Backend',
    'skills.tools.label': 'Ferramentas',
    'careerObjectives.goals.title': 'Objetivos Profissionais',
    'careerObjectives.goals.content': 'Buscando minha primeira oportunidade profissional como Estagiário de Desenvolvimento de Software ou Desenvolvedor Júnior. Apaixonado por contribuir para projetos reais e crescer em um ambiente de equipe colaborativo.',
    'careerObjectives.location.title': 'Localização e Disponibilidade',
    'careerObjectives.location.content': 'Baseado em São Paulo, Brasil. Disponível para trabalho remoto, híbrido ou presencial. Aberto a realocação para oportunidades excepcionais.',
    'careerObjectives.availability.title': 'Disponibilidade',
    'careerObjectives.availability.content': 'Disponível para estágios iniciando imediatamente. Horário flexível para acomodar compromissos acadêmicos. Pronto para dedicar 20-40 horas por semana.',
    'careerObjectives.language.title': 'Proficiência em Idiomas',
    'careerObjectives.language.content': 'Inglês fluente com fortes habilidades de comunicação escrita e verbal. Confortável trabalhando em equipes internacionais e colaborando com stakeholders globais.',
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

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
