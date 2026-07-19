import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="About Karangmenjangan"
          subtitle="History, culture, and the soul of a south coast village"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <h3 className="text-2xl font-sans font-bold text-[#184332] mb-4">Dusun Karangmenjangan</h3>
            <p className="font-sans text-[#26332E]/80 leading-relaxed mb-6">
              Karangmenjangan adalah salah satu dari tiga dusun di Desa Bulurejo, sebuah desa di dataran
              rendah pesisir Selatan Lumajang. Dengan jumlah penduduk sekitar 2.000 jiwa, dusun ini merupakan pusat kehidupan
              masyarakat petani dan nelayan dikawasan pesisir timur Lumajang.
            </p>
            <h3 className="text-2xl font-sans font-bold text-[#184332] mb-4">History</h3>
            <p className="font-sans text-[#26332E]/80 leading-relaxed mb-4">
              Sejarah Desa Bulurejo erat kaitannya dengan sejarah Masyarakat samin di Lumajang. Awal mulanya
              Desa Bulurejo merupakan kawasan hutan dan perkebunan yang dikenal dengan nama Mbuweng.
            </p>
            <blockquote className="italic border-l-4 border-[#BC6C25] pl-6 py-2 my-6 text-[#184332] bg-[#FEFAE0] rounded-r-lg">
              <p className="font-sans text-lg md:text-xl">
              "Mbuyeng, yang berarti pusing, karena banyak pendatang yang mengaku pusing saat singgah. Dari kata Mbuyeng (pusing) diambil nama Mbuyeng."
              </p>
            </blockquote>
            <p className="font-sans text-[#26332E]/80 leading-relaxed mb-4">
              Pada tahun 1952, semangat perubahan membawa nama baru: Bulurejo, yang terinspirasi dari banyaknya mata air bening di desa ini. Nama Bulurejo berasal dari kata "bulu" (air) dan "rejo" (ramai/berkembang).
            </p>
            <h3 className="text-2xl font-sans font-bold text-[#184332] mb-4 mt-8">Geography</h3>
            <ul className="list-disc pl-6 font-sans text-sm text-[#26332E]/70 leading-relaxed mb-4">
              <li className="mb-2">Letak: 7°21' - 7°31' LS dan 110°10' - 111°40' BT</li>
              <li className="mb-2">Luas wilayah: 456.654 Ha</li>
              <li className="mb-2">Suhu udara: 27-32°C</li>
              <li className="mb-2">Curah hujan: 2.045 mm/th</li>
              <li className="mb-2">Ketinggian: dataran rendah</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
