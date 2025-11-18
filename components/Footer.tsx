'use client'

export function Footer() {
  function stop(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <div className="container-max py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="font-heading text-lg">Dr. Bonnie Harrison, LMHC</div>
          <p className="mt-2">129-133 W 147th St, Suite 26-J<br/>New York, NY 10039</p>
          <p className="mt-2">
            <a href="tel:+12126902965" className="underline">(212) 690-2965</a> ·{' '}
            <a href="mailto:info@drbonnieharrison.com" className="underline">info@drbonnieharrison.com</a>
          </p>
        </div>

        <div>
          <div className="font-heading text-lg">Hours</div>
          <p className="mt-2">Mon–Fri: 10:00–19:30<br/>By appointment</p>
        </div>

        <div>
          <div className="font-heading text-lg">Newsletter</div>
          <p className="mt-2">Get insights on healing and community care.</p>
          <form className="mt-3 flex gap-2" onSubmit={stop}>
            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" type="email" required placeholder="you@example.com"
                   className="flex-1 rounded-md border border-neutral-300 px-3 py-2" />
            <button type="submit" className="rounded-md bg-forest text-white px-3 py-2">Sign up</button>
          </form>
        </div>
      </div>

      <div className="container-max py-6 text-xs text-neutral-600 border-t border-neutral-200">
        © {new Date().getFullYear()} Dr. Bonnie Harrison. All rights reserved.
      </div>
    </footer>
  )
}


