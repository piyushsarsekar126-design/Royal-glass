import Reveal from './Reveal.jsx'

const STEPS = [
  { title: 'Tell us what you need', desc: 'Call or message us on WhatsApp with your requirement and location.' },
  { title: 'Measurement & quote', desc: 'We confirm sizes, material and finish, then share a clear quote.' },
  { title: 'Fabrication', desc: 'Your windows, doors or partitions are made to the agreed specification.' },
  { title: 'Installation', desc: 'Everything is fitted neatly at your site and checked before we finish.' },
]

export default function Process() {
  return (
    <section id="process" className="bg-ice px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-deep">How it works</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            From enquiry to installation
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-10 md:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-ink/15 md:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-white font-display font-bold text-gold-deep shadow-glass">
                  {i + 1}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-inkSoft">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
