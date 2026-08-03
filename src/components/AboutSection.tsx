import React from 'react';
import { Smartphone, Monitor, FileText, CheckCircle2, Shield, Lock } from 'lucide-react';
import { IMAGES } from '../constants';
import { AnimatedSection } from './AnimatedSection';

export const AboutSection: React.FC = () => {
  return (
    <section id="que-es" className="py-20 sm:py-28 relative overflow-hidden bg-[#0A1628]">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1A7FD4]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1A7FD4] font-poppins font-semibold text-sm tracking-wider uppercase bg-[#1A7FD4]/10 px-4 py-1.5 rounded-full border border-[#1A7FD4]/30">
              Sobre la Plataforma
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-6">
              ¿Qué es <span className="text-[#1A7FD4]">SENTINEL QR</span>?
            </h2>
            <p className="font-inter text-[#8899AA] text-base sm:text-lg leading-relaxed">
              Es la solución integral de nueva generación diseñada para garantizar que las rondas y patrullajes de seguridad se realicen de manera transparente, verificable y libre de manipulaciones.
            </p>
          </div>
        </AnimatedSection>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Product Description & 3 Highlighted Cards */}
          <div className="lg:col-span-6 space-y-8">
            <AnimatedSection animation="slide-right" delay={100}>
              <div className="space-y-4">
                <h3 className="font-poppins font-semibold text-2xl text-white flex items-center gap-2">
                  <Shield className="w-6 h-6 text-[#1A7FD4]" />
                  <span>Control Total de Personal en Tiempo Real</span>
                </h3>
                <p className="font-inter text-[#8899AA] text-base leading-relaxed">
                  SENTINEL QR transforma teléfonos celulares inteligentes e infraestructuras de seguridad en puntos de control militarizados pero accesibles. Reemplaza los viejos marcadores manuales con códigos QR criptográficos no duplicables y auditoría satelital en vivo.
                </p>
              </div>
            </AnimatedSection>

            {/* 3 Highlighted Icons/Cards */}
            <AnimatedSection animation="slide-right" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Highlight 1: App Móvil Android */}
                <div className="glass-card glass-card-hover p-5 rounded-2xl border-[#1A7FD4]/30 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#1A7FD4]/20 border border-[#1A7FD4]/40 flex items-center justify-center text-[#1A7FD4] mb-3">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h4 className="font-poppins font-bold text-sm text-white mb-1">App Móvil Android</h4>
                  <p className="font-inter text-xs text-[#8899AA] leading-snug">
                    Escaneo veloz, interfaz táctil fácil para guardias y modo offline.
                  </p>
                </div>

                {/* Highlight 2: Companion Windows */}
                <div className="glass-card glass-card-hover p-5 rounded-2xl border-[#1A7FD4]/30 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#1A7FD4]/20 border border-[#1A7FD4]/40 flex items-center justify-center text-[#1A7FD4] mb-3">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h4 className="font-poppins font-bold text-sm text-white mb-1">Companion Windows</h4>
                  <p className="font-inter text-xs text-[#8899AA] leading-snug">
                    Panel central para supervisores con mapa en vivo y gestión total.
                  </p>
                </div>

                {/* Highlight 3: Reportes Certificados */}
                <div className="glass-card glass-card-hover p-5 rounded-2xl border-[#1A7FD4]/30 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#1A7FD4]/20 border border-[#1A7FD4]/40 flex items-center justify-center text-[#1A7FD4] mb-3">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="font-poppins font-bold text-sm text-white mb-1">Reportes Certificados</h4>
                  <p className="font-inter text-xs text-[#8899AA] leading-snug">
                    Exportación instantánea en PDF con firmas de validez auditables.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Checklist */}
            <AnimatedSection animation="slide-right" delay={300}>
              <div className="space-y-3 pt-2">
                {[
                  'Auditoría continua con posicionamiento GPS sin interrupciones.',
                  'Inmunidad ante trucos de modificación de hora o fotos de QR antiguos.',
                  'Compatibilidad con teléfonos de gama baja y alta resistencia.',
                  'Respaldos automáticos en la nube y alertas inmediatas.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1A7FD4] shrink-0 mt-0.5" />
                    <span className="font-inter text-sm text-[#8899AA]">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Product Mockup Showcase */}
          <div className="lg:col-span-6 relative">
            <AnimatedSection animation="scale-in" delay={200}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Outer frame container with glow */}
                <div className="relative rounded-3xl p-3 glass-card border-[#1A7FD4]/40 glow-blue overflow-hidden group">
                  <img
                    src={IMAGES.mobileMockup}
                    alt="Mockup de la aplicación móvil Sentinel QR"
                    className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card border-white/20 bg-[#0A1628]/90 backdrop-blur-md hidden sm:flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#1A7FD4] flex items-center justify-center text-white">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-poppins font-bold text-xs text-white">Cifrado Militar QR-256</div>
                        <div className="font-inter text-[11px] text-[#8899AA]">Validación en tiempo real</div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold rounded-full">
                      Activo
                    </span>
                  </div>
                </div>

                {/* Secondary Desktop Companion Floating Mockup Card */}
                <div className="hidden sm:block absolute -bottom-10 -right-6 w-64 p-3 rounded-2xl glass-card border-[#1A7FD4]/50 shadow-2xl animate-bounce-slow">
                  <img
                    src={IMAGES.dashboardMockup}
                    alt="Mockup del panel Windows Sentinel QR"
                    className="w-full h-28 object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="mt-2 text-center">
                    <span className="font-poppins font-bold text-xs text-white">Software Windows Central</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
