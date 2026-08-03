import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { GallerySection } from './components/GallerySection';
import { VideoSection } from './components/VideoSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ContactFormSection } from './components/ContactFormSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A1628] text-white selection:bg-[#1A7FD4] selection:text-white font-sans relative overflow-x-hidden">
      {/* 1. Navbar Fija */}
      <Navbar />

      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. ¿Qué es Sentinel QR? */}
        <AboutSection />

        {/* 4. Características y Beneficios */}
        <FeaturesSection />

        {/* 5. Galería de Imágenes con Lightbox */}
        <GallerySection />

        {/* 6. Video Demostrativo */}
        <VideoSection />

        {/* 7. Cómo Funciona (3 Pasos) */}
        <HowItWorksSection />

        {/* 8. Formulario de Contacto / Solicitud de Demo */}
        <ContactFormSection />
      </main>

      {/* 9. Botón Flotante de WhatsApp */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
