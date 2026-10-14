import Logo from './Logo.jsx'
import { site } from '../data/siteConfig.js'
import { CATEGORIES } from '../data/services.js'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white px-6 pb-8 pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-inkSoft">
              {site.tagline}. Windows, doors, partitions, railings, facades and mirrors across Maharashtra.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-ink">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-inkSoft">
              {CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
                <li key={c.id}>
                  <a href="#services" className="transition-colors hover:text-steel">{c.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-ink">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-inkSoft">
              <li><a href={`tel:+${site.phoneRaw}`} className="transition-colors hover:text-steel">{site.phoneDisplay}</a></li>
              <li><a href={`mailto:${site.email}`} className="transition-colors hover:text-steel">{site.email}</a></li>
              <li>{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ink/10 pt-6 text-xs text-inkSoft">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
