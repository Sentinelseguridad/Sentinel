import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Eye } from 'lucide-react';
import { GALLERY_IMAGES, LOCAL_FALLBACKS } from '../constants';
import { GalleryImage } from '../types';
import { AnimatedSection } from './AnimatedSection';
import { SafeImage } from './SafeImage';

export const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      );
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <section id="galeria" className="py-20 sm:py-28 relative bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1A7FD4] font-poppins font-semibold text-sm tracking-wider uppercase bg-[#1A7FD4]/10 px-4 py-1.5 rounded-full border border-[#1A7FD4]/30">
              Capturas de Pantalla
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-6">
              Conoce la Interfaz de <span className="text-[#1A7FD4]">SENTINEL QR</span>
            </h2>
            <p className="font-inter text-[#8899AA] text-base sm:text-lg">
              Diseño intuitivo y minimalista pensado para la operabilidad inmediata tanto en campo como en salas de monitoreo.
            </p>
          </div>
        </AnimatedSection>

        {/* Masonry-Style 6 Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item, index) => (
            <AnimatedSection
              key={item.id}
              animation="scale-in"
              delay={index * 100}
            >
              <div
                onClick={() => openLightbox(index)}
                className="group relative rounded-3xl overflow-hidden glass-card border-[#1A7FD4]/20 hover:border-[#1A7FD4] cursor-pointer transition-all duration-300 shadow-xl"
              >
                {/* Image */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#102542] relative">
                  <SafeImage
                    src={item.src}
                    localFallback={
                      index === 0 ? LOCAL_FALLBACKS.mobileMockup :
                      index === 1 ? LOCAL_FALLBACKS.dashboardMockup :
                      index === 2 ? LOCAL_FALLBACKS.qrScan :
                      index === 3 ? LOCAL_FALLBACKS.mapRoute :
                      index === 4 ? LOCAL_FALLBACKS.pdfReport :
                      LOCAL_FALLBACKS.guardPatrol
                    }
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                  {/* Zoom Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#1A7FD4] text-white flex items-center justify-center shadow-lg shadow-[#1A7FD4]/50 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Caption Footer */}
                <div className="p-5 bg-[#0F1E36]/90 backdrop-blur-md">
                  <span className="text-[11px] font-poppins font-bold uppercase text-[#1A7FD4] tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-poppins font-bold text-base text-white mt-1 group-hover:text-[#1A7FD4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-inter text-xs text-[#8899AA] line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-[#1A7FD4] text-white transition-colors focus:outline-none"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-[#1A7FD4] text-white transition-colors focus:outline-none"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-[#1A7FD4] text-white transition-colors focus:outline-none"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Lightbox Content Container */}
          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden glass-card border-[#1A7FD4]/40 max-h-[70vh] flex items-center justify-center bg-[#0A1628]">
              <SafeImage
                src={GALLERY_IMAGES[selectedImageIndex].src}
                localFallback={
                  selectedImageIndex === 0 ? LOCAL_FALLBACKS.mobileMockup :
                  selectedImageIndex === 1 ? LOCAL_FALLBACKS.dashboardMockup :
                  selectedImageIndex === 2 ? LOCAL_FALLBACKS.qrScan :
                  selectedImageIndex === 3 ? LOCAL_FALLBACKS.mapRoute :
                  selectedImageIndex === 4 ? LOCAL_FALLBACKS.pdfReport :
                  LOCAL_FALLBACKS.guardPatrol
                }
                alt={GALLERY_IMAGES[selectedImageIndex].alt}
                className="max-h-[70vh] max-w-full object-contain"
              />
            </div>

            {/* Modal Description Footer */}
            <div className="mt-4 text-center max-w-2xl px-4">
              <span className="text-xs font-poppins font-bold uppercase text-[#1A7FD4] bg-[#1A7FD4]/15 px-3 py-1 rounded-full border border-[#1A7FD4]/30">
                {GALLERY_IMAGES[selectedImageIndex].category} ({selectedImageIndex + 1} de {GALLERY_IMAGES.length})
              </span>
              <h3 className="font-poppins font-bold text-xl text-white mt-2">
                {GALLERY_IMAGES[selectedImageIndex].title}
              </h3>
              <p className="font-inter text-sm text-[#8899AA] mt-1">
                {GALLERY_IMAGES[selectedImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
