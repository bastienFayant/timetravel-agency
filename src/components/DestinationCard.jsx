import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ICONS = {
  'paris-1889': '⚜',
  cretaceous: '🦕',
  'florence-1504': '🎨',
}

export default function DestinationCard({ destination, index }) {
  const [expanded, setExpanded] = useState(false)

  const { id, title, era, price, priceFormatted, tagline, description, highlights, difficulty, duration, maxGroup, imageBg, accentColor } = destination

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative group cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-sm border border-white/5 group-hover:border-gold-500/30 transition-colors duration-500"
        style={{
          boxShadow: expanded ? `0 0 40px ${accentColor}18` : 'none',
          transition: 'box-shadow 0.5s ease',
        }}
      >
        {/* Image area */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute inset-0"
            style={{ background: imageBg }}
          />

          {/* Visual decoration inside image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute w-40 h-40 rounded-full opacity-10"
              style={{ border: `1px solid ${accentColor}` }}
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute w-24 h-24 rounded-full opacity-20"
              style={{ border: `1px dashed ${accentColor}` }}
            />
            <span className="text-5xl relative z-10 opacity-40">{ICONS[id]}</span>
          </div>

          {/* Era badge */}
          <div className="absolute top-4 left-4">
            <span
              className="font-mono text-[9px] tracking-[0.3em] uppercase px-3 py-1.5"
              style={{
                background: `${accentColor}20`,
                border: `1px solid ${accentColor}40`,
                color: accentColor,
              }}
            >
              {era}
            </span>
          </div>

          {/* Price badge */}
          <div className="absolute top-4 right-4">
            <span className="font-display text-lg font-light gold-text">
              {priceFormatted}
            </span>
          </div>

          {/* Gradient overlay at bottom */}
          <div
            className="absolute inset-x-0 bottom-0 h-24"
            style={{
              background: `linear-gradient(to top, #0d0d12, transparent)`,
            }}
          />
        </div>

        {/* Card body */}
        <div className="bg-obsidian-800 p-6">
          {/* Title */}
          <h3 className="font-display text-2xl font-light text-white/90 mb-1">
            {title}
          </h3>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-400/60 mb-5">
            {tagline}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mb-5">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: accentColor }} />
                <span className="font-body text-xs tracking-wide text-white/50">{h}</span>
              </li>
            ))}
          </ul>

          {/* Meta row */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            <span className="font-mono text-[10px] text-white/30">{duration}</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="font-mono text-[10px] text-white/30">Max {maxGroup} pers.</span>
            <span className="w-px h-3 bg-white/10" />
            <span
              className="font-mono text-[10px]"
              style={{ color: difficulty === 'Extreme' ? '#ef4444' : '#4ade80' }}
            >
              {difficulty}
            </span>
          </div>

          {/* Expand indicator */}
          <div className="flex items-center justify-between mt-4">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white/25">
              {expanded ? 'Masquer les détails' : 'Voir les détails'}
            </span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gold-400/40 text-xs"
            >
              ▼
            </motion.span>
          </div>
        </div>

        {/* Expanded details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="bg-obsidian-700 px-6 py-6 border-t border-white/5">
                <p className="font-body text-sm leading-relaxed text-white/50 mb-5">
                  {description}
                </p>
                <motion.a
                  whileHover={{ x: 4 }}
                  href="#quiz"
                  className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase"
                  style={{ color: accentColor }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Évaluer ma compatibilité
                  <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  )
}
