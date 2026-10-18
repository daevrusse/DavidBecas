import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'motion/react'
import { convocatoria } from '../../data/landing'

// Contador animado: sube hasta el número de becas cuando entra en pantalla.
function Contador({ hasta, desde = 1000, duracion = 2 }) {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: '-40px' })
  const [valor, setValor] = useState(desde)

  useEffect(() => {
    if (!visible) return
    const controls = animate(desde, hasta, {
      duration: duracion,
      ease: 'easeOut',
      onUpdate: (v) => setValor(Math.round(v)),
    })
    return () => controls.stop()
  }, [visible, desde, hasta, duracion])

  return <span ref={ref}>{valor}</span>
}

export default function Convocatoria() {
  return (
    <section className="bg-[#EEF7FF]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-12 text-center md:flex-row md:text-left">
        <div>
          <h2 className="font-varela-round text-3xl font-bold text-[#01569D] sm:text-4xl">{convocatoria.titulo}</h2>
          <p className="mt-2 text-gray-600">Beca 18 y Becas Especiales del PRONABEC</p>
        </div>
        <div className="text-center">
          <p className="font-varela-round text-6xl font-bold leading-none text-[#0AA6FF] sm:text-7xl">
            <Contador hasta={convocatoria.becas} />
          </p>
          <p className="mt-1 text-xl font-semibold text-gray-700">{convocatoria.etiqueta}</p>
        </div>
      </div>
    </section>
  )
}
