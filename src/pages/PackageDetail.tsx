import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Users, Check, X, MessageCircle, MapPin } from 'lucide-react'
import { getPackageBySlug } from '../data/packages'

function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}

export default function PackageDetail() {
  const { slug } = useParams()
  const pkg = getPackageBySlug(slug || '')

  if (!pkg) {
    return (
      <div className="pt-24 pb-16 px-4 text-center">
        <h2 className="text-2xl font-sans text-[#184332] mb-4">Paket tidak ditemukan</h2>
        <Link to="/packages" className="text-[#BC6C25] underline">Kembali ke daftar paket</Link>
      </div>
    )
  }

  const waUrl = `https://wa.me/${pkg.whatsapp}?text=${encodeURIComponent(`Halo, saya tertarik dengan paket "${pkg.name}". Mohon info lebih lanjut.`)}`

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="h-64 md:h-80 bg-gradient-to-br from-[#184332]/30 to-[#FEFAE0] flex items-center justify-center relative">
        <div className="text-center text-[#184332]">
          <span className="inline-block px-3 py-1 bg-[#BC6C25]/20 text-[#BC6C25] rounded-full text-xs font-sans font-semibold mb-4">
            {pkg.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-sans font-bold mb-3">{pkg.name}</h1>
          <p className="text-lg font-sans text-[#26332E]/70 max-w-xl mx-auto px-4">{pkg.tagline}</p>
        </div>
      </div>

      <div className="px-4">
        <Link
          to="/packages"
          className="inline-flex items-center gap-2 font-sans text-sm text-[#BC6C25] mt-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Paket Wisata
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8">
        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <Clock className="w-6 h-6 text-[#BC6C25] mx-auto mb-2" />
            <p className="font-sans text-xs text-[#26332E]/60 mb-1">Durasi</p>
            <p className="font-sans text-sm font-semibold text-[#184332]">{pkg.duration}</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <Users className="w-6 h-6 text-[#BC6C25] mx-auto mb-2" />
            <p className="font-sans text-xs text-[#26332E]/60 mb-1">Peserta</p>
            <p className="font-sans text-sm font-semibold text-[#184332]">{pkg.minPerson}-{pkg.maxPerson} orang</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm col-span-2 md:col-span-2">
            <p className="font-sans text-xs text-[#26332E]/60 mb-1">Harga Mulai Dari</p>
            <p className="font-sans text-2xl font-bold text-[#BC6C25]">{formatPrice(pkg.price)}</p>
            <p className="font-sans text-[10px] text-[#26332E]/50">{pkg.priceNote}</p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-md p-8 md:p-10 mb-8"
        >
          <h2 className="text-xl font-sans font-bold text-[#184332] mb-4">Tentang Paket Ini</h2>
          <p className="font-sans text-base text-[#26332E]/80 leading-relaxed mb-6">{pkg.description}</p>

          <h3 className="text-lg font-sans font-bold text-[#184332] mb-3">Highlights</h3>
          <ul className="space-y-2 mb-0">
            {pkg.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 font-sans text-sm text-[#26332E]/80">
                <Check className="w-4 h-4 text-[#BC6C25] mt-0.5 shrink-0" /> {h}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Itinerary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-md p-8 md:p-10 mb-8"
        >
          <h2 className="text-xl font-sans font-bold text-[#184332] mb-6">Itinerary</h2>
          <div className="space-y-4">
            {pkg.itinerary.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-16 shrink-0 text-right">
                  <span className="font-sans text-sm font-bold text-[#BC6C25]">{item.time}</span>
                </div>
                <div className="relative flex-1 pb-4 border-l-2 border-[#BC6C25]/20 pl-4">
                  <div className="absolute left-[-5px] top-1.5 w-2 h-2 bg-[#BC6C25] rounded-full" />
                  <p className="font-sans text-sm text-[#26332E]/80">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Facilities & Includes/Excludes */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-md p-8"
          >
            <h2 className="text-xl font-sans font-bold text-[#184332] mb-4">Fasilitas</h2>
            <ul className="space-y-2">
              {pkg.facilities.map((f, i) => (
                <li key={i} className="flex items-center gap-2 font-sans text-sm text-[#26332E]/80">
                  <Check className="w-4 h-4 text-green-500" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-white rounded-2xl shadow-md p-8"
          >
            <h2 className="text-xl font-sans font-bold text-[#184332] mb-4">Termasuk & Tidak Termasuk</h2>
            <div className="mb-4">
              <p className="font-sans text-xs font-semibold text-green-600 uppercase tracking-wider mb-2">Termasuk</p>
              <ul className="space-y-1">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 font-sans text-sm text-[#26332E]/80">
                    <Check className="w-3.5 h-3.5 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sans text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">Tidak Termasuk</p>
              <ul className="space-y-1">
                {pkg.excludes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 font-sans text-sm text-[#26332E]/80">
                    <X className="w-3.5 h-3.5 text-red-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-md p-8 mb-8"
        >
          <h2 className="text-xl font-sans font-bold text-[#184332] mb-4">Lokasi</h2>
          <p className="flex items-start gap-2 font-sans text-sm text-[#26332E]/70">
            <MapPin className="h-5 w-5 text-[#BC6C25] shrink-0 mr-1" />
            Dusun Karangmenjangan, Desa Bulurejo, Kecamatan Tempursari, Kabupaten Lumajang, Jawa Timur 67375
          </p>
        </motion.div>

        {/* CTA WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#184332] rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-sans font-bold text-white mb-3">Tertarik dengan paket ini?</h2>
          <p className="text-white/70 font-sans text-sm mb-6">Hubungi kami via WhatsApp untuk informasi dan pemesanan</p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-full font-sans font-semibold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Booking via WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  )
}
