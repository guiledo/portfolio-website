import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';
import officeMe from '@/assets/office-me.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-3xl text-center md:text-left">
          <p className="text-primary font-medium mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {t('hero.greeting')}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 whitespace-nowrap">
            Guilherme Ledo Chagas
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            {t('hero.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {t('hero.description')}
          </p>
        </div>
        <div className="flex-shrink-0 animate-in fade-in slide-in-from-right-4 duration-700 delay-400">
          <img
            src={officeMe}
            alt="Guilherme Ledo Chagas"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-primary"
          />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
