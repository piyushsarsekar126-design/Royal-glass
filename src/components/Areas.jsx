import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { cities } from '../data/siteConfig.js'

export default function Areas() {
  return (
    <section id="areas" className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-deep">Service area</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            All across Maharashtra
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-inkSoft">
            We serve customers in every part of the state. A few of the cities we work in are below.
            Don't see yours? Just ask.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {cities.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              whileHover={{ y: -3 }}
              className="glass cursor-default rounded-full px-5 py-2.5 text-sm font-medium text-ink"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
