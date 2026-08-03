import React from 'react';
import { Play, ArrowRight, ShieldCheck, Smartphone, Monitor } from 'lucide-react';
import { Logo } from './Logo';
import { AnimatedSection } from './AnimatedSection';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 sm:pt-40 pb-20 md:pb-28 overflow-hidden bg-grid-dots">
      {/* Ambient background glow spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[450px] bg-[#1A7FD4]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#1A7FD4]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <AnimatedSection animation="scale-in" delay={100}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border-[#1A7FD4]/40 text-white text-xs sm:text-sm font-medium mb-8 hover:border-[#1A7FD4] transition-all">
            <span className="flex h-2 w-2 rounded-full bg-[#1A7FD4] animate-ping"></span>
            <span className="text-[#8899AA] font-medium">Nueva Versión Pro</span>
            <span className="text-white/30">•</span>
            <div className="flex items-center gap-1.5 text-white font-semibold">
              <Smartphone className="w-3.5 h-3.5 text-[#1A7FD4]" />
              <Monitor className="w-3.5 h-3.5 text-[#1A7FD4]" />
              <span>Disponible para Android y Windows</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Large Centered Logo */}
        <AnimatedSection animation="fade-in" delay={200} className="mb-8 flex justify-center">
          <div className="p-4 rounded-3xl glass-card border-[#1A7FD4]/30 inline-block shadow-2xl hover:scale-105 transition-transform duration-300">
            <Logo size="xl" />
          </div>
        </AnimatedSection>

        {/* Main Heading */}
        <AnimatedSection animation="slide-up" delay={300}>
          <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.15] max-w-5xl mx-auto mb-6">
            Control de Rondas Inteligente con <span className="bg-gradient-to-r from-white via-[#74BAF8] to-[#1A7FD4] bg-clip-text text-transparent text-glow">Tecnología QR</span>
          </h1>
        </AnimatedSection>

        {/* Slogan */}
        <AnimatedSection animation="slide-up" delay={400}>
          <p className="font-inter text-lg sm:text-2xl text-[#8899AA] font-normal max-w-3xl mx-auto mb-10 leading-relaxed">
            Patrullaje y Rondas Inteligentes, Seguridad Real.
          </p>
        </AnimatedSection>

        {/* Action CTA Buttons */}
        <AnimatedSection animation="slide-up" delay={500}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => scrollToSection('#contacto')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#1A7FD4] hover:bg-[#2591f0] text-white font-poppins font-bold text-base transition-all duration-300 shadow-xl shadow-[#1A7FD4]/30 hover:shadow-[#1A7FD4]/60 hover:-translate-y-1 active:translate-y-0"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>Solicitar Demo Gratis</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollToSection('#video')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl glass-card hover:bg-white/10 border-[#1A7FD4]/40 hover:border-[#1A7FD4] text-white font-poppins font-semibold text-base transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-8 h-8 rounded-full bg-[#1A7FD4]/20 flex items-center justify-center text-[#1A7FD4] group-hover:bg-[#1A7FD4] group-hover:text-white transition-colors">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span>Ver Video</span>
            </button>
          </div>
        </AnimatedSection>

        {/* Feature quick stats ribbon */}
        <AnimatedSection animation="fade-in" delay={600} className="mt-16 sm:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl glass-card border-[#1A7FD4]/20 max-w-4xl mx-auto text-left">
            <div className="border-r border-white/10 pr-4 last:border-0">
              <div className="font-poppins font-bold text-2xl sm:text-3xl text-white">100%</div>
              <div className="font-inter text-xs text-[#8899AA] mt-1">Anti-Fraude Criptográfico</div>
            </div>
            <div className="md:border-r border-white/10 pr-4">
              <div className="font-poppins font-bold text-2xl sm:text-3xl text-[#1A7FD4]">GPS</div>
              <div className="font-inter text-xs text-[#8899AA] mt-1">Trazado Satelital en Vivo</div>
            </div>
            <div className="border-r border-white/10 pr-4">
              <div className="font-poppins font-bold text-2xl sm:text-3xl text-white">0s</div>
              <div className="font-inter text-xs text-[#8899AA] mt-1">Retraso en Alertas SOS</div>
            </div>
            <div>
              <div className="font-poppins font-bold text-2xl sm:text-3xl text-[#1A7FD4]">PDF</div>
              <div className="font-inter text-xs text-[#8899AA] mt-1">Reportes Auditable Certificados</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
