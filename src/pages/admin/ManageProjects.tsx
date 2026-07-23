import React, { useState } from 'react';
import { FolderKanban, Plus, Search, Edit3, Trash2, ExternalLink, Github } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { ProjectFormModal } from '../../components/admin/ProjectFormModal';
import { ProjectItem } from '../../types/portfolio';

export const ManageProjects: React.FC = () => {
  const { projects, addProject, updateProject, deleteProject } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.techStack?.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleOpenAdd = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (project: ProjectItem) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleSaveProject = async (formData: Partial<ProjectItem>) => {
    if (editingProject) {
      await updateProject(editingProject.id, formData);
    } else {
      await addProject(formData as Omit<ProjectItem, 'id'>);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus proyek "${title}"?`)) {
      await deleteProject(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <FolderKanban className="w-6 h-6 text-emerald-400" />
            <span>Kelola Proyek (CRUD)</span>
          </h1>
          <p className="text-xs text-zinc-400 font-mono mt-1 font-bold">
            Tambah, sunting, atau hapus daftar proyek karya di portofolio.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="btn-white-pill inline-flex items-center gap-2 px-5 py-3 text-xs shrink-0 font-bold"
        >
          <Plus className="w-4 h-4" />
          <span>TAMBAH PROYEK BARU</span>
        </button>
      </div>

      {/* Search Filter */}
      <div className="artfolio-card rounded-2xl p-4 flex items-center gap-3">
        <Search className="w-4 h-4 text-zinc-400 shrink-0" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cari berdasarkan judul, kategori, atau nama teknologi (e.g. YOLO, React, CI4)..."
          className="w-full bg-transparent border-none text-xs text-white placeholder-zinc-500 focus:outline-none font-medium"
        />
      </div>

      {/* Projects CRUD Table */}
      <div className="artfolio-card rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-zinc-300">
            <thead className="bg-white/5 uppercase font-mono text-[10px] text-zinc-400 border-b border-white/10">
              <tr>
                <th className="p-4">Info Proyek</th>
                <th className="p-4">Kategori</th>
                <th className="p-4">Teknologi Stack</th>
                <th className="p-4">Tautan</th>
                <th className="p-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredProjects.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-zinc-400 font-mono">
                    Tidak ditemukan proyek yang cocok dengan kata kunci.
                  </td>
                </tr>
              ) : (
                filteredProjects.map((p) => (
                  <tr key={p.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white">
                      <div className="flex items-center gap-3">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-12 h-12 rounded-2xl object-cover border border-white/10 shrink-0 shadow-xs"
                        />
                        <div>
                          <div className="text-sm font-extrabold text-white">{p.title}</div>
                          <div className="text-[11px] text-zinc-400 font-normal line-clamp-1 max-w-xs">
                            {p.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-mono text-emerald-400 font-bold">{p.category}</td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {p.techStack?.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] font-mono border border-white/10 text-zinc-300 font-bold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 font-mono">
                      <div className="flex items-center gap-2">
                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-full bg-white/5 text-zinc-300 hover:text-white border border-white/10"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {p.demoUrl && p.demoUrl !== '#' && (
                          <a
                            href={p.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-full bg-white/5 text-zinc-300 hover:text-white border border-white/10"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleOpenEdit(p)}
                          className="p-2 rounded-xl bg-white/5 text-white hover:bg-white/20 border border-white/10 transition-all"
                          title="Edit Proyek"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(p.id, p.title)}
                          className="p-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-all"
                          title="Hapus Proyek"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Form Modal Component */}
      <ProjectFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProject}
        projectToEdit={editingProject}
      />
    </div>
  );
};
