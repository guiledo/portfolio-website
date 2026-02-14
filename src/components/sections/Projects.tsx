import { useLanguage } from '@/hooks/use-language';
import { ExternalLink, Github, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

const Projects = () => {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="flex items-center py-20 relative mb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('projects.title')}
        </h2>
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 flex flex-col h-full"
            >
              <div className="p-8 flex flex-col flex-grow h-full">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{project.title[language]}</h3>
                  </div>
                  
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    {project.description[language]}
                  </p>

                  {project.impact && (
                    <div className="mb-6 bg-secondary/30 p-4 rounded-lg border border-secondary">
                      <div className="flex items-center gap-2 mb-2 text-primary">
                        <Trophy className="h-4 w-4" />
                        <span className="text-sm font-semibold uppercase tracking-wider">
                          {t('projects.impact')}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/90 leading-relaxed">
                        {project.impact[language]}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2 w-full md:w-auto" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        {t('projects.code')}
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 w-full md:w-auto" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t('projects.demo')}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
