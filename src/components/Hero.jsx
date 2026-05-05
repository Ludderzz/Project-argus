import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-8">
        {/* Version Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md text-accent text-xs font-bold tracking-widest uppercase"
        >
          <ShieldCheck size={14} />
          Supported Versions: 1.7.9 – 1.21
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]"
        >
          Watchdog is <span className="text-zinc-700">Blind.</span><br />
          <span className="text-white relative">
            Argus Sees All.
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-2 left-0 h-1 md:h-2 bg-accent/50 -z-10"
            />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl text-zinc-400 text-lg md:text-xl leading-relaxed"
        >
          The first behavior-based AI anti-cheat designed for the <span className="text-white font-medium">DMA hardware meta</span>. 
          Stop ghost clients and hardware cheats before they ruin your competitive integrity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6"
        >
          <a 
            href="#access" 
            className="group flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-accent transition-all duration-300"
          >
            Apply for Beta
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="px-8 py-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md font-bold hover:bg-zinc-800 transition-all">
            View Documentation
          </button>
        </motion.div>
      </div>
    </section>
  );
}