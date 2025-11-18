import Link from 'next/link'
import type { Route } from 'next'
import { clsx } from 'clsx'

type Props = {
  href: Route
  children: React.ReactNode
  variant?: 'primary' | 'outline'
}

export function CTAButton({ href, children, variant = 'primary' }: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex items-center rounded-md px-5 py-3 text-sm focus-visible:outline-none transition-opacity',
        variant === 'primary' ? 'bg-primary text-white hover:opacity-90' : 'border border-primary text-primary hover:bg-primary/5'
      )}
    >
      {children}
    </Link>
  )
}
