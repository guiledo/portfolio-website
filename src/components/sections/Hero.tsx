import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import officeMe from '@/assets/office-me.png';
import { useLanguage } from '@/hooks/use-language';

const Hero = () => {
  const { t, language } = useLanguage();

  const resumeUrl = language === 'pt-BR' 
    ? "https://pub-a692cbd978d740f4af91b3dcd6b3d39c.r2.dev/Guilherme-Ledo-Resume_PTBR.pdf"
    : "https://pub-a692cbd978d740f4af91b3dcd6b3d39c.r2.dev/Guilherme-Ledo-Resume_EN.pdf";

  return (
    <section id="hero" className="flex items-center relative min-h-[calc(100vh-6rem)] md:h-screen">
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
          <div className="hidden md:flex justify-start gap-4">
            <Button asChild variant="secondary" size="lg" className="w-40 rounded-full border border-primary animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                {t('hero.resume')}
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border border-primary bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 hover:shadow-lg hover:shadow-primary/10">
              <a href="#projects">
                {language === 'pt-BR' ? 'Ver Projetos' : 'View Projects'}
              </a>
            </Button>
          </div>
        </div>
        <div className="relative flex-shrink-0 animate-in fade-in slide-in-from-right-4 duration-700 delay-400 group">
          {/* Decorative Frames */}
          <div className="absolute -inset-4 border border-primary/30 rounded-[2rem] rotate-6 -z-10 transition-transform duration-500 group-hover:rotate-0" />
          <div className="absolute -inset-4 border border-white/10 rounded-[2rem] -rotate-3 -z-10" />
          
          <img
            src={officeMe}
            alt="Guilherme Ledo"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-[2rem] object-cover shadow-2xl border border-white/10"
          />
        </div>
        <div className="flex md:hidden flex-col gap-4 justify-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <Button asChild variant="secondary" size="lg" className="w-40 rounded-full border border-primary hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 mx-auto">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              {t('hero.resume')}
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-40 rounded-full border border-primary bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 mx-auto">
            <a href="#projects">
              {language === 'pt-BR' ? 'Ver Projetos' : 'View Projects'}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;