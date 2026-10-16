import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import PhoneMockup from './PhoneMockup'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF7FF] to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-32 text-left lg:grid-cols-2 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block rounded-full bg-[#01569D]/10 px-4 py-1 text-sm font-semibold text-[#01569D]">
            Especialistas en Beca 18 y becas del PRONABEC
          </span>

          <h1 className="mt-5 font-varela-round text-4xl font-bold leading-tight text-gray-900 sm:text-5xl xl:text-[3.4rem]">
            Gana tu Beca 18 de{' '}
            <span className="relative inline-block whitespace-nowrap">
              la forma correcta
              {/* Subrayado dibujado a mano */}
              <svg
                viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true"
                className="absolute -bottom-2 left-0 h-3 w-full"
              >
                <motion.path
                  d="M3 14 C 80 4, 200 4, 297 12"
                  fill="none" stroke="#F5C002" strokeWidth="6" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.6, duration: 0.9, ease: 'easeInOut' }}
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-gray-600">
            Calcula tu puntaje de preselección y selección, elige la IES que más te conviene
            y postula acompañado por expertos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/preseleccion"
              className="rounded-xl bg-[#F5C002] px-7 py-3 text-center font-bold text-gray-900 shadow-md transition hover:-translate-y-0.5 hover:bg-[#e0b000]"
            >
              Calcula tu puntaje
            </Link>
            <a
              href="#servicios"
              className="rounded-xl border-2 border-[#01569D] px-7 py-3 text-center font-bold text-[#01569D] transition hover:bg-[#01569D] hover:text-white"
            >
              Ver asesorías
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  )
}
