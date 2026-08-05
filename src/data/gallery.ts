import type { GalleryItem } from '../types'
import img7548 from '../assets/IMG_7548.JPG.jpeg'
import img7573 from '../assets/IMG_7573.JPG.jpeg'
import img7583 from '../assets/IMG_7583.JPG.jpeg'
import img7642 from '../assets/IMG_7642.JPG.jpeg'
import img7643 from '../assets/IMG_7643.JPG.jpeg'
import img7874 from '../assets/IMG_7874.JPG.jpeg'
import watuGodeg from '../assets/pantai watu godhek.jpg.jpeg'
import umbul from '../assets/pemandian umbul.jpg.jpeg'
import susurSungai from '../assets/susur sungai.jpg.jpeg'
import tpi from '../assets/TPI.jpg.jpeg'
import view from '../assets/view.jpg.jpeg'
import wa1 from '../assets/WhatsApp Image 2026-08-04 at 15.44.45.jpeg'
import wa2 from '../assets/WhatsApp Image 2026-08-04 at 15.47.59.jpeg'
import wa3 from '../assets/WhatsApp Image 2026-08-04 at 15.48.01.jpeg'
import wa4 from '../assets/WhatsApp Image 2026-08-04 at 17.25.17.jpeg'
import img8816 from '../assets/IMG_8816.JPG.jpeg'
import img8821 from '../assets/IMG_8821.JPG.jpeg'
import img8825 from '../assets/IMG_8825.JPG.jpeg'
import img8851 from '../assets/IMG_8851.JPG.jpeg'
import img7455 from '../assets/IMG_7455.JPG.jpeg'
import img7863 from '../assets/IMG_7863.JPG.jpeg'
import img8839 from '../assets/IMG_8839.JPG.jpeg'
import img7753 from '../assets/IMG_7753.JPG.jpeg'
import img8430 from '../assets/IMG_8430.JPG.jpeg'
import ikanAsin from '../assets/ikan asin.jpeg'
import galeriNature1 from '../assets/galeri nature 1.jpeg'
import galeriNature2 from '../assets/galeri nature 2.jpeg'
import galerNature3 from '../assets/galer nature 3.jpeg'
import galerNature4 from '../assets/galer nature 4.jpeg'
import localProduct1 from '../assets/local product 1.jpeg'
import localProduct2 from '../assets/local product 2.jpeg'
import localProduct3 from '../assets/local product 3.jpeg'
import localProduct4 from '../assets/local product 4.jpeg'
import localProduct5 from '../assets/local product 5.jpeg'
import localProduct6 from '../assets/local product 6.jpeg'
import culture1 from '../assets/culture 1.jpeg'
import kuliner1 from '../assets/kuliner 1.jpeg'
import kuliner2 from '../assets/kuliner 2.jpeg'

const alt = (id: string, en: string) => ({ id, en })

