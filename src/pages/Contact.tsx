import { Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Contact"
          subtitle="Get in touch with Karangmenjangan community"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-md p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-sans font-bold text-[#184332] mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#BC6C25] mt-1" />
                  <div>
                    <p className="font-sans font-semibold text-[#184332] text-sm">Address</p>
                    <p className="font-sans text-sm text-[#26332E]/70">
                      Dusun Karangmenjangan<br />
                      Desa Bulurejo, Kecamatan Tempursari<br />
                      Kabupaten Lumajang, Jawa Timur 67375
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#BC6C25] mt-1" />
                  <div>
                    <p className="font-sans font-semibold text-[#184332] text-sm">Email</p>
                    <a href="mailto:desabulurejo056@gmail.com" className="font-sans text-sm text-[#0077B6] hover:underline">
                      desabulurejo056@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#BC6C25] mt-1" />
                  <div>
                    <p className="font-sans font-semibold text-[#184332] text-sm">Kantor Desa</p>
                    <p className="font-sans text-sm text-[#26332E]/70">
                      Jl. Cendrawasih No. 29, Desa Bulurejo<br />
                      Kode Pos 67375
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#184332]/5 rounded-2xl p-6">
              <h3 className="text-2xl font-sans font-bold text-[#184332] mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <p className="font-sans font-semibold text-[#184332] text-sm">Kepala Desa Bulurejo</p>
                  <p className="font-sans text-sm text-[#26332E]/70">Rohman Adi</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="font-sans font-semibold text-[#184332] text-sm">Kepala Dusun Karangmenjangan</p>
                  <p className="font-sans text-sm text-[#26332E]/70">Nurkholis</p>
                </div>
                <p className="font-sans text-xs text-[#26332E]/50 mt-4">
                  Website ini adalah bagian dari program BBK (Bakti Bina Kampus) untuk mempromosikan potensi wisata dan UMKM lokal.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
