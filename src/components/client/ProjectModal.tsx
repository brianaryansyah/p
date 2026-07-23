import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Award } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'achievements'>('overview');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl rounded-3xl bg-[#111115] border border-white/10 shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-3 rounded-full bg-black/60 text-zinc-300 hover:text-white border border-white/10 hover:bg-black/90 transition-all shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image Section */}
          <div className="relative aspect-[21/9] overflow-hidden bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8 right-8">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                {project.category}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Content & Tabs */}
          <div className="p-8 sm:p-10 space-y-8">
            
            {/* Nav Tabs */}
            <div className="flex border-b border-white/10 gap-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-3 text-xs sm:text-sm font-bold font-mono transition-colors border-b-2 ${
                  activeTab === 'overview'
                    ? 'border-emerald-400 text-emerald-400'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                Ringkasan Proyek
              </button>
              {project.architectureDetails && (
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`pb-3 text-xs sm:text-sm font-bold font-mono transition-colors border-b-2 ${
                    activeTab === 'architecture'
                      ? 'border-cyan-400 text-cyan-400'
                      : 'border-transparent text-zinc-400 hover:text-white'
                  }`}
                >
                  Arsitektur Teknis
                </button>
              )}
              {project.keyAchievements && (
                <button
                  onClick={() => setActiveTab('achievements')}
                  className={`pb-3 text-xs sm:text-sm font-bold font-mono transition-colors border-b-2 ${
                    activeTab === 'achievements'
                      ? 'border-purple-400 text-purple-400'
                      : 'border-transparent text-zinc-400 hover:text-white'
                  }`}
                >
                  Hasil & Metrik
                </button>
              )}
            </div>

            {/* Tab Panels */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                  {project.longDescription || project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-zinc-400 mb-3 font-bold">Tech Stack & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-xs sm:text-sm text-cyan-300">
                <div className="flex items-center gap-2 text-white font-bold mb-2">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <span>Spesifikasi Alur & Arsitektur System:</span>
                </div>
                <p className="text-zinc-300 leading-relaxed font-normal">
                  {project.architectureDetails}
                </p>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm font-mono mb-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span>Pencapaian Teknis & Metrik Performa:</span>
                </div>
                <ul className="space-y-3">
                  {project.keyAchievements?.map((ach, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Actions Footer */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400 font-bold">Tahun: {project.date}</span>
              <div className="flex items-center gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                )}
                {project.demoUrl && project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-white-pill inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
