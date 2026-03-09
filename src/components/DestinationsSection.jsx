import { motion } from 'framer-motion'
import DestinationCard from './DestinationCard'
import { destinations } from '../data/destinations'

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-32 relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(201,149,26,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-gold-500/30" />
            <span className="font-mono text-[9px] tracking-[0.4em] text-gold-400/50 uppercase">
              Catalogue 2025
            </span>
            <span className="w-12 h-px bg-gold-500/30" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white/90 mb-5">
            Nos <span className="gold-text italic">Époques</span> Sélectionnées
          </h2>
          <p className="font-body text-sm tracking-[0.1em] text-white/35 max-w-lg mx-auto">
            Chaque destination est soigneusement choisie pour son caractère unique,
            son intensité historique, et son potentiel d'émerveillement.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard key={destination.id} destination={destination} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/25 mb-6">
            Vous ne savez pas quelle époque vous correspond ?
          </p>
          <a href="#quiz" className="btn-outline-gold">
            Découvrir mon profil temporel
          </a>
        </motion.div>
      </div>
    </section>
  )
}
