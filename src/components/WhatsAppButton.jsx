import { motion } from 'framer-motion'
import { waLink } from '../lib/whatsapp.js'
import { site } from '../data/siteConfig.js'
export default function WhatsAppButton() {
  return (
    <motion.a
            href={waLink(`Hello ${site.name}, I'd like some information.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg viewBox="0 0 24 24" className="relative h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.5 11.5a8.5 8.5 0 01-12.6 7.4L3.5 20.5l1.3-4.3A8.5 8.5 0 1120.5 11.5z" />
        <path d="M9 8.5c.4 2.6 2.4 5 5.6 6l1.3-1.4-1.9-1-.9.7c-.9-.4-1.800-1.300-2.200-2.200l.7-.9-1-1.900z" fill="currentColor" stroke="none" />
      </svg>
    </motion.a>
  )
}
