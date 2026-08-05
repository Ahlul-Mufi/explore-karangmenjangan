import type { UmkmItem } from '../types'
import coconutProducts from '../assets/IMG_7753.JPG.jpeg'
import smokedFish from '../assets/IMG_8430.JPG.jpeg'
import saltedFish from '../assets/ikan asin.jpeg'

export const umkmItems: UmkmItem[] = [
  {
    id: '1',
    name: { id: 'Produk Ikan Asap', en: 'Smoked Fish Products' },
    category: 'Culinary',
    description: {
      id: 'Ikan segar hasil tangkapan nelayan Karangmenjangan, diolah dengan teknik pengasapan tradisional sehingga menghasilkan cita rasa khas pesisir.',
      en: 'Fresh fish caught by Karangmenjangan fishermen, processed using traditional smoking techniques to create a distinctive coastal flavor.',
    },
    image: smokedFish,
  },
  {
    id: '2',
    name: { id: 'Produk Kelapa', en: 'Coconut Products' },
    category: 'Local Products',
    description: {
      id: 'Pengeringan daging kelapa (kopra) serta produksi gula merah dari nira kelapa.',
      en: 'Coconut meat drying as well as brown sugar production from coconut sap.',
    },
    image: coconutProducts,
  },
  {
    id: '3',
    name: { id: 'Ikan Asin Karangmenjangan', en: 'Karangmenjangan Salted Fish' },
    category: 'Culinary',
    description: {
      id: "Ikan asin produksi lokal yang dibuat melalui proses penggaraman tradisional, dengan cita rasa khas pesisir selatan Lumajang.",
      en: "Locally produced salted fish made through a traditional salting process, with the distinctive taste of Lumajang's southern coast.",
    },
    image: saltedFish,
  },
]
