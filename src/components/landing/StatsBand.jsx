import { stats } from '../../data/landing'
import EjemploTag from './EjemploTag'
import Reveal from './Reveal'

export default function StatsBand() {
  return (
    <section className="bg-[#01569D] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4 md:divide-x md:divide-white/20">
        {stats.map((s, i) => (
          <Reveal key={s.etiqueta} delay={i * 0.1} className="flex flex-col items-center px-4 text-center">
            <span className="font-varela-round text-4xl font-bold">{s.valor}</span>
            <span className="mt-1 text-sm opacity-90">{s.etiqueta}</span>
            <EjemploTag show={s.ejemplo} className="mt-2" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
