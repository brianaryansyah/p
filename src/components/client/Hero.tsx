import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Eye, Sparkles, Terminal, ChevronRight, ArrowUpRight, BrainCircuit, CheckCircle2 } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { MagneticButton } from '../common/MagneticButton';

const typingRoles = [
  'Fullstack Web Developer',
  'Computer Vision Engineer',
  'Machine Learning Researcher',
  'UI/UX Architecture Designer',
  'Open Source Contributor',
];

const useTypingEffect = (roles: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

export const Hero: React.FC = () => {
  const { profile } = useData();
  const [activeYoloBox, setActiveYoloBox] = useState(true);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const typedRole = useTypingEffect(typingRoles);

  const codeSnippet = `// CodeIgniter 4 + Flask ML Microservice Integration
public function predictCataract() {
    $image = $this->request->getFile('eye_image');
    $response = $this->mlClient->post('/v1/yolo/detect', [
        'body' => $image->getTempName()
    ]);
    return $this->respond(json_decode($response->getBody()));
}`;

  return (
    <section className="relative min-h-screen pt-36 pb-28 flex flex-col items-center justify-center overflow-hidden bg-[#08080a]">
      
      {/* Background Ambient Radial Glow Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center flex flex-col items-center">
        
        {/* Top Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-zinc-200 text-xs font-bold mb-8 backdrop-blur-md shadow-xs hover:border-emerald-500/40 transition-colors cursor-default"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">
            {profile?.status || "Open for Projects & Collaboration"}
          </span>
        </motion.div>

        {/* Main Title with Signature Serif Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] max-w-5xl mb-4"
        >
          Merancang <span className="font-serif-italic text-zinc-300 font-normal">Arsitektur Web</span> & Model{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            Computer Vision
          </span>
        </motion.h1>

        {/* Typing Role Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="h-8 flex items-center justify-center mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="text-xs font-mono text-zinc-500 font-bold">I am a</span>
            <span className="text-sm font-mono font-bold text-emerald-400 min-w-[220px] text-left">
              {typedRole}
              <span className="animate-pulse text-emerald-300">|</span>
            </span>
          </div>
        </motion.div>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl text-zinc-300 font-normal max-w-3xl leading-relaxed mb-12"
        >
          Halo, Saya <strong className="text-white font-bold">{profile?.name}</strong>. Mahasiswa Teknik Informatika UDINUS yang berdedikasi membangun aplikasi web berskala enterprise (<span className="text-white font-bold">React, CodeIgniter 4 MVC</span>) serta eksplorasi kecerdasan buatan berbasis <span className="text-emerald-400 font-bold">YOLOv8 & PyTorch</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-5 mb-20"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="btn-white-pill inline-flex items-center gap-2.5 px-8 py-4 text-xs tracking-wider uppercase font-bold"
            >
              <span>LIHAT PORTOFOLIO</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/10 text-zinc-200 hover:text-white font-bold text-xs border border-white/10 transition-all backdrop-blur-md shadow-xs"
            >
              <span>MULAI KOLABORASI</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </MagneticButton>
        </motion.div>

        {/* Three Feature Highlight Cards Grid with Generous Padding & Readable Fonts */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full text-left"
        >
          {/* Card 1: Fullstack Architecture */}
          <motion.div
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="artfolio-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-7">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shadow-inner">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">Fullstack MVC</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">React & CodeIgniter 4</h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                Pengembangan Single Page Application terstruktur dan RESTful API terisolasi berbasis standar Clean Code.
              </p>
            </div>
            <div className="mt-10 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400 font-bold">
              <span>Clean Architecture</span>
              <span className="text-cyan-400 font-bold">Production Ready</span>
            </div>
          </motion.div>

          {/* Card 2: Interactive YOLO AI Demo */}
          <motion.div
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="artfolio-card-glow rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
                  <BrainCircuit className="w-6 h-6" />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab(activeTab === 'preview' ? 'code' : 'preview')}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 text-zinc-300 border border-white/10 hover:bg-white/10 transition-colors font-bold"
                  >
                    {activeTab === 'preview' ? 'Code View' : 'Live View'}
                  </button>
                  <button
                    onClick={() => setActiveYoloBox(!activeYoloBox)}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors flex items-center gap-1.5 font-bold"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{activeYoloBox ? "Hide Box" : "Show Box"}</span>
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2">SiCASA CataractScan AI</h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal mb-5">
                Deteksi dan pengenalan citra medis katarak real-time berbasis arsitektur Computer Vision YOLOv8.
              </p>

              {/* Interactive Image Box vs Code View */}
              <AnimatePresence mode="wait">
                {activeTab === 'preview' ? (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black border border-white/10 shadow-inner"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                      alt="YOLO Medical Eye Scan"
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Animated Vertical Scan Laser Beam */}
                    <motion.div
                      animate={{ y: ["0%", "100%", "0%"] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#10b981] pointer-events-none z-10"
                    />

                    {activeYoloBox && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-x-[18%] inset-y-[18%] border-2 border-emerald-400 bg-emerald-500/20 rounded-xl flex items-start p-1.5 shadow-lg shadow-emerald-500/25 z-20"
                      >
                        <span className="bg-emerald-500 text-black font-mono font-bold text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Cataract 96.8%</span>
                        </span>
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#0c0c0e] border border-white/10 p-4 font-mono text-xs text-emerald-400 overflow-x-auto"
                  >
                    <pre className="text-zinc-300 leading-relaxed">{codeSnippet}</pre>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-7 pt-5 border-t border-emerald-500/20 flex items-center justify-between text-xs font-mono text-emerald-400 font-bold">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Featured ML Model</span>
              </span>
              <span>YOLOv8 & PyTorch</span>
            </div>
          </motion.div>

          {/* Card 3: Cyber Security & Data Analysis */}
          <motion.div
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="artfolio-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-7">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 shadow-inner">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">AI & Security</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">Python & Data Pipeline</h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                Ekstraksi fitur lexical URL, pemrosesan citra medis OpenCV, dan pengklasifikasian ancaman cyber security.
              </p>
            </div>
            <div className="mt-10 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400 font-bold">
              <span>Scikit-Learn / OpenCV</span>
              <span className="text-purple-400 font-bold">Advanced Pipeline</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
