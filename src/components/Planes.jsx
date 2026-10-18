import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

// Íconos simples en línea (heredan el color con currentColor)
const Icono = {
  comunidad: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  corona: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M2 18h20" /><path d="M3 18 2 7l5.5 4L12 4l4.5 7L22 7l-1 11" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <rect x="2" y="6" width="14" height="12" rx="2" /><path d="m22 8-6 4 6 4V8z" />
    </svg>
  ),
  reloj: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 shrink-0">
      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3a1 1 0 0 0-1.4-1.4L9 10.6 7.7 9.3a1 1 0 0 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l4-4Z" clipRule="evenodd" />
    </svg>
  ),
};

const plans = [
  {
    title: 'Grupo General',
    tagline: 'Únete a la comunidad de postulantes',
    icon: 'comunidad',
    price: 'Gratis',
    features: [
      'Acceso al grupo de WhatsApp general de postulantes',
      'Avisos de fechas clave de la convocatoria',
      'Apoyo general',
    ],
    cta: '¡Únete gratis!',
    link: 'https://chat.whatsapp.com/BuL11vQlfby5XrsixQBnRX',
  },
  {
    title: 'Asesoría Grupal',
    tagline: 'Absuelve tus dudas en una sesión grupal',
    icon: 'corona',
    price: 'S/ 9,90',
    regularPrice: 'S/ 19,90',
    descuento: 50,
    features: [
      'Despeja tus dudas de Beca18 en una asesoría grupal',
      'Orientación en puntajes y estadísticas',
      'Orientación de la convocatoria',
    ],
    duracion: '1 h x Google Meet grupal',
    cta: 'Quiero una asesoría grupal',
    isPremium: true,
    link: 'https://wa.link/enn0ns',
  },
  {
    title: 'Asesoría Personalizada',
    tagline: 'Sesión 1 a 1 con David Becas',
    icon: 'video',
    price: 'S/ 39,90',
    regularPrice: 'S/ 59,90',
    descuento: 33,
    features: [
      'Despeja todas tus dudas de Beca18 en **asesoría 1 a 1**',
      'Orientación en puntajes y estadísticas',
      'Orientación paso a paso de las etapas preselección y selección',
      'Orientación en postulación en la plataforma SIBEC',
      'Orientación en elección de carrera e IES (universidad/instituto/escuela)',
      'Otras dudas del postulante',
      'Incluye gratis **Guía del postulante Beca18-2027 actualizada** (precio regular S/ 19,90)',
    ],
    duracion: '1 h x Google Meet',
    cta: 'Quiero una asesoría personalizada',
    link: 'https://wa.link/lxneu1',
  },
];

// Convierte '**texto**' en negrita
const conNegrita = (t) =>
  t.split(/(\*\*[^*]+\*\*)/).map((parte, i) =>
    parte.startsWith('**') ? <strong key={i}>{parte.slice(2, -2)}</strong> : parte
  );

const PREMIUM = plans.findIndex((p) => p.isPremium);

