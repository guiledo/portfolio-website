import { useLanguage } from '@/hooks/use-language';
import { objectivesData } from '@/data/about';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="flex items-center py-20 relative mb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('about.title')}
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {t('about.description')}
          </p>
          <div className="max-w-4xl mx-auto space-y-8 mt-12"> {/* Added mt-12 for spacing */}
            {objectivesData.map((objective, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <objective.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{t(objective.titleKey)}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{t(objective.contentKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;
