import type { Destination } from "../types";
import viewImg from "../assets/view.jpg.jpeg";
import img7548 from "../assets/IMG_7548.JPG.jpeg";
import img7573 from "../assets/IMG_7573.JPG.jpeg";
import img7583 from "../assets/IMG_7583.JPG.jpeg";
import img7642 from "../assets/IMG_7642.JPG.jpeg";
import img7643 from "../assets/IMG_7643.JPG.jpeg";
import img7874 from "../assets/IMG_7874.JPG.jpeg";
import susurSungai from "../assets/susur sungai.jpg.jpeg";
import tpiImg from "../assets/TPI.jpg.jpeg";
import tpiWa from "../assets/WhatsApp Image 2026-08-04 at 17.25.17.jpeg";
import img8305 from "../assets/IMG_8305.JPG.jpeg";
import img8321 from "../assets/IMG_8321.JPG.jpeg";
import watuGodeg from "../assets/pantai watu godhek.jpg.jpeg";
import watuWa1544 from "../assets/WhatsApp Image 2026-08-04 at 15.44.45.jpeg";
import img8816 from "../assets/IMG_8816.JPG.jpeg";
import img8821 from "../assets/IMG_8821.JPG.jpeg";
import img8825 from "../assets/IMG_8825.JPG.jpeg";
import img8851 from "../assets/IMG_8851.JPG.jpeg";

