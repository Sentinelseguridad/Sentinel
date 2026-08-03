import React, { useState } from 'react';
import { Play, Shield, CheckCircle, Volume2, Maximize2, Pause, RotateCcw } from 'lucide-react';
import { IMAGES } from '../constants';
import { AnimatedSection } from './AnimatedSection';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoMode, setVideoMode] = useState<'simulated' | 'youtube' | 'local'>('simulated');
  const [youtubeUrl, setYoutubeUrl] = useState<string>('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1');

  // Simulated Interactive Video State
  const [simStep, setSimStep] = useState(0);

  const simulationSteps = [
    {
      time: "00:03",
      title: "1. Inicio de Turno y Login de Guardia",
      description: "El oficial escanea su gafete personal e inicia sesión con autenticación biométrica en la App Android.",
      badge: "Autenticación Biométrica"
    },
    {
      time: "00:12",
      title: "2. Escaneo de Punto QR en Perímetro Norte",
      description: "Aproximación al punto de control #04. Cifrado criptográfico valida hora exacta y geolocalización GPS.",
      badge: "Verificación QR Cifrada"
    },
    {
      time: "00:25",
      title: "3. Trazado Satelital y Detección Anti-Fraude",
      description: "El sistema confirma la ruta a pie y verifica que el ritmo de movimiento corresponda a una ronda real.",
      badge: "Giroscopio + GPS"
    },
    {
      time: "00:40",
      title: "4. Generación Inmediata de Reporte PDF Certificado",
      description: "El panel Windows del supervisor recibe la confirmación en tiempo real y firma el reporte auditable.",
      badge: "Auditoría en Vivo"
    }
  ];

  return (
    <section id="video" className="py-20 sm:py-28 relative bg-[#0A1628] bg-grid-dots">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#1A7FD4]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <AnimatedSection animation="slide-up">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="text-[#1A7FD4] font-poppins font-semibold text-sm tracking-wider uppercase bg-[#1A7FD4]/10 px-4 py-1.5 rounded-full border border-[#1A7FD4]/30">
              Demostración en Video
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-6">
              Mira <span className="text-[#1A7FD4]">SENTINEL QR</span> en Acción
            </h2>
            <p className="font-inter text-[#8899AA] text-base sm:text-lg">
              Descubre en menos de 2 minutos cómo nuestra tecnología elimina el fraude en las rondas nocturnas y brinda visibilidad absoluta a tu equipo de seguridad.
            </p>
          </div>
        </AnimatedSection>

        {/* Main Video Container */}
        <AnimatedSection animation="scale-in" delay={100}>
          <div className="relative rounded-3xl overflow-hidden glass-card border-[#1A7FD4]/40 glow-blue max-w-4xl mx-auto shadow-2xl">
            {!isPlaying ? (
              /* Thumbnail Preview with Animated Play Button */
              <div
                onClick={() => setIsPlaying(true)}
                className="relative aspect-video w-full bg-[#102542] cursor-pointer group overflow-hidden flex items-center justify-center"
              >
                {/* Background Thumbnail Image */}
                <img
                  src={IMAGES.dashboardMockup}
                  alt="Vista previa del video de demostración de Sentinel QR"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent"></div>

                {/* Animated Play Button */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="relative">
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-full bg-[#1A7FD4] opacity-50 animate-ping"></div>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1A7FD4] text-white flex items-center justify-center shadow-2xl shadow-[#1A7FD4]/80 group-hover:bg-[#2591f0] group-hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                    </div>
                  </div>
                  <span className="font-poppins font-bold text-white text-base sm:text-lg tracking-wide group-hover:text-[#1A7FD4] transition-colors">
                    Hacer Clic para Iniciar Demostración
                  </span>
                </div>

                {/* Video Duration Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-white font-mono text-xs font-semibold">
                  01:45 min HD
                </div>
              </div>
            ) : (
              /* Active Player Window */
              <div className="relative aspect-video w-full bg-black flex flex-col justify-between p-4 sm:p-6">
                {videoMode === 'simulated' ? (
                  /* Interactive Simulated Demo Player */
                  <div className="relative w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#0A1628] via-[#0F223D] to-[#102542] rounded-2xl p-6 border border-[#1A7FD4]/30 overflow-hidden">
                    {/* Top Simulated Video Bar */}
                    <div className="flex items-center justify-between text-xs text-[#8899AA] border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>SIMULADOR DE VIDEO EN VIVO HD</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#1A7FD4]/20 text-[#1A7FD4] font-mono font-bold">
                          {simulationSteps[simStep].time}
                        </span>
                        <button
                          onClick={() => setIsPlaying(false)}
                          className="text-white hover:text-[#1A7FD4] text-xs underline"
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>

                    {/* Simulated Content Frame */}
                    <div className="my-auto text-left space-y-4">
                      <span className="inline-block text-xs font-poppins font-bold uppercase tracking-wider text-[#1A7FD4] bg-[#1A7FD4]/15 px-3 py-1 rounded-full border border-[#1A7FD4]/30">
                        {simulationSteps[simStep].badge}
                      </span>
                      <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white">
                        {simulationSteps[simStep].title}
                      </h3>
                      <p className="font-inter text-sm sm:text-base text-[#8899AA] leading-relaxed max-w-2xl">
                        {simulationSteps[simStep].description}
                      </p>
                    </div>

                    {/* Simulated Controls Bar */}
                    <div className="space-y-3 pt-3 border-t border-white/10">
                      {/* Progress Steps */}
                      <div className="grid grid-cols-4 gap-2">
                        {simulationSteps.map((step, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSimStep(idx)}
                            className={`h-2 rounded-full transition-all ${
                              idx === simStep
                                ? 'bg-[#1A7FD4] shadow-sm shadow-[#1A7FD4]'
                                : idx < simStep
                                ? 'bg-[#1A7FD4]/50'
                                : 'bg-white/10'
                            }`}
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-[#8899AA]">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setSimStep((simStep + 1) % simulationSteps.length)}
                            className="p-2 rounded-lg bg-[#1A7FD4] text-white hover:bg-[#2591f0] flex items-center gap-1 font-semibold"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Paso Siguiente</span>
                          </button>
                          <button
                            onClick={() => setSimStep(0)}
                            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 flex items-center gap-1"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Reiniciar</span>
                          </button>
                        </div>
                        <span className="hidden sm:inline">Paso {simStep + 1} de {simulationSteps.length}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* YouTube/Local Video Embed Container */
                  <iframe
                    src={youtubeUrl}
                    title="Video demostrativo Sentinel QR"
                    className="w-full h-full rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Supporting text under video */}
        <AnimatedSection animation="slide-up" delay={200}>
          <div className="mt-8 max-w-3xl mx-auto space-y-2">
            <p className="font-inter text-sm sm:text-base text-[#8899AA] leading-relaxed">
              * El reproductor incluye la demostración de los cuatro pilares fundamentales del ecosistema <strong className="text-white font-semibold">SENTINEL QR</strong>: sincronización móvil, prevención de falsificaciones de código y emisión automática de certificados.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
