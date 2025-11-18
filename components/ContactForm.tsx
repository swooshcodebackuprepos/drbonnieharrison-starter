'use client'
import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())

    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
      <p className="text-sm text-neutral-700">Please do not share private health details in this form.</p>

      <div>
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input id="name" name="name" required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input id="email" type="email" name="email" required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
        <input id="phone" name="phone" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2" />
      </div>
      <div>
        <label htmlFor="time" className="block text-sm font-medium">Preferred time to reach you</label>
        <input id="time" name="time" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2" />
      </div>

      <div className="flex items-center gap-3">
        <button disabled={status==='submitting'} className="rounded-md bg-forest text-white px-4 py-2 disabled:opacity-50">Send</button>
        {status==='success' && <span role="status" className="text-sm text-forest">Thanks — we will reach out.</span>}
        {status==='error' && <span role="status" className="text-sm text-primary">Something went wrong. Please try again or call.</span>}
      </div>
    </form>
  )
}
