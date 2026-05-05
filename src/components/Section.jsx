import { motion } from 'framer-motion';

/**
 * Section Wrapper
 * @param {string} id - For anchor navigation (e.g., #features)
 * @param {string} className - For custom background colors or offsets
 */
export default function Section({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className={`max-w-7xl mx-auto px-6 py-24 md:py-32 ${className}`}
    >
      {children}
    </motion.section>
  );
}