import { motion } from 'motion/react'
import heroDesktop from '../../assets/img/hero-desktop.webp'
import heroMovil from '../../assets/img/hero-movil.webp'

export default function Hero() {
  return (
    <section className="relative mt-20 overflow-hidden bg-[#0039BE] md:bg-[#0C45B9] xl:flex xl:h-[max(500px,31.25vw)] xl:items-center">
      {/* Banner: diseño vertical en celular, horizontal en tablet y escritorio */}
      <picture>
        <source media="(min-width: 768px)" srcSet={heroDesktop} width="2000" height="625" />
        <img
          src={heroMovil}
          alt="David, asesor educativo de Beca 18"
          width="1024" height="1536"
          fetchpriority="high"
          className="block aspect-[4/5] w-full object-cover object-bottom md:aspect-auto md:h-auto xl:absolute xl:inset-0 xl:h-full xl:object-cover xl:object-right"
        />
      </picture>
      {/* Celular: funde el borde inferior de la imagen con el fondo azul */}
      <div className="pointer-events-none absolute inset-x-0 top-0 aspect-[4/5] bg-gradient-to-b from-transparent from-70% to-[#0039BE] md:hidden" />
      {/* Escritorio: capa suave para que el texto se lea sobre el lado izquierdo */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0A2A8C]/60 via-transparent to-transparent xl:block" />

      <div className="relative mx-auto -mt-28 flex max-w-6xl items-center px-5 pb-10 text-center md:mt-0 md:px-6 md:pb-14 md:pt-10 md:text-left xl:w-full xl:py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-xl text-white md:mx-0"
        >
          <span className="inline-block rounded-full bg-[#F5C002] px-3 py-1 text-xs font-bold text-gray-900 shadow-md sm:px-4 sm:text-sm">
            Especialista en Beca18 y becas del PRONABEC
          </span>

          <h1 className="mt-4 font-varela-round text-[clamp(1.6rem,8vw,2rem)] font-bold leading-tight drop-shadow-md sm:text-5xl md:mt-5">
            Este es el momento de conseguir{' '}
            <span className="relative inline-block whitespace-nowrap">
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

          <p className="mt-5 max-w-lg text-base text-white/90 sm:text-lg md:mt-6">
            Postula acompañado por expertos. Calcula tu puntaje de preselección y selección,
            elige la universidad/instituto/escuela que más te conviene para ganar tu beca.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:flex md:mt-8">
            <a
              href="https://www.pronabec.gob.pe/beca-18/"
              target="_blank" rel="noopener noreferrer"
              className="rounded-xl bg-[#F5C002] px-4 py-3 text-center sm:px-7 font-bold text-gray-900 shadow-md transition hover:-translate-y-0.5 hover:bg-[#ffd23d]"
            >
              Beca 18
            </a>
            <a
              href="#servicios"
              className="rounded-xl border-2 border-white px-4 py-3 text-center sm:px-7 font-bold text-white transition hover:bg-white hover:text-[#0A2A8C]"
            >
              Ver asesorías
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
