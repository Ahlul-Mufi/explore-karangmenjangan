import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Bulurejo Village is a hidden gem with extraordinary natural potential. The beauty and richness of its natural resources are a great asset for continued development, enabling progress and improving the economic welfare of the community in the future.",
    author: "KKN-BBK 8 Bulurejo II",
  },
  {
    quote: "Arriving at Karangmenjangan during the golden full moon, a glimpse of God's beauty that will always be longed for.",
    author: "Ola Djuhartono",
  },
  {
    quote: "Don't forget to camp at the TPI reforestation area.",
    author: "Regu Tulip",
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
