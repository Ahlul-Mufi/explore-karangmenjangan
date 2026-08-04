import type { UmkmItem } from '../types'
import coconutProducts from '../assets/IMG_7753.JPG.jpeg'
import smokedFish from '../assets/IMG_8430.JPG.jpeg'
import saltedFish from '../assets/ikan asin.jpeg'

export const umkmItems: UmkmItem[] = [
  {
    id: '1',
    name: 'Smoked Fish Products',
    category: 'Culinary',
    description: 'Fresh fish caught by Karangmenjangan fishermen, processed using traditional smoking techniques to create a distinctive coastal flavor.',
    image: smokedFish,
  },
  {
    id: '2',
    name: 'Coconut Products',
    category: 'Local Products',
    description: 'Coconut meat drying as well as brown sugar production from coconut sap.',
    image: coconutProducts,
  },
  {
    id: '3',
    name: 'Karangmenjangan Salted Fish',
    category: 'Culinary',
    description: 'Locally produced salted fish made through a traditional salting process, with the distinctive taste of Lumajang\'s southern coast.',
    image: saltedFish,
  },
]
