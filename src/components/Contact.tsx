import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Github, MessageCircle, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const { t, language } = useLanguage();

  const contacts = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'glc.professional42@gmail.com',
      href: 'mailto:glc.professional42@gmail.com',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+55 11 98090-4699',
      href: 'https://wa.me/5511980904699',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/glc42',
      href: 'https://www.linkedin.com/in/glc42/',
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'github.com/GuiLedo',
      href: 'https://github.com/GuiLedo',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            {t('contact.description')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {contacts.map((contact) => (
              <div
                key={contact.label}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <a href={contact.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-center">
                  <contact.icon className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold mb-1">{contact.label}</p>
                    <p className="text-xs text-muted-foreground">{contact.value}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
