import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const Footer: React.FC = () => {
  const { profile } = useData();
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative z-10 bg-[#060608] border-t border-white/10 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-lg tracking-tighter text-white">
            brian<span className="font-serif-italic font-normal text-zinc-400">.folio</span>
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-xs font-mono text-zinc-400 font-bold">
            Universitas Dian Nuswantoro (UDINUS)
          </span>
        </div>

        <div className="flex items-center gap-4">
          {profile?.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
              <Github className="w-4 h-4" />
            </a>
          )}
          {profile?.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {profile?.instagram && (
            <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          )}
        </div>

        <div className="flex items-center gap-6">
          <div className="text-xs font-mono text-zinc-500 font-semibold">
            &copy; {currentYear} {profile?.name || "Brian Aryansyah Pamungkas"}. All Rights Reserved.
          </div>
          <button
            onClick={handleBackToTop}
            aria-label="Kembali ke atas"
            className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
