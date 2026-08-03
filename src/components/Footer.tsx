import React from 'react';
import { Logo } from './Logo';
import { Shield, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07101E] border-t border-[#1A7FD4]/20 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" />
            <p className="font-inter text-[#8899AA] text-sm leading-relaxed max-w-md">
              SENTINEL QR es el estándar de la industria en control de rondas, patrullajes y supervisión de seguridad privada con tecnología QR anti-fraude y geolocalización satelital.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#8899AA]">
              <Shield className="w-4 h-4 text-[#1A7FD4]" />
              <span>Seguridad Cifrada Criptográfica • Android & Windows</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-poppins font-bold text-sm uppercase text-white tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2.5 font-inter text-sm text-[#8899AA]">
              <li>
                <a href="#inicio" className="hover:text-[#1A7FD4] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#que-es" className="hover:text-[#1A7FD4] transition-colors">
                  ¿Qué es Sentinel QR?
                </a>
              </li>
              <li>
                <a href="#caracteristicas" className="hover:text-[#1A7FD4] transition-colors">
                  Características y Beneficios
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#1A7FD4] transition-colors">
                  Galería de Interfaz
                </a>
              </li>
              <li>
                <a href="#video" className="hover:text-[#1A7FD4] transition-colors">
                  Video Demostración
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#1A7FD4] transition-colors">
                  Cómo Funciona (3 Pasos)
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-poppins font-bold text-sm uppercase text-white tracking-wider">
              Atención Comercial
            </h4>
            <ul className="space-y-3 font-inter text-sm text-[#8899AA]">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#1A7FD4] shrink-0" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  +{WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#1A7FD4] shrink-0" />
                <a href="mailto:soporte@sentinelqr.com" className="hover:text-white transition-colors">
                  contacto@sentinelqr.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1A7FD4] shrink-0 mt-0.5" />
                <span>Cobertura en Centroamérica y México</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1A7FD4]/20 border border-[#1A7FD4]/40 text-[#1A7FD4] hover:bg-[#1A7FD4] hover:text-white font-poppins font-semibold text-xs transition-all"
              >
                <span>Solicitar Demostración</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8899AA] gap-4">
          <p>© {currentYear} SENTINEL QR. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Términos de Servicio</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
