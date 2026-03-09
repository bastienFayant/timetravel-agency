import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-gold-500/10 py-20">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(201,149,26,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full border border-gold-400/40 flex items-center justify-center">
                <span className="text-gold-400 text-xs">⊕</span>
              </div>
              <div>
                <span className="font-display text-lg font-light text-white/90">TimeTravel</span>
                <span className="ml-2 font-body text-[10px] tracking-[0.3em] text-gold-400/60 uppercase">Agency</span>
              </div>
            </div>
            <p className="font-body text-xs leading-relaxed text-white/30 max-w-xs mb-6">
              L'agence de voyage temporel la plus exclusive du monde. Nous faisons de l'impossible
              votre destination préférée.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-mono text-[9px] tracking-[0.2em] text-white/20 hover:text-gold-400/60 transition-colors uppercase"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold-400/50 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Destinations', 'Notre Approche', 'Sécurité', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-xs text-white/30 hover:text-white/70 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold-400/50 mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              <p className="font-body text-xs text-white/30">contact@timetravel.agency</p>
              <p className="font-body text-xs text-white/30">+33 1 00 00 00 00</p>
              <p className="font-body text-xs text-white/20 leading-relaxed">
                12 Rue du Temps<br />
                75001 Paris, France
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.2em] text-white/15 uppercase">
            © 2025 TimeTravel Agency — All temporal rights reserved
          </p>
          <div className="flex gap-6">
            {['Mentions légales', 'Confidentialité', 'CGV'].map((item) => (
              <a key={item} href="#" className="font-mono text-[9px] tracking-[0.15em] text-white/15 hover:text-white/40 transition-colors uppercase">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
