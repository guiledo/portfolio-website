import { useLanguage } from '@/contexts/LanguageContext';
import { Target, MapPin, Calendar, ArrowDown } from 'lucide-react';

const CareerObjectives = () => {
  const { t, language } = useLanguage();

  const objectives = [
    {
      icon: Target,
      title: language === 'en' ? 'Career Goals' : 'Objetivos Profissionais',
      content: language === 'en' 
        ? 'Seeking my first professional opportunity as a Software Developer Intern or Junior Developer. Passionate about contributing to real-world projects and growing within a collaborative team environment.'
        : 'Buscando minha primeira oportunidade profissional como Estagiário de Desenvolvimento de Software ou Desenvolvedor Júnior. Apaixonado por contribuir para projetos reais e crescer em um ambiente de equipe colaborativo.',
    },
    {
      icon: MapPin,
      title: language === 'en' ? 'Location & Availability' : 'Localização e Disponibilidade',
      content: language === 'en'
        ? 'Based in São Paulo, Brazil. Available for remote work, hybrid, or on-site positions. Open to relocation for exceptional opportunities.'
        : 'Baseado em São Paulo, Brasil. Disponível para trabalho remoto, híbrido ou presencial. Aberto a realocação para oportunidades excepcionais.',
    },
    {
      icon: Calendar,
      title: language === 'en' ? 'Availability' : 'Disponibilidade',
      content: language === 'en'
        ? 'Available for internships starting immediately. Flexible schedule to accommodate academic commitments. Ready to commit 20-40 hours per week.'
        : 'Disponível para estágios iniciando imediatamente. Horário flexível para acomodar compromissos acadêmicos. Pronto para dedicar 20-40 horas por semana.',
    },
  ];

  return (
    <section id="career-objectives" className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {language === 'en' ? 'Career Objectives' : 'Objetivos Profissionais'}
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {objectives.map((objective, index) => (
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
                  <h3 className="text-xl font-semibold mb-3">{objective.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{objective.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default CareerObjectives;
