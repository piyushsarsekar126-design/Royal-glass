// To use a real photo for a service, add  image: '/images/your-photo.jpg'
// (file goes in /public/images). Otherwise a clean icon tile is shown.

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'windows', label: 'Windows' },
  { id: 'doors', label: 'Doors' },
  { id: 'partitions', label: 'Partitions' },
  { id: 'railings', label: 'Railings' },
  { id: 'facade', label: 'Facade & Panels' },
  { id: 'more', label: 'Mirrors & Custom' },
]

export const SERVICES = [
  // Windows
  { name: 'Aluminium Windows', category: 'windows', icon: 'sliding', desc: 'Sliding and casement windows in slim aluminium sections. Strong, rust-free and easy to maintain.' },
  { name: 'UPVC Windows', category: 'windows', icon: 'window', desc: 'Sealed UPVC frames that help keep out dust and noise and add insulation to your rooms.' },
  { name: 'Domal Windows', category: 'windows', icon: 'window', desc: 'Domal section windows with a clean, modern finish for homes, shops and offices.' },
  { name: 'DGO Windows', category: 'windows', icon: 'sliding', desc: 'DGO section windows, fabricated to your size and finish.' },
  { name: '18/50 Section Windows', category: 'windows', icon: 'sliding', desc: '18/50 section aluminium windows, made to your exact measurements.' },

  // Doors
  { name: 'Formica Doors', category: 'doors', icon: 'door', desc: 'Formica-finish doors available in a wide range of colours and textures.' },
  { name: 'Sagwan (Teak) Doors', category: 'doors', icon: 'door', desc: 'Sagwan (teak) wood doors for main entrances and interiors.' },
  { name: 'PVC Doors', category: 'doors', icon: 'door', desc: 'Water-resistant PVC doors, a practical choice for bathrooms and wet areas.' },
  { name: 'Fibre Coat Doors', category: 'doors', icon: 'door', desc: 'Fibre-coated doors with a smooth, durable finish.' },
  { name: 'Fibre Doors', category: 'doors', icon: 'door', desc: 'Fibre doors that stand up to water and termites.' },

  // Partitions
  { name: 'Toughened Glass Partition', category: 'partitions', icon: 'partition', desc: 'Toughened glass partitions for offices, bathrooms and living spaces.' },
  { name: 'Aluminium Partition', category: 'partitions', icon: 'partition', desc: 'Aluminium partitions that divide offices, cabins and rooms neatly.' },

  // Railings
  { name: 'Steel Railing', category: 'railings', icon: 'railing', desc: 'Steel railings for staircases, balconies and terraces.' },
  { name: 'Glass Railing', category: 'railings', icon: 'glassrail', desc: 'Clear glass railings that keep the view open and the space safe.' },

  // Facade & panels
  { name: 'Elevation Glass for Towers', category: 'facade', icon: 'building', desc: 'Glass elevation work for towers and commercial buildings.' },
  { name: 'ACP / Alco Panel', category: 'facade', icon: 'panel', desc: 'Aluminium composite panel cladding for modern building fronts and signage.' },

  // Mirrors & custom
  { name: 'LED Mirrors', category: 'more', icon: 'mirror', desc: 'Backlit LED mirrors for bathrooms, salons, showrooms and homes.' },
  { name: 'Glass & Aluminium Section Service', category: 'more', icon: 'sparkle', desc: 'Need something custom? We handle every type of glass and aluminium section work across Maharashtra.' },
]
