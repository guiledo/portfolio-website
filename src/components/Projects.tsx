import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: language === 'en-US' ? 'Personal Portfolio Website' : 'Website de Portfolio Pessoal',
      description: language === 'en-US'
        ? 'Responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, multilingual support, and modern UI design.'
        : 'Website de portfolio responsivo construído com React, TypeScript e Tailwind CSS. Inclui animações suaves, suporte multilíngue e design moderno.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/GuiLedo/portfolio-website',
      demo: '#',
      impact: language === 'en-US' ? 'Showcases technical skills and professional presentation' : 'Demonstra habilidades técnicas e apresentação profissional',
    },
    {
      title: language === 'en-US' ? 'Student Grade Management System' : 'Sistema de Gerenciamento de Notas Estudantis',
      description: language === 'en-US'
        ? 'Python application for tracking student grades with GUI interface. Implements data persistence and grade calculations with user-friendly design.'
        : 'Aplicação Python para rastrear notas de estudantes com interface gráfica. Implementa persistência de dados e cálculos de notas com design amigável.',
      tech: ['Python', 'Tkinter', 'File I/O', 'OOP'],
      github: '#',
      demo: '#',
      impact: language === 'en-US' ? 'Solves real academic problem with practical application' : 'Resolve problema acadêmico real com aplicação prática',
    },
    {
      title: language === 'en-US' ? 'Weather Dashboard' : 'Dashboard de Clima',
      description: language === 'en-US'
        ? 'React-based weather application with API integration. Features location search, current weather display, and responsive design for multiple devices.'
        : 'Aplicação de clima baseada em React com integração de API. Inclui busca por localização, exibição do clima atual e design responsivo.',
      tech: ['React', 'API Integration', 'CSS', 'Responsive Design'],
      github: '#',
      demo: '#',
      impact: language === 'en-US' ? 'Demonstrates API integration and user experience focus' : 'Demonstra integração de API e foco na experiência do usuário',
    },
    {
      title: language === 'en-US' ? 'Task Management App' : 'App de Gerenciamento de Tarefas',
      description: language === 'en-US'
        ? 'Interactive task management application with local storage. Features task creation, completion tracking, and modern UI with smooth animations.'
        : 'Aplicação interativa de gerenciamento de tarefas com armazenamento local. Inclui criação de tarefas, acompanhamento de conclusão e UI moderna.',
      tech: ['JavaScript', 'HTML/CSS', 'Local Storage', 'DOM Manipulation'],
      github: '#',
      demo: '#',
      impact: language === 'en-US' ? 'Improves productivity with intuitive user interface' : 'Melhora produtividade com interface intuitiva',
    },
    {
      title: language === 'en-US' ? 'Library Management System' : 'Sistema de Gerenciamento de Biblioteca',
      description: language === 'en-US'
        ? 'Console-based library system managing books and members. Implements CRUD operations, data validation, and file-based data persistence.'
        : 'Sistema de biblioteca baseado em console para gerenciar livros e membros. Implementa operações CRUD, validação de dados e persistência em arquivos.',
      tech: ['Python', 'OOP', 'File Management', 'Data Structures'],
      github: '#',
      demo: '#',
      impact: language === 'en-US' ? 'Demonstrates system design and data management skills' : 'Demonstra habilidades de design de sistema e gerenciamento de dados',
    },
    {
      title: language === 'en-US' ? 'Interactive Calculator' : 'Calculadora Interativa',
      description: language === 'en-US'
        ? 'Web-based calculator with modern UI and keyboard support. Features basic operations, error handling, and responsive design for all devices.'
        : 'Calculadora baseada na web com UI moderna e suporte a teclado. Inclui operações básicas, tratamento de erros e design responsivo.',
      tech: ['JavaScript', 'CSS', 'DOM Manipulation', 'Event Handling'],
      github: '#',
      demo: '#',
      impact: language === 'en-US' ? 'Showcases clean code and user interaction design' : 'Demonstra código limpo e design de interação do usuário',
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
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="h-48 bg-secondary/50 flex items-center justify-center">
                <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                  {'</>'}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-base text-muted-foreground mb-3">{project.description}</p>
                <div className="mb-3">
                  <p className="text-sm font-medium text-primary mb-1">
                    {language === 'en-US' ? 'Impact:' : 'Impacto:'}
                  </p>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>
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
          ))}
        </div>
      </div>

    </section>
  );
};

export default Projects;
