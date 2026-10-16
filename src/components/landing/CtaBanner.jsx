import Reveal from './Reveal'

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#01569D] to-[#0AA6FF] px-8 py-12 text-left text-white md:flex-row md:px-14">
          <div>
            <h2 className="font-varela-round text-3xl font-bold">¿Listo para postular a Beca 18?</h2>
            <p className="mt-2 opacity-90">Únete gratis a nuestra comunidad y no te pierdas ninguna fecha.</p>
          </div>
          <a
            href="https://chat.whatsapp.com/BuL11vQlfby5XrsixQBnRX"
            target="_blank" rel="noopener noreferrer"
            className="shrink-0 rounded-xl bg-[#F5C002] px-7 py-3 font-bold text-gray-900 shadow-md transition hover:-translate-y-0.5"
          >
            Unirme al grupo gratis
          </a>
        </div>
      </Reveal>
    </section>
  )
}
