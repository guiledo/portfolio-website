import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Award, ArrowDown } from 'lucide-react';

const Education = () => {
  const { t, language } = useLanguage();

  const educationData = [
    {
      type: 'education',
      title: language === 'en'
        ? 'Bachelor of Computer Science'
        : 'Bacharelado em Ciência da Computação',
      issuer: language === 'en'
        ? 'University São Judas Tadeu (USJT)'
        : 'Universidade São Judas Tadeu (USJT)',
      period: '2025 - Present',
      description: language === "en"
        ? 'Currently pursuing Computer Science degree with focus on software engineering, algorithms, data structures, and web development. GPA: 3.8/4.0'
        : 'Atualmente cursando Ciência da Computação com foco em engenharia de software, algoritmos, estruturas de dados e desenvolvimento web. CR: 9.4/10',
    },
    {
      type: 'certification',
      title: language === 'en' ? 'Git and GitHub Fundamentals' : 'Fundamentos de Git e GitHub',
      issuer: language === 'en' ? 'Alura' : 'Alura',
      period: '2025',
      description: language === 'en'
        ? 'Version control mastery course covering Git workflows, branching strategies, and collaborative development'
        : 'Curso de domínio de controle de versão cobrindo fluxos de trabalho Git, estratégias de branching e desenvolvimento colaborativo',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('education.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    {item.type === 'education' ? (
                      <GraduationCap className="h-6 w-6 text-primary" />
                    ) : (
                      <Award className="h-6 w-6 text-primary" />
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-primary mb-2">{item.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                  {item.skills && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
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
}

export default Education;
