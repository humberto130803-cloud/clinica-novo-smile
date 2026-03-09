import { motion } from 'framer-motion'
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'

export default function KidsSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1920&q=80"
          alt="Atención dental para niños"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/85 to-primary-dark/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent/20 text-accent-light px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Odontopediatría
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
              Atención dental especializada para niños
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Sabemos que la salud dental de tus hijos es una prioridad. Nuestro equipo está entrenado para brindar
              una experiencia amigable y sin miedo para los más pequeños.
            </p>

            <ul className="mt-8 space-y-3">
              {siteConfig.kidsServices.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <FaCheckCircle className="text-accent shrink-0" />
                  <span>{s}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105"
            >
              <FaWhatsapp size={18} />
              Agendar Cita para tu Hijo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <img
              src="/post_1.jpg"
              alt="Servicios dentales para niños"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
