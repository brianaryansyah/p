import React, { useState, useEffect } from 'react';
import { UserCog, Save } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const ManageProfile = () => {
  const { profile, updateProfile } = useData();
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    university: '',
    major: '',
    location: '',
    bio: '',
    email: '',
    github: '',
    linkedin: '',
    instagram: '',
    status: ''
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateProfile(formData);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
          <UserCog className="w-6 h-6 text-emerald-400" />
          <span>Kelola Profil Personal</span>
        </h1>
        <p className="text-xs text-zinc-400 font-mono mt-1 font-bold">
          Perbarui informasi diri, latar belakang akademis UDINUS, serta tautan kontak.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="artfolio-card rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono font-bold text-zinc-300 mb-1">Nama Lengkap *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-zinc-300 mb-1">Status / Badge Header</label>
            <input
              type="text"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 font-medium"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-mono font-bold text-zinc-300 mb-1">Universitas *</label>
            <input
              type="text"
              required
              value={formData.university}
              onChange={(e) => setFormData({ ...formData, university: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-zinc-300 mb-1">Program Studi *</label>
            <input
              type="text"
              required
              value={formData.major}
              onChange={(e) => setFormData({ ...formData, major: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-zinc-300 mb-1">Domisili *</label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono font-bold text-zinc-300 mb-1">Ringkasan Bio / Profil *</label>
          <textarea
            rows={4}
            required
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 font-medium resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono font-bold text-zinc-300 mb-1">Email Resmi</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none font-mono text-xs font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-zinc-300 mb-1">URL GitHub</label>
            <input
              type="url"
              value={formData.github}
              onChange={(e) => setFormData({ ...formData, github: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none font-mono text-xs font-medium"
            />
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-white/10">
          <button
            type="submit"
            disabled={saving}
            className="btn-white-pill inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'MENYIMPAN...' : 'SIMPAN PROFIL'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
