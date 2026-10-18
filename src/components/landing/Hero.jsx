import { motion } from 'motion/react'
import heroAsesoria from '../../assets/img/hero-asesoria.webp'

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
            Especialista en Beca18 y becas del PRONABEC
          </span>

          <h1 className="mt-5 font-varela-round text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Este es el momento de conseguir{' '}
            <span className="relative inline-block sm:whitespace-nowrap">
              la beca de tus sueños
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
            Postula acompañado por expertos. Calcula tu puntaje de preselección y selección,
            elige la universidad/instituto/escuela que más te conviene para ganar tu beca.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.pronabec.gob.pe/beca-18/"
              target="_blank" rel="noopener noreferrer"
              className="rounded-xl bg-[#F5C002] px-7 py-3 text-center font-bold text-gray-900 shadow-md transition hover:-translate-y-0.5 hover:bg-[#e0b000]"
            >
              Beca 18
            </a>
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
          <div className="relative mx-auto w-full max-w-xl">
            {/* Halo de fondo */}
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#0AA6FF]/30 via-[#F5C002]/25 to-transparent blur-2xl" />
            <img
              src={heroAsesoria}
              alt="David Becas dando una asesoría grupal de Beca 18 por Google Meet"
              width="1200" height="675"
              fetchpriority="high"
              className="aspect-video w-full rounded-3xl border-4 border-white object-cover shadow-[0_30px_80px_-20px_rgba(1,86,157,0.45)]"
            />
            {/* Tarjetas flotantes */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 left-4 rounded-2xl bg-white px-4 py-3 text-left shadow-lg sm:-left-6"
            >
              <p className="text-xs text-gray-500">Asesorías en vivo</p>
              <p className="font-bold text-[#01569D]">Google Meet · 1 h</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -top-5 right-4 rounded-2xl bg-[#F5C002] px-4 py-2 text-left shadow-lg sm:-right-4"
            >
              <p className="text-sm font-bold text-gray-900">+1500 postulantes orientados</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
