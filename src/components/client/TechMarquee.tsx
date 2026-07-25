import React from 'react';
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  color: string;
}

const TechLogos: Record<string, React.FC> = {
  'React': () => (
    <svg className="w-5 h-5 text-cyan-400 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  'TypeScript': () => (
    <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm10.5 7.5h-2v7.5h2v-7.5zm-5 0H6v2h1.25v5.5h2V12.5H10.5v-2zM15 13.5c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-2h-2v1.5h-2v-3.5h3.5v-1.5H15z" />
    </svg>
  ),
  'Tailwind CSS': () => (
    <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  'Vite': () => (
    <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.5 3.5l-9.8 17.6a.7.7 0 0 1-1.2 0L.7 3.5a.7.7 0 0 1 .6-1h19.6a.7.7 0 0 1 .6 1zM9.5 7.5L6.2 14h3.5l-1 5.5 6.5-8.5h-3.5l1.8-3.5H9.5z" />
    </svg>
  ),
  'Python': () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M11.87 2c-4.48 0-4.2 1.94-4.2 1.94l.01 2.01h4.27v.62H5.97S2 6.06 2 10.58c0 4.52 3.47 4.36 3.47 4.36h1.03v-1.47s-.06-1.75 1.73-1.75h2.95s1.66.02 1.66-1.63V7.24s.24-2.2-2.97-2.2c0 0-.84-.04-1.6.22v1.39s.41-.21 1.01-.21c.6 0 .99.35.99.8v1.07H6.94s-1.89.04-1.89 1.87c0 1.83 1.62 1.77 1.62 1.77h.96v-1.25s.03-1.42 1.48-1.42h3.91s1.39.09 1.39 1.43v2.88s.22 2.71-3.04 2.71H8.02s-1.92 0-1.92 1.9 1.87 1.83 1.87 1.83h3.87s4.25.1 4.25-4.27V12.1s0-2.02-1.91-2.02h-4.3v-.62h5.99s3.97.51 3.97-4.01C19.83 3.94 16.36 2 11.87 2z" fill="url(#python-grad-marquee)"/>
      <defs>
        <linearGradient id="python-grad-marquee" x1="2" y1="2" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8"/>
          <stop offset="1" stopColor="#facc15"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  'YOLOv8': () => (
    <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M7 12h10" />
    </svg>
  ),
  'PyTorch': () => (
    <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 2.5a.75.75 0 0 1 .75.75v1.272a8.502 8.502 0 1 1-6.737 13.912.75.75 0 1 1 1.109-1.01 7.002 7.002 0 1 0 5.542-11.458V7.5a.75.75 0 0 1-1.5 0V3.25a.75.75 0 0 1 .736-.75zM16.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
    </svg>
  ),
  'OpenCV': () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="6" r="4.5" fill="#ef4444" />
      <circle cx="6" cy="17" r="4.5" fill="#3b82f6" />
      <circle cx="18" cy="17" r="4.5" fill="#22c55e" />
    </svg>
  ),
  'Flask': () => (
    <svg className="w-5 h-5 text-zinc-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 3h6M10 3v5L4 18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2L14 8V3" />
      <path d="M8.5 14h7" />
    </svg>
  ),
  'CodeIgniter 4': () => (
    <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.8 2.2c-.4 1.5-1.5 3.3-2.6 4.6-1.5 1.8-3.2 3.8-3.2 6.4 0 3.3 2.7 6 6 6s6-2.7 6-6c0-3.5-2.8-6.7-4.2-9-1.2 2-2 4-2 5.5 0 1.1.9 2 2 2 .6 0 1.1-.3 1.5-.7.1 1.6-1.2 3.2-3 3.2-1.7 0-3-1.3-3-3 0-2.3 2.5-5.2 2.5-9z"/>
    </svg>
  ),
  'Laravel': () => (
    <svg className="w-5 h-5 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.5 3L12 7.5L19.5 3L12 1.5L4.5 3ZM12 9L4.5 4.5V14.5L12 19L19.5 14.5V4.5L12 9ZM12 21.5L2 15.5V6L4.5 7.5V14.2L12 18.7L19.5 14.2V7.5L22 6V15.5L12 21.5Z" />
    </svg>
  ),
  'MySQL': () => (
    <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 4.48 2 7.5v9C2 19.52 6.48 22 12 22s10-2.48 10-5.5v-9C22 4.48 17.52 2 12 2zm0 3c4.41 0 8 1.79 8 3s-3.59 3-8 3-8-1.79-8-3 3.59-3 8-3zm0 15c-4.41 0-8-1.79-8-3v-2.2c1.78 1.34 4.68 2.2 8 2.2s6.22-.86 8-2.2V17c0 1.21-3.59 3-8 3z" />
    </svg>
  ),
  'PHP 8': () => (
    <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-2.5 5.5h3a2.5 2.5 0 0 1 0 5h-1.5v3h-1.5v-8zm1.5 3.5h1.5a1 1 0 0 0 0-2H11v2z" />
    </svg>
  ),
  'JavaScript': () => (
    <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm11.5 14.5c.83 0 1.5-.67 1.5-1.5v-3.5h-1.5v3.5h-1.5v-5h3v-1.5h-4.5v8h3zm-6-1.5c0 .83.67 1.5 1.5 1.5h2v-1.5h-2v-1.5h2v-1.5h-2c-.83 0-1.5.67-1.5 1.5v1.5z" />
    </svg>
  ),
  'Linux': () => (
    <svg className="w-5 h-5 text-zinc-300" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-2.8 0-5 2.2-5 5v3c0 .8-.2 1.5-.5 2.2C5.3 14.7 4 16.2 4 18c0 2.2 2.7 4 8 4s8-1.8 8-4c0-1.8-1.3-3.3-2.5-5.8-.3-.7-.5-1.4-.5-2.2V7c0-2.8-2.2-5-5-5z" />
    </svg>
  ),
  'Git': () => (
    <svg className="w-5 h-5 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.7 10.4l-8.1-8.1a2 2 0 0 0-2.8 0L8.7 4.4 11 6.7a2.1 2.1 0 0 1 2.3 2.3l2.2 2.2a2.1 2.1 0 1 1-1.4 1.4l-2.1-2.1V16a2.1 2.1 0 1 1-2 0V9l-2.2-2.2-5.5 5.5a2 2 0 0 0 0 2.8l8.1 8.1a2 2 0 0 0 0-2.7z"/>
    </svg>
  ),
  'Framer Motion': () => (
    <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  ),
  'Node.js': () => (
    <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7.8v8.4L12 22l10-5.8V7.8L12 2zm-1 14.5l-4-2.3v-4.6l4 2.3v4.6zm6-2.3l-4 2.3v-4.6l4-2.3v4.6z"/>
    </svg>
  ),
  'REST API': () => (
    <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="5" width="20" height="6" rx="2" />
      <rect x="2" y="13" width="20" height="6" rx="2" />
      <circle cx="6" cy="8" r="1" fill="currentColor" />
      <circle cx="6" cy="16" r="1" fill="currentColor" />
    </svg>
  )
};

const techStack: TechItem[] = [
  { name: 'React', color: 'text-cyan-400' },
  { name: 'TypeScript', color: 'text-blue-400' },
  { name: 'Tailwind CSS', color: 'text-sky-400' },
  { name: 'Vite', color: 'text-yellow-400' },
  { name: 'Python', color: 'text-green-400' },
  { name: 'YOLOv8', color: 'text-emerald-400' },
  { name: 'PyTorch', color: 'text-orange-400' },
  { name: 'OpenCV', color: 'text-blue-300' },
  { name: 'Flask', color: 'text-white' },
  { name: 'CodeIgniter 4', color: 'text-amber-400' },
  { name: 'Laravel', color: 'text-rose-500' },
  { name: 'MySQL', color: 'text-blue-500' },
  { name: 'PHP 8', color: 'text-indigo-400' },
  { name: 'JavaScript', color: 'text-amber-400' },
  { name: 'Linux', color: 'text-zinc-300' },
  { name: 'Git', color: 'text-rose-400' },
  { name: 'Framer Motion', color: 'text-pink-400' },
  { name: 'Node.js', color: 'text-emerald-400' },
  { name: 'REST API', color: 'text-teal-300' },
];

const TechBadge: React.FC<{ tech: TechItem }> = ({ tech }) => {
  const IconComponent = TechLogos[tech.name];
  return (
    <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#111116] border border-white/10 hover:border-emerald-500/40 hover:bg-[#16161c] transition-all duration-300 cursor-default group shrink-0 shadow-md">
      <span className="w-5 h-5 flex items-center justify-center">
        {IconComponent ? <IconComponent /> : null}
      </span>
      <span className={`text-xs font-mono font-extrabold ${tech.color} group-hover:text-white transition-colors`}>
        {tech.name}
      </span>
    </div>
  );
};

export const TechMarquee: React.FC = () => {
  const firstRow = techStack.slice(0, 10);
  const secondRow = techStack.slice(10);

  return (
    <section className="py-20 relative z-10 bg-[#08080a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-extrabold">
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

