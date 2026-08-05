import { Link } from 'react-router-dom'
import { Compass, Mail, MapPin, MessageCircle, Camera, Music2, Video } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Explore', to: '/explore' },
  { label: 'Packages', to: '/packages' },
  { label: 'About', to: '/about' },
  { label: 'Culture', to: '/culture' },
  { label: 'UMKM', to: '/umkm' },
  { label: 'Gallery', to: '/gallery' },
]

export default function Footer() {
  return (
    <footer className="bg-[#184332] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-6 h-6" />
              <span className="font-sans text-lg font-semibold">
                KAWIKA
              </span>
            </div>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              Discover nature, heritage, and local life at Karangmenjangan — a hidden paradise in the southern coast of Lumajang, East Java.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-lg font-semibold mb-4">Navigation</h4>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-2 md:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-lg font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-white/50 shrink-0" />
                <p className="font-sans text-sm text-white/70">
                  Dusun Karangmenjangan, Desa Bulurejo,<br />
                  Kecamatan Tempursari, Kabupaten Lumajang,<br />
                  Jawa Timur 67375
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/50 shrink-0" />
                <a href="mailto:dusunkarangmenjangan@gmail.com" className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                  dusunkarangmenjangan@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-white/50 shrink-0" />
                <a
                  href="https://api.whatsapp.com/send?phone=6285234791369&text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Karangmenjangan%20tourism"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                >
                  +62 852-3479-1369 (Kholis)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-white/50 shrink-0" />
                <a
                  href="https://api.whatsapp.com/send?phone=6287792097651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                >
                  +62 877-9209-7651 (Aris)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Camera className="w-4 h-4 text-white/50 shrink-0" />
                <a href="https://www.instagram.com/explore.kawika" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                  instagram.com/explore.kawika
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Music2 className="w-4 h-4 text-white/50 shrink-0" />
                <a href="https://www.tiktok.com/@explore.kawika" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                  tiktok.com/@explore.kawika
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Video className="w-4 h-4 text-white/50 shrink-0" />
                <a href="https://www.youtube.com/@kampungwisatakarangmenjangan" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                  youtube.com/@kampungwisatakarangmenjangan
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="font-sans text-sm text-white/50">
            &copy; {new Date().getFullYear()} KAWIKA (Kampung Wisata Karangmenjangan). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
