import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { cultureItems } from '../data/culture'
import { useLanguage } from '../i18n/LanguageContext'

export default function Culture() {
  const { t, pick } = useLanguage()

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={t('culture.title')}
          subtitle={t('culture.subtitle')}
        />
        <div className="space-y-16">
          {cultureItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={item.image}
                    alt={pick(item.title)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl md:text-4xl font-sans font-bold text-[#184332] mb-2">
                  {pick(item.title)}
                </h3>
                <p className="text-sm font-sans uppercase text-[#BC6C25] tracking-widest mb-4">
                  {pick(item.subtitle)}
                </p>
                <p className="font-sans text-lg text-[#26332E]/80 mb-4 italic">
                  {pick(item.description)}
                </p>
                <p className="font-sans text-sm text-[#26332E]/70 leading-relaxed whitespace-pre-line">
                  {pick(item.content)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
