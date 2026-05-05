import { motion } from 'framer-motion';

/**
 * BentoCard Component
 * @param {React.ReactNode} icon - Lucide icon component
 * @param {string} title - The heading for the card
 * @param {string} description - Subtext
 * @param {string} className - Tailwind grid-span classes (e.g., md:col-span-2)
 * @param {number} delay - Animation stagger delay
 */
export default function BentoCard({ icon: Icon, title, description, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay, 
        ease: [0.23, 1, 0.32, 1] // Custom cubic-bezier for a "premium" feel
      }}
      whileHover={{ scale: 1.01 }}
      className={`
        relative group overflow-hidden rounded-[2rem] 
        border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-xl
        p-8 flex flex-col justify-between
        hover:border-accent/40 hover:shadow-[0_0_30px_-15px_rgba(34,211,238,0.3)]
        transition-all duration-500 ${className}
      `}
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="mb-4 inline-flex p-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all duration-500">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-xl font-semibold tracking-tight text-zinc-100 mb-2">
          {title}
        </h3>
        <p className="text-zinc-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* Decorative corner element */}
      <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon size={64} strokeWidth={1} />
      </div>
    </motion.div>
  );
}