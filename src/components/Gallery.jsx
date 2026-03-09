import { motion } from 'framer-motion'

const posts = [
  { src: '/post_2.jpg', alt: 'Publicación de Novo Smile' },
  { src: '/post_3.jpg', alt: 'Publicación de Novo Smile' },
  { src: '/post_4.jpg', alt: 'Publicación de Novo Smile' },
  { src: '/post_5.jpg', alt: 'Publicación de Novo Smile' },
  { src: '/post_6.jpg', alt: 'Publicación de Novo Smile' },
  { src: '/post_1.jpg', alt: 'Atención dental para niños' },
]

export default function Gallery() {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Galería</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mt-3">
            Síguenos en Instagram
          </h2>
          <p className="mt-4 text-text-muted text-lg">
            Conoce más de nosotros a través de nuestras redes sociales.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {posts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative aspect-square rounded-xl overflow-hidden isolate"
              style={{ WebkitTransform: 'translateZ(0)' }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/40 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
