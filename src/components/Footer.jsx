import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt={siteConfig.name} className="h-10 w-10 rounded-lg object-cover" />
              <span className="font-heading font-semibold text-white text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-sm leading-relaxed">
              {siteConfig.subtitle}. Tu bienestar dental es nuestra prioridad.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.services.map((s) => (
                <li key={s.title}>
                  <a href="#servicios" className="hover:text-primary transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Horarios</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span className={h.time === 'Cerrado' ? 'text-red-400' : ''}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-primary mt-0.5 shrink-0" />
                <span>{siteConfig.addressShort}</span>
              </li>
              <li>
                <a href={`tel:+507${siteConfig.phone.replace('-', '')}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <FaPhone className="text-primary shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <FaWhatsapp className="text-primary shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <FaInstagram className="text-primary shrink-0" />
                  {siteConfig.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} {siteConfig.fullName}. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{' '}
            <a href="https://axiomsais.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors font-medium">
              Axiom Software & AI Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
