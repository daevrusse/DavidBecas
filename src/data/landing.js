// Contenido editable de la landing.
// IMPORTANTE: los testimonios marcados con `ejemplo: true` son DATOS DE PRUEBA.
// Reemplázalos por datos reales y cambia `ejemplo` a false; la etiqueta "Ejemplo" desaparece sola.

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
    nombre: 'Postulante de ejemplo 1',
    detalle: 'Beca 18 · Modalidad Ordinaria',
    texto: 'La calculadora me ayudó a entender cuántos puntos me faltaban y en qué IES me convenía postular.',
    estrellas: 5,
    ejemplo: true,
  },
  {
    nombre: 'Postulante de ejemplo 2',
    detalle: 'Beca 18 · Modalidad EIB',
    texto: 'En la asesoría personalizada resolví todas mis dudas sobre SIBEC y la constancia de ingreso.',
    estrellas: 5,
    ejemplo: true,
  },
  {
    nombre: 'Postulante de ejemplo 3',
    detalle: 'Beca 18 · Modalidad VRAEM',
    texto: 'El grupo premium me mantuvo al día con fechas, puntajes y novedades de la beca.',
    estrellas: 4,
    ejemplo: true,
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
