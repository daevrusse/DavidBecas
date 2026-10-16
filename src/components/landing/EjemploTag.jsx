// Etiqueta visible para datos de prueba. Se oculta cuando el dato es real (ejemplo: false).
export default function EjemploTag({ show = true, className = '' }) {
  if (!show) return null
  return (
    <span
      title="Dato de prueba, pendiente de reemplazar por información real"
      className={`inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-800 ${className}`}
    >
      Ejemplo
    </span>
  )
}
