import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'
import aboutImg from '../assets/About.jpeg'

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img
            src={aboutImg}
            alt="Karangmenjangan"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-md"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <h3 className="text-2xl font-sans font-bold text-[#184332] mb-4">{t('about.hamletTitle')}</h3>
            <p className="font-sans text-[#26332E]/80 leading-relaxed mb-6">
              {t('about.para1')}
            </p>
            <h3 className="text-2xl font-sans font-bold text-[#184332] mb-4">{t('about.historyTitle')}</h3>
            <p className="font-sans text-[#26332E]/80 leading-relaxed mb-4">
              {t('about.para2')}
            </p>
            <blockquote className="italic border-l-4 border-[#BC6C25] pl-6 py-2 my-6 text-[#184332] bg-[#FEFAE0] rounded-r-lg">
              <p className="font-sans text-lg md:text-xl">
                {t('about.quote')}
              </p>
            </blockquote>
            <p className="font-sans text-[#26332E]/80 leading-relaxed mb-4">
              {t('about.para3')}
            </p>
            <h3 className="text-2xl font-sans font-bold text-[#184332] mb-4 mt-8">{t('about.geographyTitle')}</h3>
            <ul className="list-disc pl-6 font-sans text-sm text-[#26332E]/70 leading-relaxed mb-4">
              <li className="mb-2">{t('about.geo1')}</li>
              <li className="mb-2">{t('about.geo2')}</li>
              <li className="mb-2">{t('about.geo3')}</li>
              <li className="mb-2">{t('about.geo4')}</li>
              <li className="mb-2">{t('about.geo5')}</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
