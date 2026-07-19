import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import DestinationCard from '../components/DestinationCard'
import Gallery from '../components/Gallery'
import { destinations } from '../data/destinations'
import { cultureItems } from '../data/culture'
import { umkmItems } from '../data/umkm'
import { galleryItems } from '../data/gallery'
import { packages } from '../data/packages'
import PackageCard from '../components/PackageCard'
import TestimonialCarousel from '../components/TestimonialCarousel'
import heroImg from '../assets/CETAK (2).png'
import cetakImg from '../assets/CETAK.png'

export default function Home() {
  const [flyingDone, setFlyingDone] = useState(false)
  const [destImgIn, setDestImgIn] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setFlyingDone(true), 4000)
    return () => clearTimeout(t)
  }, [])
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#184332]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #BC6C25 0%, transparent 70%), radial-gradient(circle at 75% 75%, #0077B6 0%, transparent 70%), radial-gradient(at 50% 100%, #184332 0%, transparent)`
        }} />

        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 py-20 flex flex-col items-center gap-1">
          {/* Flying image — foreground */}
          <motion.img
            src={heroImg}
            alt="Karangmenjangan"
            initial={{ opacity: 0, x: '-50vw', y: '30vh', rotate: -25, scale: 0.4 }}
            animate={flyingDone
              ? { opacity: 1, y: [0, -14, 0, 10, 0], x: [0, 8, -5, 8, 0], rotate: [0, 3, -2, 3, 0], scale: 1 }
              : { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }
            }
            transition={flyingDone
              ? { repeat: Infinity, duration: 7, ease: 'easeInOut' }
              : { duration: 2.5, ease: 'easeOut' }
            }
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain drop-shadow-[0_0_30px_rgba(188,108,37,0.4)]"
          />

          {/* Text content */}
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[#BC6C25] font-sans text-sm md:text-base uppercase tracking-widest mb-4"
            >
              Hidden Paradise in East Java
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Explore the Hidden Beauty
              <br />
              <span className="text-[#BC6C25]">of Karangmenjangan</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 mb-8 text-white/80 font-sans text-lg md:text-xl max-w-2xl mx-auto"
            >
              Discover nature, heritage, and local life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex gap-4 justify-center"
            >
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 bg-[#BC6C25] hover:bg-[#a05e1f] text-white px-8 py-3 rounded-full font-sans font-semibold transition-colors"
              >
                Explore Now <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/culture"
                className="inline-flex items-center gap-2 border-2 border-white/50 hover:bg-white/10 text-white px-8 py-3 rounded-full font-sans font-medium transition-colors"
              >
                Discover Culture
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 z-20"
        >
          <ArrowDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </section>

      {/* Featured Destinations */}
      <section className="relative pt-4 pb-20 px-4 bg-[#FEFAE0] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-10">
            <div className="text-center sm:text-left flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="font-sans text-3xl md:text-4xl lg:text-5xl text-[#184332] mb-4 leading-tight"
              >
                Featured Destinations
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-[#26332E]/70 text-base md:text-lg max-w-2xl"
              >
                Curated picks of top places to explore in Karangmenjangan
              </motion.p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-20 h-1 bg-[#BC6C25] mt-6 origin-left sm:mx-0 mx-auto"
              />
            </div>
            <motion.img
              src={cetakImg}
              alt="Cetak"
              initial={{ opacity: 0, x: 120, y: -60, rotate: -15, scale: 0.5 }}
              whileInView={destImgIn
                ? { opacity: 1, x: 0, y: [0, -12, 0, 10, 0], rotate: [0, 4, -3, 4, 0], scale: 1 }
                : { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }
              }
              viewport={{ once: true }}
              transition={destImgIn
                ? { repeat: Infinity, duration: 5, ease: 'easeInOut' }
                : { duration: 0.8, ease: 'easeOut' }
              }
              onAnimationComplete={() => setDestImgIn(true)}
              className="hidden md:block w-36 h-36 lg:w-48 lg:h-48 object-contain flex-shrink-0 drop-shadow-lg"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.slice(0, 3).map((dest, i) => (
              <DestinationCard key={dest.id} destination={dest} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/explore" variant="primary">
              See all destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Paket Wisata */}
      <section className="py-20 px-4 bg-[#FEFAE0]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Paket Wisata"
            subtitle="Pilih paket wisata yang sesuai dengan keinginan Anda"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.slice(0, 3).map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/packages" variant="primary">
              Lihat semua paket
            </Button>
          </div>
        </div>
      </section>

      {/* Explore Nature (About section) */}
      <section className="py-20 px-4 bg-[#FEFAE0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-sans text-4xl md:text-5xl text-[#184332] mb-6 leading-tight">
                Immerse yourself<br />in nature
              </h2>
              <p className="font-sans text-lg md:text-xl text-[#26332E]/80 mb-6 leading-relaxed">
                From the gentle rustle of cashew nut leaves to the roar of southern waves against the rocks.
              </p>
              <p className="font-sans text-sm md:text-base text-[#26332E]/60 mb-8 leading-relaxed">
                The hills are covered by cashew trees, their fruits falling silently to the ground. Cassava and corn grow on the slopes shaded by mango and durian trees. Darkness reveals fireflies along the riverbanks.  
                This is life at Karangmenjangan.
              </p>
              <Button to="/about" variant="outline">
                Learn more
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/5] bg-gradient-to-br from-[#184332]/20 to-[#FEFAE0] rounded-3xl flex items-center justify-center shadow-lg"
            >
              <span className="text-[#184332]/30 font-sans text-lg">Nature Image</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage & Culture */}
      <section className="py-20 px-4 bg-[#184332]/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Heritage & Culture"
            subtitle="Traditions and stories passed down through generations"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {cultureItems.slice(0, 3).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#184332]/5"
              >
                <div className="w-16 h-16 bg-[#BC6C25]/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">{i === 0 ? '🙏' : i === 1 ? '⛵' : '🪷'}</span>
                </div>
                <h3 className="font-sans text-xl font-semibold text-[#184332] mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-[#26332E]/50 mb-3">{item.subtitle}</p>
                <p className="font-sans text-sm text-[#26332E]/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/culture" variant="primary">
              Explore culture
            </Button>
          </div>
        </div>
      </section>

        {/* Local Experience */}
        <section className="py-20 px-4 bg-[#FEFAE0]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="order-2 md:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-sans text-4xl md:text-5xl text-[#184332] mb-6 leading-tight">
                  Live the local life
                </h2>
                <p className="font-sans text-lg md:text-xl text-[#26332E]/80 mb-6 leading-relaxed">
                  Experience daily life with the Karangmenjangan community.
                </p>
                <p className="font-sans text-sm md:text-base text-[#26332E]/70 mb-6 leading-relaxed">
                  Join the fisherman at dawn as they check their nets amongst the boats at the end of the river. Participate in a cooking class using the day's catch. Listen to elders tell stories of ancestors beneath the banyan tree or learn about the preparation of offerings for sacred rituals.
                </p>
                <p className="font-sans text-sm md:text-base text-[#26332E]/70 leading-relaxed">
                  These are the experiences that remain with you long after you return home.
                </p>
              </motion.div>
              <motion.div
                className="order-1 md:order-2 aspect-[5/6] bg-gradient-to-br from-[#184332]/10 to-[#EFE1C6] rounded-3xl flex items-center justify-center shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[#184332]/30 font-sans text-lg">Local Life</span>
              </motion.div>
            </div>
          </div>
        </section>

      {/* UMKM / Local Products */}
      <section className="py-20 px-4 bg-[#FEFAE0]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="UMKM & Local Products"
            subtitle="Handcrafted goods and local flavors from Karangmenjangan"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {umkmItems.slice(0, 6).map((item, i) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#BA6C25]/10 to-[#184332]/5 flex items-center justify-center">
                    <span className="text-[#184332]/30 font-sans text-sm">{item.name}</span>
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-0.5 bg-[#0077B6]/10 text-[#0077B6] rounded text-xs font-sans font-semibold mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-sans text-base font-semibold text-[#184332] mb-1">{item.name}</h3>
                    <p className="font-sans text-xs text-[#26332E]/70 line-clamp-2">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Button to="/umkm" variant="primary">
              View all products
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery */}

      <section className="py-20 px-4 bg-[#FEFAE0]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Gallery"
            subtitle="Capturing the beauty of Karangmenjangan"
          />
          <Gallery items={galleryItems.slice(0, 8)} />
          <div className="text-center mt-10">
            <Button to="/gallery" variant="outline">
              View full gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Location */}
      <section className="py-20 px-4 bg-[#FEFAE0]">
        <SectionHeading
          title="Find us on the map"
          subtitle="Come visit us in the South coast of Lumajang, East Java"
        />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="font-sans text-2xl font-semibold text-[#184332] mb-4">Karangmenjangan</h3>
              <p className="font-sans text-sm text-[#26332E] mb-2">Dusun Karangmenjangan</p>
              <p className="font-sans text-sm text-[#26332E] mb-2">Desa Bulurejo</p>
              <p className="font-sans text-sm text-[#26332E] mb-2">Kecamatan Tempursari</p>
              <p className="font-sans text-sm text-[#26332E] mb-4">Kabupaten Lumajang, Jawa Timur 67375</p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="font-sans text-xs text-[#26332E]/60">
                  ~56 km arah selatan dari Pusat Kabupaten Lumajang (tempuh ~1,5 jam)
                </p>
                <p className="font-sans text-xs text-[#26332E]/60 mt-2">
                  ~5,5 km arah selatan dari Kecamatan Tempursari (tempuh ~10 menit)
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 w-full h-80 md:h-96 bg-[#184352]/10 rounded-2xl overflow-hidden flex items-center justify-center shadow-md">
            <div className="text-center">
              <iframe
                src='https://www.google.com.gg/maps?q=Karangmenjangan+Bulurejo+Tempursari&output=embed'
                className="w-full h-80 md:h-96"
                title="Karangmenjangan Location"
                loading="lazy"
                sandbox="">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-[#184332] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-sans font-bold mb-6"
          >
            Ready to Explore Karangmenjangan?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-sans text-white/80 mb-10"
          >
            Discover the stories, nature, and local life waiting for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/packages"
              className="bg-white text-[#184332] font-sans font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-white/90 transition-colors"
            >
              Lihat Paket Wisata
            </Link>
            <a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20wisata%20Karangmenjangan"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/50 hover:bg-white/10 text-white font-sans font-medium px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors"
            >
              Chat WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
