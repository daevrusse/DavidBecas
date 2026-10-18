// Contenido de la página "Sobre mí" (fuente: davidbecas.com/sobremi).
import foto from '../assets/img/david-sobremi.webp'

export const perfil = {
  nombre: 'David',
  rol: 'Ingeniero Industrial (UPC) · Exbecario Beca 18',
  foto,
  intro:
    'Gané Beca 18 en mi tercer intento. Hoy acompaño a jóvenes de todo el Perú para que lleguen a la beca de sus sueños con información clara y una estrategia.',
}

// Párrafos de "Mi historia". Usa **texto** para resaltar en negrita.
export const historiaTexto = [
  'Soy **Ingeniero Industrial de la UPC gracias a Beca 18**, y me gradué dentro del **Grupo de Excelencia Académica (GEA)**.',
  'Actualmente me desempeño como **analista de inteligencia de negocios en el sector de educación superior**, un rol que refuerza mi compromiso de aportar valor y acompañar a más jóvenes en conseguir la beca de sus sueños.',
  'Además, tengo un canal de **YouTube y TikTok (@davidbecas)** donde comparto información resumida sobre las becas del Programa Nacional de Becas y Crédito Educativo (PRONABEC).',
]

export const datoCurioso = {
  numero: '3.er',
  etiqueta: 'intento',
  texto:
    'Obtuve la beca en mi tercer intento, una experiencia que me enseñó que la perseverancia siempre abre puertas. Gracias a ello, fui reconocido como Embajador PRONABEC por mi labor difundiendo las oportunidades que ofrece esta entidad.',
}

export const camino = [
  { paso: '1', titulo: 'Postulé y no me rendí', texto: 'Los dos primeros intentos no salieron como esperaba, pero cada uno me enseñó algo nuevo del proceso.' },
  { paso: '2', titulo: 'Gané Beca 18', texto: 'En mi tercer intento obtuve la beca y estudié Ingeniería Industrial en la UPC.' },
  { paso: '3', titulo: 'Me gradué en el GEA', texto: 'Terminé la carrera dentro del Grupo de Excelencia Académica de la universidad.' },
  { paso: '4', titulo: 'Embajador PRONABEC', texto: 'Hoy comparto lo aprendido en redes y en asesorías para que más jóvenes consigan su beca.' },
]

export const redes = [
  { nombre: 'YouTube', usuario: '@davidbecas', texto: 'Videos con la información del concurso explicada paso a paso.', href: 'https://www.youtube.com/channel/UCxCxBdEIa1l2YGV9HafVNAA', color: 'bg-[#FFEFF2] text-[#E11D48]' },
  { nombre: 'TikTok', usuario: '@davidbecas', texto: 'Tips rápidos, fechas clave y novedades de las becas.', href: 'http://tiktok.com/@davidbecasp', color: 'bg-[#EEF4FF] text-[#2563EB]' },
]

export const valores = [
  { titulo: 'Información clara', texto: 'Explicamos las bases del concurso en lenguaje simple, sin rodeos.' },
  { titulo: 'Acompañamiento real', texto: 'Te guiamos paso a paso, desde la preselección hasta la elección de tu IES.' },
  { titulo: 'Herramientas gratuitas', texto: 'Nuestras calculadoras son libres para que cualquier postulante pueda usarlas.' },
]
