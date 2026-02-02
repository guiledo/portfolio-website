export interface Project {
  title: {
    'en-US': string;
    'pt-BR': string;
  };
  description: {
    'en-US': string;
    'pt-BR': string;
  };
  tech: string[];
  github: string;
  demo: string;
  impact?: {
    'en-US': string;
    'pt-BR': string;
  };
}

export const projects: Project[] = [
  {
    title: {
      'en-US': 'Work in Progress',
      'pt-BR': 'Trabalho em Progresso',
    },
    description: {
      'en-US': 'More projects coming soon.',
      'pt-BR': 'Mais projetos em breve.',
    },
    tech: [],
    github: '#',
    demo: '#',
  },
];
