'use client'
import { useState } from 'react'

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-neutral-200 border border-neutral-200 rounded-2xl">
      {items.map((it, i) => (
        <details key={i} open={open === i} onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open ? i : null)}>
          <summary className="cursor-pointer list-none p-4 font-medium focus-visible:outline-none">{it.q}</summary>
          <div className="p-4 pt-0 text-sm text-neutral-700">{it.a}</div>
        </details>
      ))}
    </div>
  )
}
