import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import { CATEGORIES, SERVICES } from '../data/services.js'
import { enquiryLink } from '../lib/whatsapp.js'

function ServiceCard({ service, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
      whileHover={{ y: -6 }}
      className="glass shine group flex flex-col rounded-3xl p-6 transition-shadow duration-300 hover:shadow-lift"
    >
      {service.category === 'doors' && (
        <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
          Available
        </span>
      )}
      {service.image ? (
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="mb-5 h-56 w-full rounded-2xl object-cover"
        />
      ) : (
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ice to-mist text-steel transition-colors group-hover:from-ink group-hover:to-steel group-hover:text-white">
          <Icon name={service.icon} className="h-7 w-7" />
        </div>
      )}
      <h3 className="font-display text-lg font-semibold text-ink">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-inkSoft">{service.desc}</p>
      <a
        href={enquiryLink(service.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-steel transition-all group-hover:gap-3"
      >
        Enquire on WhatsApp
        <Icon name="arrow" className="h-4 w-4" />
      </a>
    </motion.article>
  )
}

export default function Services() {
  const [active, setActive] = useState('all')
  const visible = active === 'all' ? SERVICES : SERVICES.filter((s) => s.category === active)

  return (
    <section id="services" className="bg-gradient-to-b from-white to-ice px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-deep">Our Services</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Everything we make and install
          </h2>
          <p className="mt-4 text-inkSoft">
            Browse by category, or send us your requirement on WhatsApp and we'll get back to you with a quote.
          </p>
        </Reveal>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Service categories">
          {CATEGORIES.map((c) => {
            const isActive = active === c.id
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(c.id)}
                className="relative flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                {isActive && (
                  <motion.span
                    layoutId="service-tab"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className={`relative z-10 transition-colors ${isActive ? 'text-white' : 'text-ink hover:text-steel'}`}>
                  {c.label}
                </span>
              </button>
            )
          })}
        </div>

        {active === 'doors' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex items-center gap-4 rounded-2xl border border-gold/40 bg-white px-5 py-4 shadow-glass"
          >
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
              <Icon name="check" className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display font-semibold text-ink">Doors are available</p>
              <p className="text-sm text-inkSoft">Formica, Sagwan (teak), PVC, Fibre Coat and Fibre doors.</p>
            </div>
          </motion.div>
        )}

        <div key={active} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s, i) => (
            <ServiceCard key={s.name} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}