const locationId = "Dusun Karangmenjangan, Desa Bulurejo, Kecamatan Tempursari, Kabupaten Lumajang";
const locationEn =
  "Karangmenjangan Hamlet, Bulurejo Village, Tempursari District, Lumajang Regency";

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "pantai-watu-godeg",
    title: { id: "Pantai Watu Godheg", en: "Pantai Watu Godheg" },
    category: "Beach",
    description: {
      id: "Destinasi pantai utama di Dusun Karangmenjangan yang menawarkan pemandangan indah Samudra Hindia.",
      en: "The main beach destination in Karangmenjangan Hamlet, offering breathtaking views of the Indian Ocean.",
    },
    content: {
      id: `Pantai Watu Godeg (dikenal juga dengan nama Pantai Godek atau Watu Gedek) merupakan destinasi pantai utama di Dusun Karangmenjangan. Pantai ini menawarkan pemandangan langsung ke Samudra Hindia dengan ombaknya yang khas dan hamparan pasir yang panjang.

Bebatuan besar yang tersebar di sepanjang bibir pantai menjadi ciri khas dan asal muasal nama "Watu Godeg" (batu besar). Pantai ini menjadi tempat favorit warga maupun pengunjung untuk menikmati matahari terbenam.

Pantai ini dapat dijangkau dari pusat Desa Bulurejo menggunakan kendaraan roda dua maupun roda empat.`,
      en: `Pantai Watu Godeg (also known as Pantai Godek or Watu Gedek) is the main beach destination in Karangmenjangan Hamlet. The beach offers a direct view of the Indian Ocean with its characteristic waves and long stretches of sand.

The large rocks scattered along the shore are a signature feature and the origin of the name "Watu Godeg" (big rock). The beach is a favorite spot for locals and visitors alike to enjoy the sunset.

The beach can be reached from the center of Bulurejo Village by two-wheeled or four-wheeled vehicles.`,
    },
    location: { id: locationId, en: locationEn },
    image: viewImg,
    gallery: [viewImg, watuGodeg, watuWa1544, img7548, img7573, img7583],
    facilities: [
      { id: "Area parkir", en: "Parking area" },
      { id: "Warung makanan", en: "Food stalls" },
    ],
    mapsUrl:
      "https://www.google.com/maps/search/Pantai+Watu+Godeg+Karangmenjangan",
    coordinates: { lat: -8.317481, lng: 112.995744 },
  },
  {
    id: "2",
    slug: "susur-sungai",
    title: {
      id: "Susur Sungai Karangmenjangan",
      en: "Susur Sungai Karangmenjangan",
    },
    category: "Nature",
    description: {
      id: "Nikmati pengalaman menjelajahi sungai yang mengalir ke Samudra Hindia, dikelilingi pemandangan alam yang masih asri.",
      en: "Enjoy the experience of exploring a river that flows into the Indian Ocean, surrounded by pristine natural scenery.",
    },
    content: {
      id: `Wisata susur sungai di Karangmenjangan menawarkan pengalaman unik menyusuri sungai yang mengalir langsung ke Samudra Hindia. Sepanjang perjalanan, pengunjung disuguhi pemandangan alam yang masih perawan dengan vegetasi hijau di tepian sungai.

Aktivitas ini sangat cocok bagi pecinta alam yang ingin menikmati ketenangan dan keindahan Karangmenjangan dari sudut pandang yang berbeda.`,
      en: `The river exploration tour in Karangmenjangan offers a unique experience of tracing a river that flows directly into the Indian Ocean. Along the way, visitors are treated to untouched natural scenery with lush green riverbank vegetation.

This activity is perfect for nature lovers who want to enjoy the tranquility and beauty of Karangmenjangan from a different perspective.`,
    },
    location: { id: locationId, en: locationEn },
    image: img7643,
    gallery: [img7643, susurSungai, img7642, img7874],
    facilities: [{ id: "Pemandu lokal", en: "Local guide" }],
    mapsUrl: "https://www.google.com/maps/search/Susur+Sungai+Karangmenjangan",
    coordinates: { lat: -8.329344, lng: 112.965869 },
  },
  {
    id: "3",
    slug: "pantai-tpi-karangmenjangan",
    title: {
      id: "Pantai TPI Karangmenjangan",
      en: "Pantai TPI Karangmenjangan",
    },
    category: "Beach",
    description: {
      id: "Pusat aktivitas para nelayan dan pelelangan hasil laut yang menjadi denyut nadi ekonomi masyarakat pesisir.",
      en: "The center of fishermen's activities and marine catch auctions, forming the economic heartbeat of the coastal community.",
    },
    content: {
      id: `Tempat Pelelangan Ikan (TPI) Karangmenjangan merupakan pusat kegiatan penangkapan ikan masyarakat setempat. Setiap pagi, para nelayan kembali dari laut dan hasil tangkapannya dilelang di tempat ini.

Pengunjung dapat menyaksikan langsung proses lelang ikan, berinteraksi dengan para nelayan, dan membeli hasil laut segar. TPI menjadi destinasi wisata edukasi yang menarik untuk memahami kehidupan masyarakat pesisir Karangmenjangan.

Julukan "Pantai TPI" sendiri berasal dari Tempat Pelelangan Ikan yang dulu ramai sebelum kawasan ini terkena abrasi pantai. Banyak pengunjung yang keliru mengira TPI merupakan singkatan dari Tempursari.`,
      en: `The Fish Auction Hall (TPI) in Karangmenjangan is the center of fishing activities for the local community. Every morning, fishermen return from the sea and their catch is auctioned off here.

Visitors can witness the fish auction firsthand, interact with the fishermen, and buy fresh seafood. The TPI is an interesting educational tourism destination for understanding the life of Karangmenjangan's coastal community.

The nickname "TPI Beach" comes from the Fish Auction Center (Tempat Pelelangan Ikan), which was famously busy before the area was struck by coastal abrasion. Many visitors mistakenly assume that TPI stands for Tempursari.`,
    },
    location: { id: locationId, en: locationEn },
    image: tpiImg,
    gallery: [tpiImg, tpiWa, img8305, img8321],
    facilities: [
      { id: "Area parkir", en: "Parking area" },
      { id: "Ruang pelelangan", en: "Auction hall" },
    ],
    mapsUrl: "https://www.google.com/maps/search/TPI+Karangmenjangan",
    coordinates: { lat: -8.330712, lng: 112.966619 },
  },
  {
    id: "4",
    slug: "muara-karangmenjangan",
    title: {
      id: "Muara Karangmenjangan",
      en: "Muara Karangmenjangan",
    },
    category: "Nature",
    description: {
      id: "Tempat pertemuan sungai dengan Samudra Hindia, menawarkan pemandangan eksotis dan aktivitas nelayan tradisional.",
      en: "Where the river meets the Indian Ocean, offering exotic scenery and glimpses of traditional fishermen at work.",
    },
    content: {
      id: `Muara Karangmenjangan adalah pertemuan aliran sungai dengan Samudra Hindia. Kawasan ini menjadi saksi bisu aktivitas sehari-hari para nelayan tradisional yang melaut menggunakan perahu-perahu kecil.

Pemandangan muara sangat memukau, terutama di sore hari saat matahari terbenam di ufuk barat. Kawasan ini juga menjadi spot yang menarik untuk berfoto.`,
      en: `The Karangmenjangan estuary is where the river flow meets the Indian Ocean. This area silently witnesses the daily activities of traditional fishermen heading out to sea in small boats.

The estuary scenery is stunning, especially in the late afternoon as the sun sets on the western horizon. The area is also an attractive spot for photography.`,
    },
    location: { id: locationId, en: locationEn },
    image: img8825,
    gallery: [img8825, img8851, img8816, img8821],
    facilities: [{ id: "Area parkir", en: "Parking area" }],
    mapsUrl: "https://www.google.com/maps/search/Muara+Karangmenjangan",
    coordinates: { lat: -8.327837, lng: 112.971119 },
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
