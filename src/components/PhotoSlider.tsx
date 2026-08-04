import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryItem } from '../types'

interface PhotoSliderProps {
  photos: GalleryItem[]
  autoplay?: boolean
  interval?: number
  className?: string
}

export default function PhotoSlider({
  photos,
  autoplay = true,
  interval = 4000,
  className = '',
}: PhotoSliderProps) {
  const [index, setIndex] = useState(0)

  const next = useCallback(
    () => setIndex((i) => (i + 1) % photos.length),
    [photos.length]
  )
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length)

  useEffect(() => {
    if (!autoplay || photos.length <= 1) return
    const t = setInterval(next, interval)
    return () => clearInterval(t)
  }, [autoplay, interval, next, photos.length])

  if (photos.length === 0) return null

  return (
    <div className={`relative overflow-hidden rounded-2xl aspect-[4/3] bg-[#184332]/10 shadow-lg ${className}`}>
      <motion.div
        className="flex h-full"
        animate={{ x: `${-index * 100}%` }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {photos.map((p) => (
          <div key={p.id} className="min-w-full w-full h-full flex-shrink-0">
            <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#184332] flex items-center justify-center shadow transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#184332] flex items-center justify-center shadow transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-white' : 'w-2 bg-white/60 hover:bg-white/90'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
