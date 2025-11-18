import { Section } from '@/components/Section'
import { ContactForm } from '@/components/ContactForm'

export const metadata = { title: 'Contact — Book a Consultation' }

export default function ContactPage() {
  return (
    <Section title="Contact">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <p className="text-neutral-800">Call <a className="underline" href="tel:+12126902965">(212) 690‑2965</a> or email <a className="underline" href="mailto:info@drbonnieharrison.com">info@drbonnieharrison.com</a>. Or send a short request below. Please do not include private health details.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <h3 className="font-heading text-lg">Office</h3>
          <p className="mt-2 text-sm">129‑133 W 147th St, Suite 26‑J<br/>New York, NY 10039</p>
          <div className="mt-4" aria-hidden>
            <iframe
              title="Map"
              className="w-full h-64 rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=129-133+W+147th+St+New+York+NY+10039&output=embed"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
