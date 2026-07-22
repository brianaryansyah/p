import React from 'react';
import { 
  FolderKanban, Wrench, Mail, Plus, ArrowUpRight, 
  Sparkles, Code2 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

export const DashboardOverview = () => {
  const { projects, skills, messages, profile } = useData();

  const unreadMessages = messages.filter(m => !m.read);

  const statCards = [
    {
      title: 'Total Proyek',
      value: projects.length,
      icon: FolderKanban,
      color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
      link: '/admin/projects'
    },
    {
      title: 'Daftar Keahlian',
      value: skills.length,
      icon: Wrench,
      color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10',
      link: '/admin/skills'
    },
    {
      title: 'Pesan Masuk',
      value: messages.length,
      subtitle: `${unreadMessages.length} Belum dibaca`,
      icon: Mail,
      color: 'text-purple-400 border-purple-500/20 bg-purple-500/10',
      link: '/admin/messages'
    },
    {
      title: 'Status REST API',
      value: 'CodeIgniter Ready',
      subtitle: 'Mock API Active',
      icon: Code2,
      color: 'text-amber-400 border-amber-500/20 bg-amber-500/10',
      link: '/admin/profile'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="artfolio-card rounded-3xl p-7 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-1.5 mb-1 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Selamat Datang Kembali</span>
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            {profile?.name || "Brian Aryansyah"}
          </h1>
          <p className="text-xs text-zinc-400 font-mono mt-1 font-bold">
            {profile?.university} &bull; {profile?.major}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/admin/projects"
            className="btn-white-pill inline-flex items-center gap-2 px-5 py-3 text-xs"
          >
            <Plus className="w-4 h-4" />
            <span>TAMBAH PROYEK BARU</span>
          </Link>
        </div>
      </div>

      {/* Overview Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              to={card.link}
              className="artfolio-card rounded-3xl p-5 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3.5 rounded-2xl border ${card.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </div>

              <div className="text-2xl font-extrabold text-white mb-1">{card.value}</div>
              <div className="text-xs font-bold text-zinc-300">{card.title}</div>
              {card.subtitle && (
                <div className="text-[10px] text-zinc-400 font-mono mt-1 font-bold">{card.subtitle}</div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Recent Projects Table Preview */}
      <div className="artfolio-card rounded-3xl p-7">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <FolderKanban className="w-5 h-5 text-emerald-400" />
            <span>Daftar Proyek Terkini</span>
          </h2>
          <Link
            to="/admin/projects"
            className="text-xs font-mono text-white hover:text-emerald-400 font-bold underline"
          >
            Kelola Semua &rarr;
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-zinc-300">
            <thead className="bg-white/5 uppercase font-mono text-[10px] text-zinc-400 border-b border-white/10">
              <tr>
                <th className="p-3.5">Judul Proyek</th>
                <th className="p-3.5">Kategori</th>
                <th className="p-3.5">Teknologi</th>
                <th className="p-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {projects.slice(0, 4).map((p) => (
                <tr key={p.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-3.5 font-bold text-white flex items-center gap-3">
                    <img src={p.image} alt={p.title} className="w-9 h-9 rounded-xl object-cover border border-white/10 shadow-xs" />
                    <span>{p.title}</span>
                  </td>
                  <td className="p-3.5 font-mono text-emerald-400 font-bold">{p.category}</td>
                  <td className="p-3.5">
                    <div className="flex flex-wrap gap-1">
                      {p.techStack?.slice(0, 3).map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] font-mono border border-white/10 text-zinc-300 font-bold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-3.5 text-right">
                    <Link
                      to="/admin/projects"
                      className="text-white hover:text-emerald-400 font-mono text-[11px] font-bold"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
