import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Script from 'next/script'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Dr. Bonnie Harrison, LMHC — Culturally-Centered Therapy',
  description: 'Trauma-informed, culturally-centered counseling and training. Harlem-based. 35+ years of service.',
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  openGraph: {
    title: 'Dr. Bonnie Harrison, LMHC',
    description: 'Culturally-centered mental health & healing.',
    images: ['/og-image.jpg'],
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Dr. Bonnie Harrison, LMHC',
    image: '/og-image.jpg',
    url: process.env.SITE_URL ?? 'http://localhost:3000',
    telephone: '+1-212-690-2965',
    email: 'info@drbonnieharrison.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '129-133 W 147th St, Suite 26-J',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10039',
      addressCountry: 'US',
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'New York City' },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
      opens: '10:00',
      closes: '19:30',
    }],
    knowsAbout: [
      'Historic harm',
      'Race-based trauma',
      'LGBTQ+ mental health',
      'HIV/AIDS counseling',
      'Trauma-informed care',
    ],
    priceRange: '$$'
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main className="min-h-dvh">{children}</main>
        <Footer />
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </body>
    </html>
  )
}
