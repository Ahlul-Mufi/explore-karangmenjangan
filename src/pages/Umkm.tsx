import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { umkmItems } from '../data/umkm'

export default function Umkm() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="UMKM and Local Products"
          subtitle="Handcrafted goods and local flavors from Karangmenjangan"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {umkmItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#BC6C25]/10 to-[#184332]/5 flex items-center justify-center">
                <span className="text-[#184332]/30 font-sans text-lg">{item.name}</span>
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 bg-[#0077B6]/10 text-[#0077B6] rounded-full text-xs font-sans font-semibold mb-3">
                  {item.category}
                </span>
                <h3 className="font-sans text-lg font-semibold text-[#184332] mb-2">{item.name}</h3>
                <p className="font-sans text-sm text-[#26332E]/70 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
