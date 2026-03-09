import { motion } from 'framer-motion'
import { FaStar, FaUserFriends, FaTooth, FaCalendarCheck } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'

const stats = [
  { icon: FaStar, value: `${siteConfig.googleRating}`, label: 'Estrellas en Google', suffix: '★' },
  { icon: FaUserFriends, value: `${siteConfig.googleReviews}+`, label: 'Pacientes Satisfechos' },
  { icon: FaTooth, value: '6+', label: 'Servicios Dentales' },
  { icon: FaCalendarCheck, value: '6', label: 'Días de Atención' },
]

export default function TrustBar() {
  return (
    <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-gray-100 p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <s.icon className="mx-auto text-primary text-2xl mb-2" />
              <div className="font-heading text-2xl sm:text-3xl font-bold text-primary-dark">
                {s.value}{s.suffix && <span className="text-accent ml-1">{s.suffix}</span>}
              </div>
              <div className="text-text-muted text-sm mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
