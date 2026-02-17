import { useLanguage } from '@/hooks/use-language';
import { Briefcase } from 'lucide-react';
import { experiencesData } from '@/data/experience';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="flex items-center py-20 relative mb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('experience.title')}
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiencesData.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-1">{t(exp.titleKey)}</h3>
                  <p className="text-lg text-primary mb-2">{t(exp.companyKey)}</p>
                  <p className="text-base text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-lg text-muted-foreground mb-4">{t(exp.descriptionKey)}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {skill.startsWith('skill.') ? t(skill) : skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Experience;
