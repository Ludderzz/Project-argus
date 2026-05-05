import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Intelligence', href: '#intelligence' }, // Added to match App.jsx
    { name: 'Replays', href: '#replays' }             // Added to match App.jsx
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl"
    >
      <div className="relative flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-3xl md:rounded-full border border-zinc-800/50 bg-zinc-950/60 backdrop-blur-xl shadow-2xl">
        
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer relative z-[110]">
          <div className="p-1.5 md:p-2 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-background transition-all duration-500">
            <Eye size={18} className="text-accent group-hover:text-inherit" />
          </div>
          <span className="font-bold tracking-tighter text-lg md:text-xl uppercase">Argus</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-zinc-400 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Toggle */}
        <div className="flex items-center gap-3 relative z-[110]">
          <a 
            href="#access" 
            className="text-xs md:text-sm font-bold px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-accent text-background hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <span className="hidden xs:inline">Launch </span>Dashboard
          </a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl border border-zinc-800/50 bg-zinc-950/95 backdrop-blur-2xl md:hidden flex flex-col gap-2 shadow-2xl"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl text-zinc-400 hover:text-accent hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}