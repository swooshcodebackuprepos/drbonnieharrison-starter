import { Section } from '@/components/Section'
import { Timeline } from '@/components/Timeline'

export const metadata = { title: 'About — Dr. Bonnie Harrison, LMHC' }

export default function AboutPage() {
  return (
    <>
      <Section title="About Dr. Bonnie">
        <p className="max-w-3xl">Dr. Bonnie Harrison is a Licensed Mental Health Counselor and educator based in Harlem, NYC. She has more than 35 years of service and leadership. Her work centers dignity, agency, and community.</p>
      </Section>
      <Section title="Timeline">
        <Timeline events={[
          { year: '1990s', title: 'Firsts in the field', detail: 'Roles in HIV/AIDS counseling and LGBTQ+ mental health.' },
          { year: '2000s', title: 'Committee leadership', detail: 'Chaired LGBT mental health committees; trained clinicians.' },
          { year: '2010s', title: 'Community programs', detail: 'Expanded group work and community partnerships.' },
          { year: '2020s', title: 'PROGENY Model', detail: 'Developed and refined a culturally-centered framework.' },
        ]} />
      </Section>
    </>
  )
}
