import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Eye, Sparkles, Terminal, ChevronRight, ArrowUpRight, BrainCircuit } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { MagneticButton } from '../common/MagneticButton';

export const Hero = () => {
  const { profile } = useData();
  const [activeYoloBox, setActiveYoloBox] = useState(true);

  return (
    <section className="relative min-h-screen pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden bg-[#09090b]">
      
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center flex flex-col items-center">
        
        {/* Top Glass Pill Badge with pulse animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-200 text-xs font-bold mb-8 backdrop-blur-md shadow-xs hover:border-emerald-500/40 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-[11px] uppercase tracking-wider">{profile?.status || "Teknik Informatika UDINUS"}</span>
        </motion.div>

        {/* Main Artfolio Title with Signature Serif Italic Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl mb-6"
        >
          Membangun <span className="font-serif-italic text-zinc-300 font-normal">sistem web & AI</span> paling efisien
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-300 font-medium max-w-2xl leading-relaxed mb-10"
        >
          Halo, Saya <strong className="text-white font-extrabold">{profile?.name || "Brian Aryansyah Pamungkas"}</strong>. 
          Mahasiswa Teknik Informatika UDINUS yang berfokus pada <span className="text-white font-bold">Fullstack Web (React, CodeIgniter 4)</span> & <span className="text-emerald-400 font-bold">Machine Learning YOLOv8</span>.
        </motion.p>

        {/* Action Buttons with Magnetic Physics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="btn-white-pill inline-flex items-center gap-2 px-8 py-3.5 text-xs tracking-wider uppercase font-extrabold"
            >
              <span>EKSPLORASI PROYEK</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/10 text-zinc-200 hover:text-white font-bold text-xs border border-white/10 transition-all backdrop-blur-md shadow-xs"
            >
              <span>HUBUNGI SAYA</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </MagneticButton>
        </motion.div>

        {/* Three Featured Cards Row with Interactive Hover & Scanline Beam */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left"
        >
          {/* Card 1: Fullstack Web */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="artfolio-card rounded-3xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest font-bold">Fullstack</span>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">React & CodeIgniter 4</h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                Pengembangan Single Page Application interaktif dan REST API terstruktur berbasis pola MVC.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400 font-bold">
              <span>Frontend + Backend</span>
              <span className="text-cyan-400 font-extrabold">Advanced</span>
            </div>
          </motion.div>

          {/* Card 2: Featured ML Model (With Interactive Scan Laser Animation & Ambient Glow Aura!) */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="artfolio-card-glow rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <button
                  onClick={() => setActiveYoloBox(!activeYoloBox)}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors flex items-center gap-1 font-bold"
                >
                  <Eye className="w-3 h-3" />
                  <span>{activeYoloBox ? "Hide Bbox" : "Show Bbox"}</span>
                </button>
              </div>

              <h3 className="text-xl font-extrabold text-white mb-2">SiCASA CataractScan</h3>
              <p className="text-xs text-zinc-200 leading-relaxed font-normal mb-4">
                Model deteksi citra medis katarak otomatis berbasis arsitektur Computer Vision YOLOv8.
              </p>

              {/* Simulated Interactive Image Box with Animated AI Laser Scanline */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-black border border-white/10 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                  alt="YOLO Detection"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Animated Vertical Scan Laser Beam */}
                <motion.div
                  animate={{ y: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#10b981] pointer-events-none z-10"
                />

                {activeYoloBox && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-x-[20%] inset-y-[20%] border border-emerald-400 bg-emerald-500/20 rounded-xl flex items-start p-1 shadow-lg shadow-emerald-500/20 z-20"
                  >
                    <span className="bg-emerald-500 text-black font-mono font-bold text-[9px] px-1.5 py-0.5 rounded-full">
                      Cataract 96.8%
                    </span>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-500/20 flex items-center justify-between text-[11px] font-mono text-emerald-400 font-extrabold">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 animate-pulse" />
                <span>Featured AI Model</span>
              </span>
              <span>YOLOv8</span>
            </div>
          </motion.div>

          {/* Card 3: Machine Learning & Python */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="artfolio-card rounded-3xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest font-bold">AI & Data</span>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">Python & OpenCV</h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                Ekstraksi fitur, dataset annotation, klasifikasi data cyber security & visi komputer.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400 font-bold">
              <span>Scikit-Learn / PyTorch</span>
              <span className="text-purple-400 font-extrabold">Intermediate</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
