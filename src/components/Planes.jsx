import { Fragment } from 'react';
import { motion } from 'motion/react';

// Planes (columnas de la tabla). `destacado` resalta la columna.
const plans = [
  {
    nombre: 'General',
    duracion: 'Grupo de WhatsApp',
    price: 'Gratis',
    cta: 'Unirme gratis',
    link: 'https://chat.whatsapp.com/BuL11vQlfby5XrsixQBnRX',
  },
  {
    nombre: 'Grupal',
    duracion: '1 h · Meet grupal',
    price: 'S/ 9.90',
    regularPrice: 'S/ 19.90',
    descuento: 50,
    cta: 'Reservar',
    link: 'https://wa.link/enn0ns',
    destacado: true,
  },
  {
    nombre: 'Personalizada',
    duracion: '1 h · Meet 1 a 1',
    price: 'S/ 39.90',
    regularPrice: 'S/ 59.90',
    descuento: 33,
    cta: 'Reservar',
    link: 'https://wa.link/lxneu1',
  },
];

// Filas de la tabla: [texto, General, Grupal, Personalizada]
// true = incluye · false = no incluye · texto = se muestra tal cual
const filas = [
  ['Grupo de WhatsApp de postulantes', true, true, true],
  ['Avisos de fechas clave', true, true, true],
  ['Apoyo general', true, true, true],
  ['Asesoría por Google Meet', false, 'Grupal', '1 a 1'],
  ['Orientación de la convocatoria', false, true, true],
  ['Orientación en puntajes y estadísticas', false, true, true],
  ['Etapas de preselección y selección', false, false, true],
  ['Postulación en SIBEC', false, false, true],
  ['Elección de carrera e IES', false, false, true],
  ['Otras dudas del postulante', false, false, true],
  ['Guía del postulante 2027 gratis', false, false, true],
];

const Si = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#10B981]" aria-label="Incluye">
    <path d="m4.5 10.5 3.5 3.5 7.5-8" />
  </svg>
);
const No = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4 text-gray-300" aria-label="No incluye">
    <path d="m5 5 10 10M15 5 5 15" />
  </svg>
);

const Valor = ({ v }) =>
  v === true ? <Si /> : v === false ? <No /> : <span className="text-xs font-bold text-[#0C45B9] sm:text-sm">{v}</span>;

// Fondo de cada celda según la columna (la destacada lleva tinte azul)
const fondoCol = (p) => (p.destacado ? 'bg-[#EEF4FF]' : 'bg-white');

