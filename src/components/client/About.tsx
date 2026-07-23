import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Brain, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const About: React.FC = () => {
  const { profile } = useData();

  const stats = [
    { label: "Presisi Model AI", value: ">96%", desc: "Akurasi Klasifikasi YOLOv8", color: "text-emerald-400" },
    { label: "Arsitektur Kode", value: "MVC", desc: "CodeIgniter 4 & React SPA", color: "text-cyan-400" },
    { label: "Studi Akademis", value: "UDINUS", desc: "Teknik Informatika Sem 4", color: "text-purple-400" },
    { label: "Standar API", value: "RESTful", desc: "Token Auth & Security", color: "text-amber-400" }
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Pendidikan & Akademis UDINUS",
      description: "Mahasiswa Teknik Informatika Semester 4 Universitas Dian Nuswantoro. Berfokus pada rekayasa perangkat lunak terstruktur dan kecerdasan buatan.",
      color: "text-purple-400 bg-white/5 border-white/10"
    },
    {
      icon: Code,
      title: "Arsitektur Web MVC & SPA",
      description: "Pengalaman mendalam merancang REST API scalable berbasis CodeIgniter 4 dan antarmuka reaktif menggunakan React.js & Vite.",
      color: "text-cyan-400 bg-white/5 border-white/10"
    },
    {
      icon: Brain,
      title: "Riset Computer Vision (YOLOv8)",
      description: "Pengembangan model deteksi citra medis katarak otomatis (SiCASA) dan pemrosesan matriks menggunakan OpenCV & PyTorch.",
      color: "text-emerald-400 bg-white/5 border-white/10"
    }
  ];

  return (
    <section id="about" className="py-28 relative z-10 bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-2 font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Tentang & Profil Pengembang</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Eksplorasi Web Engineering & <span className="font-serif-italic font-normal text-zinc-300">Artificial Intelligence</span>
          </h2>
        </div>

        {/* Live Performance Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {stats.map((st, i) => (
            <motion.div
              key={st.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="artfolio-card rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between"
            >
              <span className={`text-3xl sm:text-4xl font-extrabold block mb-2 font-mono ${st.color}`}>
                {st.value}
              </span>
              <div>
                <span className="text-sm font-extrabold text-white block">{st.label}</span>
                <span className="text-xs font-mono text-zinc-400 block mt-1 font-medium">{st.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 artfolio-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/12 to-white/5 border border-white/15 text-white font-extrabold text-2xl flex items-center justify-center shadow-inner shrink-0">
                  BP
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">{profile?.name}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 flex items-center gap-2 font-mono font-bold mt-1">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{profile?.location}</span>
                  </p>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed font-normal text-base sm:text-lg mb-8">
                {profile?.bio}
              </p>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-zinc-300 space-y-3.5 font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 font-medium">Institusi Akademis:</span>
                  <span className="text-emerald-400 font-bold">{profile?.university}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 font-medium">Program Studi:</span>
                  <span className="text-white font-bold">{profile?.major} (Semester {profile?.semester})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 font-medium">Fokus Spesialisasi:</span>
                  <span className="text-cyan-300 font-bold">Web Architecture & Computer Vision</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-zinc-400 font-mono">
              <span className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Status: Active Developer</span>
              </span>
              <a
                href={profile?.github}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-emerald-400 underline font-bold transition-colors"
              >
                GitHub Profile &rarr;
              </a>
            </div>
          </motion.div>

          {/* Highlights Column */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, scale: 1.015 }}
                  className="artfolio-card rounded-3xl p-7 flex items-start gap-5"
                >
                  <div className={`p-4 rounded-2xl border shrink-0 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-white mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
