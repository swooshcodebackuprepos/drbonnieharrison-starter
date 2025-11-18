export function Section({ id, title, subtitle, children }: { id?: string; title?: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-12 sm:py-16">
      <div className="container-max">
        {title && <h2 className="text-2xl sm:text-3xl">{title}</h2>}
        {subtitle && <p className="mt-2 text-neutral-700 max-w-2xl">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
