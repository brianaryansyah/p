import React from 'react';
import { Menu, LogOut, Globe } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AdminTopbar = ({ setMobileOpen }) => {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-[#09090b]/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-30 px-4 sm:px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-zinc-400 font-semibold">Admin Control Panel Mode</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-400 font-semibold hover:text-white px-3.5 py-1.5 rounded-full border border-white/10 hover:bg-white/5 transition-all"
        >
          <Globe className="w-3.5 h-3.5 text-emerald-400" />
          <span>Lihat Web</span>
        </a>

        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-extrabold text-xs">
            {user?.name?.charAt(0) || 'B'}
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-bold text-white leading-none">{user?.name || 'Brian Aryansyah'}</span>
            <span className="text-[10px] text-zinc-400 font-mono font-medium">Lead Administrator</span>
          </div>

          <button
            onClick={logout}
            className="p-2 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
