import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaGoogle, FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const reviews = siteConfig.reviews

  const next = () => setCurrent((c) => (c + 1) % reviews.length)
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length)

  return (
    <section id="testimonios" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Testimonios</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mt-3">
            Lo que dicen nuestros pacientes
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <FaGoogle className="text-primary text-xl" />
            <span className="text-text-muted text-lg">
              <strong className="text-primary-dark">{siteConfig.googleRating}</strong> estrellas · {siteConfig.googleReviews}+ reseñas
            </span>
          </div>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface rounded-2xl p-8 relative"
            >
              <FaQuoteRight className="absolute top-6 right-6 text-primary/10 text-3xl" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <FaStar key={j} className="text-accent text-sm" />
                ))}
              </div>
              <p className="text-text-dark leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">{r.name[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-primary-dark text-sm">{r.name}</div>
                  <div className="text-text-muted text-xs">Paciente verificado</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-surface rounded-2xl p-8 relative"
            >
              <FaQuoteRight className="absolute top-6 right-6 text-primary/10 text-3xl" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: reviews[current].rating }).map((_, j) => (
                  <FaStar key={j} className="text-accent text-sm" />
                ))}
              </div>
              <p className="text-text-dark leading-relaxed mb-6">"{reviews[current].text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">{reviews[current].name[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-primary-dark text-sm">{reviews[current].name}</div>
                  <div className="text-text-muted text-xs">Paciente verificado</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center text-primary-dark hover:bg-primary hover:text-white transition-colors" aria-label="Anterior">
              <FaChevronLeft size={14} />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-gray-300'}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center text-primary-dark hover:bg-primary hover:text-white transition-colors" aria-label="Siguiente">
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
