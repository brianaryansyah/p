import React from 'react';
import { Navbar } from '../../components/client/Navbar';
import { Hero } from '../../components/client/Hero';
import { About } from '../../components/client/About';
import { BentoSkills } from '../../components/client/BentoSkills';
import { InteractiveTerminal } from '../../components/client/InteractiveTerminal';
import { ProjectsSection } from '../../components/client/ProjectsSection';
import { ContactSection } from '../../components/client/ContactSection';
import { Footer } from '../../components/client/Footer';
import { Toast } from '../../components/common/Toast';
import { CursorGlow } from '../../components/common/CursorGlow';
import { ScrollProgress } from '../../components/common/ScrollProgress';
import { ParticleBackground } from '../../components/common/ParticleBackground';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 selection:bg-white selection:text-black">
      <ScrollProgress />
      <CursorGlow />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <BentoSkills />
        <InteractiveTerminal />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toast />
    </div>
  );
};
