import type { Package } from '../types'
import adventure1 from '../assets/adventure 1.jpeg'
import adventure2 from '../assets/Adventure 2.jpeg'
import adventure3 from '../assets/Adventure 3.jpeg'
import fulday1 from '../assets/fulday 1.jpeg'
import fulday2 from '../assets/fulday 2.jpeg'
import fulday4 from '../assets/fulday 4.jpeg'
import kuliner1 from '../assets/kuliner 1.jpeg'
import kuliner2 from '../assets/kuliner 2.jpeg'
import kuliner3 from '../assets/kuliner 3.jpeg'
import familyFun1 from '../assets/family fun.jpeg'
import familyFun2 from '../assets/family fun 2.jpeg'
import familyFun3 from '../assets/family fun 3.jpeg'

export const packages: Package[] = [
  {
    id: '1',
    slug: 'paket-sehari-penuh',
    name: 'Karangmenjangan Full Day',
    tagline: 'Explore all the beauty of Karangmenjangan in one full day',
    category: 'Full Day',
    duration: '1 day (8-10 hours)',
    price: 250000,
    priceNote: 'per person (min. 5 people)',
    minPerson: 5,
    maxPerson: 20,
    description: 'A comprehensive tour package that takes you to all of Karangmenjangan\'s top destinations. From the beach and river exploration to cultural experiences and local cuisine, this package is perfect for families, communities, or companies who want to enjoy natural beauty alongside local wisdom.',
    highlights: [
      'Pantai Watu Godeg with views of the Indian Ocean',
      'River exploration to the estuary with a local guide',
      'Visit to the TPI and interaction with fishermen',
      'Fresh fish cuisine from the fishermen\'s catch',
      'Sunset photo session at the estuary',
    ],
    itinerary: [
      { time: '06:00', activity: 'Pickup at the meeting point' },
      { time: '07:00', activity: 'Journey to Karangmenjangan, local breakfast' },
      { time: '08:30', activity: 'Karangmenjangan river exploration' },
      { time: '11:00', activity: 'Visit to the TPI, interaction with fishermen' },
      { time: '12:00', activity: 'Fresh fish lunch at a seaside eatery' },
      { time: '13:30', activity: 'Exploring Pantai Watu Godeg' },
      { time: '15:00', activity: 'Visit to the dragon fruit orchard' },
      { time: '16:30', activity: 'Enjoying the sunset at the estuary' },
      { time: '18:00', activity: 'Return journey' },
    ],
    facilities: ['Local transportation', 'Tour guide', 'Entry tickets', 'Mineral water'],
    includes: ['Lunch', 'Snacks & mineral water', 'Local guide', 'Local transportation'],
    excludes: ['Transportation from outside the city', 'Meals other than those listed', 'Travel insurance', 'Guide gratuities'],
    image: '/images/paket-fullday.jpg',
    images: [fulday1, fulday2, fulday4],
    whatsapp: '6285234791369',
  },
  {
    id: '2',
    slug: 'paket-adventure',
    name: 'Adventure Karangmenjangan',
    tagline: 'An exciting adventure exploring the river down to the estuary',
    category: 'Adventure',
    duration: '1 day (6-8 hours)',
    price: 200000,
    priceNote: 'per person (min. 4 people)',
    minPerson: 4,
    maxPerson: 15,
    description: 'An adventure package for those seeking an extreme and challenging experience. Explore the river on a traditional boat, discover the estuary area, and trek along the riverbanks. Enjoy an authentic nature adventure sensation in Karangmenjangan.',
    highlights: [
      'Exploring the river on a traditional boat',
      'Trekking along the riverbanks',
      'Exploring the estuary and coastal area',
      'Bonfire and fishermen\'s stories at night',
    ],
    itinerary: [
      { time: '06:00', activity: 'Pickup at the meeting point' },
      { time: '07:30', activity: 'Preparation and safety briefing' },
      { time: '08:00', activity: 'Starting the river exploration by boat' },
      { time: '10:30', activity: 'Trekking along the riverbanks' },
      { time: '12:00', activity: 'Lunch by the estuary' },
      { time: '13:00', activity: 'Exploring the estuary and coastal area' },
      { time: '17:00', activity: 'Bonfire and fishermen\'s stories' },
      { time: '18:30', activity: 'Return journey' },
    ],
    facilities: ['Traditional boat', 'Tour guide', 'Trekking equipment', 'Mineral water'],
    includes: ['Lunch', 'Snorkeling gear', 'Local guide', 'Safety equipment'],
    excludes: ['Transportation from outside the city', 'Meals other than those listed', 'Travel insurance', 'Guide gratuities'],
    image: '/images/paket-adventure.jpg',
    images: [adventure1, adventure2, adventure3],
    whatsapp: '6285234791369',
  },
  {
    id: '3',
    slug: 'paket-kuliner-nelayan',
    name: 'Fisherman\'s Culinary',
    tagline: 'Taste the flavors of the sea straight from Karangmenjangan\'s fishermen',
    category: 'Culinary',
    duration: 'Half day (4-5 hours)',
    price: 150000,
    priceNote: 'per person (min. 6 people)',
    minPerson: 6,
    maxPerson: 25,
    description: 'A culinary tour package that lets you experience the flavors of Karangmenjangan\'s sea directly. From watching the fish auction at the TPI, buying fresh fish, to cooking together with local residents. Enjoy fresh seafood dishes prepared with time-honored recipes.',
    highlights: [
      'Visit to the TPI during the morning fish auction',
      'Buying fresh fish directly from the fishermen',
      'Eating together on the beach',
      'Taking home processed fish as souvenirs',
    ],
    itinerary: [
      { time: '06:00', activity: 'Visit to the TPI, watch the fish auction' },
      { time: '07:30', activity: 'Buying fresh fish from the fishermen\'s catch' },
      { time: '08:30', activity: 'Cooking class at a resident\'s home' },
      { time: '10:30', activity: 'Eating together on the beach' },
      { time: '11:30', activity: 'Taking home processed fish as souvenirs' },
    ],
    facilities: ['Culinary guide', 'Cooking ingredients', 'Cooking equipment'],
    includes: ['Cooking ingredients', 'Cooking class', 'Lunch', 'Processed fish souvenirs'],
    excludes: ['Transportation', 'Meals outside the schedule', 'Tips'],
    image: '/images/paket-kuliner.jpg',
    images: [kuliner1, kuliner2, kuliner3],
    whatsapp: '6285234791369',
  },
  {
    id: '5',
    slug: 'paket-keluarga',
    name: 'Family Fun Karangmenjangan',
    tagline: 'A fun family holiday in a coastal village',
    category: 'Family',
    duration: '1 day (7-8 hours)',
    price: 175000,
    priceNote: 'per person (min. 8 people)',
    minPerson: 8,
    maxPerson: 30,
    description: 'A family-friendly tour package designed for all ages. Light and fun activities such as playing on the beach, shopping at local UMKM, and enjoying local cuisine. Children will learn while playing in the great outdoors.',
    highlights: [
      'Playing in the sand and water at Pantai Watu Godeg',
      'Shopping for local UMKM souvenirs',
      'Lunch at a seaside eatery',
      'Family photo session on the beach',
    ],
    itinerary: [
      { time: '07:00', activity: 'Pickup at the meeting point' },
      { time: '08:30', activity: 'Journey to Karangmenjangan' },
      { time: '10:00', activity: 'Playing at Pantai Watu Godeg' },
      { time: '12:00', activity: 'Lunch at a seaside eatery' },
      { time: '13:30', activity: 'Dragon fruit orchard tour' },
      { time: '15:00', activity: 'Shopping for UMKM souvenirs' },
      { time: '16:00', activity: 'Family photo session' },
      { time: '17:00', activity: 'Return journey' },
    ],
    facilities: ['Local transportation', 'Tour guide', 'Entry tickets', 'Mineral water'],
    includes: ['Lunch', 'Snacks', 'Local guide', 'Fruit orchard tour'],
    excludes: ['Transportation from outside the city', 'Meals other than those listed', 'Travel insurance', 'Tips'],
    image: '/images/paket-keluarga.jpg',
    images: [familyFun1, familyFun2, familyFun3],
    whatsapp: '6285234791369',
  },
]

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((p) => p.slug === slug)
}
