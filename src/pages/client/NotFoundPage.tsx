import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#08080a] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-lg"
      >
        <div className="w-20 h-20 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-8">
          <AlertTriangle className="w-9 h-9 text-amber-400" />
        </div>

        <h1 className="text-7xl sm:text-8xl font-black text-white mb-4 font-mono">404</h1>
        <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-sm text-zinc-400 leading-relaxed mb-10 max-w-md mx-auto">
          Sepertinya halaman yang kamu cari sudah dipindahkan, dihapus, atau tidak pernah ada. Mari kita kembali ke halaman utama.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-zinc-950 font-extrabold text-xs uppercase tracking-wider shadow-[0_0_35px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all hover:scale-105"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>
        </div>
      </motion.div>
    </div>
  );
};
