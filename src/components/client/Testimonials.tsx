import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, MessageCircle } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dimas Prasetyo',
    role: 'Project Manager',
    company: 'TechCorp Indonesia',
    avatar: 'DP',
    content: 'Brian menunjukkan dedikasi luar biasa dalam pengembangan SiCASA CataractScan AI. Kemampuannya mengintegrasikan model YOLOv8 dengan Flask REST API dan React frontend sangat mengesankan. Hasilnya melebihi ekspektasi kami.',
    rating: 5,
    project: 'SiCASA CataractScan AI'
  },
  {
    id: 't-2',
    name: 'Siti Rahmawati',
    role: 'Lead Developer',
    company: 'EduTech Solutions',
    avatar: 'SR',
    content: 'Kolaborasi dengan Brian dalam pengembangan SiPINTAR ERP memberikan dampak signifikan. Arsitektur CodeIgniter 4 MVC yang dirancangnya sangat terstruktur, scalable, dan mudah dipelihara. Sangat recommended!',
    rating: 5,
    project: 'SiPINTAR Academic ERP'
  },
  {
    id: 't-3',
    name: 'Ahmad Fauzi',
    role: 'Research Supervisor',
    company: 'Lab Informatika UDINUS',
    avatar: 'AF',
    content: 'Sebagai research assistant, Brian menunjukkan pemahaman mendalam tentang Computer Vision dan pipeline data. Model deteksi kataraknya mencapai akurasi >96% dengan inferensi real-time yang sangat optimal.',
    rating: 5,
    project: 'Computer Vision Research'
  },
  {
    id: 't-4',
    name: 'Rina Wulandari',
    role: 'Library Director',
    company: 'Perpustakaan Digital Nasional',
    avatar: 'RW',
    content: 'Sistem perpustakaan digital yang dikembangkan Brian sangat memudahkan operasional kami. Fitur pencarian real-time, barcode scanner, dan perhitungan denda otomatis semuanya berjalan sempurna. Terima kasih, Brian!',
    rating: 5,
    project: 'Smart Digital Library'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-28 relative z-10 bg-[#08080a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2 font-bold">
            <MessageCircle className="w-4 h-4" />
            <span>Testimonials & References</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Apa Kata <span className="font-serif-italic font-normal text-zinc-300">Mereka</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-3 max-w-xl leading-relaxed font-normal">
            Feedback dan testimoni dari rekan kerja, supervisor riset, serta klien yang telah berkolaborasi dalam berbagai proyek.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 50, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="artfolio-card rounded-3xl p-8 sm:p-12 relative overflow-hidden"
              >
                {/* Decorative Quote */}
                <div className="absolute top-6 right-8 opacity-5">
                  <Quote className="w-32 h-32 text-white" />
                </div>

                {/* Glow Accent */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote Content */}
                  <blockquote className="text-lg sm:text-xl text-zinc-200 leading-relaxed font-normal mb-8 italic">
                    "{current.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-extrabold text-sm">
                        {current.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-white">{current.name}</p>
                        <p className="text-xs font-mono text-zinc-400 font-bold">
                          {current.role} — {current.company}
                        </p>
                      </div>
                    </div>

                    <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-zinc-300 font-bold">
                      {current.project}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentIndex
                        ? 'bg-amber-400 w-8'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
