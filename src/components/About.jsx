import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'

const highlights = [
  'Atención personalizada para cada paciente',
  'Especialistas en ortodoncia y odontopediatría',
  'Ambiente cálido y familiar',
  'Tecnología moderna y equipos de última generación',
  'Ubicados en el corazón de David, Chiriquí',
]

export default function About() {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
                alt="Odontóloga trabajando"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="font-heading text-3xl font-bold">{siteConfig.googleRating}</div>
              <div className="text-sm opacity-90">Rating en Google</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Sobre Nosotros</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mt-3 leading-tight">
              Cuidamos de tu sonrisa y la de tu familia
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed text-lg">
              En <strong className="text-primary-dark">{siteConfig.fullName}</strong>, nos dedicamos a brindar atención
              odontológica de calidad en un ambiente cómodo y profesional. Nuestro equipo está comprometido
              con tu bienestar dental, desde los más pequeños hasta los adultos.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-primary mt-1 shrink-0" />
                  <span className="text-text-dark">{h}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-primary hover:bg-primary-light text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105"
            >
              Conócenos Más
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
