import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import DestinationCard from '../components/DestinationCard'
import { destinations } from '../data/destinations'

export default function Explore() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Explore"
          subtitle="Discover the beauty of Karangmenjangan"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinations.map((d, i) => (
            <DestinationCard key={d.id} destination={d} index={i} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
