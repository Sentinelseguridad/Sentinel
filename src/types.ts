export interface GalleryImage {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
  description: string;
}

export interface Feature {
  id: string;
  iconName: string;
  title: string;
  description: string;
  highlightBadge?: string;
}

export interface TimelineStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  nombre_completo: string;
  empresa: string;
  email: string;
  telefono: string;
  pais: string;
  tipo_interes: string;
  mensaje: string;
  acepta_terminos: boolean;
}
