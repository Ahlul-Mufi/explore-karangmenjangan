export interface Destination {
  id: string
  slug: string
  title: string
  category: string
  description: string
  content: string
  location: string
  image: string
  gallery: string[]
  facilities: string[]
  mapsUrl?: string
}

export interface CultureItem {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  content: string
}

export interface UmkmItem {
  id: string
  name: string
  category: string
  description: string
  image: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: string
}

export interface Package {
  id: string
  slug: string
  name: string
  tagline: string
  category: string
  duration: string
  price: number
  priceNote: string
  minPerson: number
  maxPerson: number
  description: string
  highlights: string[]
  itinerary: { time: string; activity: string }[]
  facilities: string[]
  includes: string[]
  excludes: string[]
  image: string
  whatsapp: string
}
