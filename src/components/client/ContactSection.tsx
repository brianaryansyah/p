import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Instagram, MapPin, CheckCircle2 } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const ContactSection: React.FC = () => {
  const { profile, sendMessage } = useData();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    try {
      await sendMessage(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative z-10 bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Banner */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/10">
          
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center relative group cursor-pointer bg-white/5 shadow-inner">
              <span className="font-serif-italic text-2xl text-white font-normal group-hover:scale-110 transition-transform">bp</span>
              <div className="absolute inset-0 rounded-full border border-dashed border-white/30 animate-spin-slow pointer-events-none" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold block mb-1">
                [01] Contact & Collaboration
              </span>
              <span className="text-xs sm:text-sm font-mono text-emerald-400 font-bold">{profile?.status}</span>
            </div>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono text-zinc-400 block mb-2 font-bold">Let's connect & build world-class tech</span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Mulai <span className="font-serif-italic font-normal text-zinc-300">Kolaborasi</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <div className="artfolio-card rounded-3xl p-8 sm:p-9 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold block mb-2">
                Informasi Kontak Resmi
              </span>

              <a
                href={`mailto:${profile?.email}`}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-4 hover:border-white/25 transition-all group"
              >
                <div className="p-3.5 rounded-xl bg-white/5 text-emerald-400 border border-white/10 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 block">Email Direct</span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {profile?.email}
                  </span>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-white/5 text-cyan-400 border border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 block">Domisili</span>
                  <span className="text-sm sm:text-base font-bold text-white">{profile?.location}</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="artfolio-card rounded-3xl p-8 sm:p-9">
              <span className="text-xs font-mono text-zinc-400 block mb-5 uppercase tracking-wider font-bold">
                Jaringan Sosial & Media
              </span>
              <div className="flex items-center gap-4">
                {profile?.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 transition-all hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {profile?.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 transition-all hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {profile?.instagram && (
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 transition-all hover:scale-105"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 artfolio-card rounded-3xl p-8 sm:p-10"
          >
            {submitted ? (
              <div className="py-14 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-18 h-18 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">Pesan Berhasil Terkirim!</h3>
                <p className="text-sm text-zinc-300 max-w-md leading-relaxed">
                  Terima kasih telah menghubungi saya. Pesan Anda telah tersimpan dan akan segera saya tanggapi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-bold">Nama Lengkap *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masukkan nama Anda..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-bold">Alamat Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@domain.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-bold">Subjek Diskusi</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Diskusi Proyek Web MVC / Computer Vision..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-bold">Pesan Anda *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan rincian kebutuhan projek atau pertanyaan Anda di sini..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-white-pill w-full inline-flex items-center justify-center gap-2.5 px-8 py-4.5 text-xs tracking-wider uppercase font-extrabold"
                >
                  {sending ? (
                    <span>MENGIRIM PESAN...</span>
                  ) : (
                    <>
                      <span>KIRIM PESAN SEKARANG</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
