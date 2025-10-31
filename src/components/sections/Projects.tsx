import { useLanguage } from '@/hooks/use-language';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: language === 'en-US' ? 'Work in Progress' : 'Trabalho em Progresso',
      description: language === 'en-US'
        ? 'More projects coming soon.'
        : 'Mais projetos em breve.',
      tech: [],
      github: '#',
      demo: '#',
      impact: ''
    },
  ];

  return (
    <section id="projects" className="flex items-center py-20 relative mb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('projects.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 flex flex-col"
            >
              <div className="h-48 bg-secondary/50 flex items-center justify-center">
                <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                  {'</>'}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-base text-muted-foreground mb-3">{project.description}</p>
                  <div className="mb-3">
                    <p className="text-sm font-medium text-primary mb-1">
                      {language === 'en-US' ? 'Impact:' : 'Impacto:'}
                    </p>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="default" className="gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="default" className="gap-2" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
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
