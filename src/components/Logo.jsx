export default function Logo({ className = '' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
        <defs>
          <linearGradient id="rg-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E6C36F" />
            <stop offset="1" stopColor="#B08530" />
          </linearGradient>
        </defs>
        <path d="M16 3l11 9-11 17L5 12z" fill="url(#rg-gold)" />
        <path d="M5 12h22M11 12l5 17 5-17M16 3l-5 9M16 3l5 9" stroke="#fff" strokeOpacity=".75" strokeWidth="1" fill="none" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-wide text-ink">
          ROYAL <span className="text-gold-deep">GLASS</span>
        </span>
        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-inkSoft">
          and Aluminium Enterprises
        </span>
      </span>
    </span>
  )
}