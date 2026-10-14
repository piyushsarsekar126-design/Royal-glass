const PATHS = {
  window: (<><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M12 3v18M4 12h16" /></>),
  sliding: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M12 5v14M8 12h1.5M14.5 12H16" /></>),
  door: (<><rect x="6" y="2.5" width="12" height="19" rx="1.5" /><circle cx="15" cy="12" r=".9" fill="currentColor" /><path d="M9 6.5h6M9 17.5h6" /></>),
  partition: (<><rect x="3" y="4" width="8" height="16" rx="1.5" /><rect x="13" y="4" width="8" height="16" rx="1.5" /><path d="M6 9l3-2M16 11l3-2" /></>),
  railing: (<path d="M3 7h18M3 18h18M6 7v11M10 7v11M14 7v11M18 7v11" />),
  glassrail: (<><rect x="3" y="7" width="18" height="11" rx="1.5" /><path d="M3 7h18M8 18l5-11M13 18l5-11" /></>),
  building: (<><rect x="5" y="3" width="14" height="18" rx="1.5" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" /></>),
  panel: (<><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /></>),
  mirror: (<><rect x="5" y="2.5" width="14" height="19" rx="7" /><path d="M9.5 8.5l3-2.5" /></>),
  sparkle: (<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />),
  phone: (<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>),
  pin: (<><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>),
  arrow: (<path d="M5 12h14M13 6l6 6-6 6" />),
  check: (<path d="M5 12l4 4 10-10" />),
  menu: (<path d="M4 7h16M4 12h16M4 17h16" />),
  close: (<path d="M6 6l12 12M18 6L6 18" />),
}

export default function Icon({ name, className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name] || PATHS.sparkle}
    </svg>
  )
}
