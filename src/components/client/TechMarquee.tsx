import React from 'react';
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

const techStack: TechItem[] = [
  { name: 'React', icon: '⚛️', color: 'text-cyan-400' },
  { name: 'TypeScript', icon: 'TS', color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: '🎨', color: 'text-sky-400' },
  { name: 'Vite', icon: '⚡', color: 'text-yellow-400' },
  { name: 'Python', icon: '🐍', color: 'text-green-400' },
  { name: 'YOLOv8', icon: '👁', color: 'text-emerald-400' },
  { name: 'PyTorch', icon: '🔥', color: 'text-orange-400' },
  { name: 'OpenCV', icon: '📷', color: 'text-blue-300' },
  { name: 'Flask', icon: '🧪', color: 'text-white' },
  { name: 'CodeIgniter 4', icon: '🔧', color: 'text-red-400' },
  { name: 'MySQL', icon: '🗄', color: 'text-blue-500' },
  { name: 'PHP 8', icon: '🐘', color: 'text-indigo-400' },
  { name: 'JavaScript', icon: 'JS', color: 'text-amber-400' },
  { name: 'Linux', icon: '🐧', color: 'text-zinc-300' },
  { name: 'Git', icon: '📂', color: 'text-rose-400' },
  { name: 'Framer Motion', icon: '✨', color: 'text-pink-400' },
  { name: 'Node.js', icon: '🟢', color: 'text-green-400' },
  { name: 'REST API', icon: '🔗', color: 'text-emerald-300' },
];

const TechBadge: React.FC<{ tech: TechItem }> = ({ tech }) => (
  <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] transition-all cursor-default group shrink-0">
    <span className="text-base">{tech.icon}</span>
    <span className={`text-xs font-mono font-bold ${tech.color} group-hover:text-white transition-colors`}>
      {tech.name}
    </span>
  </div>
);

export const TechMarquee: React.FC = () => {
  const firstRow = techStack.slice(0, 9);
  const secondRow = techStack.slice(9);

  return (
    <section className="py-20 relative z-10 bg-[#08080a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold">
            Technologies & Tools I Work With
          </span>
        </div>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#08080a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#08080a] to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-4 w-max"
        >
          {[...firstRow, ...firstRow, ...firstRow].map((tech, i) => (
            <TechBadge key={`row1-${i}`} tech={tech} />
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#08080a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#08080a] to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="flex gap-4 w-max"
        >
          {[...secondRow, ...secondRow, ...secondRow].map((tech, i) => (
            <TechBadge key={`row2-${i}`} tech={tech} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
