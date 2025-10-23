import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';

import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
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

          <Contact />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;
