export function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      {title && <h3 className="text-lg font-heading mb-2">{title}</h3>}
      <div className="text-sm text-neutral-800">{children}</div>
    </div>
  )
}
