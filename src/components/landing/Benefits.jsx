import iconCalculadora from '../../assets/icon-calculadora.svg'
import iconAsesoria from '../../assets/icon-asesoria.svg'
import iconComunidad from '../../assets/icon-comunidad.svg'
import Reveal from './Reveal'

const items = [
  {
    icon: iconCalculadora,
    titulo: 'Calculadoras de puntaje',
    texto: 'Simula tu puntaje de preselección y selección en minutos y descubre dónde sumar más.',
  },
  {
    icon: iconAsesoria,
    titulo: 'Asesoría personalizada',
    texto: 'Un experto revisa tu caso y te guía en SIBEC, la constancia de ingreso y la elección de IES.',
  },
  {
    icon: iconComunidad,
    titulo: 'Comunidad de postulantes',
    texto: 'Únete a grupos donde compartimos fechas, novedades y resolvemos dudas juntos.',
  },
]

export default function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-left">
      <Reveal className="grid items-end gap-6 md:grid-cols-2">
        <h2 className="font-varela-round text-3xl font-bold text-gray-900 sm:text-4xl">
          Así te ayudamos a <span className="text-[#0AA6FF]">ganar tu beca</span>
        </h2>
        <p className="text-gray-600">
          Herramientas gratuitas y acompañamiento experto para que llegues preparado a cada etapa de Beca 18.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.titulo} delay={i * 0.12}>
            <div className="h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF1CC]">
                <img src={it.icon} alt="" className="h-9 w-9" />
              </div>
              <h3 className="mt-5 font-varela-round text-xl font-bold text-gray-900">{it.titulo}</h3>
              <p className="mt-2 text-gray-600">{it.texto}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
