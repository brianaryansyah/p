import React from 'react';
import { useData } from '../../context/DataContext';

export const Footer: React.FC = () => {
  const { profile } = useData();
  const currentYear = new Date().getFullYear();

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

        <div className="text-xs font-mono text-center md:text-right text-zinc-500 font-semibold">
          &copy; {currentYear} {profile?.name || "Brian Aryansyah Pamungkas"}. All Rights Reserved. Engineered with React, TypeScript & Tailwind CSS.
        </div>

      </div>
    </footer>
  );
};
