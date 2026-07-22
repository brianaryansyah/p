import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, ArrowUpRight, Eye, Sparkles } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection = () => {
  const { projects } = useData();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Machine Learning', 'Fullstack Web'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedFilter.toLowerCase()));

  // Gallery tiles matching the multi-tile image showcase grid
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
    <section id="projects" className="py-24 relative z-10 bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2 font-bold">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Portofolio & Showcase</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Proyek Pilihan & <span className="font-serif-italic font-normal text-zinc-300">Karya Showcase</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-white/[0.03] p-2 rounded-full border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedFilter === cat
                    ? 'bg-white text-black shadow-lg font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id || project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="artfolio-card rounded-3xl overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Image Container with Hover Overlay */}
                <div className="relative aspect-[16/9] overflow-hidden bg-black border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10 text-[11px] font-mono text-cyan-300 font-semibold shadow-sm">
                    {project.category}
                  </div>

                  {/* Hover Quick View Trigger */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs"
                  >
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-emerald-600" />
                      <span>Lihat Detail Proyek</span>
                    </span>
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-7">
                  <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/10 font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className="px-7 pb-7 pt-0 flex items-center justify-between border-t border-white/5 mt-auto">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-bold text-white group-hover:text-emerald-400 flex items-center gap-1.5 mt-5 transition-colors"
                >
                  <span>Detail & Fitur</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-3 mt-5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors bg-white/5 border border-white/10"
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
                      className="p-2.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors bg-white/5 border border-white/10"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Tile Grid */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>Snapshot Galeri Proyek & Visual Eksplorasi</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {galleryTiles.map((tile, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -6, rotateZ: i % 2 === 0 ? 1.5 : -1.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 bg-black group cursor-pointer shadow-lg"
              >
                <img src={tile.image} alt={tile.title} className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                  <span className="text-[10px] font-mono text-white font-bold line-clamp-1">{tile.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};
