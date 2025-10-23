import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages, Menu } from 'lucide-react';
import logo from '@/assets/logo.png';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const isMobile = useIsMobile();

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
            {isMobile ? (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <nav className="flex flex-col gap-4 mt-8">
                    <button
                      onClick={() => {
                        scrollToSection('about');
                        // Close sheet after clicking
                        document.getElementById('sheet-close-button')?.click();
                      }}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('nav.about')}
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('technologies');
                        document.getElementById('sheet-close-button')?.click();
                      }}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('nav.technologies')}
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('experience');
                        document.getElementById('sheet-close-button')?.click();
                      }}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('nav.experience')}
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('projects');
                        document.getElementById('sheet-close-button')?.click();
                      }}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('nav.projects')}
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('education');
                        document.getElementById('sheet-close-button')?.click();
                      }}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('education.title')}
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('contact');
                        document.getElementById('sheet-close-button')?.click();
                      }}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('nav.contact')}
                    </button>
                  </nav>
                </SheetContent>
              </Sheet>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('nav.about')}
                </button>
                <button
                  onClick={() => scrollToSection('technologies')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('nav.technologies')}
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
                  onClick={() => scrollToSection('education')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('education.title')}
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('nav.contact')}
                </button>
              </div>
            )}
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
