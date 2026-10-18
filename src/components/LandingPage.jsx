import Hero from './landing/Hero'
import StatsBand from './landing/StatsBand'
import Convocatoria from './landing/Convocatoria'
import Cronograma from './landing/Cronograma'
import Testimonials from './landing/Testimonials'
import Faq from './landing/Faq'
import CtaBanner from './landing/CtaBanner'
import Reveal from './landing/Reveal'
import Planes from './Planes'
import GuiaPostulante from './landing/GuiaPostulante'

export default function LandingPage() {
  return (
    <main className="font-cairo">
      <Hero />
      <StatsBand />
      <Convocatoria />
      <Cronograma />

      {/* Planes de servicio (id="servicios") */}
      <Planes />

      {/* Producto adicional: Guía del postulante (id="guia") */}
      <GuiaPostulante />

      <section className="mx-auto max-w-4xl px-6 pb-10">
        <Reveal>
          <h2 className="font-varela-round text-3xl font-bold text-gray-900">Conoce más de DavidBecas</h2>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dkxfRK-XLKY"
              title="Video de DavidBecas"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>

      <Testimonials />
      <Faq />
      <CtaBanner />
    </main>
  )
}
