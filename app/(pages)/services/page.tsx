import { Section } from '@/components/Section'
import { Accordion } from '@/components/Accordion'

export const metadata = { title: 'Services — Therapy, Groups, Training, PROGENY' }

export default function ServicesPage() {
  return (
    <>
      <Section title="Services" subtitle="Individual counseling, group work, and training.">
        <ul className="list-disc pl-6 space-y-2">
          <li>Individual counseling — 50‑minute sessions; virtual or in‑person by appointment.</li>
          <li>Group work — healing circles, grief, identity, and community care.</li>
          <li>Training & education — workshops for organizations; clinician training; program design.</li>
        </ul>
      </Section>
      <Section title="The PROGENY Model" subtitle="What it is, who it is for, and what to expect.">
        <Accordion items={[
          { q: 'Foundations', a: 'Culturally‑centered, trauma‑informed, community‑aligned. It integrates personal healing and social context.' },
          { q: 'Who it is for', a: 'People and communities seeking care that honors identity, history, and lived experience.' },
          { q: 'Outcomes', a: 'Clarity, coping skills, restored dignity, and actionable steps for healing.' },
        ]} />
      </Section>
    </>
  )
}
