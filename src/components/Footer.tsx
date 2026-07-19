import { Link } from 'react-router-dom'
import { Compass, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Explore', to: '/explore' },
  { label: 'Paket Wisata', to: '/packages' },
  { label: 'About', to: '/about' },
  { label: 'Culture', to: '/culture' },
  { label: 'UMKM', to: '/umkm' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
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
                Karangmenjangan
              </span>
            </div>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              Discover nature, heritage, and local life at Karangmenjangan — a hidden paradise in the southern coast of Lumajang, East Java.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-lg font-semibold mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
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
                <a href="mailto:desabulurejo056@gmail.com" className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                  desabulurejo056@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="font-sans text-sm text-white/50">
            &copy; {new Date().getFullYear()} Karangmenjangan Heritage &amp; Nature. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
