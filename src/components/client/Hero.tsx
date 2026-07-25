import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Eye, Sparkles, Terminal, ChevronRight, ArrowUpRight, 
  BrainCircuit, CheckCircle2, Cpu, ChevronDown, Layers, ShieldCheck 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { MagneticButton } from '../common/MagneticButton';

const typingRoles = [
  'Informatics Student @ UDINUS',
  'Technology Enthusiast & Researcher',
  'Fullstack Software Developer',
  'Intelligent Systems Explorer',
  'Digital Solution Innovator',
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
      <div className="min-h-screen pt-36 pb-12 flex flex-col items-center justify-center relative z-10">
        
        {/* Floating Decorative Interactive Badges (Hidden on Small Screens) */}
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden xl:flex absolute top-40 left-12 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-xl hover:border-emerald-500/50 transition-all cursor-default group"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-zinc-400">Frontend Stack</div>
            <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">React & Vite Ecosystem</div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden xl:flex absolute top-44 right-12 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-500/50 transition-all cursor-default group"
        >
          <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
            <BrainCircuit className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-zinc-400">AI & Vision</div>
            <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">YOLOv8 & PyTorch</div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden xl:flex absolute bottom-36 left-16 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-xl hover:border-amber-500/50 transition-all cursor-default group"
        >
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-zinc-400">Backend System</div>
            <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">CodeIgniter 4 MVC</div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden xl:flex absolute bottom-40 right-16 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-xl hover:border-purple-500/50 transition-all cursor-default group"
        >
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-zinc-400">Analytics & ML</div>
            <div className="text-xs font-bold text-white group-hover:text-purple-400 transition-colors">Python Security Pipeline</div>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
          
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

          {/* Animated Typing Role Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="h-9 flex items-center justify-center mb-8"
          >
            <div className="flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-xl shadow-lg hover:border-emerald-500/40 transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-zinc-400 font-bold">I am an</span>
              <span className="text-xs sm:text-sm font-mono font-bold text-emerald-300 min-w-[240px] text-left">
                {typedRole}
                <span className="animate-pulse text-emerald-400">|</span>
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

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            <MagneticButton>
              <a
                href="#projects"
                className="btn-white-pill inline-flex items-center gap-2.5 px-9 py-4.5 text-xs sm:text-sm tracking-wider uppercase font-extrabold shadow-2xl"
              >
                <span>LIHAT PORTOFOLIO</span>
                <ChevronRight className="w-4.5 h-4.5" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-9 py-4.5 rounded-full bg-white/[0.05] hover:bg-white/12 text-zinc-100 hover:text-white font-extrabold text-xs sm:text-sm border border-white/15 hover:border-emerald-500/40 transition-all backdrop-blur-xl shadow-lg"
              >
                <span>MULAI KOLABORASI</span>
                <ArrowUpRight className="w-4.5 h-4.5 text-emerald-400" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Interactive Bouncing Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ opacity: { duration: 0.8, delay: 0.5 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
            className="mt-14 inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-400 backdrop-blur-md hover:border-emerald-500/40 hover:text-white transition-all cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-4 h-4 text-emerald-400 animate-bounce" />
            <span>Explore Portfolio & Interactive Showcase</span>
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
