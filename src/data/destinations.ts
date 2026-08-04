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

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "pantai-watu-godeg",
    title: "Pantai Watu Godheg",
    category: "Beach",
    description:
      "The main beach destination in Karangmenjangan Hamlet, offering breathtaking views of the Indian Ocean.",
    content: `Pantai Watu Godeg (also known as Pantai Godek or Watu Gedek) is the main beach destination in Karangmenjangan Hamlet. The beach offers a direct view of the Indian Ocean with its characteristic waves and long stretches of sand.

The large rocks scattered along the shore are a signature feature and the origin of the name "Watu Godeg" (big rock). The beach is a favorite spot for locals and visitors alike to enjoy the sunset.

The beach can be reached from the center of Bulurejo Village by two-wheeled or four-wheeled vehicles.`,
    location:
      "Karangmenjangan Hamlet, Bulurejo Village, Tempursari District, Lumajang Regency",
    image: viewImg,
    gallery: [viewImg, watuGodeg, watuWa1544, img7548, img7573, img7583],
    facilities: ["Parking area", "Food stalls"],
    mapsUrl:
      "https://www.google.com/maps/search/Pantai+Watu+Godeg+Karangmenjangan",
  },
  {
    id: "2",
    slug: "susur-sungai",
    title: "Susur Sungai Karangmenjangan",
    category: "Nature",
    description:
      "Enjoy the experience of exploring a river that flows into the Indian Ocean, surrounded by pristine natural scenery.",
    content: `The river exploration tour in Karangmenjangan offers a unique experience of tracing a river that flows directly into the Indian Ocean. Along the way, visitors are treated to untouched natural scenery with lush green riverbank vegetation.

This activity is perfect for nature lovers who want to enjoy the tranquility and beauty of Karangmenjangan from a different perspective.`,
    location:
      "Karangmenjangan Hamlet, Bulurejo Village, Tempursari District, Lumajang Regency",
    image: img7643,
    gallery: [img7643, susurSungai, img7642, img7874],
    facilities: ["Local guide"],
    mapsUrl: "https://www.google.com/maps/search/Susur+Sungai+Karangmenjangan",
  },
  {
    id: "3",
    slug: "pantai-tpi-karangmenjangan",
    title: "Pantai TPI Karangmenjangan",
    category: "Beach",
    description:
      "The center of fishermen's activities and marine catch auctions, forming the economic heartbeat of the coastal community.",
    content: `The Fish Auction Hall (TPI) in Karangmenjangan is the center of fishing activities for the local community. Every morning, fishermen return from the sea and their catch is auctioned off here.

Visitors can witness the fish auction firsthand, interact with the fishermen, and buy fresh seafood. The TPI is an interesting educational tourism destination for understanding the life of Karangmenjangan's coastal community.

The nickname "TPI Beach" comes from the Fish Auction Center (Tempat Pelelangan Ikan), which was famously busy before the area was struck by coastal abrasion. Many visitors mistakenly assume that TPI stands for Tempursari.`,
    location:
      "Karangmenjangan Hamlet, Bulurejo Village, Tempursari District, Lumajang Regency",
    image: tpiImg,
    gallery: [tpiImg, tpiWa, img8305, img8321],
    facilities: ["Parking area", "Auction hall"],
    mapsUrl: "https://www.google.com/maps/search/TPI+Karangmenjangan",
  },
  {
    id: "4",
    slug: "muara-karangmenjangan",
    title: "Muara Karangmenjangan",
    category: "Nature",
    description:
      "Where the river meets the Indian Ocean, offering exotic scenery and glimpses of traditional fishermen at work.",
    content: `The Karangmenjangan estuary is where the river flow meets the Indian Ocean. This area silently witnesses the daily activities of traditional fishermen heading out to sea in small boats.

The estuary scenery is stunning, especially in the late afternoon as the sun sets on the western horizon. The area is also an attractive spot for photography.`,
    location:
      "Karangmenjangan Hamlet, Bulurejo Village, Tempursari District, Lumajang Regency",
    image: img8825,
    gallery: [img8825, img8851, img8816, img8821],
    facilities: ["Parking area"],
    mapsUrl: "https://www.google.com/maps/search/Muara+Karangmenjangan",
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
