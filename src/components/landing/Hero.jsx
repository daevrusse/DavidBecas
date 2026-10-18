import { motion } from 'motion/react'
import heroBg from '../../assets/img/hero-bg.webp'

export default function Hero() {
  return (
    <section className="relative mt-20 overflow-hidden bg-[#0A2A8C]">
      {/* Imagen de fondo */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width="1920" height="768"
        fetchpriority="high"
        className="block h-72 w-full object-cover object-[80%_top] sm:h-96 lg:absolute lg:inset-0 lg:h-full lg:object-[70%_top]"
      />
      {/* Capa para que el texto se lea bien sobre la imagen (escritorio) */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0A2A8C]/80 via-[#0A2A8C]/40 to-transparent lg:block" />
      {/* Celular: transición suave de la foto al fondo azul */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-transparent via-transparent to-[#0A2A8C] sm:h-96 lg:hidden" />

      <div className="relative mx-auto flex max-w-6xl items-center px-6 pb-14 pt-6 text-left lg:min-h-[600px] lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-xl text-white"
        >
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-semibold text-white backdrop-blur-sm">
            Especialista en Beca18 y becas del PRONABEC
          </span>

          <h1 className="mt-5 font-varela-round text-4xl font-bold leading-tight sm:text-5xl">
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

          <p className="mt-6 max-w-lg text-lg text-white/85">
            Postula acompañado por expertos. Calcula tu puntaje de preselección y selección,
            elige la universidad/instituto/escuela que más te conviene para ganar tu beca.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.pronabec.gob.pe/beca-18/"
              target="_blank" rel="noopener noreferrer"
              className="rounded-xl bg-[#F5C002] px-7 py-3 text-center font-bold text-gray-900 shadow-md transition hover:-translate-y-0.5 hover:bg-[#ffd23d]"
            >
              Beca 18
            </a>
            <a
              href="#servicios"
              className="rounded-xl border-2 border-white px-7 py-3 text-center font-bold text-white transition hover:bg-white hover:text-[#0A2A8C]"
            >
              Ver asesorías
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
