 import Reveal from './Reveal.jsx'

const REASONS = [
  { title: 'Wide range, one shop', desc: 'Windows, doors, partitions, railings, panels and mirrors, so you don\'t need to run between suppliers.' },
  { title: 'Made to your size', desc: 'Share your measurements and finish, and the work is fabricated to fit your space.' },
  { title: 'All across Maharashtra', desc: 'Residential, commercial and industrial projects, in cities and towns across the state.' },
  { title: 'Many materials', desc: 'Aluminium, UPVC, glass, steel, PVC, fibre, Formica and teak, so you can pick what suits your budget.' },
  { title: 'Clear communication', desc: 'Tell us what you need on WhatsApp or a call and get a straight answer and a quote.' },
  { title: 'Homes to towers', desc: 'From a single bathroom door to elevation glass for a tower, we handle projects of every size.' },
]

export default function WhyChooseUs() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-deep">Why Royal Glass</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Why customers choose us
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.08}>
              <div className="border-t border-ink/10 pt-6">
                <span className="font-display text-4xl font-bold text-gold/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-inkSoft">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
