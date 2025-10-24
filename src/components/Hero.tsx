import { useLanguage } from '@/contexts/LanguageContext';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import officeMe from '@/assets/office-me.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="flex items-center py-20 relative mb-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-3xl text-center md:text-left">
          <p className="text-lg text-primary font-medium mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {t('hero.greeting')}
          </p>
                      <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                      Guilherme Ledo Chagas          </h1>
          <h2 className="text-3xl md:text-4xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            {t('hero.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {t('hero.description')}
          </p>
          {/* Desktop Button */}
          <div className="hidden md:flex justify-start">
            <Button asChild variant="secondary" size="lg" className="rounded-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-2" />
                RESUME
              </a>
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0 animate-in fade-in slide-in-from-right-4 duration-700 delay-400">
          <img
            src={officeMe}
            alt="Guilherme Ledo Chagas"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg border-4 border-primary"
          />
        </div>
        {/* Mobile Button */}
        <div className="flex md:hidden justify-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <Button asChild variant="secondary" size="lg" className="rounded-full">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4 mr-2" />
              RESUME
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
