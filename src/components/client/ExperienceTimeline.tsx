import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Terminal, 
  Rocket, 
  ShieldCheck, 
  Cpu
} from 'lucide-react';

interface TimelineItem {
  id: string;
  type: 'experience' | 'education' | 'achievement';
  title: string;
  organization: string;
  date: string;
  description: string;
  tags?: string[];
  icon: React.ElementType;
  color: string;
  badgeBg: string;
  borderGlow: string;
  glowColor: string;
  accentGradient: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 'tl-smp',
    type: 'education',
    title: 'Junior High School Education',
    organization: 'SMPN 3 Pemalang',
    date: '2018 - 2021',
    description: 'Completed foundational secondary education with an emphasis on mathematics, natural sciences, and analytical problem-solving. Developed early passion for computer technology and digital systems.',
    tags: ['Mathematics', 'Basic Science', 'Digital Literacy', 'Problem Solving'],
    icon: GraduationCap,
    color: 'text-amber-400',
    badgeBg: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
    borderGlow: 'group-hover:border-amber-500/50',
    glowColor: 'from-amber-500/20 via-amber-500/5 to-transparent',
    accentGradient: 'from-amber-400 to-orange-500'
  },
  {
    id: 'tl-sma',
    type: 'education',
    title: 'Senior High School - MIPA',
    organization: 'SMAN 1 Pemalang',
    date: '2021 - 2024',
    description: 'Graduated from Mathematics and Natural Sciences (MIPA) program. Specialized in advanced algebra, physics, logical reasoning, and computational thinking, establishing a strong foundation for web technology and software engineering.',
    tags: ['MIPA', 'Mathematics', 'Physics', 'Computational Logic'],
    icon: GraduationCap,
    color: 'text-indigo-400',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300',
    borderGlow: 'group-hover:border-indigo-500/50',
    glowColor: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
    accentGradient: 'from-indigo-400 to-purple-500'
  },
  {
    id: 'tl-2',
    type: 'education',
    title: 'Informatics Engineering (Teknik Informatika)',
    organization: 'Universitas Dian Nuswantoro (UDINUS)',
    date: '2024 - Present',
    description: 'Currently pursuing Bachelor of Computer Science majoring in Informatics Engineering (Teknik Informatika). Focusing on Software Engineering, Data Structures & Algorithms, Modern Fullstack Web Development, Database Architecture, and Artificial Intelligence.',
    tags: ['Software Engineering', 'Data Structures', 'Fullstack Web', 'AI/ML', 'Database Architecture'],
    icon: GraduationCap,
    color: 'text-cyan-400',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
    borderGlow: 'group-hover:border-cyan-500/50',
    glowColor: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    accentGradient: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'tl-3',
    type: 'experience',
    title: 'Machine Learning Research Assistant',
    organization: 'Laboratorium Informatika UDINUS',
    date: 'Sep 2024 - Des 2024',
    description: 'Menjalankan riset Computer Vision untuk deteksi katarak otomatis menggunakan arsitektur YOLOv8 dengan dataset medis terkurasi. Mengembangkan pipeline inferensi Flask API dan integrasi bounding box overlay real-time.',
    tags: ['YOLOv8', 'PyTorch', 'OpenCV', 'Flask'],
    icon: Cpu,
    color: 'text-purple-400',
    badgeBg: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
    borderGlow: 'group-hover:border-purple-500/50',
    glowColor: 'from-purple-500/20 via-purple-500/5 to-transparent',
    accentGradient: 'from-purple-400 to-indigo-500'
  },
  {
    id: 'tl-4',
    type: 'achievement',
    title: 'Best Project Award - SiCASA CataractScan AI',
    organization: 'Seminar Nasional Teknologi Informasi UDINUS',
    date: 'Nov 2024',
    description: 'Meraih penghargaan Best Project untuk inovasi sistem deteksi katarak berbasis AI dengan akurasi model >96% dan inference latency <45ms per frame.',
    tags: ['AI Innovation', 'Medical Imaging', 'Computer Vision'],
    icon: Trophy,
    color: 'text-amber-400',
    badgeBg: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
    borderGlow: 'group-hover:border-amber-500/50',
    glowColor: 'from-amber-500/20 via-amber-500/5 to-transparent',
    accentGradient: 'from-amber-400 to-orange-500'
  },
  {
    id: 'tl-5',
    type: 'experience',
    title: 'Freelance Fullstack Developer',
    organization: 'Self-Employed',
    date: 'Jun 2024 - Present',
    description: 'Merancang dan mengembangkan sistem informasi perpustakaan digital, ERP akademis sekolah, serta berbagai solusi web custom berbasis React & CodeIgniter 4 untuk klien lokal.',
    tags: ['React', 'Vite', 'CodeIgniter 4', 'Tailwind CSS', 'MySQL'],
    icon: Rocket,
    color: 'text-rose-400',
    badgeBg: 'bg-rose-500/10 border-rose-500/20 text-rose-300',
    borderGlow: 'group-hover:border-rose-500/50',
    glowColor: 'from-rose-500/20 via-rose-500/5 to-transparent',
    accentGradient: 'from-rose-400 to-pink-500'
  },
  {
    id: 'tl-6',
    type: 'achievement',
    title: 'Cyber Security Research - Phishing Guard',
    organization: 'Independent Research Project',
    date: 'Mar 2024',
    description: 'Mengembangkan model klasifikasi phishing URL menggunakan ekstraksi 18+ fitur lexical dan ensemble Random Forest/XGBoost dengan False Positive Rate <2%.',
    tags: ['Scikit-Learn', 'Pandas', 'NLTK', 'Streamlit'],
    icon: ShieldCheck,
    color: 'text-teal-400',
    badgeBg: 'bg-teal-500/10 border-teal-500/20 text-teal-300',
    borderGlow: 'group-hover:border-teal-500/50',
    glowColor: 'from-teal-500/20 via-teal-500/5 to-transparent',
    accentGradient: 'from-teal-400 to-emerald-500'
  }
];

