import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, ArrowUpRight, Eye, Sparkles } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { ProjectModal } from './ProjectModal';
import { ProjectItem } from '../../types/portfolio';

export const ProjectsSection: React.FC = () => {
  const { projects } = useData();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Machine Learning', 'Fullstack Web'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedFilter.toLowerCase()));

  const galleryTiles = [
    { title: "SiCASA Eye AI", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop" },
    { title: "CodeIgniter 4 MVC", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop" },
    { title: "YOLO Computer Vision", image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=400&auto=format&fit=crop" },
    { title: "Phishing Guard", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop" },
    { title: "Smart Library", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=400&auto=format&fit=crop" },
    { title: "UDINUS Informatics", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop" },
    { title: "Python ML Pipeline", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop" }
  ];

  return (
    <section id="projects" className="py-28 relative z-10 bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-2 font-bold">
              <FolderGit2 className="w-4 h-4" />
              <span>Portofolio & Karya Showcase</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Proyek Pilihan & <span className="font-serif-italic font-normal text-zinc-300">Hasil Rekayasa</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-white/[0.04] p-2 rounded-full border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all ${
                  selectedFilter === cat
                    ? 'bg-white text-black shadow-lg font-extrabold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id || project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="artfolio-card rounded-3xl overflow-hidden flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-black border-b border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs font-mono text-cyan-300 font-bold shadow-sm">
                      {project.category}
                    </div>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xs"
                    >
                      <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-4 h-4 text-emerald-600" />
                        <span>Detail & Arsitektur</span>
                      </span>
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 sm:p-9">
                    <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-normal mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.techStack?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 text-zinc-200 border border-white/10 font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-8 pb-8 sm:px-9 sm:pb-9 pt-0 flex items-center justify-between border-t border-white/10 mt-auto">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-extrabold text-white group-hover:text-emerald-400 flex items-center gap-2 mt-6 transition-colors"
                  >
                    <span>Rincian & Metrik</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-3 mt-6">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors bg-white/5 border border-white/10"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors bg-white/5 border border-white/10"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Tile Snapshot Grid */}
        <div className="pt-14 border-t border-white/5">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2 font-bold">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Snapshot Galeri Visual & Eksplorasi Kode</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {galleryTiles.map((tile, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -6, rotateZ: i % 2 === 0 ? 1.5 : -1.5 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 bg-black group cursor-pointer shadow-lg"
              >
                <img src={tile.image} alt={tile.title} className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-xs font-mono text-white font-bold line-clamp-1">{tile.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};
