import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { perfil, historia, valores } from '../data/sobreMi'
import logo from '../assets/logos_isotipo_p.svg'
import EjemploTag from './landing/EjemploTag'
import Reveal from './landing/Reveal'
import StatsBand from './landing/StatsBand'
import CtaBanner from './landing/CtaBanner'
import SocialMedia from './SocialMedia'

export default function SobreMi() {
  return (
    <main className="font-cairo">
      {/* Presentación */}
      <section className="bg-gradient-to-b from-[#EEF7FF] to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-32 text-left lg:grid-cols-[1fr_1.2fr] lg:pt-36">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mx-auto w-64 sm:w-80"
          >
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-[#0AA6FF]/30 via-[#F5C002]/30 to-transparent blur-2xl" />
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] border-4 border-white bg-[#01569D] shadow-xl">
              {perfil.foto ? (
                <img src={perfil.foto} alt={`Foto de ${perfil.nombre}`} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-white">
                  <img src={logo} alt="" className="h-28 w-28" />
                  <EjemploTag className="!text-xs" />
                  <span className="text-sm opacity-80">Aquí va tu foto</span>
                </div>
              )}
            </div>
            <div className="absolute -bottom-5 -right-4 rounded-2xl bg-white px-4 py-3 shadow-lg">
              <p className="text-xs text-gray-500">Especialista en</p>
              <p className="font-bold text-[#01569D]">Beca 18 · PRONABEC</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <span className="inline-block rounded-full bg-[#01569D]/10 px-4 py-1 text-sm font-semibold text-[#01569D]">
              Sobre mí
            </span>
            <h1 className="mt-5 font-varela-round text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Hola, soy{' '}
              <span className="relative inline-block">
                {perfil.nombre}
                <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true" className="absolute -bottom-2 left-0 h-3 w-full">
                  <path d="M3 14 C 80 4, 200 4, 297 12" fill="none" stroke="#F5C002" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-4 text-lg font-semibold text-[#0AA6FF]">{perfil.rol}</p>
            <div className="mt-4 space-y-3 text-gray-600">
              {perfil.bio.map((p) => <p key={p}>{p}</p>)}
            </div>
            <EjemploTag show={perfil.ejemplo} className="mt-3" />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://wa.link/lxneu1" target="_blank" rel="noopener noreferrer"
                className="rounded-xl bg-[#F5C002] px-7 py-3 text-center font-bold text-gray-900 shadow-md transition hover:-translate-y-0.5"
              >
                Agenda una asesoría
              </a>
              <Link
                to="/preseleccion"
                className="rounded-xl border-2 border-[#01569D] px-7 py-3 text-center font-bold text-[#01569D] transition hover:bg-[#01569D] hover:text-white"
              >
                Calcula tu puntaje
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-1 text-gray-700">
              <span className="mr-2 text-sm">Sígueme:</span>
              <SocialMedia classes="hover:bg-[#01569D] hover:text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      <StatsBand />

      {/* Mi historia */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-left">
        <Reveal>
          <h2 className="text-center font-varela-round text-3xl font-bold text-gray-900 sm:text-4xl">Mi historia</h2>
        </Reveal>
        <ol className="relative mt-12 space-y-10 border-l-2 border-[#0AA6FF]/30 pl-8">
          {historia.map((h, i) => (
            <Reveal key={h.titulo} delay={i * 0.12}>
              <li className="relative">
                <span className="absolute -left-[2.6rem] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#F5C002] ring-4 ring-white" />
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#01569D] px-3 py-0.5 text-xs font-bold text-white">{h.anio}</span>
                  <EjemploTag show={h.ejemplo} />
                </div>
                <h3 className="mt-2 font-varela-round text-xl font-bold text-gray-900">{h.titulo}</h3>
                <p className="mt-1 text-gray-600">{h.texto}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Valores */}
      <section className="bg-[#F5FAFF]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-left">
          <Reveal>
            <h2 className="text-center font-varela-round text-3xl font-bold text-gray-900 sm:text-4xl">
              Cómo trabajamos en <span className="text-[#0AA6FF]">DavidBecas</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valores.map((v, i) => (
              <Reveal key={v.titulo} delay={i * 0.12}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1CC] text-lg font-bold text-[#01569D]">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-varela-round text-xl font-bold text-gray-900">{v.titulo}</h3>
                  <p className="mt-2 text-gray-600">{v.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
