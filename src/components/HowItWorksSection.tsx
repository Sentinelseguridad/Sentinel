import React from 'react';
import { Settings, QrCode, FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TIMELINE_STEPS } from '../constants';
import { AnimatedSection } from './AnimatedSection';

export const HowItWorksSection: React.FC = () => {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'Settings':
        return <Settings className="w-8 h-8 text-[#1A7FD4]" />;
      case 'QrCode':
        return <QrCode className="w-8 h-8 text-[#1A7FD4]" />;
      case 'FileCheck':
        return <FileCheck className="w-8 h-8 text-[#1A7FD4]" />;
      default:
        return <Settings className="w-8 h-8 text-[#1A7FD4]" />;
    }
  };

  return (
    <section id="como-funciona" className="py-20 sm:py-28 relative bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#1A7FD4] font-poppins font-semibold text-sm tracking-wider uppercase bg-[#1A7FD4]/10 px-4 py-1.5 rounded-full border border-[#1A7FD4]/30">
              Proceso Simple y Eficiente
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-6">
              ¿Cómo Funciona <span className="text-[#1A7FD4]">SENTINEL QR</span>?
            </h2>
            <p className="font-inter text-[#8899AA] text-base sm:text-lg">
              3 sencillos pasos para transformar la operación de patrullaje de tu empresa en una red inteligente e inexpugnable.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline Desktop (Horizontal) & Mobile (Vertical) */}
        <div className="relative">
          {/* Connecting Line - Desktop Horizontal */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-1 bg-gradient-to-r from-[#1A7FD4]/20 via-[#1A7FD4] to-[#1A7FD4]/20 -translate-y-12 rounded-full pointer-events-none"></div>

          {/* Connecting Line - Mobile Vertical */}
          <div className="lg:hidden absolute top-10 bottom-10 left-8 sm:left-12 w-1 bg-gradient-to-b from-[#1A7FD4]/20 via-[#1A7FD4] to-[#1A7FD4]/20 rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 relative z-10">
            {TIMELINE_STEPS.map((step, index) => (
              <AnimatedSection
                key={step.stepNumber}
                animation="slide-up"
                delay={index * 150}
              >
                <div className="glass-card glass-card-hover rounded-3xl p-8 relative flex flex-col items-start lg:items-center text-left lg:text-center h-full border-[#1A7FD4]/30 group hover:border-[#1A7FD4]">
                  
                  {/* Step Number Badge */}
                  <div className="relative mb-6 self-start lg:self-center">
                    {/* Glowing outer circle */}
                    <div className="w-16 h-16 rounded-2xl bg-[#0A1628] border-2 border-[#1A7FD4] shadow-lg shadow-[#1A7FD4]/30 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {getStepIcon(step.iconName)}
                    </div>
                    {/* Step Number Pill */}
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1A7FD4] text-white font-poppins font-black text-xs flex items-center justify-center shadow-md border-2 border-[#0A1628] z-20">
                      0{step.stepNumber}
                    </span>
                  </div>

                  {/* Step Subtitle / Tag */}
                  <span className="text-xs font-poppins font-semibold uppercase text-[#1A7FD4] tracking-wider mb-2 bg-[#1A7FD4]/10 px-3 py-1 rounded-full border border-[#1A7FD4]/20">
                    {step.subtitle}
                  </span>

                  {/* Step Title */}
                  <h3 className="font-poppins font-bold text-xl text-white mb-3 group-hover:text-[#1A7FD4] transition-colors">
                    Paso {step.stepNumber}: {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="font-inter text-[#8899AA] text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Footer status */}
                  <div className="mt-auto pt-4 border-t border-white/5 w-full flex items-center justify-between text-xs text-[#8899AA]">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Completado en segundos</span>
                    </span>
                    <span className="font-poppins font-bold text-[#1A7FD4]">0{step.stepNumber}/03</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
