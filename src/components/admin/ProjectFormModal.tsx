import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Check } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';

interface ProjectFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Partial<ProjectItem>) => void;
  projectToEdit?: ProjectItem | null;
}

export const ProjectFormModal: React.FC<ProjectFormModalProps> = ({ isOpen, onClose, onSave, projectToEdit }) => {
  const [formData, setFormData] = useState<Partial<ProjectItem>>({
    title: '',
    category: 'Fullstack Web',
    description: '',
    longDescription: '',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    techStack: [],
    githubUrl: '',
    demoUrl: '',
    date: new Date().getFullYear().toString()
  });

  const [techInput, setTechInput] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const availableTechPresets = [
    'React', 'CodeIgniter 4', 'Python', 'YOLOv8', 'MySQL', 
    'Tailwind CSS', 'Linux', 'Flask', 'OpenCV', 'PHP 8', 'JavaScript'
  ];

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      previousActiveElement.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (projectToEdit && isOpen) {
      setFormData(projectToEdit);
    } else if (!isOpen) {
      setFormData({
        title: '',
        category: 'Fullstack Web',
        description: '',
        longDescription: '',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
        techStack: ['React', 'CodeIgniter 4'],
        githubUrl: '',
        demoUrl: '',
        date: new Date().getFullYear().toString()
      });
    }
  }, [projectToEdit, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab' || !modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleToggleTech = (tech: string) => {
    const currentTech = formData.techStack || [];
    if (currentTech.includes(tech)) {
      setFormData({ ...formData, techStack: currentTech.filter(t => t !== tech) });
    } else {
      setFormData({ ...formData, techStack: [...currentTech, tech] });
    }
  };

  const handleAddCustomTech = () => {
    const currentTech = formData.techStack || [];
    if (techInput.trim() && !currentTech.includes(techInput.trim())) {
      setFormData({ ...formData, techStack: [...currentTech, techInput.trim()] });
      setTechInput('');
    }
  };

  const handleTechInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddCustomTech();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            key="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            key="project-modal-content"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-full max-w-3xl bg-[#131316] rounded-3xl border border-white/10 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-white"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <h3 id="project-modal-title" className="text-lg font-extrabold text-white">
                  {projectToEdit ? 'Edit Data Proyek' : 'Tambah Proyek Baru'}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Tutup modal"
                className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="project-title" className="block text-xs font-mono font-bold text-zinc-300 mb-1">Judul Proyek *</label>
                  <input
                    id="project-title"
                    type="text"
                    required
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Misal: SiCASA - CataractScan AI"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="project-category" className="block text-xs font-mono font-bold text-zinc-300 mb-1">Kategori Proyek *</label>
                  <select
                    id="project-category"
                    value={formData.category || 'Fullstack Web'}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#131316] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 font-medium"
                  >
                    <option value="Machine Learning & Web">Machine Learning & Web</option>
                    <option value="Fullstack Web">Fullstack Web (MVC)</option>
                    <option value="Machine Learning">Machine Learning / Computer Vision</option>
                    <option value="Cyber Security">Cyber Security & Data</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="project-desc" className="block text-xs font-mono font-bold text-zinc-300 mb-1">Deskripsi Ringkas *</label>
                <textarea
                  id="project-desc"
                  rows={2}
                  required
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Penjelasan singkat proyek untuk tampilan kartu..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 font-medium resize-none"
                />
              </div>

              <div>
                <label htmlFor="project-long-desc" className="block text-xs font-mono font-bold text-zinc-300 mb-1">Deskripsi Lengkap (Modal View)</label>
                <textarea
                  id="project-long-desc"
                  rows={3}
                  value={formData.longDescription || ''}
                  onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                  placeholder="Rincian fitur, arsitektur MVC/YOLO, serta manfaat proyek..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 font-medium resize-none"
                />
              </div>

              <div>
                <label htmlFor="project-image" className="block text-xs font-mono font-bold text-zinc-300 mb-1">URL Gambar / Thumbnail</label>
                <div className="flex gap-3 items-center">
                  <input
                    id="project-image"
                    type="url"
                    required
                    value={formData.image || ''}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="flex-1 bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 font-mono text-xs font-medium"
                  />
                  <div className="w-14 h-11 rounded-xl bg-black border border-white/10 overflow-hidden shrink-0">
                    <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-zinc-300 mb-2">
                  Teknologi Yang Digunakan (Klik untuk Memilih):
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {availableTechPresets.map((tech) => {
                    const isSelected = (formData.techStack || []).includes(tech);
                    return (
                      <button
                        type="button"
                        key={tech}
                        onClick={() => handleToggleTech(tech)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-mono border transition-all flex items-center gap-1.5 font-bold ${
                          isSelected
                            ? 'bg-white text-black border-white shadow-sm'
                            : 'bg-white/5 text-zinc-300 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-black" />}
                        <span>{tech}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    onKeyDown={handleTechInputKeyDown}
                    placeholder="+ Tambah Tag Kostum (Tekan enter)"
                    className="flex-1 bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-2 text-xs text-white focus:outline-none font-medium"
                  />
                  <button
                    type="button"
                    onClick={handleAddCustomTech}
                    className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white font-bold"
                  >
                    Tambah
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="project-github" className="block text-xs font-mono font-bold text-zinc-300 mb-1">Link Repository GitHub</label>
                  <input
                    id="project-github"
                    type="url"
                    value={formData.githubUrl || ''}
                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    placeholder="https://github.com/brianaryansyah/..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-xs text-white focus:outline-none font-mono font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="project-demo" className="block text-xs font-mono font-bold text-zinc-300 mb-1">Link Live Demo (Opsional)</label>
                  <input
                    id="project-demo"
                    type="text"
                    value={formData.demoUrl || ''}
                    onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                    placeholder="https://demo-app.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-xs text-white focus:outline-none font-mono font-medium"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-full text-xs font-bold text-zinc-400 hover:text-white hover:bg-white/5"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="btn-white-pill px-7 py-3 text-xs font-bold"
                >
                  {projectToEdit ? 'Simpan Perubahan' : 'Tambah Proyek'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
