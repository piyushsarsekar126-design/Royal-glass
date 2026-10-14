import { motion } from 'framer-motion'
import Icon from './Icon.jsx'
import Counter from './Counter.jsx'
import { SERVICES, CATEGORIES } from '../data/services.js'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function FloatingChip({ icon, label, className, delay = 0 }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`glass absolute flex items-center gap-3 rounded-2xl px-4 py-3 ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ice text-steel">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span className="text-sm font-semibold text-ink">{label}</span>
    </motion.div>
  )
}

function GlassWindowArt() {
  const draw = (delay) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration: 1.4, delay, ease: 'easeInOut' },
  })
  return (
    <svg viewBox="0 0 240 300" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="pane" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity=".9" />
          <stop offset="1" stopColor="#BBD9EA" stopOpacity=".55" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="200" height="260" rx="14" fill="url(#pane)" />
      <motion.rect x="20" y="20" width="200" height="260" rx="14" fill="none" stroke="#0E2A47" strokeWidth="5" {...draw(0.2)} />
      <motion.path d="M120 20V280" stroke="#0E2A47" strokeWidth="4" fill="none" {...draw(0.8)} />
      <motion.path d="M20 150H220" stroke="#0E2A47" strokeWidth="4" fill="none" {...draw(1.0)} />
      <motion.path d="M52 118L96 64M52 176L108 108" stroke="#C39A45" strokeWidth="4" strokeLinecap="round" fill="none" {...draw(1.4)} />
      <motion.path d="M142 230L196 176" stroke="#C39A45" strokeWidth="4" strokeLinecap="round" fill="none" {...draw(1.6)} />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-6 pb-20 pt-32 lg:pt-36">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ice via-paper to-white" />
      <div className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-mist/70 blur-3xl" />
      <div className="absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-inkSoft"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-deep" />
            </span>
            Serving all of Maharashtra
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.1] text-ink sm:text-5xl lg:text-6xl"
          >
            Premium glass &amp; aluminium for{' '}
            <span className="text-steel">every space.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-inkSoft">
            From aluminium and UPVC windows to toughened glass partitions, railings,
            facades and LED mirrors. Royal Glass brings every glass and aluminium
            service under one roof.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white shadow-lift transition-colors hover:bg-steel"
            >
              Get a Quote
              <Icon name="arrow" className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="rounded-full border border-ink/15 bg-white/60 px-7 py-4 font-semibold text-ink transition-colors hover:border-ink/40"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.dl variants={item} className="mt-14 grid max-w-md grid-cols-3 gap-6">
            <div>
              <dt className="sr-only">Products and services</dt>
              <dd className="font-display text-3xl font-bold text-ink">
                <Counter target={SERVICES.length} suffix="+" />
              </dd>
              <p className="mt-1 text-xs text-inkSoft">Products &amp; services</p>
            </div>
            <div>
              <dt className="sr-only">Categories</dt>
              <dd className="font-display text-3xl font-bold text-ink">
                <Counter target={CATEGORIES.length - 1} />
              </dd>
              <p className="mt-1 text-xs text-inkSoft">Categories</p>
            </div>
            <div>
              <dt className="sr-only">Districts covered</dt>
              <dd className="font-display text-3xl font-bold text-ink">
                <Counter target={36} />
              </dd>
              <p className="mt-1 text-xs text-inkSoft">Districts covered</p>
            </div>
          </motion.dl>
        </motion.div>

        {/* Visual: frosted pane with an animated window drawing + floating chips */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto h-[420px] w-full max-w-md sm:h-[480px]"
        >
          <div className="glass shine absolute inset-x-10 inset-y-0 rounded-[2rem] p-8">
            <GlassWindowArt />
          </div>
          <FloatingChip icon="sliding" label="Aluminium Windows" className="-left-2 top-12 sm:-left-8" />
          <FloatingChip icon="glassrail" label="Glass Railing" className="-right-2 top-1/2 sm:-right-8" delay={1.2} />
          <FloatingChip icon="mirror" label="LED Mirrors" className="bottom-8 left-2 sm:-left-4" delay={2.2} />
        </motion.div>
      </div>
    </section>
  )
}
