import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const SHOW_MS = 2600 // how long the loader plays before the panes open
const EXIT_MS = 1000 // how long the panes take to slide away

function Word({ text, delay = 0, className = '' }) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.055, delayChildren: delay } },
  }
  const letter = {
    hidden: { y: '110%' },
    show: { y: '0%', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }
  return (
    <motion.span variants={container} initial="hidden" animate="show" className={`flex ${className}`}>
      {text.split('').map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1">
          <motion.span variants={letter} className="inline-block">
            {ch}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

export default function Loader({ onReveal, onDone }) {
  const reduce = useReducedMotion()
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    // Respect "reduce motion" settings: skip the animation entirely
    if (reduce) {
      onReveal()
      onDone()
      return
    }
    document.body.style.overflow = 'hidden'
    const t1 = setTimeout(() => {
      setLeaving(true)
      onReveal() // site mounts now, so its entrance animations play as the panes open
    }, SHOW_MS)
    const t2 = setTimeout(onDone, SHOW_MS + EXIT_MS)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (reduce) return null

  const paneTransition = { duration: (EXIT_MS - 100) / 1000, ease: [0.76, 0, 0.24, 1] }

  return (
    <div
      role="status"
      aria-label="Loading Royal Glass and Aluminium Enterprises"
      className={`fixed inset-0 z-[100] ${leaving ? 'pointer-events-none' : ''}`}
    >
      {/* Two glass panes that slide apart like doors */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-ice to-white"
        animate={{ x: leaving ? '-100%' : '0%' }}
        transition={paneTransition}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-ice to-white"
        animate={{ x: leaving ? '100%' : '0%' }}
        transition={paneTransition}
      />
      <motion.div
        className="absolute inset-y-0 left-1/2 w-px bg-gold/40"
        animate={{ opacity: leaving ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Centre content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden px-6"
        animate={leaving ? { opacity: 0, scale: 1.08 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-mist/80 blur-3xl" />

        {/* Logo: outline draws itself, then fills with gold, then a light sweep passes over it */}
        <div className="relative overflow-hidden">
          <svg viewBox="0 0 32 32" className="h-24 w-24 sm:h-28 sm:w-28" aria-hidden="true">
            <defs>
              <linearGradient id="loader-gold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#E6C36F" />
                <stop offset="1" stopColor="#B08530" />
              </linearGradient>
            </defs>
            <motion.path
              d="M16 3l11 9-11 17L5 12z"
              fill="url(#loader-gold)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            />
            <motion.path
              d="M16 3l11 9-11 17L5 12z"
              fill="none"
              stroke="#B08530"
              strokeWidth="1"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
            <motion.path
              d="M5 12h22M11 12l5 17 5-17M16 3l-5 9M16 3l5 9"
              stroke="#fff"
              strokeOpacity=".8"
              strokeWidth=".8"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.0, duration: 0.7 }}
            />
          </svg>
          <motion.span
            className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/90 to-transparent"
            style={{ skewX: -12 }}
            initial={{ x: '0%' }}
            animate={{ x: '400%' }}
            transition={{ delay: 1.7, duration: 0.9, ease: 'easeInOut' }}
          />
        </div>

        {/* Shop name */}
        <div className="relative mt-6 flex items-end gap-3 font-display text-3xl font-bold tracking-wide text-ink sm:text-4xl">
          <Word text="ROYAL" delay={1.0} />
          <Word text="GLASS" delay={1.3} className="text-gold-deep" />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="relative mt-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-inkSoft sm:text-xs"
        >
          and Aluminium Enterprises
        </motion.p>

        {/* Progress bar */}
        <div className="relative mt-10 h-[3px] w-48 overflow-hidden rounded-full bg-ink/10 sm:w-60">
          <motion.div
            className="h-full origin-left rounded-full bg-gradient-to-r from-gold to-gold-deep"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 2.3, ease: [0.65, 0, 0.35, 1] }}
          />
        </div>
      </motion.div>
    </div>
  )
}