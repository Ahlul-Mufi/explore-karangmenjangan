import type { Destination } from '../types'

export const destinations: Destination[] = [
  {
    id: '1',
    slug: 'pantai-watu-godeg',
    title: 'Pantai Watu Godeg',
    category: 'Pantai',
    description: 'Destinasi wisata pantai utama di Dusun Karangmenjangan dengan panorama Samudera Indonesia yang memukau.',
    content: `Pantai Watu Godeg (juga dikenal sebagai Pantai Godek atau Watu Gedek) merupakan destinasi wisata pantai utama di Dusun Karangmenjangan. Pantai ini menawarkan pemandangan langsung ke Samudera Indonesia dengan ombak yang khas dan pasir yang membentang.

Batu-batu besar yang tersebar di sepanjang pantai menjadi ciri khas dan asal-usul nama "Watu Godeg" (batu besar). Pantai ini menjadi tempat favorit bagi masyarakat lokal dan pengunjung untuk menikmati matahari terbenam.

Akses menuju pantai dapat ditempuh dari pusat Desa Bulurejo dengan kendaraan roda dua maupun roda empat.`,
    location: 'Dusun Karangmenjangan, Desa Bulurejo, Kecamatan Tempursari, Kabupaten Lumajang',
    image: '/images/pantai-watu-godeg.jpg',
    gallery: [
      '/images/pantai-watu-godeg.jpg',
      '/images/pantai-watu-godeg-2.jpg',
    ],
    facilities: ['Area parkir', 'Warung makan'],
    mapsUrl: 'https://www.google.com/maps/search/Pantai+Watu+Godeg+Karangmenjangan',
  },
  {
    id: '2',
    slug: 'susur-sungai',
    title: 'Susur Sungai Karangmenjangan',
    category: 'Wisata Alam',
    description: 'Nikmati pengalaman menyusuri sungai yang bermuara ke Samudera Indonesia dengan pemandangan alam yang masih asri.',
    content: `Wisata susur sungai di Karangmenjangan menawarkan pengalaman unik menyusuri aliran sungai yang bermuara langsung ke Samudera Indonesia. Sepanjang perjalanan, pengunjung akan disuguhi pemandangan alam yang masih alami dengan vegetasi tepi sungai yang hijau.

Aktivitas ini cocok bagi pencinta alam yang ingin menikmati ketenangan dan keindahan alam Karangmenjangan dari perspektif yang berbeda.`,
    location: 'Dusun Karangmenjangan, Desa Bulurejo, Kecamatan Tempursari, Kabupaten Lumajang',
    image: '/images/susur-sungai.jpg',
    gallery: [
      '/images/susur-sungai.jpg',
    ],
    facilities: ['Pemandu lokal'],
    mapsUrl: 'https://www.google.com/maps/search/Susur+Sungai+Karangmenjangan',
  },
  {
    id: '3',
    slug: 'muara-karangmenjangan',
    title: 'Muara Karangmenjangan',
    category: 'Wisata Alam',
    description: 'Pertemuan aliran sungai dengan Samudera Indonesia yang menyajikan pemandangan eksotis dan aktivitas nelayan tradisional.',
    content: `Muara Karangmenjangan merupakan titik pertemuan antara aliran sungai dengan Samudera Indonesia. Kawasan ini menjadi saksi bisu aktivitas nelayan tradisional yang keluar-masuk melaut menggunakan perahu-perahu kecil.

Pemandangan di muara sangat memukau, terutama saat sore hari ketika matahari mulai terbenam di ufuk barat. Kawasan ini juga menjadi spot fotografi yang menarik.`,
    location: 'Dusun Karangmenjangan, Desa Bulurejo, Kecamatan Tempursari, Kabupaten Lumajang',
    image: '/images/muara.jpg',
    gallery: [
      '/images/muara.jpg',
    ],
    facilities: ['Area parkir'],
    mapsUrl: 'https://www.google.com/maps/search/Muara+Karangmenjangan',
  },
  {
    id: '4',
    slug: 'tempat-pelelangan-ikan',
    title: 'Tempat Pelelangan Ikan (TPI)',
    category: 'Wisata Edukasi',
    description: 'Pusat aktivitas nelayan dan pelelangan hasil tangkapan laut yang menjadi denyut nadi ekonomi masyarakat pesisir.',
    content: `Tempat Pelelangan Ikan (TPI) di Karangmenjangan merupakan pusat aktivitas perikanan masyarakat setempat. Setiap pagi, nelayan kembali dari melaut dan hasil tangkapannya dilelang di tempat ini.

Pengunjung dapat menyaksikan langsung aktivitas pelelangan ikan, berinteraksi dengan nelayan, dan membeli hasil laut segar. TPI menjadi destinasi wisata edukasi yang menarik untuk memahami kehidupan masyarakat pesisir Karangmenjangan.`,
    location: 'Dusun Karangmenjangan, Desa Bulurejo, Kecamatan Tempursari, Kabupaten Lumajang',
    image: '/images/tpi.jpg',
    gallery: [
      '/images/tpi.jpg',
    ],
    facilities: ['Area parkir', 'Tempat pelelangan'],
    mapsUrl: 'https://www.google.com/maps/search/TPI+Karangmenjangan',
  },
  {
    id: '5',
    slug: 'wisata-buah-naga',
    title: 'Wisata Buah Naga',
    category: 'Agrowisata',
    description: 'Kebun buah naga yang menjadi salah satu potensi agrowisata di kawasan Karangmenjangan.',
    content: `Wisata Buah Naga di Karangmenjangan menawarkan pengalaman agrowisata yang unik. Pengunjung dapat melihat langsung perkebunan buah naga, belajar tentang proses budidaya, dan menikmati buah naga segar yang dipetik langsung dari pohonnya.

Kebun buah naga ini menjadi salah satu destinasi yang menarik bagi wisatawan yang ingin menikmati suasana pedesaan dan belajar tentang pertanian lokal.`,
    location: 'Dusun Karangmenjangan, Desa Bulurejo, Kecamatan Tempursari, Kabupaten Lumajang',
    image: '/images/buah-naga.jpg',
    gallery: [
      '/images/buah-naga.jpg',
    ],
    facilities: ['Area parkir', 'Kebun buah'],
    mapsUrl: 'https://www.google.com/maps/search/Wisata+Buah+Naga+Karangmenjangan',
  },
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}
