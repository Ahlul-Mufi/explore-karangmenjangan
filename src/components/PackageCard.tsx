import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Users, ArrowRight, Tag } from 'lucide-react'
import type { Package } from '../types'

interface PackageCardProps {
  pkg: Package
  index?: number
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}

export default function PackageCard({ pkg, index = 0 }: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/packages/${pkg.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="aspect-[16/10] bg-gradient-to-br from-[#184332]/20 to-[#FEFAE0] overflow-hidden relative">
          <div className="w-full h-full flex items-center justify-center text-[#184332]/30 font-sans text-lg">
            {pkg.name}
          </div>
          <span className="absolute top-3 left-3 px-3 py-1 bg-[#BC6C25] text-white text-xs font-sans font-semibold rounded-full">
            {pkg.category}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-sans text-xl text-[#184332] group-hover:text-[#BC6C25] transition-colors mb-2">
            {pkg.name}
          </h3>
          <p className="font-sans text-sm text-[#26332E]/70 mb-4 line-clamp-2">
            {pkg.tagline}
          </p>
          <div className="flex items-center gap-4 mb-4 text-xs font-sans text-[#26332E]/60">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {pkg.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" /> {pkg.minPerson}-{pkg.maxPerson} orang
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <div>
              <span className="flex items-center gap-1 text-xs text-[#26332E]/50 font-sans">
                <Tag className="w-3 h-3" /> Mulai dari
              </span>
              <p className="font-sans text-lg font-bold text-[#BC6C25]">
                {formatPrice(pkg.price)}
              </p>
              <p className="font-sans text-[10px] text-[#26332E]/50">{pkg.priceNote}</p>
            </div>
            <span className="flex items-center gap-1 text-sm font-sans font-medium text-[#184332] group-hover:text-[#BC6C25] transition-colors">
              Lihat Detail <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
