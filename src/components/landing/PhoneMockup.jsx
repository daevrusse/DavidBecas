import { motion } from 'motion/react'
import logo from '../../assets/logos_isotipo_p.svg'

// Celular ilustrativo con una vista previa de la calculadora de preselección.
// Los valores son decorativos (simulación), no un resultado real.
const filas = [
  ['Examen Nacional', '+100'],
  ['SISFOH', '+5'],
  ['Tasa de transición', '+7'],
  ['Priorizables', '+10'],
]

export default function PhoneMockup() {
  const progreso = 72 // % del anillo

  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px]">
      {/* Halo de fondo */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-[#0AA6FF]/25 via-[#F5C002]/20 to-transparent blur-3xl" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative rounded-[2.6rem] border-[10px] border-gray-900 bg-white shadow-[0_30px_80px_-20px_rgba(1,86,157,0.45)]"
      >
        <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-gray-900" />
        <div className="overflow-hidden rounded-[1.9rem] px-4 pb-6 pt-10 text-left">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-7 w-7" />
            <span className="font-varela-round text-sm font-bold text-gray-800">Calculadora Beca 18</span>
          </div>

          <div className="mt-4 flex items-center gap-4 rounded-2xl bg-[#01569D] p-4 text-white">
            <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="4" />
              <circle
                cx="18" cy="18" r="15.9" fill="none" stroke="#F5C002" strokeWidth="4"
                strokeLinecap="round" strokeDasharray={`${progreso} 100`}
              />
            </svg>
            <div>
              <p className="text-[11px] opacity-80">Puntaje estimado</p>
              <p className="text-2xl font-bold leading-none">122</p>
              <p className="text-[11px] opacity-80">de 170 puntos</p>
            </div>
          </div>

          <ul className="mt-4 space-y-2 text-xs">
            {filas.map(([k, v]) => (
              <li key={k} className="flex justify-between rounded-lg bg-gray-50 px-3 py-2">
                <span className="text-gray-600">{k}</span>
                <span className="font-bold text-[#0AA6FF]">{v}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-xl bg-[#F5C002] py-2 text-center text-xs font-bold text-gray-900">
            Calcular puntaje
          </div>
        </div>
      </motion.div>

      {/* Tarjetas flotantes */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute -left-16 top-24 hidden rounded-xl bg-white px-3 py-2 text-left text-xs shadow-lg sm:block"
      >
        <p className="text-gray-500">Quintil 1</p>
        <p className="font-bold text-[#01569D]">+10 puntos</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute -right-16 -bottom-5 hidden rounded-xl bg-white px-3 py-2 text-left text-xs shadow-lg sm:block"
      >
        <p className="text-gray-500">Mejor IES</p>
        <p className="font-bold text-[#01569D]">Compara hasta 3</p>
      </motion.div>
    </div>
  )
}