interface TimelineItemRowProps {
  item: TimelineItem;
  index: number;
  total: number;
  smoothProgress: MotionValue<number>;
}

const TimelineItemRow: React.FC<TimelineItemRowProps> = ({ item, index, total, smoothProgress }) => {
  const isEven = index % 2 === 0;
  const Icon = item.icon;

  // Calculate precise checkpoint progress threshold along timeline line
  const startProgress = total > 1 ? (index / (total - 0.2)) * 0.85 : 0;
  const endProgress = startProgress + 0.05;

  // Motion transforms tied to scroll progress line (Bi-directional for Scroll Down & Scroll Up)
  const cardOpacity = useTransform(smoothProgress, [startProgress, endProgress], [0, 1]);
  const cardY = useTransform(smoothProgress, [startProgress, endProgress], [40, 0]);
  const cardScale = useTransform(smoothProgress, [startProgress, endProgress], [0.91, 1]);
  const cardX = useTransform(smoothProgress, [startProgress, endProgress], [isEven ? -35 : 35, 0]);
  const cardPointerEvents = useTransform(smoothProgress, (v) => (v >= startProgress ? 'auto' : 'none'));

  const nodeScale = useTransform(smoothProgress, [startProgress, endProgress], [0.2, 1]);
  const nodeOpacity = useTransform(smoothProgress, [startProgress, endProgress], [0.15, 1]);
  const nodeRotate = useTransform(smoothProgress, [startProgress, endProgress], [-90, 0]);

  return (
    <div
      className={`relative flex items-start gap-8 md:gap-0 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content Card with Bi-Directional Scroll Progress Animation */}
      <div className={`flex-1 pl-16 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-14' : 'md:pl-14'}`}>
        <motion.div
          style={{
            opacity: cardOpacity,
            y: cardY,
            x: cardX,
            scale: cardScale,
            pointerEvents: cardPointerEvents,
            perspective: 1000
          }}
          whileHover={{ y: -8, scale: 1.02, rotateY: isEven ? -2 : 2 }}
          className={`relative rounded-3xl p-7 sm:p-8 bg-[#111116]/90 border border-white/10 backdrop-blur-xl transition-all duration-500 group shadow-2xl overflow-hidden ${item.borderGlow}`}
        >
          {/* Ambient Gradient Glow Fill on Hover */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`} />

          <div className="relative z-10">
            {/* Card Header: Icon & Date Badge */}
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  className={`p-3 rounded-2xl ${item.badgeBg} border shadow-md flex items-center justify-center transition-transform duration-300`}
                >
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </motion.div>

                <span className={`text-[11px] font-mono font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${item.badgeBg}`}>
                  {item.type}
                </span>
              </div>

              <span className="text-xs font-mono text-zinc-400 font-bold bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full shadow-inner">
                {item.date}
              </span>
            </div>

            {/* Title & Organization */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 group-hover:text-emerald-400 transition-colors tracking-tight">
              {item.title}
            </h3>

            <div className="flex items-center gap-2 mb-4">
              <span className={`text-sm font-bold font-mono ${item.color}`}>
                {item.organization}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-300 leading-relaxed font-normal mb-6">
              {item.description}
            </p>

            {/* Tech & Skill Badges */}
            {item.tags && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {item.tags.map(tag => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 rounded-xl text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/10 font-bold group-hover:border-white/20 transition-colors hover:text-white hover:bg-white/10 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Interactive Timeline Center Node Circle */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 top-6">
        <motion.div
          style={{
            scale: nodeScale,
            opacity: nodeOpacity,
            rotate: nodeRotate
          }}
          whileHover={{ scale: 1.25, rotate: 15 }}
          className={`w-11 h-11 rounded-2xl bg-[#0f0f14] border-2 border-white/20 flex items-center justify-center shadow-[0_0_25px_rgba(52,211,153,0.3)] cursor-pointer group/node backdrop-blur-md`}
        >
          {/* Pulsing Outer Ring */}
          <span className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.accentGradient} opacity-30 group-hover/node:opacity-80 transition-opacity blur-xs`} />
          
          <Icon className={`w-5 h-5 ${item.color} relative z-10 transform group-hover/node:scale-110 transition-transform`} />
        </motion.div>
      </div>

      {/* Spacer for Desktop Alternating Layout */}
      <div className="hidden md:block flex-1 md:w-1/2" />
    </div>
  );
};

export const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress Driven Line Animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 75%']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate position for glowing laser bead travelling down the line
  const laserBeadY = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const laserOpacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <section id="experience" className="py-28 relative z-10 bg-[#08080a] border-t border-white/5 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-purple-400 font-bold mb-4 backdrop-blur-md shadow-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span className="uppercase tracking-widest text-[11px]">Experience & Education</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Perjalanan <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-purple-400">Profesional</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-400 mt-3 max-w-xl leading-relaxed font-normal"
          >
            Kronologi pengalaman pengembangan, pendidikan, serta pencapaian teknis yang membentuk keahlian saya dalam dunia teknologi informasi.
          </motion.p>
        </div>

        {/* Timeline Track Container */}
        <div className="relative">

          {/* Static Background Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1 bg-white/10 rounded-full" />

          {/* Animated Scroll Progress Line */}
          <motion.div
            style={{ scaleY: smoothProgress, transformOrigin: 'top' }}
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-emerald-400 via-cyan-400 via-purple-400 to-amber-400 shadow-[0_0_20px_rgba(52,211,153,0.8)] z-10"
          />

          {/* Travelling Laser Bead */}
          <motion.div
            style={{ top: laserBeadY, opacity: laserOpacity }}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-300 z-30 pointer-events-none shadow-[0_0_25px_#38bdf8,0_0_12px_#34d399]"
          >
            <div className="w-full h-full rounded-full bg-white animate-ping opacity-75" />
          </motion.div>

          {/* Timeline Items List */}
          <div className="space-y-14 md:space-y-20">
            {timelineData.map((item, index) => (
              <TimelineItemRow
                key={item.id}
                item={item}
                index={index}
                total={timelineData.length}
                smoothProgress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
