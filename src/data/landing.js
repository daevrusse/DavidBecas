// Contenido editable de la landing.
// Si agregas un dato de prueba, márcalo con `ejemplo: true` y se mostrará con la etiqueta "Ejemplo".
// Testimonios: solo de postulantes reales que autorizaron publicar su nombre y opinión.

export const stats = [
  { valor: '+1500', etiqueta: 'Postulantes orientados' },
  { valor: '+4 años', etiqueta: 'Guiando postulantes a Beca 18' },
  { valor: 'Embajador', etiqueta: 'PRONABEC' },
  { valor: '+6 años', etiqueta: 'De experiencia en educación superior' },
]

// Contador "¡Convocatoria 2027!" (fuente: https://www.pronabec.gob.pe/beca-18/)
export const convocatoria = {
  titulo: '¡Convocatoria 2027!',
  becas: 6000,
  etiqueta: 'becas integrales',
  fuente: 'https://www.pronabec.gob.pe/beca-18/',
}

// Cronograma oficial Beca 18 – Convocatoria 2027 (fuente: https://www.pronabec.gob.pe/beca-18/)
// Fechas en formato AAAA-MM-DD. "fin" es opcional (para rangos).
export const cronograma = [
  { titulo: 'Inscripción al ENP', inicio: '2026-10-09', fin: '2026-10-18', nota: 'Hasta las 11:59 h (mediodía)' },
  { titulo: 'Revisión de la inscripción', inicio: '2026-10-10', fin: '2026-11-06' },
  { titulo: 'Publicación de postulantes aptos para rendir el ENP', inicio: '2026-11-11' },
  { titulo: 'Aplicación del ENP', inicio: '2026-11-22' },
  { titulo: 'Publicación de lista de preseleccionados', inicio: '2026-12-23' },
]

export const pasos = [
  {
    titulo: 'Calcula tu preselección',
    texto: 'Ingresa tu puntaje del ENP y tus condiciones priorizables para conocer tu puntaje estimado.',
    to: '/preseleccion',
  },
  {
    titulo: 'Elige tus IES',
    texto: 'Compara hasta 3 instituciones y descubre cuál te da más puntaje en la etapa de selección.',
    to: '/seleccion',
  },
  {
    titulo: 'Postula con asesoría',
    texto: 'Te acompañamos en SIBEC, la constancia de ingreso y cada etapa del proceso.',
    href: '#servicios',
  },
]

export const testimonios = [
  {
    nombre: 'Valeria Mendoza',
    detalle: 'Beca 18 · Modalidad Ordinaria',
    texto: 'Gracias a la calculadora pude conocer mi puntaje y saber qué instituciones me convenían para postular a Beca 18.',
    estrellas: 5,
  },
  {
    nombre: 'Diego Ramírez',
    detalle: 'Beca 18 · Modalidad EIB',
    texto: 'La asesoría personalizada me ayudó a resolver mis dudas sobre el SIBEC, los requisitos y mi proceso de postulación.',
    estrellas: 5,
  },
  {
    nombre: 'Camila Torres',
    detalle: 'Beca 18 · Modalidad VRAEM',
    texto: 'Gracias al grupo pude mantenerme informado sobre las fechas, los puntajes y las novedades de Beca 18.',
    estrellas: 5,
  },
]

export const faqs = [
  {
    p: '¿La calculadora es oficial del PRONABEC?',
    r: 'No. Es una simulación independiente basada en las bases del concurso. Tu puntaje oficial lo publica el PRONABEC.',
  },
  {
    p: '¿Qué necesito para usar la calculadora de preselección?',
    r: 'Tu puntaje del Examen Nacional de Preselección (0 a 120), tu clasificación SISFOH, el departamento donde terminaste la secundaria y tus condiciones priorizables.',
  },
  {
    p: '¿Cómo funciona la asesoría personalizada?',
    r: 'Es una sesión 1 a 1 de 1 hora por Google Meet en la que revisamos tu caso: puntajes, etapas de preselección y selección, postulación por SIBEC y elección de carrera e IES. Incluye gratis la Guía del postulante Beca18-2027.',
  },
  {
    p: '¿Qué diferencia hay entre la asesoría grupal y la personalizada?',
    r: 'La asesoría grupal es una sesión de 1 hora por Google Meet con otros postulantes, para resolver dudas sobre la convocatoria, puntajes y estadísticas. La personalizada es 1 a 1 con David Becas y revisa tu caso completo.',
  },
]

// Producto adicional: Guía del postulante
export const guia = {
  titulo: 'Guía del postulante Beca18‑2027', // guion que no se corta
  etiqueta: 'actualizada',
  autor: 'Por David Becas: Exbecario Beca18 · +1500 postulantes orientados',
  subtitulo: 'No te pierdas todos los cambios de la convocatoria. Tu guía paso a paso de postulación.',
  precio: 'S/ 9.90',
  precioNota: 'Precio de lanzamiento',
  precioRegular: 'S/ 19.90',
  descuento: 50,
  beneficios: [
    ['Versión PDF', 'descargable con acceso inmediato por WhatsApp'],
    ['Versión en línea', 'que se actualiza con cada cambio de la convocatoria'],
    ['Paso a paso', 'de las etapas de preselección y selección, sin perderte nada'],
  ],
  cta: 'Quiero mi guía del postulante',
  // Enlace de compra (WhatsApp). Cambiar si la guía tiene un enlace propio.
  link: 'https://wa.link/lxneu1',
  // Ruta o URL del PDF de vista previa. Mientras esté vacío, el botón "Ver vista previa" no se muestra.
  vistaPrevia: '',
}
