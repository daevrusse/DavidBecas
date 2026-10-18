import { stats } from '../../data/landing'
import EjemploTag from './EjemploTag'
import Reveal from './Reveal'

const svg = 'h-7 w-7'
const props = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', className: svg }

// Estilo de cada tarjeta (fondo pastel + color del ícono), en el orden de `stats`
const ESTILOS = [
  {
    fondo: 'bg-[#EEF4FF]', color: 'text-[#2563EB]',
    icono: <svg {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  },
  {
    fondo: 'bg-[#E8FAF2]', color: 'text-[#10B981]',
    icono: <svg {...props}><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></svg>,
  },
  {
    fondo: 'bg-[#FFF7E0]', color: 'text-[#F5B400]',
    icono: <svg {...props}><circle cx="12" cy="9" r="6" /><path d="M8.5 13.9 7 22l5-3 5 3-1.5-8.1" /></svg>,
  },
  {
    fondo: 'bg-[#FFEFF2]', color: 'text-[#E11D48]',
    icono: <svg {...props}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>,
  },
]

// Tarjeta blanca flotante con 4 cifras, superpuesta al borde inferior del banner.
export default function StatsBand({ fondo = 'bg-[#EEF7FF]' }) {
  return (
    <section className={`relative z-10 flow-root px-4 pb-6 ${fondo}`}>
      <div className="mx-auto -mt-6 grid max-w-6xl grid-cols-2 gap-3 rounded-3xl bg-white p-3 shadow-[0_20px_50px_-15px_rgba(1,86,157,0.35)] md:-mt-10 lg:grid-cols-4 lg:gap-4 lg:p-4 xl:-mt-12">
        {stats.map((s, i) => {
          const e = ESTILOS[i % ESTILOS.length]
          return (
            <Reveal key={s.etiqueta} delay={i * 0.1}>
              <div className={`flex h-full flex-col items-center gap-2 rounded-2xl p-4 text-center sm:flex-row sm:items-center sm:gap-4 sm:p-5 sm:text-left ${e.fondo}`}>
                <span className={`shrink-0 ${e.color}`}>{e.icono}</span>
                <div>
                  <p className="font-varela-round text-xl font-bold leading-tight text-gray-900 sm:text-2xl">{s.valor}</p>
                  <p className="mt-0.5 text-sm leading-snug text-gray-600">{s.etiqueta}</p>
                  <EjemploTag show={!!s.ejemplo} className="mt-1" />
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
