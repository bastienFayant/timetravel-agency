import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Animated background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(201,149,26,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(245,215,142,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Floating grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,149,26,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,149,26,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(7,7,9,0.8) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="w-16 h-px bg-gold-500/40" />
          <span className="font-mono text-[10px] tracking-[0.4em] text-gold-400/60 uppercase">
            Est. 2024 — Temporal Luxury
          </span>
          <span className="w-16 h-px bg-gold-500/40" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-6"
        >
          <span className="text-white/90">Travel Through</span>
          <br />
          <span className="gold-text italic">Time</span>
          <span className="text-white/90"> in Absolute</span>
          <br />
          <span className="text-white/70 font-extralight">Luxury</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-sm md:text-base font-light tracking-[0.15em] text-white/40 mb-14 max-w-xl mx-auto uppercase"
        >
          Experience history like never before with TimeTravel Agency
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#destinations" className="btn-gold">
            Explore Destinations
          </a>
          <a href="#quiz" className="btn-outline-gold">
            Find My Perfect Era
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-gold-500/40 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Side decorations */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />
        <span className="font-mono text-[9px] tracking-[0.4em] text-white/20 uppercase -rotate-90 whitespace-nowrap">
          Temporal Journeys
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />
        <span className="font-mono text-[9px] tracking-[0.4em] text-white/20 uppercase rotate-90 whitespace-nowrap">
          Since 2024
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />
      </div>
    </section>
  )
}
