import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'github.com/yourusername',
      href: 'https://github.com/yourusername',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            {t('contact.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map((contact) => (
              <Button
                key={contact.label}
                variant="outline"
                className="h-auto flex-col gap-3 p-6 hover:border-primary"
                asChild
              >
                <a href={contact.href} target="_blank" rel="noopener noreferrer">
                  <contact.icon className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold mb-1">{contact.label}</p>
                    <p className="text-xs text-muted-foreground">{contact.value}</p>
                  </div>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
