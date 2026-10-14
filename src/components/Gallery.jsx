import Reveal from './Reveal.jsx'
import { site } from '../data/siteConfig.js'

// Hidden until real project photos are added in siteConfig.js
export default function Gallery() {
  if (!site.gallery.length) return null

  return (
    <section id="work" className="bg-ice px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-deep">Our work</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">Recent projects</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.08}>
              <figure className="shine overflow-hidden rounded-3xl bg-white shadow-glass">
                <img src={g.src} alt={g.title} loading="lazy" className="h-64 w-full object-cover" />
                <figcaption className="px-5 py-4 text-sm font-semibold text-ink">{g.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
