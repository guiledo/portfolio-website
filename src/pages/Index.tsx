import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';

import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';

import Contact from '@/components/Contact';
import BackgroundElements from '@/components/BackgroundElements';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <BackgroundElements />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />

          <Experience />
          <Projects />
          <Education />
          <Certifications />

          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;
