import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ChevronRight, MapPin } from 'lucide-react'
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
import { useLanguage } from '../i18n/LanguageContext'
import maskot from '../assets/maskot-crop.png'
import maskot2 from '../assets/maskot-crop-2.png'
import maskot3 from '../assets/maskot-crop-3.png'
import heroImg from '../assets/CETAK (2).png'
import cetakImg from '../assets/CETAK.png'
import viewImg from '../assets/view.jpg.jpeg'
import localLifeImg from '../assets/IMG_8059.JPG.jpeg'

export default function Home() {
  const { t, pick, tCat } = useLanguage()
  const [flyingDone, setFlyingDone] = useState(false)
  const [destImgIn, setDestImgIn] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setFlyingDone(true), 4000)
    return () => clearTimeout(timer)
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
              {t('home.heroTagline')}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              {t('home.heroTitle1')}
              <br />
              <span className="text-[#BC6C25]">{t('home.heroTitle2')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 mb-8 text-white/80 font-sans text-lg md:text-xl max-w-2xl mx-auto"
            >
              {t('home.heroSubtitle')}
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
                {t('nav.exploreNow')} <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/culture"
                className="inline-flex items-center gap-2 border-2 border-white/50 hover:bg-white/10 text-white px-8 py-3 rounded-full font-sans font-medium transition-colors"
              >
                {t('home.discoverCulture')}
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
                {t('home.featuredTitle')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-[#26332E]/70 text-base md:text-lg max-w-2xl"
              >
                {t('home.featuredSubtitle')}
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
              {t('home.seeAllDestinations')}
            </Button>
          </div>
        </div>
      </section>

      {/* Paket Wisata */}
      <section className="py-20 px-4 bg-[#FEFAE0]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title={t('home.packagesTitle')}
            subtitle={t('home.packagesSubtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.slice(0, 3).map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/packages" variant="primary">
              {t('home.viewAllPackages')}
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
                {t('home.natureTitle1')}<br />{t('home.natureTitle2')}
              </h2>
              <p className="font-sans text-lg md:text-xl text-[#26332E]/80 mb-6 leading-relaxed">
                {t('home.natureText1')}
              </p>
              <p className="font-sans text-sm md:text-base text-[#26332E]/60 mb-8 leading-relaxed">
                {t('home.natureText2')}
              </p>
              <Button to="/about" variant="outline">
                {t('home.learnMore')}
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/5] bg-gradient-to-br from-[#184332]/20 to-[#FEFAE0] rounded-3xl flex items-center justify-center shadow-lg overflow-hidden"
            >
              <img
                src={viewImg}
                alt={t('home.natureTitle1')}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage & Culture */}
      <section className="py-20 px-4 bg-[#184332]/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title={t('home.heritageTitle')}
            subtitle={t('home.heritageSubtitle')}
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
                {i === 0 ? (
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src={maskot}
                      alt={pick(item.title)}
                      className="w-[120px] h-[120px] object-contain"
                    />
                  </div>
                ) : i === 1 ? (
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src={maskot3}
                      alt={pick(item.title)}
                      className="w-[120px] h-[120px] object-contain"
                    />
                  </div>
                ) : i === 2 ? (
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src={maskot2}
                      alt={pick(item.title)}
                      className="w-[120px] h-[120px] object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-[#BC6C25]/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl">⛵</span>
                  </div>
                )}
                <h3 className="font-sans text-xl font-semibold text-[#184332] mb-2">{pick(item.title)}</h3>
                <p className="font-sans text-sm text-[#26332E]/50 mb-3">{pick(item.subtitle)}</p>
                <p className="font-sans text-sm text-[#26332E]/70 leading-relaxed">{pick(item.description)}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/culture" variant="primary">
              {t('home.exploreCulture')}
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
                  {t('home.localLifeTitle')}
                </h2>
                <p className="font-sans text-lg md:text-xl text-[#26332E]/80 mb-6 leading-relaxed">
                  {t('home.localLifeText1')}
                </p>
                <p className="font-sans text-sm md:text-base text-[#26332E]/70 mb-6 leading-relaxed">
                  {t('home.localLifeText2')}
                </p>
                <p className="font-sans text-sm md:text-base text-[#26332E]/70 leading-relaxed">
                  {t('home.localLifeText3')}
                </p>
              </motion.div>
              <motion.div
                className="order-1 md:order-2 aspect-[5/6] bg-gradient-to-br from-[#184332]/10 to-[#EFE1C6] rounded-3xl flex items-center justify-center shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={localLifeImg}
                  alt={t('home.localLifeTitle')}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

      {/* UMKM / Local Products */}
      <section className="py-20 px-4 bg-[#FEFAE0]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title={t('home.umkmTitle')}
            subtitle={t('home.umkmSubtitle')}
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
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#BA6C25]/10 to-[#184332]/5 flex items-center justify-center overflow-hidden">
                    {item.image && !item.image.startsWith('/images/') ? (
                      <img src={item.image} alt={pick(item.name)} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[#184332]/30 font-sans text-sm">{pick(item.name)}</span>
                    )}
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-0.5 bg-[#0077B6]/10 text-[#0077B6] rounded text-xs font-sans font-semibold mb-2">
                      {tCat(item.category)}
                    </span>
                    <h3 className="font-sans text-base font-semibold text-[#184332] mb-1">{pick(item.name)}</h3>
                    <p className="font-sans text-xs text-[#26332E]/70 line-clamp-2">{pick(item.description)}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Button to="/umkm" variant="primary">
              {t('home.viewAllProducts')}
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery */}

      <section className="py-20 px-4 bg-[#FEFAE0]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title={t('home.galleryTitle')}
            subtitle={t('home.gallerySubtitle')}
          />
          <Gallery items={galleryItems.slice(0, 8)} />
          <div className="text-center mt-10">
            <Button to="/gallery" variant="outline">
              {t('home.viewFullGallery')}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Location */}
      <section className="py-20 px-4 bg-[#FEFAE0]">
        <SectionHeading
          title={t('home.mapTitle')}
          subtitle={t('home.mapSubtitle')}
        />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="font-sans text-2xl font-semibold text-[#184332] mb-4">Karangmenjangan</h3>
              <p className="font-sans text-sm text-[#26332E] whitespace-pre-line leading-relaxed">{t('home.mapAddress')}</p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="font-sans text-xs text-[#26332E]/60">
                  {t('home.distance1')}
                </p>
                <p className="font-sans text-xs text-[#26332E]/60 mt-2">
                  {t('home.distance2')}
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 w-full h-80 md:h-96 bg-[#184352]/10 rounded-2xl overflow-hidden shadow-md relative">
            <iframe
              src='https://www.google.com/maps?q=Karangmenjangan+Bulurejo+Tempursari+Lumajang&output=embed'
              className="w-full h-full"
              title="Karangmenjangan Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Karangmenjangan+Bulurejo+Tempursari+Lumajang"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-[#184332] text-white font-sans text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-[#BC6C25] transition-colors"
            >
              <MapPin className="w-4 h-4" /> {t('home.openInGoogleMaps')}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-16 md:pt-24 pb-10 md:pb-24 px-4 bg-[#184332] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-sans font-bold mb-6"
          >
            {t('home.ctaTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-sans text-white/80 mb-10"
          >
            {t('home.ctaSubtitle')}
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
              {t('home.viewTourPackages')}
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=6281335269128&text=Hello%2C%20I%20am%20interested%20in%20the%20Karangmenjangan%20tourism"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/50 hover:bg-white/10 text-white font-sans font-medium px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors"
            >
              {t('home.chatWhatsapp')}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
