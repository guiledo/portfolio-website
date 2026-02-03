import { useLanguage } from '@/hooks/use-language';
import { GraduationCap, Award, Monitor, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EducationItem {
  id: string;
  type: 'education' | 'certification' | 'tech-certification';
  titleKey: string;
  issuerKey: string;
  period: string;
  descriptionKey: string;
  skills?: string[];
  credentialUrl?: string;
}

const translatePeriod = (period: string, language: string) => {
  if (language !== 'pt-BR') return period;

  return period
    .replace('Present', 'Atualmente')
    .replace('Feb', 'Fev')
    .replace('Apr', 'Abr')
    .replace('May', 'Mai')
    .replace('Aug', 'Ago')
    .replace('Sep', 'Set')
    .replace('Oct', 'Out')
    .replace('Dec', 'Dez');
};

const Education = () => {
  const { t, language } = useLanguage();

  const educationData: EducationItem[] = [
    {
      id: 'cs-bachelor',
      type: 'education',
      titleKey: 'education.cs.title',
      issuerKey: 'education.cs.issuer',
      period: 'Jan 2025 - Present',
      descriptionKey: 'education.cs.description',
      skills: ['Computer Science', 'Software Development', 'System Development'],
    },
    {
      id: 'react-node-api',
      type: 'tech-certification',
      titleKey: 'cert.react_node.title',
      issuerKey: 'Alura',
      period: 'Nov 2025',
      descriptionKey: 'cert.react_node.desc',
      skills: ['React.js', 'Node.js', 'API Development'],
      credentialUrl: 'https://cursos.alura.com.br/certificate/843c1cd7-1a64-4821-b5ba-38ca5de25556?lang=en',
    },
    {
      id: 'node-terminal',
      type: 'tech-certification',
      titleKey: 'cert.node_terminal.title',
      issuerKey: 'Alura',
      period: 'Nov 2025',
      descriptionKey: 'cert.node_terminal.desc',
      skills: ['Node.js', 'Bash', 'Linux'],
      credentialUrl: 'https://cursos.alura.com.br/certificate/e1ca0b37-0bf4-4560-b415-2d85c5bbebb6?lang=en',
    },
    {
      id: 'postgresql',
      type: 'tech-certification',
      titleKey: 'cert.postgresql.title',
      issuerKey: 'Alura',
      period: 'Dez 2025',
      descriptionKey: 'cert.postgresql.desc',
      skills: ['PostgreSQL', 'Relational Databases'],
      credentialUrl: 'https://cursos.alura.com.br/certificate/35fa1772-8183-4c12-ba1f-e97e60a74c65?lang=en',
    },
    {
      id: 'mongodb-nosql',
      type: 'tech-certification',
      titleKey: 'cert.mongodb.title',
      issuerKey: 'Alura',
      period: 'Jan 2026',
      descriptionKey: 'cert.mongodb.desc',
      skills: ['MongoDB', 'NoSQL'],
      credentialUrl: 'https://cursos.alura.com.br/certificate/4ad07977-738b-45e0-9c9b-081704e590bf?lang=en',
    },
    {
      id: 'react-hooks',
      type: 'tech-certification',
      titleKey: 'cert.react_hooks.title',
      issuerKey: 'Alura',
      period: 'Oct 2025',
      descriptionKey: 'cert.react_hooks.desc',
      skills: ['React.js', 'JavaScript', 'TypeScript'],
      credentialUrl: 'https://cursos.alura.com.br/degree/certificate/3fa050a0-e0f5-41ef-bf57-71c1fe86b08e?lang=en',
    },
    {
      id: 'tailwind-css',
      type: 'tech-certification',
      titleKey: 'cert.tailwind.title',
      issuerKey: 'Alura',
      period: 'Oct 2025',
      descriptionKey: 'cert.tailwind.desc',
      skills: ['Tailwind CSS', 'CSS', 'HTML', 'JavaScript', 'TypeScript'],
      credentialUrl: 'https://cursos.alura.com.br/certificate/7f778b65-73d8-4e76-93a7-e4178cfe225c?lang=en',
    },
    {
      id: 'html-css',
      type: 'tech-certification',
      titleKey: 'cert.html_css.title',
      issuerKey: 'Alura',
      period: 'Oct 2025',
      descriptionKey: 'cert.html_css.desc',
      skills: ['CSS', 'HTML'],
      credentialUrl: 'https://cursos.alura.com.br/degree/certificate/e4a9f5c6-bd0b-49dc-aff3-78ac974a0ab3?lang=en',
    },
    {
      id: 'js-backend',
      type: 'tech-certification',
      titleKey: 'cert.js_backend.title',
      issuerKey: 'Alura',
      period: 'Aug 2025',
      descriptionKey: 'cert.js_backend.desc',
      skills: ['Node.js', 'JavaScript', 'TypeScript'],
      credentialUrl: 'https://cursos.alura.com.br/degree/certificate/bf1146f7-c7f3-4515-bfac-a6728b35c0da?lang=en',
    },
    {
      id: 'csharp-logic',
      type: 'tech-certification',
      titleKey: 'cert.csharp.title',
      issuerKey: 'Udemy',
      period: 'Apr 2025',
      descriptionKey: 'cert.csharp.desc',
      skills: ['C#', 'Logic Programming'],
      credentialUrl: 'https://www.udemy.com/certificate/UC-fb445ebc-d105-4537-b167-8f8874001466/',
    },
    {
      id: 'git-sharing',
      type: 'tech-certification',
      titleKey: 'cert.git_sharing.title',
      issuerKey: 'Alura',
      period: 'Mar 2025',
      descriptionKey: 'cert.git_sharing.desc',
      skills: ['Git', 'GitHub', 'Version Control'],
      credentialUrl: 'https://cursos.alura.com.br/certificate/5cab4f38-56ff-4463-9725-b1aaa5701a0d?lang',
    },
    {
      id: 'six-sigma',
      type: 'certification',
      titleKey: 'cert.six_sigma.title',
      issuerKey: 'RL&Associados',
      period: 'Apr 2025',
      descriptionKey: 'cert.six_sigma.desc',
      skills: ['Six Sigma', 'White Belt'],
      credentialUrl: 'https://rlassociados.paginas.digital/white-belt-ead',
    },
    {
      id: 'learning-to-learn',
      type: 'certification',
      titleKey: 'cert.learning.title',
      issuerKey: 'Alura',
      period: 'Dec 2024',
      descriptionKey: 'cert.learning.desc',
      skills: ['Analytical Skills', 'Self Learning'],
      credentialUrl: 'https://cursos.alura.com.br/certificate/c53bad3c-2fb0-42c9-9bb9-0d83d552c6b9?lang=en',
    },
    {
      id: 'negotiations',
      type: 'certification',
      titleKey: 'cert.negotiations.title',
      issuerKey: 'University of Michigan',
      period: 'May 2020',
      descriptionKey: 'cert.negotiations.desc',
      skills: ['Communication', 'Negotiation', 'Soft Skills'],
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/7SVQR7Q5Z4L7',
    },
  ];

  return (
    <section id="education" className="flex items-center py-20 relative mb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('education.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col h-full"
            >
              <div className="flex gap-4 flex-grow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    {item.type === 'education' ? (
                      <GraduationCap className="h-6 w-6 text-primary" />
                    ) : item.type === 'tech-certification' ? (
                      <Monitor className="h-6 w-6 text-primary" />
                    ) : (
                      <Award className="h-6 w-6 text-primary" />
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-1">{t(item.titleKey)}</h3>
                  <p className="text-lg text-primary mb-2">
                    {item.issuerKey.includes('.') ? t(item.issuerKey) : item.issuerKey}
                  </p>
                  <p className="text-base text-muted-foreground mb-3">{translatePeriod(item.period, language)}</p>
                  <p className="text-lg text-muted-foreground mb-4">{t(item.descriptionKey)}</p>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-border/50">
                {item.skills && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-md border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                
                {item.credentialUrl && (
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2 w-full md:w-auto" asChild>
                      <a href={item.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t('education.credential')}
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
