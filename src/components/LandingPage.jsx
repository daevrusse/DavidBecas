import { useState, useEffect } from 'react'
import heroMan from '../assets/img/hero-man.webp'
import heroWoman from '../assets/img/hero-woman.webp'
import LazyBackground from '../components/LazyBackground'
import Planes from './Planes'

export default function LandingPage() {
   const [currentHero, setCurrentHero] = useState(heroMan);

   useEffect(() => {
      const images = [
         heroMan,
         heroWoman
      ];
      let currentIndex = 0;

      const intervalId = setInterval(() => {
         currentIndex = (currentIndex + 1) % images.length;
         setCurrentHero(images[currentIndex]);
      }, 5000);

      // Limpia el intervalo cuando el componente se desmonta
      return () => clearInterval(intervalId);
   }, []); // El array vacío asegura que el efecto se ejecute solo una vez

   return (
      <>
         <main className="font-cairo mt-20">
            <LazyBackground>
               <div className="absolute inset-0 bg-black opacity-30"></div>
               <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center">
                  {/* Contenido de texto y botones */}
                  <div className="space-y-4 max-w-xl mt-10 mx-4 md:my-auto text-center lg:text-left">
                     <h2 className="font-varela-round font-normal text-4xl mt-10 md:text-5xl lg:text-5xl lg:pr-10">Este es el momento de conseguir la beca de tus sueños</h2>
                     <p className="text-lg">Hola Becadito! Aquí encontrarás todo sobre becas del PRONABEC</p>
                     <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6 text-center">
                        <a className="w-full sm:w-auto px-6 py-3 bg-[#FFF1CC] border border-black md:w-36 text-black hover:bg-[#F5C002] transition-colors rounded-xl font-normal"
                        href='https://www.pronabec.gob.pe/beca-18/'
                        target='blank'>Beca18 2026</a>
                        <a className="w-full sm:w-auto px-6 py-3 bg-[#F2F2F2] border border-black shadow-inner md:w-36 text-black hover:bg-[#7a8291] hover:text-white transition-colors rounded-xl font-normal"
                        href='#servicios'>Asesoría</a>
                     </div>
                  </div>

                  {/* Imagen del héroe que cambia dinámicamente */}
                  <div className="relative w-full max-w-sm lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                  <img 
                     src={currentHero} 
                     alt="Héroe de beca" 
                     className="w-96 h-[470] p-10 object-contain transition-opacity duration-1000 ease-in-out"
                     loading='lazy'
                  />
                  </div>
               </div>
            </LazyBackground>

            {/* Sección de Recursos y Apoyo */}
            {/*<div className="bg-[#FFF1CC] p-16">
               <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left mb-16">
                  <div className="md:pr-15">
                     <h2 className="font-varela-round text-4xl md:text-5xl font-normal">Construye tu camino al éxito con nuestros recursos y apoyo especializado en becas</h2>
                  </div>
                  <div className="mt-4 md:mt-0">
                     <p className="text-gray-700 text-lg">Te ofrecemos asesoría especializada con las becas más relevantes disponibles en Perú, diseñada para brindarte claridad y enfoque. Nuestro acompañamiento paso a paso simplifica cada etapa del proceso de postulación, ayudándote a tomar decisiones informadas y efectivas. Gracias a nuestras herramientas exclusivas y asesoría personalizada, estarás preparado para avanzar con seguridad hacia tus metas educativas.</p>
                  </div>
               </div>
               
               {/* Sección de Tarjetas de Funcionalidades *}
               <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {/* Tarjeta 1 *}
                  <div className="flex flex-col items-center p-4">
                     <div className="w-16 h-16 flex items-center justify-center">
                        <span role='img' aria-label='calculadora' className='text-4xl'>
                           <img src={iconCalculadora} alt="Icono de Calculadora" className='w-16 h-16'/>
                        </span>
                     </div>
                     <h3 className="mt-4 mb-3 font-varela-round text-2xl font-bold">
                        <span className='block'>Calculadora de</span>
                        <span className='block'>Puntuación</span>
                     </h3>
                     <p className="mt-2">Nuestra calculadora de puntaje te ayuda a evaluar su elegibilidad en las becas.</p>
                  </div>
                  
                  {/* Tarjeta 2 *}
                  <div className="flex flex-col items-center p-4">
                     <div className="w-16 h-16 flex items-center justify-center">
                        <span role='img' aria-label='asesoría' className='text-4xl'>
                           <img src={iconAsesoria} alt="Icono de Asesoria personalizada" className='w-16 h-16' />
                        </span>
                     </div>
                     <h3 className="mt-4 mb-3 text-2xl font-varela-round font-bold">
                        <span className='block'>Asesoría</span>
                        <span className='block'>Personalizada</span>
                     </h3>
                     <p className="mt-2">Nuestros asesores expertos están aquí para ayudarte con estrategias personalizadas para alcanzar el éxito.</p>
                  </div>
                  
                  {/* Tarjeta 3 *}
                  <div className="flex flex-col items-center p-4">
                     <div className="w-16 h-16 flex items-center justify-center">
                        <span role='img' aria-label='comunidad' className='text-4xl'>
                           <img src={iconComunidad} alt="Icono de comunidad y recursos" className='w-16 h-16' />
                        </span>
                     </div>
                     <h3 className="mt-4 mb-3 text-2xl font-varela-round font-bold"><span className='block'>Comunidad y</span>
                        <span className='block'>Recursos</span>
                     </h3>
                     <p className="mt-2">Únase a nuestra comunidad para obtener apoyo y recursos continuos.</p>
                  </div>
               </div>
            </div>*/}
            {/* Planes de Servicio */}
            <Planes/>
            <div className='p-4 w-[560] h-[315] mx-auto'>
               <iframe className='mx-auto w-full mb-5 h-80 md:w-2/3' src="https://www.youtube.com/embed/dkxfRK-XLKY?si=D6sxTquUNDg6rem1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
         </main>
      </>
   )
}