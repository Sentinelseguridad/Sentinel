import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, Phone, Building, User, Globe, HelpCircle, MessageSquare } from 'lucide-react';
import { ContactFormData } from '../types';
import { PAISES, TIPOS_INTERES, WHATSAPP_NUMBER } from '../constants';
import { AnimatedSection } from './AnimatedSection';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre_completo: '',
    empresa: '',
    email: '',
    telefono: '',
    pais: 'El Salvador',
    tipo_interes: 'Demo Gratuita',
    mensaje: '',
    acepta_terminos: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      if (errors[name as keyof ContactFormData]) {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof ContactFormData]) {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.nombre_completo.trim()) {
      newErrors.nombre_completo = 'El nombre completo es requerido';
    }
    if (!formData.empresa.trim()) {
      newErrors.empresa = 'El nombre de la empresa es requerido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido (ejemplo@empresa.com)';
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    }
    if (!formData.acepta_terminos) {
      newErrors.acepta_terminos = 'Debe aceptar los términos de contacto para continuar';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      nombre_completo: '',
      empresa: '',
      email: '',
      telefono: '',
      pais: 'El Salvador',
      tipo_interes: 'Demo Gratuita',
      mensaje: '',
      acepta_terminos: false,
    });
    setErrors({});
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 relative bg-[#0A1628] bg-grid-dots">
      {/* Background glow ambient */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#1A7FD4]/15 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#1A7FD4] font-poppins font-semibold text-sm tracking-wider uppercase bg-[#1A7FD4]/10 px-4 py-1.5 rounded-full border border-[#1A7FD4]/30">
              Prueba Gratuita
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-4">
              ¿Interesado en una <span className="text-[#1A7FD4]">Demostración Gratuita</span>?
            </h2>
            <p className="font-inter text-[#8899AA] text-base sm:text-lg">
              Déjanos tus datos y un asesor especializado de SENTINEL QR se comunicará contigo en menos de 24 horas.
            </p>
          </div>
        </AnimatedSection>

        {/* Card Form Container */}
        <AnimatedSection animation="scale-in" delay={100}>
          <div className="glass-card rounded-3xl p-6 sm:p-10 border-[#1A7FD4]/40 shadow-2xl relative overflow-hidden">
            {submitted ? (
              /* Success State Card */
              <div className="text-center py-10 space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white">
                    ¡Solicitud Recibida con Éxito!
                  </h3>
                  <p className="font-inter text-[#8899AA] text-base max-w-md mx-auto">
                    Gracias <strong className="text-white">{formData.nombre_completo}</strong>. Un especialista técnico de Sentinel QR contactará a <strong className="text-white">{formData.empresa}</strong> al correo <strong className="text-white">{formData.email}</strong> pronto.
                  </p>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-poppins font-semibold text-sm transition-colors"
                  >
                    Enviar Otra Solicitud
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20acabo%20de%20enviar%20mi%20solicitud%20de%20demo%20para%20${encodeURIComponent(formData.empresa)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-poppins font-bold text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Hablar por WhatsApp Ahora</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre Completo */}
                  <div>
                    <label htmlFor="nombre_completo" className="block text-xs font-poppins font-semibold text-white mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#1A7FD4]" />
                      <span>Nombre Completo *</span>
                    </label>
                    <input
                      type="text"
                      id="nombre_completo"
                      name="nombre_completo"
                      value={formData.nombre_completo}
                      onChange={handleChange}
                      placeholder="Ej. Roberto Menéndez"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0A1628]/80 border ${
                        errors.nombre_completo ? 'border-red-500' : 'border-[#1A7FD4]/30 focus:border-[#1A7FD4]'
                      } text-white placeholder-[#8899AA]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A7FD4]/50 transition-all`}
                    />
                    {errors.nombre_completo && (
                      <p className="text-red-400 text-xs mt-1">{errors.nombre_completo}</p>
                    )}
                  </div>

                  {/* Empresa */}
                  <div>
                    <label htmlFor="empresa" className="block text-xs font-poppins font-semibold text-white mb-2 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-[#1A7FD4]" />
                      <span>Nombre de Empresa *</span>
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Ej. Seguridad Corporativa S.A."
                      className={`w-full px-4 py-3 rounded-xl bg-[#0A1628]/80 border ${
                        errors.empresa ? 'border-red-500' : 'border-[#1A7FD4]/30 focus:border-[#1A7FD4]'
                      } text-white placeholder-[#8899AA]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A7FD4]/50 transition-all`}
                    />
                    {errors.empresa && (
                      <p className="text-red-400 text-xs mt-1">{errors.empresa}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-poppins font-semibold text-white mb-2 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#1A7FD4]" />
                      <span>Correo Electrónico *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ejemplo@empresa.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0A1628]/80 border ${
                        errors.email ? 'border-red-500' : 'border-[#1A7FD4]/30 focus:border-[#1A7FD4]'
                      } text-white placeholder-[#8899AA]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A7FD4]/50 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Telefono */}
                  <div>
                    <label htmlFor="telefono" className="block text-xs font-poppins font-semibold text-white mb-2 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#1A7FD4]" />
                      <span>Teléfono / WhatsApp *</span>
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+503 7000-0000"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0A1628]/80 border ${
                        errors.telefono ? 'border-red-500' : 'border-[#1A7FD4]/30 focus:border-[#1A7FD4]'
                      } text-white placeholder-[#8899AA]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A7FD4]/50 transition-all`}
                    />
                    {errors.telefono && (
                      <p className="text-red-400 text-xs mt-1">{errors.telefono}</p>
                    )}
                  </div>

                  {/* Pais */}
                  <div>
                    <label htmlFor="pais" className="block text-xs font-poppins font-semibold text-white mb-2 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#1A7FD4]" />
                      <span>País</span>
                    </label>
                    <select
                      id="pais"
                      name="pais"
                      value={formData.pais}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A1628] border border-[#1A7FD4]/30 text-white text-sm focus:border-[#1A7FD4] focus:outline-none focus:ring-2 focus:ring-[#1A7FD4]/50 transition-all"
                    >
                      {PAISES.map((p) => (
                        <option key={p} value={p} className="bg-[#0A1628] text-white">
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tipo de Interes */}
                  <div>
                    <label htmlFor="tipo_interes" className="block text-xs font-poppins font-semibold text-white mb-2 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-[#1A7FD4]" />
                      <span>Tipo de Interés</span>
                    </label>
                    <select
                      id="tipo_interes"
                      name="tipo_interes"
                      value={formData.tipo_interes}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A1628] border border-[#1A7FD4]/30 text-white text-sm focus:border-[#1A7FD4] focus:outline-none focus:ring-2 focus:ring-[#1A7FD4]/50 transition-all"
                    >
                      {TIPOS_INTERES.map((t) => (
                        <option key={t} value={t} className="bg-[#0A1628] text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-xs font-poppins font-semibold text-white mb-2">
                    Mensaje Opcional
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe detalles adicionales sobre el número de guardias o proyectos..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0A1628]/80 border border-[#1A7FD4]/30 text-white placeholder-[#8899AA]/50 text-sm focus:border-[#1A7FD4] focus:outline-none focus:ring-2 focus:ring-[#1A7FD4]/50 transition-all"
                  ></textarea>
                </div>

                {/* Checkbox Acepta Terminos */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="acepta_terminos"
                      checked={formData.acepta_terminos}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded bg-[#0A1628] border-[#1A7FD4] text-[#1A7FD4] focus:ring-[#1A7FD4] focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="font-inter text-xs text-[#8899AA] leading-normal">
                      Acepto ser contactado por el equipo de <strong className="text-white">SENTINEL QR</strong> para recibir información del producto y coordinar la demostración gratuita.
                    </span>
                  </label>
                  {errors.acepta_terminos && (
                    <p className="text-red-400 text-xs mt-1">{errors.acepta_terminos}</p>
                  )}
                </div>

                {/* Modern Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-2xl bg-[#1A7FD4] hover:bg-[#2591f0] text-white font-poppins font-bold text-base transition-all duration-300 shadow-xl shadow-[#1A7FD4]/30 hover:shadow-[#1A7FD4]/60 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Procesando Solicitud...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5" />
                      <span>Enviar y Solicitar Demo Gratuita</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
