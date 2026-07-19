import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Check } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { getDestinationBySlug } from '../data/destinations'

export default function DestinationDetail() {
  const { slug } = useParams()
  const dest = getDestinationBySlug(slug || '')

  if (!dest) {
    return (
      <div className="pt-24 pb-16 px-4 text-center">
        <h2 className="text-2xl font-sans text-[#184332] mb-4">destination not found</h2>
        <Link to="/explore" className="text-[#BC6C25] underline">Back to explore</Link>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="h-64 md:h-96 bg-gradient-to-br from-[#184332]/30 to-[#FEFAE0] flex items-center justify-center">
        <div className="text-center text-[#184332]">
          <span className="inline-block px-3 py-1 bg-[#BC6C25]/20 text-[#BC6C25] rounded-full text-xs font-sans font-semibold mb-4">
            {dest.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-bold">{dest.title}</h1>
        </div>
      </div>
      <div className="px-4">
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 font-sans text-sm text-[#BC6C25] mt-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Explore
        </Link>
      </div>
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <SectionHeading
          title="Overview"
          align="left"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-md p-8 md:p-10"
        >
          <p className="text-lg font-sans text-[#26332E]/80 leading-relaxed mb-8">
            {dest.description}
          </p>

          <p className="font-sans text-base text-[#26332E]/80 leading-relaxed mb-8">
            {dest.content}
          </p>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-sans font-bold text-[#184332] mb-4">Location</h3>
            <p className="flex items-start gap-2 font-sans text-sm text-[#26332E]/70">
              <MapPin className="h-5 w-5 text-[#BC6C25] shrink-0 mr-1" />
              {dest.location}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-sans font-bold text-[#184332] mb-4">Facilities</h3>
            <ul className="grid grid-cols-2 gap-2">
              {dest.facilities.map((f, i) => (
                <li key={i} className="flex items-center gap-2 font-sans text-sm text-[#26332E]/70">
                  <Check className="w-4 h-4 text-green-500" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-sans font-bold text-[#184332] mb-4">Galeri</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {dest.gallery.map((_g, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-[#184332]/15 to-[#FEFAE0] rounded-xl flex items-center justify-center text-xs text-[#184332]/30 font-sans"
                >
                  {dest.title} - {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-sans font-bold text-[#184332] mb-4">Lokasi Google Maps</h3>
            <div className="w-full h-64 bg-[#184332]/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-[#BC6C25] mx-auto mb-2" />
                <p className="font-sans text-[#26332E]/60 mb-2">View on Google Maps</p>
                <a
                  href={dest.mapsUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0077B6] underline font-sans text-sm"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
