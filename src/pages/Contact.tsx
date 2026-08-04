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
                      Karangmenjangan Hamlet<br />
                      Bulurejo Village, Tempursari District<br />
                      Lumajang Regency, East Java 67375
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
                    <p className="font-sans font-semibold text-[#184332] text-sm">Village Office</p>
                    <p className="font-sans text-sm text-[#26332E]/70">
                      Jl. Cendrawasih No. 29, Bulurejo Village<br />
                      Postal Code 67375
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#184332]/5 rounded-2xl p-6">
              <h3 className="text-2xl font-sans font-bold text-[#184332] mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <p className="font-sans font-semibold text-[#184332] text-sm">Head of Bulurejo Village</p>
                  <p className="font-sans text-sm text-[#26332E]/70">Rohman Adi</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="font-sans font-semibold text-[#184332] text-sm">Head of Karangmenjangan Hamlet</p>
                  <p className="font-sans text-sm text-[#26332E]/70">Nurkholis</p>
                </div>
                <p className="font-sans text-xs text-[#26332E]/50 mt-4">
                  This website is part of the BBK (Bakti Bina Kampus) program to promote local tourism potential and UMKM.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
