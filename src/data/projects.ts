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
      'en-US': 'Portfolio',
      'pt-BR': 'Portfólio',
    },
    description: {
      'en-US': 'A responsive portfolio built with React and TypeScript. Features a polished UI using shadcn/ui. Deployed on Vercel with resume storage powered by Cloudflare R2.',
      'pt-BR': 'Um portfólio responsivo construído com React e TypeScript. Possui uma interface polida usando shadcn/ui. Hospedado na Vercel com armazenamento de currículo via Cloudflare R2.',
    },
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Vercel', 'Cloudflare R2'],
    github: 'https://github.com/guiledo/portfolio-website',
    demo: '/',
    impact: {
      'en-US': 'Demonstrates proficiency in modern frontend architecture and cloud infrastructure integration for asset management.',
      'pt-BR': 'Demonstra proficiência em arquitetura frontend moderna e integração de infraestrutura em nuvem para gerenciamento de ativos.',
    },
  },
  {
    title: {
      'en-US': 'Simple Calculator',
      'pt-BR': 'Calculadora Simples',
    },
    description: {
      'en-US': 'A clean and responsive calculator application built with vanilla JavaScript, HTML5 and CSS3. Supports basic arithmetic, features a history panel and includes full keyboard support.',
      'pt-BR': 'Uma calculadora limpa e responsiva construída com JavaScript puro, HTML5 e CSS3. Suporta operações aritméticas básicas, possui painel de histórico e inclui suporte total via teclado.',
    },
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/guiledo/calculator-vanillajs',
    demo: 'https://guiledo.github.io/calculator-vanillajs/',
    impact: {
      'en-US': 'Demonstrates understanding of DOM manipulation, event handling and state management without relying on external frameworks.',
      'pt-BR': 'Demonstra compreensão de manipulação do DOM, tratamento de eventos e gerenciamento de estado sem depender de frameworks externos.',
    },
  },
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