// Tarjeta de plan. El Premium usa fondo azul para destacar.
const PlanCard = ({ title, tagline, icon, price, regularPrice, descuento, nota, duracion, features, cta, isPremium, link }) => (
  <div
    className={`relative flex h-full flex-col rounded-3xl p-7 text-left transition duration-300 hover:-translate-y-1 ${
      isPremium
        ? 'bg-gradient-to-br from-[#01569D] via-[#01569D] to-[#0AA6FF] text-white shadow-[0_25px_60px_-15px_rgba(1,86,157,0.6)] md:-my-4 md:py-11'
        : 'border border-gray-100 bg-white text-gray-900 shadow-lg hover:shadow-xl'
    }`}
  >
    {isPremium && (
      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#F5C002] px-4 py-1 text-xs font-bold uppercase tracking-wide text-gray-900 shadow">
        ★ Recomendado
      </span>
    )}

    <div className="flex items-center gap-3">
      <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${isPremium ? 'bg-white/15 text-[#F5C002]' : 'bg-[#FFF1CC] text-[#01569D]'}`}>
        {Icono[icon]}
      </span>
      <div>
        <h3 className="font-varela-round text-xl font-bold">{title}</h3>
        <p className={`text-sm ${isPremium ? 'text-white/80' : 'text-gray-500'}`}>{tagline}</p>
      </div>
    </div>

    <div className="mt-6 flex items-end gap-3">
      <span className="font-varela-round text-5xl font-bold leading-none">{price}</span>
      {regularPrice && (
        <span className="flex flex-col pb-1 text-sm leading-tight">
          <span className={`line-through ${isPremium ? 'text-white/60' : 'text-gray-400'}`}>{regularPrice}</span>
          <span className={`font-bold ${isPremium ? 'text-[#F5C002]' : 'text-emerald-600'}`}>-{descuento}%</span>
        </span>
      )}
    </div>
    {nota && <p className={`mt-2 text-sm ${isPremium ? 'text-white/80' : 'text-gray-500'}`}>{nota}</p>}

    <a
      href={link} target="_blank" rel="noopener noreferrer"
      className={`mt-6 block rounded-xl px-4 py-3 text-center font-bold transition ${
        isPremium
          ? 'bg-[#F5C002] text-gray-900 hover:bg-[#ffd23d]'
          : 'border-2 border-[#01569D] text-[#01569D] hover:bg-[#01569D] hover:text-white'
      }`}
    >
      {cta} →
    </a>

    <hr className={`my-6 ${isPremium ? 'border-white/20' : 'border-gray-100'}`} />

    <p className={`mb-4 text-xs font-bold uppercase tracking-wider ${isPremium ? 'text-white/70' : 'text-gray-400'}`}>Incluye</p>
    <ul className="space-y-3 md:flex-grow">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2.5">
          <span className={isPremium ? 'text-[#F5C002]' : 'text-[#0AA6FF]'}>{Icono.check}</span>
          <span className={isPremium ? 'text-white/95' : 'text-gray-700'}>{conNegrita(f)}</span>
        </li>
      ))}
    </ul>

    {duracion && (
      <p className={`mt-5 flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold ${isPremium ? 'bg-white/10 text-white' : 'bg-[#F5FAFF] text-[#01569D]'}`}>
        {Icono.reloj} Duración: {duracion}
      </p>
    )}

  </div>
);

// Sección de planes.
// Móvil: carrusel deslizable (scroll-snap) con indicadores; escritorio: 3 columnas.
export default function Planes() {
  const trackRef = useRef(null);
  const [activo, setActivo] = useState(PREMIUM);

  const irA = (i, smooth = true) => {
    const track = trackRef.current;
    const card = track?.children[i];
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  // En móvil, empezar mostrando el plan Premium
  useEffect(() => {
    if (window.matchMedia('(max-width: 767px)').matches) irA(PREMIUM, false);
  }, []);

  // Detectar la tarjeta centrada para marcar el indicador
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const centro = track.scrollLeft + track.clientWidth / 2;
    let mejor = 0, dist = Infinity;
    [...track.children].forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.clientWidth / 2 - centro);
      if (d < dist) { dist = d; mejor = i; }
    });
    setActivo(mejor);
  };

  return (
    <section id="servicios" className="bg-gradient-to-b from-white via-[#F5FAFF] to-white py-20">
      <div className="mx-auto max-w-6xl md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="px-6 md:px-0"
        >
          <span className="inline-block rounded-full bg-[#01569D]/10 px-4 py-1 text-sm font-semibold text-[#01569D]">
            Beca18-2027
          </span>
          <h2 className="mt-4 font-varela-round text-3xl font-bold text-gray-900 sm:text-4xl">
            Nuestros <span className="text-[#0AA6FF]">Planes</span>
          </h2>
          <p className="mx-auto mt-3 flex max-w-2xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-gray-600">
            <span><strong className="text-gray-800">David Becas:</strong> Exbecario Beca18 en UPC</span>
            <span className="text-[#F5C002]">●</span>
            <span>+1500 postulantes orientados</span>
            <span className="text-[#F5C002]">●</span>
            <span>+6 años en educación superior</span>
          </p>
        </motion.div>

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="mt-12 flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[7.5%] pb-6 pt-6
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                     md:grid md:grid-cols-3 md:items-center md:gap-6 md:overflow-visible md:px-0"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="w-[85%] shrink-0 snap-center md:w-auto md:self-stretch"
            >
              <PlanCard {...plan} />
            </motion.div>
          ))}
        </div>

        {/* Indicadores del carrusel (solo móvil) */}
        <div className="mt-2 flex justify-center gap-2 md:hidden">
          {plans.map((p, i) => (
            <button
              key={p.title}
              type="button"
              aria-label={`Ver plan ${p.title}`}
              aria-current={activo === i}
              onClick={() => irA(i)}
              className={`h-2.5 rounded-full transition-all ${activo === i ? 'w-8 bg-[#F5C002]' : 'w-2.5 bg-gray-300'}`}
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-gray-400 md:hidden">Desliza para ver más planes</p>
      </div>
    </section>
  );
}
