export function Timeline({ events }: { events: { year: string; title: string; detail?: string }[] }) {
  return (
    <ol className="relative border-l border-neutral-300 pl-6">
      {events.map((e) => (
        <li key={e.year} className="mb-6">
          <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-gold border border-white" aria-hidden />
          <h3 className="font-heading text-lg">{e.year} — {e.title}</h3>
          {e.detail && <p className="text-sm text-neutral-700 mt-1">{e.detail}</p>}
        </li>
      ))}
    </ol>
  )
}
