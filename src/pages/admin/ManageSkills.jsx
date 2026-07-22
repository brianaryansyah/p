import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Plus, Trash2 } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const ManageSkills = () => {
  const { skills, addSkill, deleteSkill } = useData();
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Frontend',
    level: 'Advanced',
    icon: 'Code2',
    description: '',
    size: 'col-span-12 md:col-span-6 lg:col-span-4'
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!formData.name) return;
    await addSkill(formData);
    setFormData({
      name: '',
      category: 'Frontend',
      level: 'Advanced',
      icon: 'Code2',
      description: '',
      size: 'col-span-12 md:col-span-6 lg:col-span-4'
    });
    setIsAdding(false);
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Hapus keahlian "${name}"?`)) {
      await deleteSkill(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <Wrench className="w-6 h-6 text-cyan-400" />
            <span>Kelola Keahlian & Tech Stack</span>
          </h1>
          <p className="text-xs text-zinc-400 font-mono mt-1 font-bold">
            Atur daftar keahlian, tingkat pemahaman, dan kategori untuk Bento Grid.
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="btn-white-pill inline-flex items-center gap-2 px-5 py-3 text-xs shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'BATAL' : 'TAMBAH KEAHLIAN BARU'}</span>
        </button>
      </div>

      {/* Add Skill Form inline */}
      {isAdding && (
        <motion.form
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          onSubmit={handleCreate}
          className="artfolio-card rounded-3xl p-7 space-y-4"
        >
          <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Form Keahlian Baru</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold text-zinc-300 mb-1">Nama Keahlian *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Misal: PyTorch & OpenCV"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-white font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold text-zinc-300 mb-1">Kategori</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-[#131316] border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-white font-medium"
              >
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Database">Database</option>
                <option value="DevOps">DevOps</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono font-bold text-zinc-300 mb-1">Tingkat Kemampuan</label>
              <select
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                className="w-full bg-[#131316] border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-white font-medium"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-zinc-300 mb-1">Deskripsi Singkat</label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Eksplorasi penggunaan untuk deteksi objek real-time..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-white font-medium"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="btn-white-pill px-6 py-2.5 text-xs font-bold"
            >
              SIMPAN KEAHLIAN
            </button>
          </div>
        </motion.form>
      )}

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="artfolio-card rounded-3xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-emerald-400 border border-white/10 font-bold">
                  {skill.category}
                </span>
                <span className="text-xs font-mono text-zinc-400 font-bold">{skill.level}</span>
              </div>
              <h3 className="text-lg font-extrabold text-white mb-1">{skill.name}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">{skill.description}</p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-end gap-2">
              <button
                onClick={() => handleDelete(skill.id, skill.name)}
                className="p-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-all"
                title="Hapus"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
