import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages, Menu } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '@/assets/logo.png';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const isMobile = useIsMobile();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Height of the fixed navigation bar + some extra space
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="GLC Logo" className="h-20" />
          </button>
          {isMobile ? (
            <div className="flex-grow flex justify-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size={isMobile ? "default" : "icon"} className="mr-2">
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
                      className="text-xl text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('nav.about')}
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('technologies');
                        document.getElementById('sheet-close-button')?.click();
                      }}
                      className="text-xl text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('nav.technologies')}
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('experience');
                        document.getElementById('sheet-close-button')?.click();
                      }}
                      className="text-xl text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('nav.experience')}
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('projects');
                        document.getElementById('sheet-close-button')?.click();
                      }}
                      className="text-xl text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('nav.projects')}
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('education');
                        document.getElementById('sheet-close-button')?.click();
                      }}
                      className="text-xl text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('education.title')}
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('contact');
                        document.getElementById('sheet-close-button')?.click();
                      }}
                      className="text-xl text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('nav.contact')}
                    </button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <div className="flex-grow flex items-center justify-start gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.about')}
              </button>
              <div className="h-4 w-px bg-border" />
              <button
                onClick={() => scrollToSection('technologies')}
                className="w-32 text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.technologies')}
              </button>
              <div className="h-4 w-px bg-border" />
              <button
                onClick={() => scrollToSection('experience')}
                className="text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.experience')}
              </button>
              <div className="h-4 w-px bg-border" />
              <button
                onClick={() => scrollToSection('projects')}
                className="text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.projects')}
              </button>
              <div className="h-4 w-px bg-border" />
              <button
                onClick={() => scrollToSection('education')}
                className="text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('education.title')}
              </button>
              <div className="h-4 w-px bg-border" />
              <button
                onClick={() => scrollToSection('contact')}
                className="text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.contact')}
              </button>
            </div>
          )}
          <div className={isMobile ? "flex items-center gap-2" : "flex items-center gap-4"}>
            <Button
              variant="outline"
              size="default"
              asChild
              className="gap-2"
            >
              <a href="https://github.com/GuiLedo" target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-5 w-5" />
                {!isMobile && <span>GitHub</span>}
              </a>
            </Button>
            <Button
              variant="outline"
              size="default"
              asChild
              className="gap-2"
            >
              <a href="https://www.linkedin.com/in/glc42/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-5 w-5" />
                {!isMobile && <span>LinkedIn</span>}
              </a>
            </Button>

            <Button
              variant="outline"
              size="default"
              onClick={toggleLanguage}
              className={isMobile ? "gap-2 active:bg-primary active:text-primary-foreground" : "w-28 gap-2"}
            >
              <Languages className="h-5 w-5" />
              {isMobile ? (language === 'en-US' ? 'EN' : 'PT') : language.toUpperCase()}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
