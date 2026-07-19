import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import type { Destination } from '../types'

interface DestinationCardProps {
  destination: Destination
  index?: number
}

export default function DestinationCard({ destination, index = 0 }: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/explore/${destination.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="aspect-[4/3] bg-[#FEFAE0] overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-[#184332]/20 to-[#FEFAE0] flex items-center justify-center text-[#184332]/30 font-sans text-lg">
            {destination.title}
          </div>
        </div>
        <div className="p-5">
          <span className="inline-block px-3 py-1 bg-[#BC6C25]/10 text-[#BC6C25] text-xs font-sans font-semibold rounded-full mb-3">
            {destination.category}
          </span>
          <h3 className="font-sans text-xl text-[#184332] group-hover:text-[#BC6C25] transition-colors mb-2">
            {destination.title}
          </h3>
          <p className="font-sans text-sm text-[#26332E]/70 mb-4 line-clamp-2">
            {destination.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-xs text-[#26332E]/50 font-sans">
              <MapPin className="w-3 h-3" />
              Karangmenjangan
            </span>
            <span className="flex items-center gap-1 text-sm font-sans font-medium text-[#184332] group-hover:text-[#BC6C25] transition-colors">
              Explore <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
