import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { faqs } from '../../data/landing'
import Reveal from './Reveal'

export default function Faq() {
  const [abierta, setAbierta] = useState(0)

  return (
    <section className="bg-[#F5FAFF]">
      <div className="mx-auto max-w-3xl px-6 py-20 text-left">
        <Reveal>
          <h2 className="text-center font-varela-round text-3xl font-bold text-gray-900 sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const open = abierta === i
            return (
              <div key={f.p} className="rounded-2xl bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setAbierta(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-gray-900"
                >
                  {f.p}
                  <span className={`text-2xl text-[#0AA6FF] transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-600">{f.r}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
