import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getRecommendation } from '../utils/recommendationEngine'
import { destinations } from '../data/destinations'

const QUESTIONS = [
  {
    id: 'q1',
    number: '01',
    question: "Quel type d'expérience recherchez-vous ?",
    options: [
      { value: 'culture', label: 'Culture & Art', icon: '🏛' },
      { value: 'adventure', label: 'Aventure & Nature', icon: '🌿' },
      { value: 'elegance', label: 'Élégance & Raffinement', icon: '✦' },
    ],
  },
  {
    id: 'q2',
    number: '02',
    question: 'Votre période historique de prédilection ?',
    options: [
      { value: 'modern', label: 'Histoire Moderne', icon: '⚙' },
      { value: 'ancient', label: 'Monde Primitif', icon: '🌍' },
      { value: 'renaissance', label: 'Renaissance', icon: '🖌' },
    ],
  },
  {
    id: 'q3',
    number: '03',
    question: 'Environnement idéal ?',
    options: [
      { value: 'city', label: 'Cités Vibrantes', icon: '🏙' },
      { value: 'nature', label: 'Nature Sauvage', icon: '🦎' },
      { value: 'museum', label: 'Musées & Architecture', icon: '🏺' },
    ],
  },
  {
    id: 'q4',
    number: '04',
    question: 'Activité idéale lors de votre voyage ?',
    options: [
      { value: 'monuments', label: 'Visiter des monuments', icon: '🗼' },
      { value: 'wildlife', label: 'Observer la faune', icon: '🦕' },
      { value: 'galleries', label: 'Explorer des galeries', icon: '🖼' },
    ],
  },
]

export default function QuizSection() {
  const [step, setStep] = useState(0) // 0 = intro
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const currentQuestion = QUESTIONS[step - 1]
  const isIntro = step === 0
  const isDone = result !== null

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)

    if (step < QUESTIONS.length) {
      setTimeout(() => setStep(step + 1), 200)
    } else {
      const rec = getRecommendation(newAnswers)
      setResult(rec)
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers({})
    setResult(null)
  }

  const resultDest = result ? destinations.find((d) => d.id === result.destinationId) : null

  return (
    <section id="quiz" className="py-32 relative overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(201,149,26,0.04) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 border-t border-b border-gold-500/5" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-gold-500/30" />
            <span className="font-mono text-[9px] tracking-[0.4em] text-gold-400/50 uppercase">
              AI Profiling System
            </span>
            <span className="w-12 h-px bg-gold-500/30" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white/90 mb-4">
            Votre <span className="gold-text italic">Profil</span> Temporel
          </h2>
          <p className="font-body text-sm tracking-[0.1em] text-white/35">
            Notre algorithme identifie l'époque qui résonne le mieux avec votre personnalité.
          </p>
        </motion.div>

        {/* Quiz card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel rounded-sm p-8 md:p-12"
        >
          <AnimatePresence mode="wait">
            {/* Intro */}
            {isIntro && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full border border-gold-400/30 flex items-center justify-center mx-auto mb-8">
                  <span className="text-2xl">⊕</span>
                </div>
                <h3 className="font-display text-2xl font-light text-white/90 mb-4">
                  Analyseur de Compatibilité Temporelle
                </h3>
                <p className="font-body text-sm text-white/40 leading-relaxed mb-10 max-w-md mx-auto">
                  4 questions. 2 minutes. Notre système d'IA identifiera l'époque qui correspond
                  précisément à votre profil et vos aspirations.
                </p>
                <button className="btn-gold" onClick={() => setStep(1)}>
                  Commencer l'analyse
                </button>
              </motion.div>
            )}

            {/* Questions */}
            {!isIntro && !isDone && currentQuestion && (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                {/* Progress */}
                <div className="flex items-center gap-3 mb-10">
                  <div className="flex gap-1.5">
                    {QUESTIONS.map((_, i) => (
                      <div
                        key={i}
                        className="h-0.5 w-8 transition-colors duration-500"
                        style={{
                          background:
                            i < step
                              ? 'linear-gradient(90deg, #c9951a, #f5d78e)'
                              : 'rgba(255,255,255,0.1)',
                        }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-white/25">
                    {step}/{QUESTIONS.length}
                  </span>
                </div>

                {/* Question number */}
                <div className="font-mono text-5xl font-light text-white/5 mb-2 -mt-2">
                  {currentQuestion.number}
                </div>

                <h3 className="font-display text-xl md:text-2xl font-light text-white/85 mb-8">
                  {currentQuestion.question}
                </h3>

                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <motion.button
                      key={option.value}
                      whileHover={{ x: 4, backgroundColor: 'rgba(201,149,26,0.08)' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(currentQuestion.id, option.value)}
                      className="w-full flex items-center gap-4 px-6 py-4 border border-white/8 hover:border-gold-500/30 transition-all duration-300 text-left group"
                    >
                      <span className="text-xl opacity-50 group-hover:opacity-100 transition-opacity">
                        {option.icon}
                      </span>
                      <span className="font-body text-sm tracking-wide text-white/60 group-hover:text-white/90 transition-colors">
                        {option.label}
                      </span>
                      <span className="ml-auto text-gold-400/0 group-hover:text-gold-400/60 transition-colors text-xs">
                        →
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Result */}
            {isDone && result && resultDest && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="font-mono text-[9px] tracking-[0.4em] uppercase text-gold-400/50 mb-6">
                  Analyse complète — Destination recommandée
                </div>

                {/* Result card */}
                <div
                  className="relative p-8 mb-8 overflow-hidden"
                  style={{
                    background: resultDest.imageBg,
                    border: `1px solid ${resultDest.accentColor}30`,
                    boxShadow: `0 0 60px ${resultDest.accentColor}15`,
                  }}
                >
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, ${resultDest.accentColor} 0%, transparent 60%)`,
                    }}
                  />
                  <div className="relative z-10">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3"
                      style={{ color: resultDest.accentColor }}>
                      {result.explanation.subtitle}
                    </p>
                    <h3 className="font-display text-4xl font-light text-white/95 mb-2">
                      {result.explanation.title}
                    </h3>
                    <p className="font-display text-lg italic text-gold-400/70">
                      {resultDest.priceFormatted}
                    </p>
                  </div>
                </div>

                <p className="font-body text-sm leading-relaxed text-white/45 mb-10 text-left">
                  {result.explanation.reason}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#destinations" className="btn-gold">
                    Explorer cette époque
                  </a>
                  <button onClick={reset} className="btn-outline-gold">
                    Recommencer l'analyse
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
