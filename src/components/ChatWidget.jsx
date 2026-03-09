import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faq, defaultResponse } from '../data/faq'

const QUICK_PROMPTS = [
  'Quelle destination me convient ?',
  'Paris 1889, quel prix ?',
  'Parlez-moi de Florence 1504',
  'Le Crétacé est-il dangereux ?',
]

function getBotResponse(input) {
  const lower = input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  for (const entry of faq) {
    if (entry.keywords.some((kw) => lower.includes(kw.normalize('NFD').replace(/[\u0300-\u036f]/g, '')))) {
      return entry.response
    }
  }
  return defaultResponse
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3 w-fit">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          className="w-1.5 h-1.5 rounded-full bg-gold-400/50"
        />
      ))}
    </div>
  )
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Bonsoir. Je suis votre conseiller temporel chez TimeTravel Agency. Comment puis-je vous aider à planifier votre voyage à travers le temps ?',
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, typing])

  const sendMessage = (text) => {
    if (!text.trim()) return
    const userMsg = { role: 'user', text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const response = getBotResponse(text)
      setTyping(false)
      setMessages((prev) => [...prev, { role: 'bot', text: response }])
    }, 800 + Math.random() * 600)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 md:right-8 z-50 w-[min(380px,calc(100vw-2rem))]"
          >
            <div className="glass-panel rounded-sm overflow-hidden shadow-2xl"
              style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 40px rgba(201,149,26,0.05)' }}>
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gold-500/10">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full border border-gold-400/30 flex items-center justify-center">
                    <span className="text-xs">⊕</span>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-obsidian-800" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-[0.15em] text-white/80">Conseiller Temporel</p>
                  <p className="font-mono text-[9px] tracking-[0.2em] text-gold-400/50">En ligne</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="ml-auto text-white/20 hover:text-white/60 transition-colors text-lg leading-none"
                >
                  ×
                </button>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="h-72 overflow-y-auto p-4 space-y-3 chat-scroll"
              >
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 text-xs leading-relaxed font-body whitespace-pre-line ${
                        msg.role === 'user'
                          ? 'bg-gold-500/15 text-white/80 border border-gold-500/20'
                          : 'bg-white/4 text-white/60 border border-white/5'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="bg-white/4 border border-white/5">
                      <TypingIndicator />
                    </div>
                  </div>
                )}
              </div>

              {/* Quick prompts */}
              <div className="px-4 py-2 border-t border-white/5 flex gap-2 overflow-x-auto">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="flex-shrink-0 font-mono text-[9px] tracking-wider text-gold-400/50 hover:text-gold-400/80 border border-gold-500/10 hover:border-gold-500/30 px-3 py-1.5 transition-colors"
                  >
                    {prompt.length > 20 ? prompt.slice(0, 18) + '…' : prompt}
                  </button>
                ))}
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="flex items-center border-t border-white/5">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez votre question..."
                  className="flex-1 bg-transparent px-5 py-4 font-body text-xs text-white/70 placeholder-white/20 outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-4 text-gold-400/50 hover:text-gold-400 transition-colors text-sm"
                >
                  ↑
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 md:right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #c9951a, #f5d78e)',
          boxShadow: '0 4px 20px rgba(201,149,26,0.35)',
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="text-obsidian-900 text-xl font-light"
            >
              ×
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="text-obsidian-900 text-lg"
            >
              ✦
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!open && (
          <motion.span
            animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
            style={{ background: 'rgba(201,149,26,0.3)' }}
          />
        )}
      </motion.button>
    </>
  )
}
