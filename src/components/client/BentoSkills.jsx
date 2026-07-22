import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, BrainCircuit, Server, Terminal, Database, Cpu, Palette, 
  Layers, ShieldCheck 
} from 'lucide-react';
import { useData } from '../../context/DataContext';

export const BentoSkills = () => {
  const { skills } = useData();
  const [filterCategory, setFilterCategory] = useState('All');

  const iconMap = {
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
    <section id="skills" className="py-24 relative z-10 bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 flex items-center gap-2 font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>Teknologi & Keahlian</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Bento Grid <span className="font-serif-italic font-normal text-zinc-300">Tech Stack</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-white/[0.03] p-2 rounded-full border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filterCategory === cat
                    ? 'bg-white text-black font-bold shadow-lg'
                    : 'text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Bento Grid with Spring Hover Animation */}
        <div className="bento-grid">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const cardSpan = skill.size || "col-span-12 md:col-span-6 lg:col-span-4";

            return (
              <motion.div
                key={skill.id || skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`${cardSpan} artfolio-card rounded-3xl p-6 flex flex-col justify-between group cursor-pointer`}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 font-bold">
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Name & Description */}
                  <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500 font-bold">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{skill.category}</span>
                  </span>
                  <span className="text-zinc-400 group-hover:text-white transition-colors">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
