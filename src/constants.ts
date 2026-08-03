import { Feature, GalleryImage, TimelineStep } from './types';
import localMobileMockup from './assets/images/sentinel_app_mockup_1785724895390.jpg';
import localDashboardMockup from './assets/images/sentinel_dashboard_mockup_1785724911321.jpg';
import localQrScan from './assets/images/sentinel_qr_scan_1785724925351.jpg';
import localMapRoute from './assets/images/sentinel_map_route_1785724935644.jpg';
import localPdfReport from './assets/images/sentinel_pdf_report_1785724946631.jpg';
import localGuardPatrol from './assets/images/sentinel_guard_patrol_1785724956998.jpg';

// Editable WhatsApp Number constant (include country code without + or spaces if preferred by wa.me link)
export const WHATSAPP_NUMBER = "50370000000";

export const LOCAL_FALLBACKS = {
  mobileMockup: localMobileMockup,
  dashboardMockup: localDashboardMockup,
  qrScan: localQrScan,
  mapRoute: localMapRoute,
  pdfReport: localPdfReport,
  guardPatrol: localGuardPatrol,
};

// Image Assets generated specifically for Sentinel QR (using Google Drive high-res thumbnail links with local fallbacks)
export const IMAGES = {
  mobileMockup: "https://drive.google.com/thumbnail?id=1jVVDDaUUZS_QcEJ3Ab091wUxqowqyPBm&sz=w1600",
  dashboardMockup: "https://drive.google.com/thumbnail?id=1X5c2PHZPkDhJv9Ogg6pKwVilDlxg0iLi&sz=w1600",
  qrScan: localQrScan,
  mapRoute: "https://drive.google.com/thumbnail?id=1Z9AbyotFFArFZsW5qenaE32vfppeKqhp&sz=w1600",
  pdfReport: "https://drive.google.com/thumbnail?id=1swul41wK5T17vSGuohEOIrs-i7K77pTW&sz=w1600",
  guardPatrol: localGuardPatrol,
};

export const FEATURES: Feature[] = [
  {
    id: "anti-fraude",
    iconName: "QrCode",
    title: "Control QR Anti-Fraude",
    description: "Códigos QR de alta seguridad no clonables con timestamp encriptado y validación de geolocalización GPS en tiempo real para evitar escaneos falsos.",
    highlightBadge: "Seguridad Máxima"
  },
  {
    id: "agitacion",
    iconName: "Activity",
    title: "Detección de Agitación Simulada",
    description: "Algoritmos inteligentes con giroscopio que detectan cuando el dispositivo es sacudido de forma no natural o colocado en simuladores de movimiento.",
    highlightBadge: "IA Anti-Trampas"
  },
  {
    id: "peatonal",
    iconName: "Footprints",
    title: "Modo Ronda Peatonal",
    description: "Conteo preciso de pasos, tiempo de permanencia por punto de control y acelerómetro activo para verificar el patrullaje continuo a pie.",
    highlightBadge: "Telemetría Activa"
  },
  {
    id: "patrulla-vehicular",
    iconName: "Car",
    title: "Modo Patrulla Vehicular con GPS",
    description: "Monitoreo continuo de velocidad, rutas satelitales y paradas no autorizadas durante el recorrido en vehículos o motocicletas de seguridad.",
    highlightBadge: "GPS Satelital"
  },
  {
    id: "banderin-ruta",
    iconName: "MapPin",
    title: "Banderín de Salida y Trazado de Ruta",
    description: "Marcación automática de inicio/fin de ronda con mapa de calor, alertas de desviación de ruta y trazado satelital sobre la propiedad.",
    highlightBadge: "Ruta en Vivo"
  },
  {
    id: "escaneo-doble",
    iconName: "ShieldAlert",
    title: "Escaneo Doble Obligatorio",
    description: "Protocolo especial para perímetros amplios o zonas vulnerables que exige verificación cruzada con intervalos de tiempo estricto.",
    highlightBadge: "Perímetros Críticos"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    title: "Aplicación Móvil para Guardias",
    category: "App Android",
    src: IMAGES.mobileMockup,
    alt: "Interfaz de la app móvil Sentinel QR en smartphone",
    description: "Pantalla principal de patrullaje con escáner QR activo, indicador de GPS satelital y botón de pánico SOS de respuesta rápida."
  },
  {
    id: 2,
    title: "Panel Administrador Windows",
    category: "Companion Windows",
    src: IMAGES.dashboardMockup,
    alt: "Consola de control de rondas para Windows",
    description: "Centro de comando central para coordinadores de seguridad con mapa en vivo, estatus de guardias y alertas inmediatas."
  },
  {
    id: 3,
    title: "Puntos de Control QR Anti-Fraude",
    category: "Escaneo QR",
    src: IMAGES.qrScan,
    alt: "Guardia escaneando código QR en punto de control",
    description: "Verificación instantánea de puntos de control con validación criptográfica anti-duplicación."
  },
  {
    id: 4,
    title: "Trazado de Ruta Satelital",
    category: "Geolocalización",
    src: IMAGES.mapRoute,
    alt: "Mapa satelital con ruta de patrullaje",
    description: "Visualización clara del recorrido efectuado por el personal de seguridad con marcas de tiempo precisas."
  },
  {
    id: 5,
    title: "Reportes Certificados PDF",
    category: "Auditoría",
    src: IMAGES.pdfReport,
    alt: "Generador de reportes de rondas en PDF",
    description: "Informes exportables con firma digital, estadísticas de cumplimiento e historial de novedades listos para clientes."
  },
  {
    id: 6,
    title: "Patrullaje Nocturno Efectivo",
    category: "Operaciones",
    src: IMAGES.guardPatrol,
    alt: "Guardia realizando ronda de seguridad nocturna",
    description: "Control continuo durante turnos críticos de 24 horas con modo nocturno optimizado para ahorro de batería."
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    stepNumber: 1,
    title: "Configuración Inicial",
    subtitle: "Consola Administrador Windows",
    description: "El administrador define los proyectos, crea los guardias, asigna los horarios y genera las etiquetas QR criptográficas para los puntos de control.",
    iconName: "Settings"
  },
  {
    stepNumber: 2,
    title: "Ejecución de Ronda",
    subtitle: "App Móvil Android",
    description: "El oficial de seguridad escanea los puntos de control en el orden establecido. La app valida posición GPS, movimiento y tiempo de permanencia.",
    iconName: "QrCode"
  },
  {
    stepNumber: 3,
    title: "Auditoría y Certificación",
    subtitle: "Reportes Automatizados",
    description: "El sistema audita el cumplimiento en tiempo real, notifica incidencias al instante y genera reportes PDF certificados listos para enviar al cliente.",
    iconName: "FileCheck"
  }
];

export const PAISES = [
  "El Salvador",
  "Guatemala",
  "Honduras",
  "México",
  "Costa Rica",
  "Panamá",
  "Nicaragua",
  "Otro"
];

export const TIPOS_INTERES = [
  "Demo Gratuita",
  "Información del Producto",
  "Cotización",
  "Otro"
];
