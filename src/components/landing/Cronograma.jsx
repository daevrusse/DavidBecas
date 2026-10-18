import { cronograma, convocatoria } from '../../data/landing'
import Reveal from './Reveal'

// '2026-10-09' -> '09/10/2026'
const fmt = (iso) => iso.split('-').reverse().join('/')

// Fecha de hoy en Perú, en formato AAAA-MM-DD (comparable como texto)
const hoyLima = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Lima' }).format(new Date())

function estado({ inicio, fin }, hoy) {
  const final = fin || inicio
  if (hoy > final) return 'finalizado'
  if (hoy >= inicio) return 'en-curso'
  return 'proximo'
}

const ETIQUETA = {
  finalizado: { texto: 'Finalizado', cls: 'bg-gray-100 text-gray-500' },
  'en-curso': { texto: 'En curso', cls: 'bg-emerald-100 text-emerald-700' },
  proximo: { texto: 'Próximamente', cls: 'bg-[#FFF1CC] text-amber-800' },
}

export default function Cronograma() {
  const hoy = hoyLima()

  return (
    <section id="cronograma" className="mx-auto max-w-6xl px-6 py-20 text-left">
      <Reveal>
        <span className="inline-block rounded-full bg-[#01569D]/10 px-4 py-1 text-sm font-semibold text-[#01569D]">
          Cronograma
        </span>
        <h2 className="mt-4 font-varela-round text-3xl font-bold text-gray-900 sm:text-4xl">
          Fechas <span className="text-[#0AA6FF]">importantes</span>
        </h2>
      </Reveal>

      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {cronograma.map((e, i) => {
          const est = estado(e, hoy)
          const activo = est === 'en-curso'
          return (
            <Reveal key={e.titulo} delay={i * 0.08}>
              <li
                className={`flex h-full flex-col items-center rounded-3xl p-6 text-center shadow-md transition hover:-translate-y-1 ${
                  activo ? 'bg-[#01569D] text-white ring-4 ring-[#F5C002]' : 'bg-white text-gray-900'
                } ${est === 'finalizado' ? 'opacity-70' : ''}`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full font-varela-round text-2xl font-bold ${
                    activo ? 'bg-[#F5C002] text-gray-900' : 'bg-[#0AA6FF]/15 text-[#01569D]'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-bold leading-snug">{e.titulo}</h3>
                <p className={`mt-3 text-sm ${activo ? 'text-white/90' : 'text-gray-600'}`}>
                  {e.fin ? <>del {fmt(e.inicio)}<br />al {fmt(e.fin)}</> : fmt(e.inicio)}
                </p>
                {e.nota && <p className={`mt-1 text-xs ${activo ? 'text-white/75' : 'text-gray-500'}`}>{e.nota}</p>}
                <span className={`mt-auto inline-block rounded-full px-3 py-1 pt-1 text-xs font-bold ${activo ? 'mt-4 bg-white/15 text-[#F5C002]' : `mt-4 ${ETIQUETA[est].cls}`}`}>
                  {ETIQUETA[est].texto}
                </span>
              </li>
            </Reveal>
          )
        })}
      </ol>

      <p className="mt-6 text-sm text-gray-500">
        Fuente: cronograma oficial de la convocatoria publicado por el PRONABEC.{' '}
        <a href={convocatoria.fuente} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#01569D] hover:underline">
          Ver bases y cronograma completo →
        </a>
      </p>
    </section>
  )
}
