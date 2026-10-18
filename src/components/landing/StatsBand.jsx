import { stats } from '../../data/landing'
import EjemploTag from './EjemploTag'
import Reveal from './Reveal'

export default function StatsBand() {
  return (
    <section className="bg-[#01569D] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4 md:items-start md:divide-x md:divide-white/20">
        {stats.map((s, i) => (
          <Reveal key={s.etiqueta} delay={i * 0.1} className="flex flex-col items-center px-4 text-center">
            <span className="font-varela-round text-3xl font-bold sm:text-4xl">{s.valor}</span>
            <span className="mt-1 text-sm opacity-90">{s.etiqueta}</span>
            {s.detalle && <span className="mt-2 max-w-[16rem] text-xs leading-snug opacity-70">{s.detalle}</span>}
            <EjemploTag show={!!s.ejemplo} className="mt-2" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
