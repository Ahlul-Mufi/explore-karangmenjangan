import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import aboutImg from '../assets/About.jpeg'

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
            <h3 className="text-2xl font-sans font-bold text-[#184332] mb-4">Karangmenjangan Hamlet</h3>
            <p className="font-sans text-[#26332E]/80 leading-relaxed mb-6">
              Karangmenjangan is one of the three hamlets in Bulurejo Village, a village on the lowlands
              of Lumajang's southern coast. With a population of about 2,000 people, this hamlet is the center of life
              for farming and fishing communities in the eastern coastal area of Lumajang.
            </p>
            <h3 className="text-2xl font-sans font-bold text-[#184332] mb-4">History</h3>
            <p className="font-sans text-[#26332E]/80 leading-relaxed mb-4">
              The history of Bulurejo Village is closely linked to the history of the Samin community in Lumajang.
              Originally, Bulurejo Village was a forest and plantation area known as Mbuweng.
            </p>
            <blockquote className="italic border-l-4 border-[#BC6C25] pl-6 py-2 my-6 text-[#184332] bg-[#FEFAE0] rounded-r-lg">
              <p className="font-sans text-lg md:text-xl">
              "Mbuyeng, meaning dizzy, because many newcomers claimed to feel dizzy when they stopped here. From the word Mbuyeng (dizzy) the name Mbuyeng was taken."
              </p>
            </blockquote>
            <p className="font-sans text-[#26332E]/80 leading-relaxed mb-4">
              In 1952, a spirit of change brought a new name: Bulurejo, inspired by the many clear springs in the village. The name Bulurejo comes from the words "bulu" (water) and "rejo" (busy/thriving).
            </p>
            <h3 className="text-2xl font-sans font-bold text-[#184332] mb-4 mt-8">Geography</h3>
            <ul className="list-disc pl-6 font-sans text-sm text-[#26332E]/70 leading-relaxed mb-4">
              <li className="mb-2">Location: 7°21' - 7°31' S and 110°10' - 111°40' E</li>
              <li className="mb-2">Area: 456,654 Ha</li>
              <li className="mb-2">Air temperature: 27-32°C</li>
              <li className="mb-2">Rainfall: 2,045 mm/year</li>
              <li className="mb-2">Elevation: lowlands</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
