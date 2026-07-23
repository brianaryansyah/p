import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Circle } from 'lucide-react';
import { useData } from '../../context/DataContext';

interface HistoryLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const { profile, skills, projects } = useData();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryLog[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-zinc-300">
          <p className="text-emerald-400 font-bold text-sm sm:text-base">Brian Aryansyah Portfolio Interactive Shell v1.0.4</p>
          <p className="text-xs sm:text-sm text-zinc-400">System initialized. Type <span className="text-cyan-300 font-bold font-mono">help</span> or click command buttons below to explore.</p>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
            <p className="text-zinc-400 font-bold mb-1">Perintah yang tersedia:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div><span className="text-emerald-400 font-bold font-mono">bio</span> — Profil singkat & edukasi UDINUS</div>
              <div><span className="text-emerald-400 font-bold font-mono">skills</span> — Rincian teknologi & keahlian</div>
              <div><span className="text-emerald-400 font-bold font-mono">projects</span> — Daftar proyek pilihan & AI model</div>
              <div><span className="text-emerald-400 font-bold font-mono">contact</span> — Informasi surel & tautan sosial</div>
              <div><span className="text-emerald-400 font-bold font-mono">status</span> — Status ketersediaan projek</div>
              <div><span className="text-emerald-400 font-bold font-mono">clear</span> — Bersihkan tampilan terminal</div>
            </div>
          </div>
        );
        break;

      case 'bio':
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
            <p className="text-white font-extrabold text-base">{profile.name}</p>
            <p className="text-emerald-400 font-bold">{profile.university} — {profile.major} (Semester {profile.semester})</p>
            <p className="text-zinc-300 leading-relaxed mt-1">{profile.bio}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
            <p className="text-cyan-300 font-bold">Tech Stack & Frameworks:</p>
            <ul className="space-y-1.5 border-l border-white/10 pl-3.5">
              {skills.map(s => (
                <li key={s.id} className="flex items-center justify-between">
                  <span className="text-white font-semibold">{s.name} ({s.category})</span>
                  <span className="text-emerald-400 font-mono font-bold text-xs">{s.level}</span>
                </li>
              ))}
            </ul>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
            <p className="text-purple-300 font-bold">Showcase Proyek Utama:</p>
            {projects.map(p => (
              <div key={p.id} className="p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                <p className="text-white font-bold text-sm">{p.title} <span className="text-emerald-400 font-normal">({p.category})</span></p>
                <p className="text-zinc-300 text-xs mt-1 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm text-zinc-300 font-mono">
            <p className="text-white">Email: <a href={`mailto:${profile.email}`} className="text-emerald-400 underline font-bold">{profile.email}</a></p>
            <p className="text-white">GitHub: <a href={profile.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline font-bold">{profile.github}</a></p>
            <p className="text-white">LinkedIn: <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-purple-400 underline font-bold">{profile.linkedin}</a></p>
          </div>
        );
        break;

      case 'status':
        response = (
          <div className="text-xs sm:text-sm text-emerald-400 font-mono font-bold flex items-center gap-2">
            <Circle className="w-3 h-3 fill-emerald-400 animate-pulse" />
            <span>{profile.status}</span>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        response = (
          <p className="text-xs sm:text-sm text-rose-400 font-mono">
            Perintah '<span className="font-bold">{trimmed}</span>' tidak dikenali. Ketik <span className="text-emerald-400 font-bold">help</span> untuk daftar perintah.
          </p>
        );
        break;
    }

    setHistory(prev => [...prev, { id: `cmd-${Date.now()}`, command: cmd, output: response }]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputVal.trim()) {
      handleCommand(inputVal);
      setInputVal('');
    }
  };

  const presetButtons = ['help', 'bio', 'skills', 'projects', 'contact', 'status', 'clear'];

  return (
    <section id="terminal" className="py-28 relative z-10 bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-2 font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Developer Shell & CLI</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Interactive <span className="font-serif-italic font-normal text-zinc-300">Developer Terminal</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl leading-relaxed font-normal">
            Jelajahi portofolio secara langsung melalui antarmuka konsol CLI developer. Ketik perintah atau pilih tombol aksi di bawah.
          </p>
        </div>

        {/* Terminal Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="artfolio-card rounded-3xl overflow-hidden shadow-2xl border border-white/10 max-w-5xl mx-auto"
        >
          {/* Terminal Window Header Bar */}
          <div className="bg-[#141418] px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-300 font-bold">
              <TerminalIcon className="w-4 h-4 text-emerald-400" />
              <span>brian@udinus-portfolio:~</span>
            </div>
            <span className="text-xs font-mono text-zinc-500">bash 5.2</span>
          </div>

          {/* Preset Buttons Bar */}
          <div className="px-6 py-3.5 bg-[#0d0d10] border-b border-white/5 flex flex-wrap gap-2.5 items-center">
            <span className="text-xs font-mono text-zinc-400 font-bold">Quick Exec:</span>
            {presetButtons.map(btn => (
              <button
                key={btn}
                onClick={() => handleCommand(btn)}
                className="px-4 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all font-bold"
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Terminal Output Area */}
          <div className="p-7 font-mono bg-[#09090c] min-h-[340px] max-h-[460px] overflow-y-auto space-y-5 text-xs sm:text-sm">
            {history.map(item => (
              <div key={item.id} className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-zinc-400 font-semibold">
                  <span className="text-emerald-400">brian@portfolio:~$</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-white/10">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Prompt Row */}
          <div className="bg-[#0f0f13] px-6 py-4 border-t border-white/10 flex items-center gap-3.5">
            <span className="text-emerald-400 font-mono text-xs sm:text-sm font-bold shrink-0">brian@portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ketik perintah 'help', 'skills', 'bio', atau 'projects'..."
              className="w-full bg-transparent text-xs sm:text-sm font-mono text-white placeholder-zinc-500 focus:outline-none font-medium"
            />
            <button
              onClick={() => {
                if (inputVal.trim()) {
                  handleCommand(inputVal);
                  setInputVal('');
                }
              }}
              className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors shrink-0"
              title="Eksekusi Perintah"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
