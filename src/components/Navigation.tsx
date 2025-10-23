import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-80 transition-opacity"
            >
              <img src={logo} alt="GLC Logo" className="h-16" />
            </button>
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.skills')}
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.experience')}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.projects')}
              </button>
              <button
                onClick={() => scrollToSection('certifications')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.certifications')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2"
            >
              <Languages className="h-4 w-4" />
              {language.toUpperCase()}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
