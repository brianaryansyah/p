import { lazy, Suspense, useEffect } from 'react';
import { Navbar } from '../../components/client/Navbar';
import { Hero } from '../../components/client/Hero';
import { TechMarquee } from '../../components/client/TechMarquee';
import { ExperienceTimeline } from '../../components/client/ExperienceTimeline';
import { Footer } from '../../components/client/Footer';
import { Toast } from '../../components/common/Toast';
import { CursorGlow } from '../../components/common/CursorGlow';
import { ScrollProgress } from '../../components/common/ScrollProgress';
import { ParticleBackground } from '../../components/common/ParticleBackground';

const InteractiveTerminal = lazy(() => import('../../components/client/InteractiveTerminal').then(m => ({ default: m.InteractiveTerminal })));
const ProjectsSection = lazy(() => import('../../components/client/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const GitHubStats = lazy(() => import('../../components/client/GitHubStats').then(m => ({ default: m.GitHubStats })));
const ContactSection = lazy(() => import('../../components/client/ContactSection').then(m => ({ default: m.ContactSection })));

const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

export const HomePage: React.FC = () => {
  useEffect(() => {
    // Disable automatic browser scroll restoration on refresh so page always starts at top
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, []);
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
        <Suspense fallback={<SectionLoader />}>
          <InteractiveTerminal />
          <ProjectsSection />
          <GitHubStats />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
      <Toast />
    </div>
  );
};
