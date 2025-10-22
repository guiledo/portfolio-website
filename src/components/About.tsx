import { useLanguage } from '@/contexts/LanguageContext';
import { Code2, Database, Layout } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const skills = [
    { icon: Layout, label: 'Frontend', tech: 'React, TypeScript, Tailwind' },
    { icon: Database, label: 'Backend', tech: 'Node.js, PostgreSQL, API Design' },
    { icon: Code2, label: 'Tools', tech: 'Git, Docker, VS Code' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
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
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <skill.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
