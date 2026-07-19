import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Karangmenjangan is a hidden paradise. The nature and the warmth of the people are unforgettable.",
    author: "Travel Bloggers Indonesia",
  },
  {
    quote: "Sunset at Watu Godeg is the best I've ever witnessed. A true hidden gem.",
    author: "Nomadic Footprints",
  },
  {
    quote: "Susur sungai di malam hari dengan kunang-kunang adalah pengalaman yang ajaib.",
    author: "Jelajah Alam by Irene"
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="py-20 px-4 bg-[#184332]/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-sans text-center text-[#184332] mb-14"
        >
          What People Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8"
            >
              <Quote className="w-10 h-10 text-[#BC6C25]/30 mb-4" />
              <p className="italic text-[#26332E]/80 font-sans leading-relaxed mb-6">"{t.quote}"</p>
              <p className="text-sm font-sans font-bold text-[#184332]">{t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
