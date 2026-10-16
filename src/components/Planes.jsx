import React from 'react';

// Componente para una tarjeta de plan en LandingPage
const PlanCard = ({ title, price, regularPrice, features, isPremium, link }) => (
  <div 
    className={`p-6 rounded-lg shadow-lg flex flex-col transition-transform transform ${
      isPremium ? 'border-4 border-[#F4B600] scale-105 bg-yellow-100' : 'bg-white border border-gray-200'
    }`}
  >
    <div className={`p-4 rounded-t-lg text-center font-semibold text-gray-800 ${isPremium ? 'bg-[#F4B600]' : 'bg-gray-100'}`}>
      <h3 className="text-xl">{title}</h3>
    </div>
    
    <div className="flex-grow flex flex-col items-center justify-center p-4">
      <div className="text-4xl font-extrabold text-blue-800">
        {price}
      </div>
      {regularPrice && (
        <span className="text-sm text-gray-500 line-through mt-1">
          Precio Regular: {regularPrice}
        </span>
      )}
      <a href={link} target='_blank'
        className={`mt-4 w-full px-6 py-2 rounded-full font-bold transition-colors border border-[#F4B600]
          ${isPremium ? 'bg-[#F4B600] text-white hover:bg-yellow-600' : 'bg-white text-[#F4B600] hover:bg-yellow-50'}`}
      >
        Únete ya!
        <span className="ml-2">→</span>
      </a>
    </div>

    <div className="mt-4 text-left">
      <ul className="grid grid-cols-2 md:grid-cols-1 list-none space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Componente principal para la sección de planes
export default function Planes() {
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

  return (
    <section id='servicios' className="max-w-7xl mx-auto py-14 px-4">
      <h2 className="py-10 pb-16 font-varela-round text-3xl">Nuestros Planes</h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
