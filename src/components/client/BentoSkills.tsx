import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, BrainCircuit, Server, Terminal, Database, Cpu, Palette, 
  Layers, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { useData } from '../../context/DataContext';

export const BentoSkills: React.FC = () => {
  const { skills } = useData();
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const iconMap: Record<string, React.ElementType> = {
    Code2,
    BrainCircuit,
    Server,
    Terminal,
    Database,
    Cpu,
    Palette
  };

  const categories = ['All', 'Frontend', 'Backend', 'Machine Learning', 'Database', 'DevOps'];

  const filteredSkills = filterCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category.toLowerCase().includes(filterCategory.toLowerCase()));

  return (
    <section id="skills" className="py-28 relative z-10 bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2 font-bold">
              <Layers className="w-4 h-4" />
              <span>Teknologi & Keahlian Teknis</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Bento Grid <span className="font-serif-italic font-normal text-zinc-300">Tech Stack</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-white/[0.04] p-2 rounded-full border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilterCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all ${
                  filterCategory === cat
                    ? 'bg-white text-black shadow-lg font-extrabold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div layout className="bento-grid">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              const cardSpan = skill.size || "col-span-12 md:col-span-6 lg:col-span-4";

              return (
                <motion.div
                  key={skill.id || skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -7, scale: 1.015 }}
                  transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className={`${cardSpan} artfolio-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group cursor-pointer`}
                >
                  <div>
                    {/* Top Bar inside card */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-all shadow-inner">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 font-bold">
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Name & Description */}
                    <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-normal mb-6">
                      {skill.description}
                    </p>

                    {/* Skill Highlight Badges */}
                    {skill.highlights && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {skill.highlights.map(hl => (
                          <span key={hl} className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-zinc-300 border border-white/10 font-bold">
                            {hl}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer Tag */}
                  <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400 font-bold">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>{skill.category}</span>
                    </span>
                    <span className="text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
