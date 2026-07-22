import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

export const Footer = () => {
  const { profile } = useData();

  return (
    <footer className="py-12 relative z-10 border-t border-white/10 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-lg tracking-tighter text-white">
              brian<span className="font-serif-italic font-normal text-zinc-400">.folio</span>
            </span>
            <div className="flex flex-col border-l border-white/10 pl-3">
              <span className="text-xs font-bold text-white">{profile?.name}</span>
              <span className="text-[11px] text-zinc-500 font-mono">
                UDINUS Teknik Informatika &bull; &copy; {new Date().getFullYear()}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-400 font-mono">
            <a href="#about" className="hover:text-white transition-colors">Tentang</a>
            <a href="#skills" className="hover:text-white transition-colors">Keahlian</a>
            <a href="#projects" className="hover:text-white transition-colors">Proyek</a>
            <Link to="/admin/login" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" />
              <span>CMS Admin</span>
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};
