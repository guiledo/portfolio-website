import { useLanguage } from '@/hooks/use-language';
import { Code, MousePointer } from 'lucide-react';
import { skillsData } from '@/data/skills';
import linux from '@/assets/linux.png';
import neovim from '@/assets/neovim.png';
import bun from '@/assets/Bun.svg';
import nodejs from '@/assets/nodejs.png';
import react from '@/assets/react.png';
import typescript from '@/assets/typescript.png';
import git from '@/assets/git.png';
import tailwind from '@/assets/tailwind.png';
import css from '@/assets/css.png';
import html5 from '@/assets/html-5.png';
import postgresql from '@/assets/postgresql.png';
import mongodb from '@/assets/mongodb.png';
import restapi from '@/assets/restapi.png';
import vite from '@/assets/vite.svg';
import shadcn from '@/assets/shadcn-ui-seeklogo.svg';

const Skills = () => {
  const { t } = useLanguage();

  const techIcons = {
    'Typescript': { type: 'image', src: typescript },
    'React.js': { type: 'image', src: react },
    'HTML': { type: 'image', src: html5 }, // Changed to image
    'CSS': { type: 'image', src: css }, // Changed to image
    'Tailwind CSS': { type: 'image', src: tailwind },
    'Shadcn UI': { type: 'image', src: shadcn },
    'Bun': { type: 'image', src: bun },
    'Node.js': { type: 'image', src: nodejs },
    'PostgreSQL': { type: 'image', src: postgresql }, // Changed to image
    'MongoDB': { type: 'image', src: mongodb }, // Changed to image
    'API REST': { type: 'image', src: restapi }, // Added API REST
    'Git': { type: 'image', src: git },
    'Cursor': { type: 'icon', component: MousePointer },
    'Linux / Bash': { type: 'image', src: linux },
    'Vite': { type: 'image', src: vite },
    'NeoVim': { type: 'image', src: neovim },
  };

  return (
    <section id="technologies" className="flex items-center py-20 relative mb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('nav.technologies')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"> {/* Adjusted grid for 3 items */}
          {skillsData.map((skill) => (
            <div
              key={skill.labelKey}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center gap-3 mb-6"> {/* Increased margin-bottom from mb-4 to mb-6 */}
                <skill.icon className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-xl">{t(skill.labelKey)}</h3> {/* Added text-lg */}
              </div>
              <div className="flex flex-col gap-2 text-lg text-muted-foreground"> {/* Increased gap from gap-1 to gap-2 */}
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

    </section>
  );
};

export default Skills;
