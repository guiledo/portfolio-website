import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import officeMe from '@/assets/office-me.png';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="flex items-center relative min-h-[calc(100vh-6rem)]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-3xl text-center md:text-left">
          <p className="text-lg text-primary font-medium mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {t('hero.greeting')}
          </p>
                      <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                      Guilherme Ledo          </h1>
          <h2 className="text-3xl md:text-4xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            {t('hero.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {t('hero.description')}
          </p>
          {/* Desktop Button */}
          <div className="hidden md:flex justify-start">
            <Button asChild variant="secondary" size="lg" className="w-40 rounded-full border border-primary animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <a href="https://pub-a692cbd978d740f4af91b3dcd6b3d39c.r2.dev/Guilherme-Ledo-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-2" />
                {t('hero.resume')}
              </a>
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0 animate-in fade-in slide-in-from-right-4 duration-700 delay-400">
          <img
            src={officeMe}
            alt="Guilherme Ledo"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg border-4 border-primary"
          />
        </div>
        {/* Mobile Button */}
        <div className="flex md:hidden justify-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <Button asChild variant="secondary" size="lg" className="w-40 rounded-full border border-primary hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <a href="https://pub-a692cbd978d740f4af91b3dcd6b3d39c.r2.dev/Guilherme-Ledo-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4 mr-2" />
              {t('hero.resume')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
