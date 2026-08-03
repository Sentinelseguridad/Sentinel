import React from 'react';
import { QrCode, Activity, Footprints, Car, MapPin, ShieldAlert, Check } from 'lucide-react';
import { FEATURES } from '../constants';
import { AnimatedSection } from './AnimatedSection';

export const FeaturesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'QrCode':
        return <QrCode className="w-8 h-8 text-[#1A7FD4]" />;
      case 'Activity':
        return <Activity className="w-8 h-8 text-[#1A7FD4]" />;
      case 'Footprints':
        return <Footprints className="w-8 h-8 text-[#1A7FD4]" />;
      case 'Car':
        return <Car className="w-8 h-8 text-[#1A7FD4]" />;
      case 'MapPin':
        return <MapPin className="w-8 h-8 text-[#1A7FD4]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-8 h-8 text-[#1A7FD4]" />;
      default:
        return <QrCode className="w-8 h-8 text-[#1A7FD4]" />;
    }
  };

  return (
    <section id="caracteristicas" className="py-20 sm:py-28 relative bg-[#0A1628] bg-grid-dots">
      {/* Background ambient spotlight */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#1A7FD4]/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1A7FD4] font-poppins font-semibold text-sm tracking-wider uppercase bg-[#1A7FD4]/10 px-4 py-1.5 rounded-full border border-[#1A7FD4]/30">
              Módulos y Tecnología
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-6">
              Características y Beneficios de <span className="text-[#1A7FD4]">SENTINEL QR</span>
            </h2>
            <p className="font-inter text-[#8899AA] text-base sm:text-lg">
              Diseñado minuciosamente para resolver las trampas más comunes en la supervisión de patrullajes, brindando máxima precisión operacional.
            </p>
          </div>
        </AnimatedSection>

        {/* Grid of 6 Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <AnimatedSection
              key={feature.id}
              animation="slide-up"
              delay={index * 100}
            >
              <div className="glass-card glass-card-hover rounded-3xl p-8 h-full flex flex-col justify-between relative group border-[#1A7FD4]/20 hover:border-[#1A7FD4]/60">
                <div>
                  {/* Top Header Row with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#1A7FD4]/15 border border-[#1A7FD4]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1A7FD4]/25 transition-all duration-300">
                      {getIcon(feature.iconName)}
                    </div>

                    {feature.highlightBadge && (
                      <span className="text-[11px] font-poppins font-bold uppercase tracking-wider text-[#1A7FD4] bg-[#1A7FD4]/15 px-3 py-1 rounded-full border border-[#1A7FD4]/30">
                        {feature.highlightBadge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-poppins font-bold text-xl text-white mb-3 group-hover:text-[#1A7FD4] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-[#8899AA] text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Footer Accent */}
                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-[#1A7FD4]">
                  <Check className="w-4 h-4" />
                  <span>Tecnología certificada Sentinel</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
