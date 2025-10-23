import { useLanguage } from '@/contexts/LanguageContext';
import { Code2, Database, Terminal, ArrowDown, Code, Server, GitBranch, Laptop, MousePointer, Sparkles, Atom, Palette } from 'lucide-react';
import github from '@/assets/github.png';
import linux from '@/assets/linux.png';
import nodejs from '@/assets/nodejs.png';
import react from '@/assets/react.png';
import typescript from '@/assets/typescript.png';
import gitbash from '@/assets/git bash.png';
import tailwind from '@/assets/tailwind.png';
import vscode from '@/assets/vscode.png';
import css from '@/assets/css.png';
import html5 from '@/assets/html-5.png';
import postgresql from '@/assets/postgresql.png';
import mongodb from '@/assets/mongodb.png';
import restapi from '@/assets/restapi.png';

const Skills = () => {
  const { t } = useLanguage();

  const techIcons = {
    'Typescript': { type: 'image', src: typescript },
    'React.js': { type: 'image', src: react },
    'HTML': { type: 'image', src: html5 }, // Changed to image
    'CSS': { type: 'image', src: css }, // Changed to image
    'Tailwind CSS': { type: 'image', src: tailwind },
    'Node.js': { type: 'image', src: nodejs },
    'PostgreSQL': { type: 'image', src: postgresql }, // Changed to image
    'MongoDB': { type: 'image', src: mongodb }, // Changed to image
    'API REST': { type: 'image', src: restapi }, // Added API REST
    'Git / GitHub': { type: 'image', src: github },
    'Git Bash': { type: 'image', src: gitbash },
    'VS Code': { type: 'image', src: vscode },
    'Cursor': { type: 'icon', component: MousePointer },
    'Gemini CLI': { type: 'icon', component: Sparkles },
    'Linux': { type: 'image', src: linux },
  };

  const skills = [
    { icon: Code2, label: t('about.frontend.label'), tech: ['React.js', 'Typescript', 'HTML', 'CSS', 'Tailwind CSS'] },
    { icon: Server, label: t('backend.label'), tech: ['Node.js', 'PostgreSQL', 'MongoDB', 'API REST'] },
    { icon: Terminal, label: t('skills.tools.label'), tech: ['Git / GitHub', 'Git Bash', 'VS Code', 'Linux'] },
  ];

  return (
    <section id="technologies" className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('nav.technologies')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"> {/* Adjusted grid for 3 items */}
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center gap-3 mb-6"> {/* Increased margin-bottom from mb-4 to mb-6 */}
                <skill.icon className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-lg">{skill.label}</h3> {/* Added text-lg */}
              </div>
              <div className="flex flex-col gap-2 text-base text-muted-foreground"> {/* Increased gap from gap-1 to gap-2 */}
                {skill.tech.map((techItem, techIndex) => {
                  const techInfo = techIcons[techItem.trim()];
                  const IconComponent = techInfo?.component || Code; // Default to Code icon
                  const imgSrc = techInfo?.src;

                  return (
                    <span key={techIndex} className="flex items-center gap-2">
                      {imgSrc ? (
                        <img src={imgSrc} alt={techItem.trim()} className="h-6 w-6" />
                      ) : (
                        <IconComponent className="h-6 w-6 text-primary" />
                      )}
                      {techItem}
                    </span>
                  );
                })}
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
