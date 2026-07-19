import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Compass } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const showBg = scrolled || !isHome

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showBg ? 'bg-[#184332] shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 text-white">
              <Compass className="w-6 h-6" />
              <span className="font-sans text-lg font-semibold tracking-wide">
                Karangmenjangan
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-sm font-sans font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-white bg-white/15'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/explore"
                className="ml-3 px-5 py-2 bg-[#BC6C25] hover:bg-[#a05e1f] text-white rounded-full text-sm font-sans font-semibold transition-colors"
              >
                Explore Now
              </Link>
            </div>

            <button
              type="button"
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#184332]"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <Link to="/" className="flex items-center gap-2 text-white">
                <Compass className="w-6 h-6" />
                <span className="font-sans text-lg font-semibold">
                  Karangmenjangan
                </span>
              </Link>
              <button
                type="button"
                className="text-white p-2"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-xl text-base font-sans font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-white bg-white/15'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
