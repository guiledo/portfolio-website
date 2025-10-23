import { useLanguage } from '@/contexts/LanguageContext';
import { Code2, Database, Layout, ArrowDown } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const skills = [
    { icon: Layout, label: 'Frontend Development', tech: 'React, JavaScript, HTML/CSS, Tailwind CSS' },
    { icon: Database, label: 'Backend & Databases', tech: 'Node.js, Python, SQL, API Development' },
    { icon: Code2, label: 'Tools & Technologies', tech: 'Git, VS Code, Linux, Problem Solving' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('about.title')}
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            {t('about.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <skill.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default About;
