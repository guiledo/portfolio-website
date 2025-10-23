import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, ArrowDown } from 'lucide-react';

const Education = () => {
  const { t, language } = useLanguage();

  const educationData = [
    {
      degree: language === 'en' ? 'Bachelor of Computer Science' : 'Bacharelado em Ciência da Computação',
      school: language === 'en' ? 'University of São Paulo (USP)' : 'Universidade de São Paulo (USP)',
      period: '2022 - Present',
      description: language === 'en' 
        ? 'Currently pursuing Computer Science degree with focus on software engineering, algorithms, data structures, and web development. GPA: 3.8/4.0'
        : 'Atualmente cursando Ciência da Computação com foco em engenharia de software, algoritmos, estruturas de dados e desenvolvimento web. CR: 8.5/10',
    },
    {
      degree: language === 'en' ? 'Web Development Bootcamp' : 'Bootcamp de Desenvolvimento Web',
      school: language === 'en' ? 'Rocketseat' : 'Rocketseat',
      period: '2023',
      description: language === 'en'
        ? 'Intensive program covering React, Node.js, TypeScript, and modern web development practices'
        : 'Programa intensivo cobrindo React, Node.js, TypeScript e práticas modernas de desenvolvimento web',
    },
    {
      degree: language === 'en' ? 'Python Programming Course' : 'Curso de Programação Python',
      school: language === 'en' ? 'Coursera - University of Michigan' : 'Coursera - Universidade de Michigan',
      period: '2022',
      description: language === 'en'
        ? 'Comprehensive Python programming course covering fundamentals, data structures, and OOP concepts'
        : 'Curso abrangente de programação Python cobrindo fundamentos, estruturas de dados e conceitos de OOP',
    },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('education.title')}
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-primary mb-2">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Education;
