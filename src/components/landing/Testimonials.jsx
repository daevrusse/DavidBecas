import { testimonios } from '../../data/landing'
import EjemploTag from './EjemploTag'
import Reveal from './Reveal'

const iniciales = (n) => n.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-left">
      <Reveal>
        <h2 className="text-center font-varela-round text-3xl font-bold text-gray-900 sm:text-4xl">
          Lo que dicen nuestros postulantes
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonios.map((t, i) => (
          <Reveal key={t.nombre} delay={i * 0.12}>
            <figure className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-[#F5C002]" aria-label={`${t.estrellas} de 5 estrellas`}>
                  {'★'.repeat(t.estrellas)}
                  <span className="text-gray-200">{'★'.repeat(5 - t.estrellas)}</span>
                </div>
                <EjemploTag show={t.ejemplo} />
              </div>
              <blockquote className="mt-4 flex-grow text-gray-700">“{t.texto}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0AA6FF]/15 font-bold text-[#01569D]">
                  {iniciales(t.nombre)}
                </span>
                <span>
                  <span className="block font-semibold text-gray-900">{t.nombre}</span>
                  <span className="block text-sm text-gray-500">{t.detalle}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
