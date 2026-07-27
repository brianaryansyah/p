import React from 'react';
import { Navbar } from '../../components/client/Navbar';
import { Hero } from '../../components/client/Hero';
import { TechMarquee } from '../../components/client/TechMarquee';
import { ExperienceTimeline } from '../../components/client/ExperienceTimeline';
import { InteractiveTerminal } from '../../components/client/InteractiveTerminal';
import { ProjectsSection } from '../../components/client/ProjectsSection';
import { GitHubStats } from '../../components/client/GitHubStats';
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
      <main id="main-content" className="relative z-10">
        <Hero />
        <TechMarquee />
        <ExperienceTimeline />
        <InteractiveTerminal />
        <ProjectsSection />
        <GitHubStats />
        <ContactSection />
      </main>
      <Footer />
      <Toast />
    </div>
  );
};
