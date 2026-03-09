import { motion } from 'framer-motion'
import { FaTooth, FaChild, FaTeethOpen, FaTeeth, FaSyringe, FaStethoscope } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'

const iconMap = {
  orthodontics: FaTeethOpen,
  kids: FaChild,
  cleaning: FaTeeth,
  filling: FaTooth,
  extraction: FaSyringe,
  consultation: FaStethoscope,
}

export default function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-surface relative overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Nuestros Servicios</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mt-3">
            Soluciones dentales para toda la familia
          </h2>
          <p className="mt-4 text-text-muted text-lg">
            Ofrecemos una amplia gama de servicios odontológicos con los más altos estándares de calidad.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.services.map((s, i) => {
            const Icon = iconMap[s.icon] || FaTooth
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="text-2xl text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary-dark mb-3">{s.title}</h3>
                <p className="text-text-muted leading-relaxed">{s.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
