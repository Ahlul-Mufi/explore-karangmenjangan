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

const transportExclude = [
  { id: 'Transportasi dari luar kota', en: 'Transportation from outside the city' },
  { id: 'Makanan di luar yang tercantum', en: 'Meals other than those listed' },
  { id: 'Asuransi perjalanan', en: 'Travel insurance' },
  { id: 'Tips pemandu', en: 'Guide gratuities' },
]

export const packages: Package[] = [
  {
    id: '1',
    slug: 'paket-sehari-penuh',
    name: { id: 'Full Day Karangmenjangan', en: 'Karangmenjangan Full Day' },
    tagline: {
      id: 'Jelajahi semua keindahan Karangmenjangan dalam satu hari penuh',
      en: 'Explore all the beauty of Karangmenjangan in one full day',
    },
    category: 'Full Day',
    duration: { id: '1 hari (8-10 jam)', en: '1 day (8-10 hours)' },
    price: 250000,
    priceNote: { id: 'per orang (min. 5 orang)', en: 'per person (min. 5 people)' },
    minPerson: 5,
    maxPerson: 20,
    description: {
      id: 'Paket wisata lengkap yang membawa Anda ke semua destinasi unggulan Karangmenjangan. Mulai dari pantai, susur sungai, hingga pengalaman budaya dan kuliner lokal. Paket ini sangat cocok untuk keluarga, komunitas, maupun perusahaan yang ingin menikmati keindahan alam berpadu dengan kearifan lokal.',
      en: 'A comprehensive tour package that takes you to all of Karangmenjangan\'s top destinations. From the beach and river exploration to cultural experiences and local cuisine, this package is perfect for families, communities, or companies who want to enjoy natural beauty alongside local wisdom.',
    },
    highlights: [
      {
        id: 'Pantai Watu Godeg dengan pemandangan Samudra Hindia',
        en: 'Pantai Watu Godeg with views of the Indian Ocean',
      },
      {
        id: 'Susur sungai hingga muara bersama pemandu lokal',
        en: 'River exploration to the estuary with a local guide',
      },
      {
        id: 'Kunjungan ke TPI dan interaksi dengan nelayan',
        en: 'Visit to the TPI and interaction with fishermen',
      },
      {
        id: 'Kuliner ikan segar dari hasil tangkapan nelayan',
        en: 'Fresh fish cuisine from the fishermen\'s catch',
      },
      {
        id: 'Sesi foto matahari terbenam di muara',
        en: 'Sunset photo session at the estuary',
      },
    ],
    itinerary: [
      { time: '06:00', activity: { id: 'Penjemputan di titik kumpul', en: 'Pickup at the meeting point' } },
      { time: '07:00', activity: { id: 'Perjalanan menuju Karangmenjangan, sarapan lokal', en: 'Journey to Karangmenjangan, local breakfast' } },
      { time: '08:30', activity: { id: 'Susur sungai Karangmenjangan', en: 'Karangmenjangan river exploration' } },
      { time: '11:00', activity: { id: 'Kunjungan ke TPI, interaksi dengan nelayan', en: 'Visit to the TPI, interaction with fishermen' } },
      { time: '12:00', activity: { id: 'Makan siang ikan segar di warung tepi pantai', en: 'Fresh fish lunch at a seaside eatery' } },
      { time: '13:30', activity: { id: 'Menjelajahi Pantai Watu Godeg', en: 'Exploring Pantai Watu Godeg' } },
      { time: '16:30', activity: { id: 'Menikmati matahari terbenam di muara', en: 'Enjoying the sunset at the estuary' } },
      { time: '18:00', activity: { id: 'Perjalanan pulang', en: 'Return journey' } },
    ],
    facilities: [
      { id: 'Transportasi lokal', en: 'Local transportation' },
      { id: 'Pemandu wisata', en: 'Tour guide' },
      { id: 'Tiket masuk', en: 'Entry tickets' },
      { id: 'Air mineral', en: 'Mineral water' },
    ],
    includes: [
      { id: 'Makan siang', en: 'Lunch' },
      { id: 'Snack & air mineral', en: 'Snacks & mineral water' },
      { id: 'Pemandu lokal', en: 'Local guide' },
      { id: 'Transportasi lokal', en: 'Local transportation' },
    ],
    excludes: transportExclude,
    image: '/images/paket-fullday.jpg',
    images: [fulday1, fulday2, fulday4],
    whatsapp: '6281335269128',
  },
  {
    id: '2',
    slug: 'paket-adventure',
    name: { id: 'Petualangan Karangmenjangan', en: 'Adventure Karangmenjangan' },
    tagline: {
      id: 'Petualangan seru menyusuri sungai hingga ke muara',
      en: 'An exciting adventure exploring the river down to the estuary',
    },
    category: 'Adventure',
    duration: { id: '1 hari (6-8 jam)', en: '1 day (6-8 hours)' },
    price: 200000,
    priceNote: { id: 'per orang (min. 4 orang)', en: 'per person (min. 4 people)' },
    minPerson: 4,
    maxPerson: 15,
    description: {
      id: 'Paket petualangan bagi Anda yang mencari pengalaman ekstrem dan menantang. Susuri sungai dengan perahu tradisional, jelajahi kawasan muara, dan trekking di sepanjang tepian sungai. Rasakan sensasi petualangan alam yang autentik di Karangmenjangan.',
      en: 'An adventure package for those seeking an extreme and challenging experience. Explore the river on a traditional boat, discover the estuary area, and trek along the riverbanks. Enjoy an authentic nature adventure sensation in Karangmenjangan.',
    },
    highlights: [
      {
        id: 'Menjelajahi sungai dengan perahu tradisional',
        en: 'Exploring the river on a traditional boat',
      },
      {
        id: 'Trekking di sepanjang tepian sungai',
        en: 'Trekking along the riverbanks',
      },
      {
        id: 'Menjelajahi kawasan muara dan pesisir',
        en: 'Exploring the estuary and coastal area',
      },
      {
        id: "Api unggun dan kisah para nelayan di malam hari",
        en: "Bonfire and fishermen's stories at night",
      },
    ],
    itinerary: [
      { time: '06:00', activity: { id: 'Penjemputan di titik kumpul', en: 'Pickup at the meeting point' } },
      { time: '07:30', activity: { id: 'Persiapan dan pengarahan keselamatan', en: 'Preparation and safety briefing' } },
      { time: '08:00', activity: { id: 'Memulai susur sungai dengan perahu', en: 'Starting the river exploration by boat' } },
      { time: '10:30', activity: { id: 'Trekking di sepanjang tepian sungai', en: 'Trekking along the riverbanks' } },
      { time: '12:00', activity: { id: 'Makan siang di tepi muara', en: 'Lunch by the estuary' } },
      { time: '13:00', activity: { id: 'Menjelajahi kawasan muara dan pesisir', en: 'Exploring the estuary and coastal area' } },
      { time: '17:00', activity: { id: 'Api unggun dan kisah para nelayan', en: 'Bonfire and fishermen\'s stories' } },
      { time: '18:30', activity: { id: 'Perjalanan pulang', en: 'Return journey' } },
    ],
    facilities: [
      { id: 'Perahu tradisional', en: 'Traditional boat' },
      { id: 'Pemandu wisata', en: 'Tour guide' },
      { id: 'Peralatan trekking', en: 'Trekking equipment' },
      { id: 'Air mineral', en: 'Mineral water' },
    ],
    includes: [
      { id: 'Makan siang', en: 'Lunch' },
      { id: 'Perlengkapan snorkeling', en: 'Snorkeling gear' },
      { id: 'Pemandu lokal', en: 'Local guide' },
      { id: 'Peralatan keselamatan', en: 'Safety equipment' },
    ],
    excludes: transportExclude,
    image: '/images/paket-adventure.jpg',
    images: [adventure1, adventure2, adventure3],
    whatsapp: '6281335269128',
  },
  {
    id: '3',
    slug: 'paket-kuliner-nelayan',
    name: { id: 'Kuliner Nelayan', en: "Fisherman's Culinary" },
    tagline: {
      id: "Rasakan cita rasa laut langsung dari para nelayan Karangmenjangan",
      en: "Taste the flavors of the sea straight from Karangmenjangan's fishermen",
    },
    category: 'Culinary',
    duration: { id: 'Setengah hari (4-5 jam)', en: 'Half day (4-5 hours)' },
    price: 150000,
    priceNote: { id: 'per orang (min. 6 orang)', en: 'per person (min. 6 people)' },
    minPerson: 6,
    maxPerson: 25,
    description: {
      id: 'Paket wisata kuliner yang mengajak Anda merasakan cita rasa laut Karangmenjangan secara langsung. Mulai dari menyaksikan lelang ikan di TPI, membeli ikan segar langsung dari nelayan, hingga menikmati hidangan laut segar khas pesisir.',
      en: "A culinary tour package that lets you experience the flavors of Karangmenjangan's sea directly. From watching the fish auction at the TPI and buying fresh fish straight from the fishermen to enjoying fresh seafood dishes with a distinct coastal taste.",
    },
    highlights: [
      {
        id: 'Kunjungan ke TPI saat lelang ikan pagi hari',
        en: 'Visit to the TPI during the morning fish auction',
      },
      {
        id: 'Membeli ikan segar langsung dari nelayan',
        en: 'Buying fresh fish directly from the fishermen',
      },
      {
        id: 'Makan bersama di tepi pantai',
        en: 'Eating together on the beach',
      },
      {
        id: 'Membawa pulang olahan ikan sebagai oleh-oleh',
        en: 'Taking home processed fish as souvenirs',
      },
    ],
    itinerary: [
      { time: '06:00', activity: { id: 'Kunjungan ke TPI, menyaksikan lelang ikan', en: 'Visit to the TPI, watch the fish auction' } },
      { time: '07:30', activity: { id: "Membeli ikan segar dari hasil tangkapan nelayan", en: "Buying fresh fish from the fishermen's catch" } },
      { time: '10:30', activity: { id: 'Makan bersama di tepi pantai', en: 'Eating together on the beach' } },
      { time: '11:30', activity: { id: 'Membawa pulang olahan ikan sebagai oleh-oleh', en: 'Taking home processed fish as souvenirs' } },
    ],
    facilities: [
      { id: 'Pemandu kuliner', en: 'Culinary guide' },
      { id: 'Bahan masakan', en: 'Cooking ingredients' },
      { id: 'Peralatan masak', en: 'Cooking equipment' },
    ],
    includes: [
      { id: 'Bahan masakan', en: 'Cooking ingredients' },
      { id: 'Makan siang', en: 'Lunch' },
      { id: 'Oleh-oleh olahan ikan', en: 'Processed fish souvenirs' },
    ],
    excludes: [
      { id: 'Transportasi', en: 'Transportation' },
      { id: 'Makanan di luar jadwal', en: 'Meals outside the schedule' },
      { id: 'Tips', en: 'Tips' },
    ],
    image: '/images/paket-kuliner.jpg',
    images: [kuliner1, kuliner2, kuliner3],
    whatsapp: '6281335269128',
  },
  {
    id: '5',
    slug: 'paket-keluarga',
    name: { id: 'Liburan Keluarga Karangmenjangan', en: 'Family Fun Karangmenjangan' },
    tagline: {
      id: 'Liburan keluarga yang menyenangkan di desa pesisir',
      en: 'A fun family holiday in a coastal village',
    },
    category: 'Family',
    duration: { id: '1 hari (7-8 jam)', en: '1 day (7-8 hours)' },
    price: 175000,
    priceNote: { id: 'per orang (min. 8 orang)', en: 'per person (min. 8 people)' },
    minPerson: 8,
    maxPerson: 30,
    description: {
      id: 'Paket wisata ramah keluarga yang dirancang untuk segala usia. Aktivitas ringan dan seru seperti bermain di pantai, belanja UMKM lokal, dan menikmati kuliner khas. Anak-anak akan belajar sambil bermain di alam terbuka.',
      en: 'A family-friendly tour package designed for all ages. Light and fun activities such as playing on the beach, shopping at local UMKM, and enjoying local cuisine. Children will learn while playing in the great outdoors.',
    },
    highlights: [
      {
        id: 'Bermain pasir dan air di Pantai Watu Godeg',
        en: 'Playing in the sand and water at Pantai Watu Godeg',
      },
      {
        id: 'Belanja oleh-oleh UMKM lokal',
        en: 'Shopping for local UMKM souvenirs',
      },
      {
        id: 'Makan siang di warung tepi pantai',
        en: 'Lunch at a seaside eatery',
      },
      {
        id: 'Sesi foto keluarga di pantai',
        en: 'Family photo session on the beach',
      },
    ],
    itinerary: [
      { time: '07:00', activity: { id: 'Penjemputan di titik kumpul', en: 'Pickup at the meeting point' } },
      { time: '08:30', activity: { id: 'Perjalanan menuju Karangmenjangan', en: 'Journey to Karangmenjangan' } },
      { time: '10:00', activity: { id: 'Bermain di Pantai Watu Godeg', en: 'Playing at Pantai Watu Godeg' } },
      { time: '12:00', activity: { id: 'Makan siang di warung tepi pantai', en: 'Lunch at a seaside eatery' } },
      { time: '15:00', activity: { id: 'Belanja oleh-oleh UMKM', en: 'Shopping for UMKM souvenirs' } },
      { time: '16:00', activity: { id: 'Sesi foto keluarga', en: 'Family photo session' } },
      { time: '17:00', activity: { id: 'Perjalanan pulang', en: 'Return journey' } },
    ],
    facilities: [
      { id: 'Transportasi lokal', en: 'Local transportation' },
      { id: 'Pemandu wisata', en: 'Tour guide' },
      { id: 'Tiket masuk', en: 'Entry tickets' },
      { id: 'Air mineral', en: 'Mineral water' },
    ],
    includes: [
      { id: 'Makan siang', en: 'Lunch' },
      { id: 'Snack', en: 'Snacks' },
      { id: 'Pemandu lokal', en: 'Local guide' },
    ],
    excludes: [
      { id: 'Transportasi dari luar kota', en: 'Transportation from outside the city' },
      { id: 'Makanan di luar yang tercantum', en: 'Meals other than those listed' },
      { id: 'Asuransi perjalanan', en: 'Travel insurance' },
      { id: 'Tips', en: 'Tips' },
    ],
    image: '/images/paket-keluarga.jpg',
    images: [familyFun1, familyFun2, familyFun3],
    whatsapp: '6281335269128',
  },
]

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((p) => p.slug === slug)
}
