import { useState } from 'react'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import { site } from '../data/siteConfig.js'
import { SERVICES } from '../data/services.js'
import { waLink } from '../lib/whatsapp.js'

const PHONE_RE = /^[6-9]\d{9}$/

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', service: '', message: '' })
  const [error, setError] = useState('')

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setError('')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const digits = form.phone.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '')
    if (!form.name.trim()) return setError('Please enter your name.')
    if (!PHONE_RE.test(digits)) return setError('Please enter a valid 10-digit mobile number.')

    const lines = [
      `Hello ${site.name}, I'd like a quote.`,
      `Name: ${form.name.trim()}`,
      `Phone: ${digits}`,
      form.city.trim() && `City: ${form.city.trim()}`,
      form.service && `Requirement: ${form.service}`,
      form.message.trim() && `Details: ${form.message.trim()}`,
    ].filter(Boolean)

    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  const field =
    'w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-inkSoft/60 focus:border-steel'

  return (
    <section id="contact" className="bg-gradient-to-b from-ice to-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-deep">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">Get a quote</h2>
          <p className="mt-4 text-inkSoft">
            Tell us what you need. Your details open in WhatsApp, ready to send, so we can reply quickly.
          </p>

          <ul className="mt-8 space-y-5">
            <li>
              <a href={`tel:+${site.phoneRaw}`} className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-steel shadow-glass transition-colors group-hover:bg-ink group-hover:text-white">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-inkSoft">Call us</span>
                  <span className="font-semibold text-ink">{site.phoneDisplay}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-steel shadow-glass transition-colors group-hover:bg-ink group-hover:text-white">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-inkSoft">Email</span>
                  <span className="font-semibold text-ink">{site.email}</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-steel shadow-glass">
                <Icon name="pin" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-inkSoft">Visit us</span>
                <span className="font-semibold text-ink">{site.address}</span>
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">Name</label>
                <input id="name" name="name" value={form.name} onChange={onChange} className={field} placeholder="Your name" autoComplete="name" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">Mobile number</label>
                <input id="phone" name="phone" value={form.phone} onChange={onChange} className={field} placeholder="10-digit number" inputMode="tel" autoComplete="tel" />
              </div>
              <div>
                <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-ink">City</label>
                <input id="city" name="city" value={form.city} onChange={onChange} className={field} placeholder="e.g. Pune" autoComplete="address-level2" />
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">What do you need?</label>
                <select id="service" name="service" value={form.service} onChange={onChange} className={field}>
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.name} value={s.name}>{s.name}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">Details (optional)</label>
              <textarea id="message" name="message" rows="4" value={form.message} onChange={onChange} className={`${field} resize-none`} placeholder="Sizes, quantity, finish, anything that helps us quote" />
            </div>

            {error && (
              <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition-colors hover:bg-steel sm:w-auto"
            >
              Send on WhatsApp
              <Icon name="arrow" className="h-5 w-5" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
