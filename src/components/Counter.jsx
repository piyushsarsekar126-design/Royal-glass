import { useEffect, useRef, useState } from 'react'

// Counts up from 0 to `target` the first time it scrolls into view
export default function Counter({ target, suffix = '' }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const duration = 1100
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          setValue(Math.round(p * target))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{value}{suffix}</span>
}
