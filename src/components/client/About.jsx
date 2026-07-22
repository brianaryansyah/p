import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Brain, MapPin, Sparkles } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const About = () => {
  const { profile } = useData();

  const highlights = [
    {
      icon: GraduationCap,
      title: "Mahasiswa UDINUS",
      description: "Teknik Informatika - Semester 4 dengan fokus pada rekayasa perangkat lunak dan AI.",
      color: "text-purple-400 bg-white/5 border-white/10"
    },
    {
      icon: Code,
      title: "Web Architecture & MVC",
      description: "Pengalaman mendalam membangun REST API & Sistem Web terstruktur dengan CodeIgniter 4 dan React.",
      color: "text-cyan-400 bg-white/5 border-white/10"
    },
    {
      icon: Brain,
      title: "Machine Learning (YOLO)",
      description: "Eksplorasi Computer Vision untuk klasifikasi citra medis dan deteksi objek real-time.",
      color: "text-emerald-400 bg-white/5 border-white/10"
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10 bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Eksplorasi Web Development & <span className="font-serif-italic font-normal text-zinc-300">Artificial Intelligence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 artfolio-card rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white font-extrabold text-xl flex items-center justify-center">
                  BP
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">{profile?.name}</h3>
                  <p className="text-xs text-zinc-400 flex items-center gap-1.5 font-mono font-medium mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{profile?.location}</span>
                  </p>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed font-light text-base mb-6">
                {profile?.bio}
              </p>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-sm text-zinc-300 space-y-2.5 font-mono">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Institusi:</span>
                  <span className="text-emerald-400 font-semibold">{profile?.university}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Program Studi:</span>
                  <span className="text-white">{profile?.major}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Fokus Studi:</span>
                  <span className="text-cyan-300">Software Engineering & Computer Vision</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>Status: Active Student & Developer</span>
              <a
                href={profile?.github}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-emerald-400 underline font-mono"
              >
                GitHub Profile &rarr;
              </a>
            </div>
          </motion.div>

          {/* Highlight Cards Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="artfolio-card rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className={`p-3.5 rounded-2xl border shrink-0 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
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
