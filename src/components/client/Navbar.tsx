import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../common/MagneticButton';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ['about', 'skills', 'terminal', 'projects', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 250 && rect.bottom >= 250;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about', id: 'about' },
    { name: 'Keahlian', href: '#skills', id: 'skills' },
    { name: 'Terminal CLI', href: '#terminal', id: 'terminal' },
    { name: 'Proyek', href: '#projects', id: 'projects' },
    { name: 'Kontak', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        scrolled
          ? 'bg-[#08080a]/88 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-white/12 to-white/5 border border-white/15 flex items-center justify-center text-white font-mono font-extrabold text-sm group-hover:border-emerald-500/50 transition-all shadow-sm">
              BP
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-white group-hover:text-zinc-200 transition-colors">
              brian<span className="font-serif-italic font-normal text-zinc-400">.folio</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/[0.04] px-5 py-2 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4.5 py-2 text-xs sm:text-sm font-bold rounded-full transition-colors ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white/12 border border-white/15"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA & Admin Link */}
          <div className="hidden md:flex items-center gap-3.5">
            <Link
              to="/admin/login"
              className="flex items-center gap-2 text-xs font-extrabold text-zinc-300 hover:text-white px-4.5 py-2.5 rounded-full border border-white/10 hover:border-white/25 transition-all bg-white/[0.03]"
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Admin CMS</span>
            </Link>

            <MagneticButton>
              <a
                href="#contact"
                className="btn-white-pill flex items-center gap-2 text-xs px-6 py-2.5 uppercase tracking-wider font-extrabold"
              >
                <span>HUBUNGI SAYA</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </MagneticButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-3 rounded-2xl text-zinc-200 border border-white/10 bg-white/5 active:scale-95 transition-transform"
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="md:hidden mt-4 p-6 rounded-3xl bg-[#111115] border border-white/10 flex flex-col gap-3 shadow-2xl backdrop-blur-2xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="px-4 py-3 text-base font-extrabold text-zinc-200 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <Link
                  to="/admin/login"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-2.5 text-xs font-extrabold text-zinc-300 p-3.5 rounded-2xl hover:bg-white/5 border border-white/5"
                >
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Admin Dashboard CMS</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
