import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaClock, FaInstagram } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Ubicación</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mt-3">
            Encuéntranos fácilmente
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-primary text-xl" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-primary-dark mb-1">Dirección</h3>
                <p className="text-text-muted leading-relaxed">{siteConfig.address}</p>
                <p className="text-sm text-accent mt-2 font-medium">📍 Dentro del edificio del Gimnasio Power Fitness</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <FaPhone className="text-primary text-xl" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-primary-dark mb-1">Teléfono / WhatsApp</h3>
                <a href={`tel:+507${siteConfig.phone.replace('-', '')}`} className="text-primary hover:text-primary-light transition-colors text-lg font-medium">
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <FaInstagram className="text-primary text-xl" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-primary-dark mb-1">Instagram</h3>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors font-medium">
                  {siteConfig.instagramHandle}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <FaClock className="text-primary text-xl" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-primary-dark mb-2">Horarios</h3>
                <div className="space-y-1.5">
                  {siteConfig.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-text-dark font-medium">{h.day}</span>
                      <span className={h.time === 'Cerrado' ? 'text-red-400' : 'text-text-muted'}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.8!2d-82.4308!3d8.4270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa5310c72f4aa1f%3A0x6c5c6f21f8e32d42!2sCl%C3%ADnica%20Odontol%C3%B3gica%20Novo%20Smile!5e0!3m2!1ses!2spa!4v1709900000000!5m2!1ses!2spa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Novo Smile"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
