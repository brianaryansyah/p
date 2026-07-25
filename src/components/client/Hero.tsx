import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Eye, Sparkles, Terminal, ChevronRight, ArrowUpRight, 
  BrainCircuit, CheckCircle2 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { MagneticButton } from '../common/MagneticButton';

// Authentic Tech Stack SVG Logos
const ReactLogo = () => (
  <svg className="w-5 h-5 text-cyan-400 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const CodeIgniterLogo = () => (
  <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.8 2.2c-.4 1.5-1.5 3.3-2.6 4.6-1.5 1.8-3.2 3.8-3.2 6.4 0 3.3 2.7 6 6 6s6-2.7 6-6c0-3.5-2.8-6.7-4.2-9-1.2 2-2 4-2 5.5 0 1.1.9 2 2 2 .6 0 1.1-.3 1.5-.7.1 1.6-1.2 3.2-3 3.2-1.7 0-3-1.3-3-3 0-2.3 2.5-5.2 2.5-9z"/>
  </svg>
);

const PyTorchLogo = () => (
  <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 2.5a.75.75 0 0 1 .75.75v1.272a8.502 8.502 0 1 1-6.737 13.912.75.75 0 1 1 1.109-1.01 7.002 7.002 0 1 0 5.542-11.458V7.5a.75.75 0 0 1-1.5 0V3.25a.75.75 0 0 1 .736-.75zM16.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
  </svg>
);

const PythonLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M11.87 2c-4.48 0-4.2 1.94-4.2 1.94l.01 2.01h4.27v.62H5.97S2 6.06 2 10.58c0 4.52 3.47 4.36 3.47 4.36h1.03v-1.47s-.06-1.75 1.73-1.75h2.95s1.66.02 1.66-1.63V7.24s.24-2.2-2.97-2.2c0 0-.84-.04-1.6.22v1.39s.41-.21 1.01-.21c.6 0 .99.35.99.8v1.07H6.94s-1.89.04-1.89 1.87c0 1.83 1.62 1.77 1.62 1.77h.96v-1.25s.03-1.42 1.48-1.42h3.91s1.39.09 1.39 1.43v2.88s.22 2.71-3.04 2.71H8.02s-1.92 0-1.92 1.9 1.87 1.83 1.87 1.83h3.87s4.25.1 4.25-4.27V12.1s0-2.02-1.91-2.02h-4.3v-.62h5.99s3.97.51 3.97-4.01C19.83 3.94 16.36 2 11.87 2z" fill="url(#python-grad)"/>
    <defs>
      <linearGradient id="python-grad" x1="2" y1="2" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38bdf8"/>
        <stop offset="1" stopColor="#facc15"/>
      </linearGradient>
    </defs>
  </svg>
);

const typingRoles = [
  'Informatics Student @ UDINUS',
  'Technology Enthusiast & Researcher',
  'Fullstack Software Developer',
  'Intelligent Systems Explorer',
  'Digital Solution Innovator',
];

