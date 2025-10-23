import { useLanguage } from '@/contexts/LanguageContext';
import { Award, ArrowDown } from 'lucide-react';

const Certifications = () => {
  const { t, language } = useLanguage();

  const certifications = [
    {
      title: language === 'en' ? 'React Development Bootcamp' : 'Bootcamp de Desenvolvimento React',
      issuer: language === 'en' ? 'Rocketseat' : 'Rocketseat',
      date: '2023',
      description: language === 'en'
        ? 'Comprehensive React development course covering hooks, state management, and modern development practices'
        : 'Curso abrangente de desenvolvimento React cobrindo hooks, gerenciamento de estado e práticas modernas de desenvolvimento',
      skills: ['React', 'JavaScript', 'Modern Development'],
    },
    {
      title: language === 'en' ? 'Python Programming Specialization' : 'Especialização em Programação Python',
      issuer: language === 'en' ? 'Coursera - University of Michigan' : 'Coursera - Universidade de Michigan',
      date: '2022',
      description: language === 'en'
        ? 'Complete Python programming course covering fundamentals, data structures, OOP, and web development'
        : 'Curso completo de programação Python cobrindo fundamentos, estruturas de dados, OOP e desenvolvimento web',
      skills: ['Python', 'OOP', 'Data Structures', 'Web Development'],
    },
    {
      title: language === 'en' ? 'Git and GitHub Fundamentals' : 'Fundamentos de Git e GitHub',
      issuer: language === 'en' ? 'Alura' : 'Alura',
      date: '2023',
      description: language === 'en'
        ? 'Version control mastery course covering Git workflows, branching strategies, and collaborative development'
        : 'Curso de domínio de controle de versão cobrindo fluxos de trabalho Git, estratégias de branching e desenvolvimento colaborativo',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    },
    {
      title: language === 'en' ? 'Web Development Fundamentals' : 'Fundamentos de Desenvolvimento Web',
      issuer: language === 'en' ? 'FreeCodeCamp' : 'FreeCodeCamp',
      date: '2022',
      description: language === 'en'
        ? 'Complete web development certification covering HTML, CSS, JavaScript, and responsive design'
        : 'Certificação completa de desenvolvimento web cobrindo HTML, CSS, JavaScript e design responsivo',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    },
  ];

  return (
    <section id="certifications" className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {language === 'en' ? 'Certifications & Courses' : 'Certificações e Cursos'}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                  <p className="text-primary text-sm mb-2">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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

export default Certifications;
