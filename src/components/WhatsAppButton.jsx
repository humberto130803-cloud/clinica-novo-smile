import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
    </motion.a>
  )
}
