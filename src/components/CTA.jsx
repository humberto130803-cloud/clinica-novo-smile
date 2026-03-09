import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80"
          alt="Consultorio dental"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary-dark/85 to-primary/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            ¿Listo para lucir la sonrisa que mereces?
          </h2>
          <p className="mt-6 text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
            Agenda tu cita hoy y da el primer paso hacia una sonrisa más sana y brillante. ¡Te esperamos!
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-accent/30 w-full sm:w-auto justify-center"
            >
              <FaWhatsapp size={22} />
              Escríbenos por WhatsApp
            </a>
            <a
              href={`tel:+507${siteConfig.phone.replace('-', '')}`}
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all border border-white/20 w-full sm:w-auto justify-center"
            >
              <FaPhone size={18} />
              Llamar: {siteConfig.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
