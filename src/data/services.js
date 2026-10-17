// To use a real photo for a service, add  image: '/images/your-photo.jpeg'
// (file goes in /public/images).
//
// Products without a photo yet are parked at the bottom in PARKED (not shown on the site).
// When the client sends a photo, move the item up into SERVICES and add its image line.

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'windows', label: 'Windows' },
  { id: 'doors', label: 'Doors' },
  { id: 'partitions', label: 'Partitions' },
  { id: 'railings', label: 'Railings' },
  { id: 'facade', label: 'Facade & Panels' },
]

export const SERVICES = [
  // Windows
  { name: 'Aluminium Windows', category: 'windows', icon: 'sliding', image: '/images/aluminium-windows.jpeg', desc: 'Sliding and casement windows in slim aluminium sections. Strong, rust-free and easy to maintain.' },
  { name: 'UPVC Windows', category: 'windows', icon: 'window', image: '/images/upvc-windows.jpeg', desc: 'Sealed UPVC frames that help keep out dust and noise and add insulation to your rooms.' },

  // Doors
  { name: 'Formica Doors', category: 'doors', icon: 'door', image: '/images/formica-door.jpeg', desc: 'Formica-finish doors available in a wide range of colours and textures.' },
  { name: 'Sagwan (Teak) Doors', category: 'doors', icon: 'door', image: '/images/sagwan-door.jpeg', desc: 'Sagwan (teak) wood doors for main entrances and interiors.' },
  { name: 'Fibre Coat Doors', category: 'doors', icon: 'door', image: '/images/fibre-coat-door.jpeg', desc: 'Fibre-coated doors with a smooth, durable finish.' },
  { name: 'Fibre Doors', category: 'doors', icon: 'door', image: '/images/fibre-door.jpeg', desc: 'Fibre doors that stand up to water and termites.' },
  { name: 'French Doors', category: 'doors', icon: 'door', image: '/images/french-door.jpeg', desc: 'French doors with large glass panels that let in light and open up the room.' },

  // Partitions
  { name: 'Aluminium Partition', category: 'partitions', icon: 'partition', image: '/images/aluminium-partition.jpeg', desc: 'Aluminium partitions that divide offices, cabins and rooms neatly.' },

  // Railings
  { name: 'Steel Railing', category: 'railings', icon: 'railing', image: '/images/steel-railing.jpeg', desc: 'Steel railings for staircases, balconies and terraces.' },
  { name: 'Glass Railing', category: 'railings', icon: 'glassrail', image: '/images/glass-railing.jpeg', desc: 'Clear glass railings that keep the view open and the space safe.' },

  // Facade & panels
  { name: 'Elevation Glass for Towers', category: 'facade', icon: 'building', image: '/images/tower-elevation.jpeg', desc: 'Glass elevation work for towers and commercial buildings.' },
  { name: 'ACP / Alco Panel', category: 'facade', icon: 'panel', image: '/images/acp-panel.jpeg', desc: 'Aluminium composite panel cladding for modern building fronts and signage.' },
]

// Not shown on the site until a photo is available. Move back into SERVICES (and add `image`) when ready.
// If you move LED Mirrors / Section Service back, also add this category to CATEGORIES:
//   { id: 'more', label: 'Mirrors & Custom' }
export const PARKED = [
  { name: 'Domal Windows', category: 'windows', icon: 'window', desc: 'Domal section windows with a clean, modern finish for homes, shops and offices.' },
  { name: 'DGO Windows', category: 'windows', icon: 'sliding', desc: 'DGO section windows, fabricated to your size and finish.' },
  { name: '18/50 Section Windows', category: 'windows', icon: 'sliding', desc: '18/50 section aluminium windows, made to your exact measurements.' },
  { name: 'PVC Doors', category: 'doors', icon: 'door', desc: 'Water-resistant PVC doors, a practical choice for bathrooms and wet areas.' },
  { name: 'Toughened Glass Partition', category: 'partitions', icon: 'partition', desc: 'Toughened glass partitions for offices, bathrooms and living spaces.' },
  { name: 'LED Mirrors', category: 'more', icon: 'mirror', desc: 'Backlit LED mirrors for bathrooms, salons, showrooms and homes.' },
  { name: 'Glass & Aluminium Section Service', category: 'more', icon: 'sparkle', desc: 'Need something custom? We handle every type of glass and aluminium section work across Maharashtra.' },
]