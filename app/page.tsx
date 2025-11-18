import Image from 'next/image'
import { CTAButton } from '@/components/CTAButton'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import { AREAS } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white">
        <Image src="/hero.jpg" alt="Dr. Harrison" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" priority />
        <div className="relative z-10 bg-white/70 backdrop-blur py-24">
          <div className="container-max">
            <h1 className="text-4xl sm:text-5xl max-w-3xl">Pioneering culturally-centered mental health & healing</h1>
            <p className="mt-4 max-w-2xl text-neutral-800">35+ years serving Black communities, LGBTQ+ people, and families. Harlem-rooted care.</p>
            <div className="mt-8 flex gap-4">
              <CTAButton href="/contact">Schedule consultation</CTAButton>
              <CTAButton href="/services" variant="outline">Learn the PROGENY Model</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <Section title="Her impact" subtitle="Firsts in the field • 35+ years of service • Harlem‑rooted care • Training & speaking">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {['Firsts in the field','35+ years of service','Harlem‑rooted care','Training & speaking'].map((t)=> (
            <Card key={t} title={t}><p>Learn more in About.</p></Card>
          ))}
        </div>
      </Section>

      <Section title="The PROGENY Model" subtitle="A counseling framework for personal and social transformation.">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <Image src="/bonnie-speaking.jpg" alt="Dr. Harrison speaking" width={900} height={700} className="rounded-2xl border" />
          <div>
            <p className="text-neutral-800">Culturally-centered. Trauma-informed. Community-aligned. Built to help people heal with dignity and agency.</p>
            <div className="mt-6 flex gap-4">
              <CTAButton href="/services">See how it works</CTAButton>
              <CTAButton href="/contact" variant="outline">Talk with us</CTAButton>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Areas of focus">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a)=> (
            <Card key={a.title} title={a.title}><p>{a.desc}</p></Card>
          ))}
        </div>
      </Section>

      <Section title="What people say">
        <TestimonialCarousel />
      </Section>

      <Section>
        <div className="rounded-2xl bg-forest text-white p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl">The first step to healing is a call.</h2>
            <p className="text-white/90">We are ready when you are.</p>
          </div>
          <div className="flex gap-4">
            <a className="rounded-md bg-white text-forest px-5 py-3" href="/contact">Book a consultation</a>
            <a className="rounded-md border border-white px-5 py-3" href="tel:+12126902965">Call now</a>
          </div>
        </div>
      </Section>
    </>
  )
}
