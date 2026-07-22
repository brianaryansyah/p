import React from 'react';
import { Mail, Trash2, Clock } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const ManageMessages = () => {
  const { messages, deleteMessage } = useData();

  const handleDelete = async (id) => {
    if (window.confirm('Hapus pesan ini dari inbox?')) {
      await deleteMessage(id);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
          <Mail className="w-6 h-6 text-emerald-400" />
          <span>Pesan Masuk (Contact Inbox)</span>
        </h1>
        <p className="text-xs text-zinc-400 font-mono mt-1 font-bold">
          Daftar pesan dari pengunjung website portofolio utama.
        </p>
      </div>

      {messages.length === 0 ? (
        <div className="artfolio-card rounded-3xl p-12 text-center text-zinc-400 font-mono text-xs font-bold">
          Belum ada pesan masuk saat ini.
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="artfolio-card rounded-3xl p-6 flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-extrabold text-xs shadow-xs">
                      {msg.name.charAt(0)}
                    </span>
                    <div>
                      <h3 className="text-sm font-extrabold text-white">{msg.name}</h3>
                      <a href={`mailto:${msg.email}`} className="text-xs text-cyan-400 font-mono hover:underline font-bold">
                        {msg.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{new Date(msg.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </div>

                {msg.subject && (
                  <div className="text-xs font-mono text-emerald-400 mb-2 font-extrabold">
                    Subjek: {msg.subject}
                  </div>
                )}

                <p className="text-xs text-zinc-300 leading-relaxed font-normal bg-white/[0.03] p-3.5 rounded-2xl border border-white/10">
                  {msg.message}
                </p>
              </div>

              <div className="flex justify-end pt-2 border-t border-white/5">
                <button
                  onClick={() => handleDelete(msg.id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs font-mono border border-red-500/20 transition-all font-bold"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Hapus Pesan</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
