'use client'
import { useEffect, useState } from 'react'

const QUOTES = [
  { quote: 'Her work helped me name harm and reclaim my worth.', by: 'Former client' },
  { quote: 'The training changed how our staff shows up for community.', by: 'Community health org' },
  { quote: 'Dr. Harrison is a pioneer and a generous teacher.', by: 'Colleague' },
]

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % QUOTES.length), 6000)
    return () => clearInterval(id)
  }, [])

  const item = QUOTES[index]
  return (
    <figure className="rounded-2xl bg-cream p-6 border border-neutral-200">
      <blockquote className="text-lg">“{item.quote}”</blockquote>
      <figcaption className="mt-2 text-sm text-neutral-700">— {item.by}</figcaption>
    </figure>
  )
}
