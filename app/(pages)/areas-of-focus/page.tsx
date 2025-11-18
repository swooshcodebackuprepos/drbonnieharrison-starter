import { Section } from '@/components/Section'
import { AREAS } from '@/lib/constants'
import { Card } from '@/components/Card'

export const metadata = { title: 'Areas of Focus — Historic Harm, Race-Based Trauma, LGBTQ+, HIV/AIDS' }

export default function AreasPage() {
  return (
    <Section title="Areas of focus">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {AREAS.map((a)=> (<Card key={a.title} title={a.title}><p>{a.desc}</p></Card>))}
      </div>
    </Section>
  )
}
