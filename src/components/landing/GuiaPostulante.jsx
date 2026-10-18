import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { guia } from '../../data/landing'
import logo from '../../assets/logos_isotipo_p.svg'
import Reveal from './Reveal'

const Check = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-[#F5C002]">
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3a1 1 0 0 0-1.4-1.4L9 10.6 7.7 9.3a1 1 0 0 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l4-4Z" clipRule="evenodd" />
  </svg>
)

// Portada ilustrativa del libro (hecha con CSS, sin imágenes)
function Libro() {
  return (
    <div className="relative mx-auto w-44 [perspective:1200px] sm:w-64">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative aspect-[3/4] rounded-r-2xl rounded-l-md shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] [transform:rotateY(-14deg)]"
      >
        {/* Lomo */}
        <div className="absolute inset-y-0 left-0 w-4 rounded-l-md bg-gradient-to-r from-black/40 to-transparent" />
        {/* Portada */}
        <div className="flex h-full flex-col overflow-hidden rounded-r-2xl rounded-l-md bg-gradient-to-br from-[#0AA6FF] via-[#01569D] to-[#0A2A8C] p-5 text-left">
          <img src={logo} alt="" className="h-10 w-10" />
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">Guía del postulante</p>
          <p className="mt-1 font-varela-round text-3xl font-bold leading-none text-white">Beca18</p>
          <span className="mt-2 inline-block w-max rounded bg-[#F5C002] px-2 py-0.5 text-sm font-bold text-gray-900">2027</span>
          <div className="mt-auto space-y-1.5">
            <div className="h-1.5 w-3/4 rounded bg-white/25" />
            <div className="h-1.5 w-1/2 rounded bg-white/25" />
            <div className="h-1.5 w-2/3 rounded bg-white/25" />
          </div>
          <p className="mt-4 text-[10px] text-white/70">David Becas</p>
        </div>
      </motion.div>
      {/* Etiquetas flotantes */}
      <span className="absolute -left-4 top-8 rounded-xl bg-white px-3 py-1.5 text-xs font-bold text-[#E11D48] shadow-lg">PDF</span>
      <span className="absolute -right-6 bottom-10 rounded-xl bg-white px-3 py-1.5 text-xs font-bold text-[#10B981] shadow-lg">Siempre actualizada</span>
    </div>
  )
}

// Visor del PDF de vista previa (ventana emergente)
function VisorPdf({ abierto, onCerrar }) {
  useEffect(() => {
    if (!abierto) return
    const esc = (e) => e.key === 'Escape' && onCerrar()
    document.addEventListener('keydown', esc)
    return () => document.removeEventListener('keydown', esc)
  }, [abierto, onCerrar])

  return (
    <AnimatePresence>
      {abierto && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={onCerrar}
          role="dialog" aria-modal="true" aria-label="Vista previa de la guía"
        >
          <motion.div
            initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
            className="relative h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button" onClick={onCerrar} aria-label="Cerrar vista previa"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-900/80 text-xl text-white"
            >
              ×
            </button>
            <iframe src={guia.vistaPrevia} title="Vista previa de la guía" className="h-full w-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function GuiaPostulante() {
  const [visor, setVisor] = useState(false)

  return (
    <section id="guia" className="px-4 py-16 sm:py-20">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#0A1B4D] px-6 py-12 text-left text-white shadow-2xl sm:px-10 lg:px-14 lg:py-16">
          {/* Decoración de fondo */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#0AA6FF]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#2563EB]/30 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <Libro />
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F5C002] px-3 py-1 text-xs font-bold uppercase tracking-wide text-gray-900">
                ✦ Nuevo · Producto digital
              </span>
              <h2 className="mt-4 font-varela-round text-3xl font-bold leading-tight sm:text-4xl">
                {guia.titulo}{' '}
                <span className="bg-gradient-to-r from-[#F5C002] to-[#FFD84D] bg-clip-text text-transparent">{guia.etiqueta}</span>
              </h2>
              <p className="mt-2 text-sm text-white/60">{guia.autor}</p>
              <p className="mt-4 text-lg text-white/85">{guia.subtitulo}</p>

              <ul className="mt-6 space-y-3">
                {guia.beneficios.map(([fuerte, resto]) => (
                  <li key={fuerte} className="flex items-start gap-3 text-white/90">
                    <Check />
                    <span><strong className="text-white">{fuerte}</strong> {resto}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">{guia.precioNota}</p>
                  <div className="mt-1 flex items-end gap-3">
                    <span className="font-varela-round text-4xl font-bold leading-none">{guia.precio}</span>
                    <span className="flex flex-col pb-0.5 text-sm leading-tight">
                      <span className="text-white/50 line-through">{guia.precioRegular}</span>
                      <span className="font-bold text-[#F5C002]">-{guia.descuento}%</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:items-end">
                  <a
                    href={guia.link} target="_blank" rel="noopener noreferrer"
                    className="rounded-xl bg-[#F5C002] px-6 py-3 text-center font-bold text-gray-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ffd23d]"
                  >
                    {guia.cta} →
                  </a>
                  {guia.vistaPrevia && (
                    <button
                      type="button" onClick={() => setVisor(true)}
                      className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
                    >
                      Ver vista previa
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      {guia.vistaPrevia && <VisorPdf abierto={visor} onCerrar={() => setVisor(false)} />}
    </section>
  )
}
