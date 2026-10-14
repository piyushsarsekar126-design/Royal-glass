import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'

const POINTS = [
  'Windows, doors, partitions, railings, facades and mirrors',
  'Homes, offices, shops and commercial towers',
  'Service available across all of Maharashtra',
]

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto h-80 max-w-md sm:h-96">
            <div className="glass shine absolute left-0 top-6 h-64 w-44 rounded-3xl sm:h-72 sm:w-52" />
            <div className="glass shine absolute right-0 top-0 h-64 w-44 rounded-3xl bg-ice/80 sm:h-72 sm:w-52" />
            <div className="absolute inset-x-6 bottom-0 flex items-center gap-3 rounded-2xl bg-ink px-5 py-4 text-white shadow-lift">
              <Icon name="sparkle" className="h-6 w-6 text-gold" />
              <p className="text-sm font-medium">One shop for all your glass &amp; aluminium needs</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-deep">About Royal Glass</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Everything in glass and aluminium, under one roof
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-inkSoft">
              Royal Glass supplies and services a complete range of glass and aluminium
              products, from everyday windows and doors to partitions, railings, facade
              work and LED mirrors. Tell us what you need and we'll help you choose the
              right product and finish.
            </p>
          </Reveal>
          <ul className="mt-7 space-y-3">
            {POINTS.map((p, i) => (
              <Reveal key={p} delay={0.15 + i * 0.08}>
                <li className="flex items-start gap-3 text-ink">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-ice text-steel">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {p}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
