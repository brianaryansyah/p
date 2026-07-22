import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../common/MagneticButton';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tighter text-white group-hover:text-zinc-300 transition-colors">
              brian<span className="font-serif-italic font-normal text-zinc-400">.folio</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] px-5 py-2 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white rounded-full transition-all hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Admin Link with Magnetic Cursor Physics */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/admin/login"
              className="flex items-center gap-1.5 text-xs font-extrabold text-zinc-300 hover:text-white px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all bg-white/[0.03]"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Admin CMS</span>
            </Link>

            <MagneticButton>
              <a
                href="#contact"
                className="btn-white-pill flex items-center gap-2 text-xs px-5 py-2"
              >
                <span>Hubungi Saya</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2.5 rounded-full text-zinc-300 border border-white/10 bg-white/5"
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 p-5 rounded-2xl bg-[#121215] border border-white/10 flex flex-col gap-3 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="px-3 py-2 text-sm font-extrabold text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                to="/admin/login"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-2 text-xs font-bold text-zinc-300 p-2.5 rounded-xl hover:bg-white/5"
              >
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Admin Login Dashboard</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
