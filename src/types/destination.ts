import type { LocalizedText } from './localized'

export interface Destination {
  id: string
  slug: string
  title: LocalizedText
  category: string
  description: LocalizedText
  content: LocalizedText
  location: LocalizedText
  image: string
  gallery: string[]
  facilities: LocalizedText[]
  mapsUrl?: string
  coordinates: { lat: number; lng: number }
}

export interface CultureItem {
  id: string
  title: LocalizedText
  subtitle: LocalizedText
  description: LocalizedText
  image: string
  content: LocalizedText
}

export interface UmkmItem {
  id: string
  name: LocalizedText
  category: string
  description: LocalizedText
  image: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: LocalizedText
  category: string
}

export interface Package {
  id: string
  slug: string
  name: LocalizedText
  tagline: LocalizedText
  category: string
  duration: LocalizedText
  price: number
  priceNote: LocalizedText
  minPerson: number
  maxPerson: number
  description: LocalizedText
  highlights: LocalizedText[]
  itinerary: { time: string; activity: LocalizedText }[]
  facilities: LocalizedText[]
  includes: LocalizedText[]
  excludes: LocalizedText[]
  image: string
  images?: string[]
  whatsapp: string
}
