import { useEffect, useRef, useState } from 'react';

// Componente para una tarjeta de plan en LandingPage
const PlanCard = ({ title, price, regularPrice, features, isPremium, link }) => (
  <div
    className={`p-6 rounded-lg shadow-lg flex flex-col h-full transition-transform transform ${
      isPremium ? 'border-4 border-[#F4B600] md:scale-105 bg-yellow-100' : 'bg-white border border-gray-200'
    }`}
  >
    <div className={`p-4 rounded-t-lg text-center font-semibold text-gray-800 ${isPremium ? 'bg-[#F4B600]' : 'bg-gray-100'}`}>
      <h3 className="text-xl">{title}</h3>
    </div>

    <div className="flex flex-col items-center justify-center p-4 md:flex-grow">
      <div className="text-4xl font-extrabold text-blue-800">
        {price}
      </div>
      {regularPrice && (
        <span className="text-sm text-gray-500 line-through mt-1">
          Precio Regular: {regularPrice}
        </span>
      )}
      <a href={link} target='_blank' rel='noopener noreferrer'
        className={`mt-4 w-full px-6 py-2 rounded-full font-bold transition-colors border border-[#F4B600]
          ${isPremium ? 'bg-[#F4B600] text-white hover:bg-yellow-600' : 'bg-white text-[#F4B600] hover:bg-yellow-50'}`}
      >
        Únete ya!
        <span className="ml-2">→</span>
      </a>
    </div>

    <div className="mt-4 text-left">
      <ul className="grid grid-cols-1 list-none space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const plans = [
  {
    title: 'Grupo general',
    price: 'GRATIS ! *',
    features: ['Apoyo general', 'Comunidad de postulantes'],
    isPremium: false,
    link: 'https://chat.whatsapp.com/BuL11vQlfby5XrsixQBnRX'
  },
  {
    title: 'Grupo Premium',
    price: 'S/. 14.99 *',
    regularPrice: 'S/. 25',
    features: [
      'Beneficios del grupo general',
      'Seguimiento de la beca',
      'Estadísticas, puntajes, admisión y más de beca 18',
      'Asesoría Grupal los sábados',
      'Soporte 24/7 en el grupo',
    ],
    isPremium: true,
    link: 'https://wa.link/enn0ns'
  },
  {
    title: 'Asesoría Personalizada',
    price: 'S/. 24.99',
    regularPrice: 'S/. 35',
    features: [
      'Despeja todas tus dudas sobre beca 18',
      'Tiempo: 55 min',
      'Plataforma: Google Meet',
      'Como obtener la constancia de ingreso',
      'Puntajes para ganar la BECA',
      'Postulación por SIBEC',
      'Todo sobre la etapa de selección',
      'Otras dudas del postulante',
    ],
    isPremium: false,
    link: 'https://wa.link/lxneu1'
  },
];

const PREMIUM = plans.findIndex((p) => p.isPremium);

// Componente principal para la sección de planes.
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
    <section id='servicios' className="max-w-7xl mx-auto py-14 md:px-4">
      <h2 className="py-10 pb-12 md:pb-16 font-varela-round text-3xl">Nuestros Planes</h2>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[7.5%] py-4
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                   md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0"
      >
        {plans.map((plan, index) => (
          <div key={index} className="snap-center shrink-0 w-[85%] md:w-auto">
            <PlanCard {...plan} />
          </div>
        ))}
      </div>

      {/* Indicadores del carrusel (solo móvil) */}
      <div className="mt-4 flex justify-center gap-2 md:hidden">
        {plans.map((p, i) => (
          <button
            key={p.title}
            type="button"
            aria-label={`Ver plan ${p.title}`}
            aria-current={activo === i}
            onClick={() => irA(i)}
            className={`h-2.5 rounded-full transition-all ${activo === i ? 'w-8 bg-[#F4B600]' : 'w-2.5 bg-gray-300'}`}
          />
        ))}
      </div>
      <p className="mt-2 text-xs text-gray-400 md:hidden">Desliza para ver más planes</p>
    </section>
  );
}
