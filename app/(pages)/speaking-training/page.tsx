import { Section } from '@/components/Section'
import { CTAButton } from '@/components/CTAButton'

export const metadata = { title: 'Speaking & Training — Culturally-Centered Care & Historic Harm' }

export default function SpeakingPage() {
  return (
    <>
      <Section title="Speaking & training" subtitle="Keynotes, workshops, and clinician education.">
        <ul className="list-disc pl-6 space-y-2">
          <li>Historic harm and healing</li>
          <li>Race‑based trauma</li>
          <li>Culturally‑centered care in practice</li>
          <li>The PROGENY Model</li>
        </ul>
        <div className="mt-6">
          <CTAButton href="/contact">Request Dr. Bonnie for your event</CTAButton>
        </div>
      </Section>
    </>
  )
}
