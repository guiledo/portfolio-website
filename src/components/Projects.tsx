import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: language === 'en' ? 'E-commerce Platform' : 'Plataforma de E-commerce',
      description: language === 'en'
        ? 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL'
        : 'Solução de e-commerce full-stack com React, Node.js e PostgreSQL',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      github: '#',
      demo: '#',
    },
    {
      title: language === 'en' ? 'Task Management App' : 'App de Gerenciamento de Tarefas',
      description: language === 'en'
        ? 'Collaborative task management tool with real-time updates'
        : 'Ferramenta colaborativa de gerenciamento de tarefas com atualizações em tempo real',
      tech: ['TypeScript', 'React', 'Firebase', 'Material-UI'],
      github: '#',
      demo: '#',
    },
    {
      title: language === 'en' ? 'Weather Dashboard' : 'Dashboard de Clima',
      description: language === 'en'
        ? 'Weather application with location search and forecasts'
        : 'Aplicação de clima com busca de localização e previsões',
      tech: ['React', 'API Integration', 'Charts', 'CSS'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('projects.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all group"
            >
              <div className="h-48 bg-secondary/50 flex items-center justify-center">
                <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                  {'</>'}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
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
