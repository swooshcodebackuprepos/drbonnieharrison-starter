'use client'
import Link from 'next/link'
import type { Route } from 'next'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

const nav: { href: Route; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/areas-of-focus', label: 'Areas of Focus' },
  { href: '/speaking-training', label: 'Speaking & Training' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="container-max flex items-center justify-between h-16">
        <Link href="/" className="font-heading text-xl">Dr. Bonnie Harrison</Link>
        <nav aria-label="Primary">
          <ul className="hidden md:flex gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    'text-sm hover:text-primary focus-visible:outline-none',
                    pathname === item.href ? 'text-primary' : 'text-charcoal'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white text-sm hover:opacity-90 focus-visible:outline-none">
            Book a consultation
          </Link>
        </div>
        <div className="md:hidden">
          <a href="tel:+12126902965" className="inline-flex items-center px-3 py-2 rounded-md border border-primary text-primary text-sm">Call</a>
        </div>
      </div>
    </header>
  )
}
