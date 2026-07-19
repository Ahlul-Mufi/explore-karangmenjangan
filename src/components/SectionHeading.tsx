import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl text-[#184332] mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-[#26332E]/70 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-[#BC6C25] mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
