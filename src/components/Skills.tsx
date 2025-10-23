import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Terminal, 
  ArrowDown 
} from 'lucide-react';

const Skills = () => {
  const { t, language } = useLanguage();

  const skillCategories = [
    {
      icon: Globe,
      title: language === 'en' ? 'Frontend Development' : 'Desenvolvimento Frontend',
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'TypeScript', level: 70 },
        { name: 'Tailwind CSS', level: 80 },
      ]
    },
    {
      icon: Database,
      title: language === 'en' ? 'Backend Development' : 'Desenvolvimento Backend',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Python', level: 75 },
        { name: 'SQL', level: 65 },
        { name: 'REST APIs', level: 70 },
        { name: 'Express.js', level: 65 },
      ]
    },
    {
      icon: Terminal,
      title: language === 'en' ? 'Tools & Technologies' : 'Ferramentas e Tecnologias',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'VS Code', level: 85 },
        { name: 'Linux', level: 70 },
        { name: 'Docker', level: 60 },
        { name: 'Problem Solving', level: 85 },
      ]
    },
    {
      icon: Smartphone,
      title: language === 'en' ? 'Learning & Growth' : 'Aprendizado e Crescimento',
      skills: [
        { name: 'Data Structures', level: 75 },
        { name: 'Algorithms', level: 70 },
        { name: 'OOP Concepts', level: 80 },
        { name: 'Software Engineering', level: 65 },
        { name: 'Continuous Learning', level: 90 },
      ]
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {language === 'en' ? 'Technical Skills' : 'Habilidades Técnicas'}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
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

export default Skills;
