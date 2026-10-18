import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { perfil, historiaTexto, datoCurioso, camino, redes, valores } from '../data/sobreMi'
import Reveal from './landing/Reveal'
import StatsBand from './landing/StatsBand'
import CtaBanner from './landing/CtaBanner'
import SocialMedia from './SocialMedia'

// Convierte **texto** en <strong>
const conNegrita = (t) =>
  t.split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
    p.startsWith('**') ? <strong key={i} className="font-semibold text-gray-900">{p.slice(2, -2)}</strong> : p
  )

const IconoRed = ({ nombre }) =>
  nombre === 'YouTube' ? (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.8 15.1V8.9l5.4 3.1-5.4 3.1Z" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.4a2.9 2.9 0 1 1-2-2.7V9.2a6.3 6.3 0 1 0 5.4 6.2V8.6a8.1 8.1 0 0 0 4.7 1.5V6.7h-.9Z" /></svg>
  )

export default function SobreMi() {
  return (
    <main className="font-cairo">
      {/* Presentación */}
      <section className="overflow-hidden bg-gradient-to-b from-[#EEF7FF] to-[#EEF7FF]/40">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-32 text-left lg:grid-cols-[0.9fr_1.1fr] lg:pt-36">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mx-auto w-72 sm:w-96"
          >
            <div className="absolute -inset-8 -z-0 rounded-[3rem] bg-gradient-to-br from-[#0AA6FF]/35 via-[#F5C002]/30 to-transparent blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-[#01569D] shadow-2xl">
              <img src={perfil.foto} alt={`Foto de ${perfil.nombre}`} className="h-full w-full object-cover object-top" />
            </div>
            <motion.div
              animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-4 top-10 rounded-2xl bg-white px-4 py-2.5 shadow-lg sm:-left-10"
            >
              <p className="text-[11px] uppercase tracking-wide text-gray-500">Exbecario</p>
              <p className="font-bold text-[#01569D]">Beca 18 · UPC</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-2xl bg-[#F5C002] px-4 py-2.5 shadow-lg sm:-right-8"
            >
              <span className="text-xl" aria-hidden="true">★</span>
              <span className="font-bold leading-tight text-gray-900">Embajador<br className="sm:hidden" /> PRONABEC</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <span className="inline-block rounded-full bg-[#F5C002] px-4 py-1 text-sm font-bold text-gray-900">Sobre mí</span>
            <h1 className="mt-5 font-varela-round text-4xl font-bold leading-tight text-gray-900 sm:text-6xl">
              Hola, soy{' '}
              <span className="relative inline-block text-[#0C45B9]">
                {perfil.nombre}
                <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true" className="absolute -bottom-2 left-0 h-3 w-full">
                  <path d="M3 14 C 80 4, 200 4, 297 12" fill="none" stroke="#F5C002" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-5 text-lg font-semibold text-[#2563EB]">{perfil.rol}</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">{perfil.intro}</p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:flex sm:items-center">
              <a
                href="#mi-historia"
                className="rounded-xl bg-[#0C45B9] px-7 py-3 text-center font-bold text-white shadow-md transition hover:-translate-y-0.5"
              >
                Conoce mi historia
              </a>
              <a
                href="https://wa.link/lxneu1" target="_blank" rel="noopener noreferrer"
                className="rounded-xl border-2 border-[#0C45B9] px-7 py-3 text-center font-bold text-[#0C45B9] transition hover:bg-[#0C45B9] hover:text-white"
              >
                Agenda una asesoría
              </a>
            </div>
            <div className="mt-6 flex items-center gap-1 text-gray-700">
              <span className="mr-2 text-sm">Sígueme:</span>
              <SocialMedia classes="hover:bg-[#0C45B9] hover:text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      <StatsBand fondo="bg-white" />

      {/* Mi historia: lectura tranquila */}
      <section id="mi-historia" className="scroll-mt-24 px-6 py-20 text-left">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2563EB]">Mi historia</p>
            <h2 className="mt-2 font-varela-round text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              De postulante a acompañar a <span className="text-[#0C45B9]">+1500 jóvenes</span>
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-600">
            {historiaTexto.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}><p>{conNegrita(p)}</p></Reveal>
            ))}
          </div>

          {/* Dato curioso */}
          <Reveal>
            <figure className="mt-12 flex flex-col gap-5 rounded-3xl border border-[#F5C002]/40 bg-[#FFF7E0] p-7 sm:flex-row sm:items-center sm:gap-8 sm:p-9">
              <div className="shrink-0 text-center sm:w-32">
                <p className="font-varela-round text-5xl font-bold leading-none text-[#0C45B9]">{datoCurioso.numero}</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-wider text-gray-700">{datoCurioso.etiqueta}</p>
              </div>
              <div className="sm:border-l sm:border-[#F5C002]/60 sm:pl-8">
                <p className="text-sm font-bold uppercase tracking-wider text-[#B88A00]">Dato curioso</p>
                <blockquote className="mt-2 text-lg leading-relaxed text-gray-800">“{datoCurioso.texto}”</blockquote>
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Mi camino */}
      <section className="bg-[#F5FAFF] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-varela-round text-3xl font-bold text-gray-900 sm:text-4xl">Mi camino a la beca</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">Cuatro momentos que me trajeron hasta aquí.</p>
          </Reveal>
          <ol className="mt-12 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
            {camino.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 0.1}>
                <li className="relative h-full rounded-2xl bg-white p-6 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0C45B9] font-bold text-white">{c.paso}</span>
                  <h3 className="mt-4 font-varela-round text-lg font-bold text-gray-900">{c.titulo}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{c.texto}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Redes */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center font-varela-round text-3xl font-bold text-gray-900 sm:text-4xl">Sígueme en redes</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">Comparto información resumida de las becas del PRONABEC.</p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {redes.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 0.1}>
                <a
                  href={r.href} target="_blank" rel="noopener noreferrer"
                  className="group flex h-full items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${r.color}`}><IconoRed nombre={r.nombre} /></span>
                  <span>
                    <span className="block font-varela-round text-lg font-bold text-gray-900">{r.nombre} <span className="font-cairo text-base font-semibold text-gray-500">{r.usuario}</span></span>
                    <span className="mt-1 block text-gray-600">{r.texto}</span>
                    <span className="mt-3 inline-block font-semibold text-[#0C45B9] group-hover:underline">Ver canal →</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-[#F5FAFF]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-left">
          <Reveal>
            <h2 className="text-center font-varela-round text-3xl font-bold text-gray-900 sm:text-4xl">
              Cómo trabajamos en <span className="text-[#0C45B9]">DavidBecas</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valores.map((v, i) => (
              <Reveal key={v.titulo} delay={i * 0.12}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1CC] text-lg font-bold text-[#0C45B9]">{i + 1}</span>
                  <h3 className="mt-4 font-varela-round text-xl font-bold text-gray-900">{v.titulo}</h3>
                  <p className="mt-2 text-gray-600">{v.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center">
        <Link to="/preseleccion" className="font-semibold text-[#0C45B9] hover:underline">¿Quieres saber tu puntaje? Usa la calculadora →</Link>
      </div>
      <CtaBanner />
    </main>
  )
}
