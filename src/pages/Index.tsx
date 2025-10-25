import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';

import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';

import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import BackgroundElements from '@/components/BackgroundElements';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <BackgroundElements />
        <Navigation />
        <main className="pt-24">
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
