import { Link } from 'react-router-dom'
import { pasos } from '../../data/landing'
import Reveal from './Reveal'

export default function Steps() {
  return (
    <section className="bg-[#F5FAFF]">
      <div className="mx-auto max-w-6xl px-6 py-20 text-left">
        <Reveal>
          <h2 className="text-center font-varela-round text-3xl font-bold text-gray-900 sm:text-4xl">
            Tu camino a la beca en 3 pasos
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pasos.map((p, i) => {
            const cls = 'mt-4 inline-block font-semibold text-[#01569D] hover:underline'
            return (
              <Reveal key={p.titulo} delay={i * 0.12}>
                <div className="relative h-full rounded-2xl bg-white p-7 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5C002] font-bold text-gray-900">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-varela-round text-xl font-bold text-gray-900">{p.titulo}</h3>
                  <p className="mt-2 text-gray-600">{p.texto}</p>
                  {p.to
                    ? <Link to={p.to} className={cls}>Empezar →</Link>
                    : <a href={p.href} className={cls}>Ver planes →</a>}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
