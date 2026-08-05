import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Check } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import PhotoSlider from '../components/PhotoSlider'
import { getDestinationBySlug } from '../data/destinations'
import { useLanguage } from '../i18n/LanguageContext'

export default function DestinationDetail() {
  const { slug } = useParams()
  const { t, pick, tCat } = useLanguage()
  const dest = getDestinationBySlug(slug || '')

  if (!dest) {
    return (
      <div className="pt-24 pb-16 px-4 text-center">
        <h2 className="text-2xl font-sans text-[#184332] mb-4">{t('explore.notFound')}</h2>
        <Link to="/explore" className="text-[#BC6C25] underline">{t('explore.backToExplore')}</Link>
      </div>
    )
  }

  const galleryPhotos = dest.gallery.map((src, i) => ({
    id: `${dest.slug}-gallery-${i}`,
    src,
    alt: `${pick(dest.title)} - ${i + 1}`,
    category: dest.category,
  }))

  const { lat, lng } = dest.coordinates
  const mapEmbedUrl = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`
  const mapsAppUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="h-64 md:h-96 relative overflow-hidden">
        <img
          src={dest.image}
          alt={pick(dest.title)}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="inline-block px-3 py-1 bg-[#BC6C25]/80 text-white rounded-full text-xs font-sans font-semibold mb-4">
              {tCat(dest.category)}
            </span>
            <h1 className="text-4xl md:text-5xl font-sans font-bold">{pick(dest.title)}</h1>
          </div>
        </div>
      </div>
      <div className="px-4">
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 font-sans text-sm text-[#BC6C25] mt-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> {t('explore.backToExplore')}
        </Link>
      </div>
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <SectionHeading
          title={t('destDetail.overview')}
          align="left"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-md p-8 md:p-10"
        >
          <p className="text-lg font-sans text-[#26332E]/80 leading-relaxed mb-8">
            {pick(dest.description)}
          </p>

          <p className="font-sans text-base text-[#26332E]/80 leading-relaxed mb-8 whitespace-pre-line">
            {pick(dest.content)}
          </p>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-sans font-bold text-[#184332] mb-4">{t('destDetail.location')}</h3>
            <p className="flex items-start gap-2 font-sans text-sm text-[#26332E]/70">
              <MapPin className="h-5 w-5 text-[#BC6C25] shrink-0 mr-1" />
              {pick(dest.location)}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-sans font-bold text-[#184332] mb-4">{t('destDetail.facilities')}</h3>
            <ul className="grid grid-cols-2 gap-2">
              {dest.facilities.map((f, i) => (
                <li key={i} className="flex items-center gap-2 font-sans text-sm text-[#26332E]/70">
                  <Check className="w-4 h-4 text-green-500" /> {pick(f)}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-sans font-bold text-[#184332] mb-4">{t('destDetail.gallery')}</h3>
            <PhotoSlider photos={galleryPhotos} />
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-sans font-bold text-[#184332] mb-4">{t('destDetail.googleMapsLocation')}</h3>
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-md relative">
              <iframe
                src={mapEmbedUrl}
                className="w-full h-full"
                title={`${pick(dest.title)} - Google Maps`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={mapsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-[#184332] text-white font-sans text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-[#BC6C25] transition-colors"
              >
                <MapPin className="w-4 h-4" /> {t('common.openInGoogleMaps')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
