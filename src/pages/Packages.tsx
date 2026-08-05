import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import PackageCard from '../components/PackageCard'
import { packages } from '../data/packages'
import { useLanguage } from '../i18n/LanguageContext'

export default function Packages() {
  const { t } = useLanguage()

  return (
    <div className="pt-24 pb-16">
      <section className="px-4 bg-[#FEFAE0]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title={t('packages.title')}
            subtitle={t('packages.subtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#184332] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-sans font-bold mb-4"
          >
            {t('packages.customTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 font-sans text-lg mb-8"
          >
            {t('packages.customSubtitle')}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="https://api.whatsapp.com/send?phone=6281335269128&text=Hello%2C%20I%20would%20like%20to%20ask%20about%20the%20Karangmenjangan%20tour%20packages"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-full font-sans font-semibold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            {t('home.chatWhatsapp')}
          </motion.a>
        </div>
      </section>
    </div>
  )
}
