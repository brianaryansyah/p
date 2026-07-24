import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code2, Rocket, Sparkles } from 'lucide-react';

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
  glowColor: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 'tl-1',
    type: 'experience',
    title: 'Fullstack Web Developer Intern',
    organization: 'PT Tech Indonesia',
    date: 'Jan 2025 - Present',
    description: 'Mengembangkan dan memelihara arsitektur microservices berbasis CodeIgniter 4 MVC dengan integrasi RESTful API endpoint untuk sistem manajemen akademis berskala enterprise.',
    tags: ['CodeIgniter 4', 'MySQL', 'React', 'REST API'],
    icon: Briefcase,
    color: 'text-emerald-400',
    glowColor: 'from-emerald-500/20 to-emerald-500/5'
  },
  {
    id: 'tl-2',
    type: 'education',
    title: 'Teknik Informatika - Semester 4',
    organization: 'Universitas Dian Nuswantoro (UDINUS)',
    date: '2023 - Present',
    description: 'Fokus studi pada Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Basis Data Lanjut, Kecerdasan Buatan, dan Pemrograman Web Berbasis MVC.',
    tags: ['OOP', 'Database Design', 'AI/ML', 'Software Engineering'],
    icon: GraduationCap,
    color: 'text-cyan-400',
    glowColor: 'from-cyan-500/20 to-cyan-500/5'
  },
  {
    id: 'tl-3',
    type: 'experience',
    title: 'Machine Learning Research Assistant',
    organization: 'Laboratorium Informatika UDINUS',
    date: 'Sep 2024 - Des 2024',
    description: 'Menjalankan riset Computer Vision untuk deteksi katarak otomatis menggunakan arsitektur YOLOv8 dengan dataset medis terkurasi. Mengembangkan pipeline inferensi Flask API dan integrasi bounding box overlay real-time.',
    tags: ['YOLOv8', 'PyTorch', 'OpenCV', 'Flask'],
    icon: Code2,
    color: 'text-purple-400',
    glowColor: 'from-purple-500/20 to-purple-500/5'
  },
  {
    id: 'tl-4',
    type: 'achievement',
    title: 'Best Project Award - SiCASA CataractScan AI',
    organization: 'Seminar Nasional Teknologi Informasi UDINUS',
    date: 'Nov 2024',
    description: 'Meraih penghargaan Best Project untuk inovasi sistem deteksi katarak berbasis AI dengan akurasi model >96% dan inference latency <45ms per frame.',
    tags: ['AI Innovation', 'Medical Imaging', 'Computer Vision'],
    icon: Award,
    color: 'text-amber-400',
    glowColor: 'from-amber-500/20 to-amber-500/5'
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
    glowColor: 'from-rose-500/20 to-rose-500/5'
  },
  {
    id: 'tl-6',
    type: 'achievement',
    title: 'Cyber Security Research - Phishing Guard',
    organization: 'Independent Research Project',
    date: 'Mar 2024',
    description: 'Mengembangkan model klasifikasi phishing URL menggunakan ekstraksi 18+ fitur lexical dan ensemble Random Forest/XGBoost dengan False Positive Rate <2%.',
    tags: ['Scikit-Learn', 'Pandas', 'NLTK', 'Streamlit'],
    icon: Sparkles,
    color: 'text-emerald-400',
    glowColor: 'from-emerald-500/20 to-emerald-500/5'
  }
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-28 relative z-10 bg-[#08080a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-3 flex items-center gap-2 font-bold">
            <Briefcase className="w-4 h-4" />
            <span>Experience & Education</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Perjalanan <span className="font-serif-italic font-normal text-zinc-300">Profesional</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-3 max-w-xl leading-relaxed font-normal">
            Kronologi pengalaman pengembangan, pendidikan, serta pencapaian teknis yang membentuk keahlian saya dalam dunia teknologi informasi.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/40 via-purple-500/30 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="artfolio-card rounded-3xl p-7 sm:p-8 group cursor-default"
                    >
                      {/* Gradient Glow Background */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-5">
                          <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${item.color} group-hover:scale-110 transition-transform`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-mono text-zinc-500 font-bold">{item.date}</span>
                        </div>

                        {/* Title & Organization */}
                        <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className={`text-sm font-bold font-mono ${item.color} mb-3`}>
                          {item.organization}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-zinc-300 leading-relaxed font-normal mb-5">
                          {item.description}
                        </p>

                        {/* Tags */}
                        {item.tags && (
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-full text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10 font-bold"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Node (Center dot on desktop) */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 400, damping: 15, delay: index * 0.1 }}
                      className={`w-9 h-9 rounded-full bg-[#111115] border-2 border-white/20 flex items-center justify-center shadow-lg`}
                    >
                      <div className={`w-3 h-3 rounded-full ${item.color.replace('text-', 'bg-')} animate-pulse`} />
                    </motion.div>
                  </div>

                  {/* Empty spacer for alternating layout */}
                  <div className="hidden md:block flex-1 md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
