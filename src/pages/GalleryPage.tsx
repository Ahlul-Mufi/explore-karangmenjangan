import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import Gallery from '../components/Gallery'
import { galleryItems } from '../data/gallery'
import { useLanguage } from '../i18n/LanguageContext'

const categories = ['All', 'Beach', 'Nature', 'Culture', 'Culinary', 'Local Product'] as const

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All')
  const { t, tCat } = useLanguage()

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={t('gallery.title')}
          subtitle={t('gallery.subtitle')}
        />
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-sans font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-[#184332] text-white'
                  : 'bg-white text-[#26332E]/70 hover:bg-[#184332]/10'
              }`}
            >
              {tCat(cat)}
            </button>
          ))}
        </div>
        <Gallery items={filtered} />
      </div>
    </div>
  )
}