const useTypingEffect = (roles: string[], typingSpeed = 75, deletingSpeed = 35, pauseTime = 2200) => {
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const typedRole = useTypingEffect(typingRoles);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const codeSnippet = `// CodeIgniter 4 + Flask ML Microservice Integration
public function predictCataract() {
    $image = $this->request->getFile('eye_image');
    $response = $this->mlClient->post('/v1/yolo/detect', [
        'body' => $image->getTempName()
    ]);
    return $this->respond(json_decode($response->getBody()));
}`;

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#08080a]"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-70"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.12), rgba(6, 182, 212, 0.08), rgba(168, 85, 247, 0.05), transparent 75%)`
        }}
      />

      {/* Dynamic Background Grid Pattern with Radial Mask */}
      <div className="absolute inset-0 bg-grid-pattern grid-mask opacity-40 pointer-events-none z-0" />
      
      {/* Ambient Multi-Color Radial Mesh Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/5 w-[550px] h-[550px] bg-cyan-500/12 rounded-full blur-[150px] pointer-events-none animate-float-gentle" />
      <div className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] bg-purple-500/12 rounded-full blur-[160px] pointer-events-none animate-float-reverse" />
      <div className="absolute top-2/3 right-1/3 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Full-Screen Hero Viewport Container */}
      <div className="min-h-screen pt-36 pb-16 flex flex-col items-center justify-center relative z-10">
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center relative">
          
          {/* Authentic Tech Badges (Docked Closely to Content for Perfectly Balanced Layout) */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden lg:flex absolute -top-10 -left-6 items-center gap-3 px-4 py-2 rounded-2xl bg-[#121216]/80 border border-cyan-500/30 backdrop-blur-xl shadow-xl hover:border-cyan-400 transition-all cursor-default group"
          >
            <div className="w-8 h-8 rounded-xl bg-cyan-500/15 flex items-center justify-center border border-cyan-500/30">
              <ReactLogo />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider">Frontend</div>
              <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">React & Vite</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden lg:flex absolute -top-10 -right-6 items-center gap-3 px-4 py-2 rounded-2xl bg-[#121216]/80 border border-orange-500/30 backdrop-blur-xl shadow-xl hover:border-orange-400 transition-all cursor-default group"
          >
            <div className="w-8 h-8 rounded-xl bg-orange-500/15 flex items-center justify-center border border-orange-500/30">
              <PyTorchLogo />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono text-orange-400 uppercase font-bold tracking-wider">Computer Vision</div>
              <div className="text-xs font-bold text-white group-hover:text-orange-300 transition-colors">YOLOv8 & PyTorch</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden lg:flex absolute bottom-24 -left-10 items-center gap-3 px-4 py-2 rounded-2xl bg-[#121216]/80 border border-amber-500/30 backdrop-blur-xl shadow-xl hover:border-amber-400 transition-all cursor-default group"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center border border-amber-500/30">
              <CodeIgniterLogo />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider">Backend MVC</div>
              <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">CodeIgniter 4</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden lg:flex absolute bottom-24 -right-10 items-center gap-3 px-4 py-2 rounded-2xl bg-[#121216]/80 border border-sky-500/30 backdrop-blur-xl shadow-xl hover:border-sky-400 transition-all cursor-default group"
          >
            <div className="w-8 h-8 rounded-xl bg-sky-500/15 flex items-center justify-center border border-sky-500/30">
              <PythonLogo />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono text-sky-400 uppercase font-bold tracking-wider">Data & Security</div>
              <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">Python AI Stack</div>
            </div>
          </motion.div>

          {/* Main Title with Signature Serif Accent & Vibrant Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08] max-w-6xl mb-6"
          >
            Welcome, I am{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 via-cyan-400 to-indigo-400 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient-text">
              Brian Aryansyah
            </span>{' '}
            <span className="font-serif-italic text-zinc-200 font-normal italic drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Pamungkas
            </span>
          </motion.h1>

          {/* Ultra-Modern Interactive Tech Specialization Role Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="h-11 flex items-center justify-center mb-9"
          >
            <div className="group relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 border border-emerald-500/30 backdrop-blur-2xl shadow-[0_0_25px_rgba(16,185,129,0.15)] hover:border-emerald-400/60 transition-all duration-300">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </div>

              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">&gt;</span> FOCUS:
              </span>

              <span className="text-xs sm:text-sm font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 min-w-[250px] text-left flex items-center">
                {typedRole}
                <span className="inline-block w-2 h-4 bg-emerald-400 ml-1.5 animate-pulse rounded-xs shadow-[0_0_8px_#10b981]" />
              </span>
            </div>
          </motion.div>

          {/* Subtitle Paragraph in English */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-normal max-w-4xl leading-relaxed mb-12"
          >
            Hello! I am <strong className="text-white font-bold px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">{profile?.name || 'Brian Aryansyah Pamungkas'}</strong>, an Informatics Engineering student at <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-bold">UDINUS</span>. Driven by deep analytical insight and technical enthusiasm, I thrive on exploring software engineering, intelligent systems, and emerging technologies to build impactful digital solutions.
          </motion.p>

          {/* Ultra-Modern Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            {/* Primary Button */}
            <MagneticButton>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-white text-zinc-950 font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_35px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                <span className="relative z-10">LIHAT PORTOFOLIO</span>
                <div className="relative z-10 w-7 h-7 rounded-full bg-zinc-950 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </a>
            </MagneticButton>

            {/* Secondary Button */}
            <MagneticButton>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-white/[0.04] hover:bg-emerald-500/10 text-white font-extrabold text-xs sm:text-sm border border-white/15 hover:border-emerald-400/60 transition-all duration-300 backdrop-blur-xl shadow-lg hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>MULAI KOLABORASI</span>
                <ArrowUpRight className="w-4.5 h-4.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>
          </motion.div>

        </div>
      </div>

      {/* Feature Highlight Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full text-left"
        >
          {/* Card 1: Fullstack Architecture */}
          <motion.div
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="artfolio-card-vibrant rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-7">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-inner">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 font-bold">
                  Fullstack MVC
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">React & CodeIgniter 4</h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                Pengembangan Single Page Application terstruktur dan RESTful API terisolasi berbasis standar Clean Code.
              </p>
            </div>
            <div className="mt-10 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400 font-bold">
              <span>Clean Architecture</span>
              <span className="text-cyan-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Production Ready
              </span>
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
            className="artfolio-card-vibrant rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-7">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-inner">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 font-bold">
                  AI & Security
                </span>
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
