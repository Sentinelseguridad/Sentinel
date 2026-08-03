import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: '¿Qué es?', href: '#que-es' },
    { name: 'Características', href: '#caracteristicas' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Video', href: '#video' },
    { name: 'Cómo Funciona', href: '#como-funciona' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" onClick={() => handleNavClick('#inicio')} className="group">
            <Logo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-sm font-medium text-[#8899AA] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contacto');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A7FD4] hover:bg-[#2591f0] text-white font-poppins font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#1A7FD4]/30 hover:shadow-[#1A7FD4]/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Solicitar Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl bg-[#0F1E36] text-white hover:text-[#1A7FD4] border border-[#1A7FD4]/30 focus:outline-none focus:ring-2 focus:ring-[#1A7FD4]"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card border-t border-[#1A7FD4]/20 mt-3 px-4 pt-4 pb-6 mx-4 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-3 rounded-xl text-base font-medium text-[#8899AA] hover:text-white hover:bg-[#1A7FD4]/10 hover:border-l-4 hover:border-[#1A7FD4] transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 mt-2">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contacto');
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1A7FD4] hover:bg-[#2591f0] text-white font-poppins font-semibold text-center transition-all shadow-lg shadow-[#1A7FD4]/30"
              >
                <span>Solicitar Demo Gratis</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