export const galleryItems: GalleryItem[] = [
  // Pantai Watu Godheg
  { id: '1', src: view, alt: alt('Pantai Watu Godheg', 'Pantai Watu Godheg'), category: 'Beach' },
  { id: '2', src: watuGodeg, alt: alt('Pantai Watu Godheg', 'Pantai Watu Godheg'), category: 'Beach' },
  { id: '3', src: wa1, alt: alt('Pantai Watu Godheg', 'Pantai Watu Godheg'), category: 'Beach' },
  { id: '4', src: img7548, alt: alt('Pantai Watu Godheg', 'Pantai Watu Godheg'), category: 'Beach' },
  { id: '5', src: img7573, alt: alt('Pantai Watu Godheg', 'Pantai Watu Godheg'), category: 'Beach' },
  { id: '6', src: img7583, alt: alt('Pantai Watu Godheg', 'Pantai Watu Godheg'), category: 'Beach' },
  // Susur Sungai Karangmenjangan
  { id: '7', src: img7642, alt: alt('Susur Sungai Karangmenjangan', 'Susur Sungai Karangmenjangan'), category: 'Nature' },
  { id: '8', src: img7643, alt: alt('Susur Sungai Karangmenjangan', 'Susur Sungai Karangmenjangan'), category: 'Nature' },
  { id: '9', src: img7874, alt: alt('Susur Sungai Karangmenjangan', 'Susur Sungai Karangmenjangan'), category: 'Nature' },
  { id: '10', src: susurSungai, alt: alt('Susur Sungai Karangmenjangan', 'Susur Sungai Karangmenjangan'), category: 'Nature' },
  // Pantai TPI Karangmenjangan
  { id: '11', src: tpi, alt: alt('Pantai TPI Karangmenjangan', 'Pantai TPI Karangmenjangan'), category: 'Beach' },
  { id: '12', src: wa4, alt: alt('Pantai TPI Karangmenjangan', 'Pantai TPI Karangmenjangan'), category: 'Beach' },
  { id: '13', src: wa2, alt: alt('Pantai TPI Karangmenjangan', 'Pantai TPI Karangmenjangan'), category: 'Beach' },
  { id: '14', src: wa3, alt: alt('Pantai TPI Karangmenjangan', 'Pantai TPI Karangmenjangan'), category: 'Beach' },
  // Pemandian Umbul
  { id: '15', src: umbul, alt: alt('Pemandian Umbul', 'Pemandian Umbul'), category: 'Nature' },
  // Muara Karangmenjangan
  { id: '16', src: img8825, alt: alt('Muara Karangmenjangan', 'Muara Karangmenjangan'), category: 'Nature' },
  { id: '17', src: img8851, alt: alt('Muara Karangmenjangan', 'Muara Karangmenjangan'), category: 'Nature' },
  { id: '18', src: img8816, alt: alt('Muara Karangmenjangan', 'Muara Karangmenjangan'), category: 'Nature' },
  { id: '19', src: img8821, alt: alt('Muara Karangmenjangan', 'Muara Karangmenjangan'), category: 'Nature' },
  // Culture
  { id: '20', src: img7455, alt: alt('Keberagaman Agama & Keyakinan', 'Religious Diversity & Belief'), category: 'Culture' },
  { id: '21', src: img7863, alt: alt('Larung Sesaji', 'Larung Sesaji'), category: 'Culture' },
  { id: '22', src: img8839, alt: alt('Kehidupan Para Nelayan', 'Life of the Fishermen'), category: 'Culture' },
  // Culinary & Local Product
  { id: '23', src: img8430, alt: alt('Produk Ikan Asap', 'Smoked Fish Products'), category: 'Culinary' },
  { id: '24', src: ikanAsin, alt: alt('Ikan Asin Karangmenjangan', 'Karangmenjangan Salted Fish'), category: 'Culinary' },
  { id: '25', src: img7753, alt: alt('Produk Kelapa', 'Coconut Products'), category: 'Local Product' },
  // Nature Gallery
  { id: '26', src: galeriNature1, alt: alt('Alam Karangmenjangan', 'Karangmenjangan Nature'), category: 'Nature' },
  { id: '27', src: galeriNature2, alt: alt('Alam Karangmenjangan', 'Karangmenjangan Nature'), category: 'Nature' },
  { id: '28', src: galerNature3, alt: alt('Alam Karangmenjangan', 'Karangmenjangan Nature'), category: 'Nature' },
  { id: '29', src: galerNature4, alt: alt('Alam Karangmenjangan', 'Karangmenjangan Nature'), category: 'Nature' },
  // Local Product
  { id: '30', src: localProduct1, alt: alt('Gula Kelapa', 'Coconut Brown Sugar'), category: 'Local Product' },
  { id: '31', src: localProduct2, alt: alt('Kacang Tanah', 'Peanuts'), category: 'Local Product' },
  { id: '32', src: localProduct3, alt: alt('Singkong', 'Cassava'), category: 'Local Product' },
  { id: '33', src: localProduct4, alt: alt('Gula Kelapa', 'Coconut Brown Sugar'), category: 'Local Product' },
  { id: '34', src: localProduct5, alt: alt('Kopra', 'Copra'), category: 'Local Product' },
  { id: '35', src: localProduct6, alt: alt('Kelapa Muda', 'Young Coconut'), category: 'Local Product' },
  // Culture
  { id: '36', src: culture1, alt: alt('Budaya Karangmenjangan', 'Karangmenjangan Culture'), category: 'Culture' },
  // Culinary
  { id: '37', src: kuliner1, alt: alt('Ikan Segar', 'Fresh Fish'), category: 'Culinary' },
  { id: '38', src: kuliner2, alt: alt('Sambal Khas', 'Signature Sambal'), category: 'Culinary' },
]
