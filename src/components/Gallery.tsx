import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import type { GalleryItem } from '../types'

interface GalleryProps {
  items: GalleryItem[]
}

export default function Gallery({ items }: GalleryProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
            className="aspect-square bg-[#FEFAE0] rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelected(item)}
          >
            <div className="w-full h-full bg-gradient-to-br from-[#184332]/15 to-[#FEFAE0] flex items-center justify-center text-[#184332]/30 font-sans text-sm p-2 text-center">
              {item.alt}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute -top-10 right-0 text-white hover:text-white/70 transition-colors"
                onClick={() => setSelected(null)}
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-[4/3] bg-[#FEFAE0] rounded-xl flex items-center justify-center text-[#184332]/30 font-sans text-lg">
                {selected.alt}
              </div>
              <p className="text-white text-center mt-3 font-sans text-sm">{selected.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
