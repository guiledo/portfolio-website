import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const { t, language } = useLanguage();

  const educationData = [
    {
      degree: language === 'en' ? 'Bachelor of Computer Science' : 'Bacharelado em Ciência da Computação',
      school: language === 'en' ? 'University Name' : 'Nome da Universidade',
      period: '2020 - 2024',
      description: language === 'en' 
        ? 'Focused on software engineering, data structures, and web development'
        : 'Focado em engenharia de software, estruturas de dados e desenvolvimento web',
    },
    {
      degree: language === 'en' ? 'Web Development Bootcamp' : 'Bootcamp de Desenvolvimento Web',
      school: language === 'en' ? 'Tech Academy' : 'Academia de Tecnologia',
      period: '2023',
      description: language === 'en'
        ? 'Intensive program covering modern web technologies and best practices'
        : 'Programa intensivo cobrindo tecnologias web modernas e melhores práticas',
    },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('education.title')}
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
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
    </section>
  );
};

export default Education;