export default function Planes() {
  const totalFilas = filas.length + 2; // encabezado + filas + precios
  const iDest = plans.findIndex((p) => p.destacado);

  return (
    <section id="servicios" className="bg-gradient-to-b from-white via-[#F5FAFF] to-white py-20">
      <div className="mx-auto max-w-6xl px-3 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="px-3 sm:px-0"
        >
          <span className="inline-block rounded-full bg-[#01569D]/10 px-4 py-1 text-sm font-semibold text-[#01569D]">
            Beca18-2027
          </span>
          <h2 className="mt-4 font-varela-round text-3xl font-bold text-gray-900 sm:text-4xl">
            Nuestros <span className="text-[#0AA6FF]">Planes</span>
          </h2>
          <p className="mx-auto mt-3 flex max-w-2xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-gray-600">
            <span><strong className="text-gray-800">David Becas:</strong> Exbecario Beca18 en UPC</span>
            <span className="text-[#F5C002]">●</span>
            <span>+1500 postulantes orientados</span>
            <span className="text-[#F5C002]">●</span>
            <span>+6 años en educación superior</span>
          </p>
        </motion.div>

        {/* Tabla comparativa */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          role="table"
          aria-label="Comparación de planes"
          className="relative mx-auto mt-14 grid max-w-5xl grid-cols-[minmax(0,1.25fr)_repeat(3,minmax(0,1fr))] gap-x-1.5 text-left sm:grid-cols-[minmax(0,1.8fr)_repeat(3,minmax(0,1fr))] sm:gap-x-4"
          style={{ gridTemplateRows: `repeat(${totalFilas}, auto)` }}
        >
          {/* Sombra y borde de la columna destacada */}
          <div
            aria-hidden="true"
            className="pointer-events-none relative z-20 -my-3 rounded-2xl border-2 border-[#0C45B9] shadow-[0_25px_60px_-15px_rgba(12,69,185,0.45)]"
            style={{ gridColumn: iDest + 2, gridRow: `1 / span ${totalFilas}` }}
          />
          {/* Tarjeta de fondo de las otras columnas */}
          {plans.map((p, i) =>
            p.destacado ? null : (
              <div
                key={p.nombre}
                aria-hidden="true"
                className="pointer-events-none rounded-2xl bg-white shadow-[0_10px_30px_-12px_rgba(1,86,157,0.25)]"
                style={{ gridColumn: i + 2, gridRow: `1 / span ${totalFilas}` }}
              />
            )
          )}
          {/* Fondo de la columna de textos */}
          <div
            aria-hidden="true"
            className="pointer-events-none rounded-2xl bg-[#F1F5FB]"
            style={{ gridColumn: 1, gridRow: `2 / span ${filas.length}` }}
          />

          {/* Encabezados */}
          <div role="columnheader" style={{ gridColumn: 1, gridRow: 1 }} />
          {plans.map((p, i) => (
            <div
              key={p.nombre}
              role="columnheader"
              style={{ gridColumn: i + 2, gridRow: 1 }}
              className={`relative flex flex-col items-center justify-end px-1 pb-4 ${p.destacado ? 'z-30' : 'z-10'} pt-6 text-center ${
                p.destacado
                  ? '-mt-3 rounded-t-2xl bg-gradient-to-b from-[#0C45B9] to-[#2563EB] pt-9 text-white'
                  : 'rounded-t-2xl border-t-4 border-[#0AA6FF] text-gray-900'
              }`}
            >
              {p.destacado && (
                <span className="absolute -top-3 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#F5C002] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-900 shadow sm:px-3 sm:text-xs">
                  ★ Recomendado
                </span>
              )}
              <span className={`text-[10px] uppercase tracking-[0.2em] sm:text-xs ${p.destacado ? 'text-white/75' : 'text-gray-400'}`}>
                Plan
              </span>
              <span className="mt-0.5 font-varela-round text-[12px] font-bold leading-tight sm:text-xl">{p.nombre}</span>
              <span className={`mt-1 hidden text-xs sm:block ${p.destacado ? 'text-white/80' : 'text-gray-500'}`}>{p.duracion}</span>
            </div>
          ))}

          {/* Filas */}
          {filas.map(([texto, ...valores], f) => (
            <Fragment key={texto}>
              <div
                role="rowheader"
                style={{ gridColumn: 1, gridRow: f + 2 }}
                className="relative z-10 flex items-center border-b border-white px-2 py-3 text-[12px] leading-snug text-gray-700 sm:px-4 sm:text-sm"
              >
                {texto}
              </div>
              {valores.map((v, c) => (
                <div
                  key={c}
                  role="cell"
                  style={{ gridColumn: c + 2, gridRow: f + 2 }}
                  className={`relative z-10 flex items-center justify-center border-b px-1 py-3 ${
                    plans[c].destacado ? 'border-[#DCE6FB] bg-[#EEF4FF]' : `border-gray-100 ${fondoCol(plans[c])}`
                  }`}
                >
                  <Valor v={v} />
                </div>
              ))}
            </Fragment>
          ))}

          {/* Precios y botones */}
          <div style={{ gridColumn: 1, gridRow: totalFilas }} />
          {plans.map((p, i) => (
            <div
              key={p.nombre}
              style={{ gridColumn: i + 2, gridRow: totalFilas }}
              className={`relative z-10 flex flex-col items-center rounded-b-2xl px-1 pb-5 pt-5 text-center ${
                p.destacado ? '-mb-3 bg-[#EEF4FF] pb-8' : 'bg-white'
              }`}
            >
              <span className="text-[10px] uppercase tracking-wider text-gray-400 sm:text-xs">Precio</span>
              <span className="mt-1 font-varela-round text-base font-bold leading-none text-gray-900 sm:text-3xl">{p.price}</span>
              {p.regularPrice ? (
                <span className="mt-1.5 flex flex-wrap items-center justify-center gap-x-1.5 text-[11px] sm:text-sm">
                  <span className="text-gray-400 line-through">{p.regularPrice}</span>
                  <span className="font-bold text-[#10B981]">-{p.descuento}%</span>
                </span>
              ) : (
                <span className="mt-1.5 text-[11px] text-gray-400 sm:text-sm">Para todos</span>
              )}
              <a
                href={p.link} target="_blank" rel="noopener noreferrer"
                className={`mt-4 w-full max-w-[11rem] rounded-full px-2 py-2 text-[11px] font-bold leading-tight transition hover:-translate-y-0.5 sm:text-sm ${
                  p.destacado
                    ? 'bg-[#F5C002] text-gray-900 shadow-md hover:bg-[#ffd23d]'
                    : 'bg-[#0C45B9] text-white hover:bg-[#01569D]'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </motion.div>

        <p className="mx-auto mt-8 max-w-xl px-3 text-center text-sm text-gray-500">
          Las asesorías se reservan por WhatsApp. Duración: 1 hora por Google Meet.
        </p>
      </div>
    </section>
  );
}
