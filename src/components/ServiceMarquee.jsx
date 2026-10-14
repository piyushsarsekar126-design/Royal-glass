import { SERVICES } from '../data/services.js'

export default function ServiceMarquee() {
  const names = SERVICES.map((s) => s.name)
  const row = [...names, ...names] // doubled so the loop is seamless

  return (
    <div className="group border-y border-ink/5 bg-white py-4" aria-hidden="true">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap group-hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <span key={i} className="flex items-center gap-10 text-sm font-semibold text-inkSoft">
              {name}
              <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
