import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ShieldAlert, Fingerprint, Activity, CheckCircle2 } from 'lucide-react';

export default function ScoringPreview() {
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState('analyzing');

  useEffect(() => {
    const interval = setInterval(() => {
      const newScore = Math.floor(Math.random() * 100);
      setScore(newScore);
      
      if (newScore > 80) setStatus('critical');
      else if (newScore > 40) setStatus('warning');
      else setStatus('clean');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    if (status === 'critical') return 'text-red-500';
    if (status === 'warning') return 'text-yellow-500';
    return 'text-accent';
  };

  return (
    // Changed: Added px-4 for mobile breathing room and py-12 to py-8 on mobile
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 md:py-12 px-4 md:px-0">
      
      <div className="space-y-4 md:space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/20 text-accent text-xs font-mono">
          <Activity size={14} className="animate-pulse" /> Live Inference Stream
        </div>
        
        {/* Changed: Adjusted text sizes for mobile (text-3xl vs text-4xl) */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          AI Confidence <span className="text-accent">Scoring.</span>
        </h2>
        
        {/* Changed: Lowered text size on mobile */}
        <p className="text-zinc-500 text-base md:text-lg leading-relaxed">
          Argus doesn't rely on binary rules. It assigns a probability score based on 
          <span className="text-white"> Behavioral Biometrics</span>. Low scores trigger silent alerts; high-confidence matches execute automated mitigations.
        </p>
        
        <div className="grid grid-cols-1 gap-3 md:gap-4 pt-2 md:pt-4">
          {[
            { icon: Fingerprint, label: "Synthetic Input", val: "98.2%" },
            { icon: ShieldAlert, label: "DMA Signal", val: "0.04ms" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center gap-3">
                <item.icon size={16} className="text-zinc-500" />
                <span className="text-xs md:text-sm font-medium">{item.label}</span>
              </div>
              <span className="font-mono text-accent text-sm md:text-base">{item.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FIXED VISUAL GAUGE CONTAINER */}
      {/* Changed: Adjusted padding (p-8 vs p-16) and border radius for mobile */}
      <div className="relative flex flex-col justify-center items-center p-8 md:p-16 bg-zinc-950 rounded-[2rem] md:rounded-[3rem] border border-zinc-800 overflow-hidden min-h-[380px] md:min-h-[450px]">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [bg-size:20px_20px]" />
        
        {/* Changed: Scaled the gauge for mobile (w-48 vs w-64) */}
        <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-12"> 
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="45%" // Using percentages for better scaling
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-zinc-900"
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="45%"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray="283%" // Relative dasharray
              initial={{ strokeDashoffset: "283%" }}
              animate={{ strokeDashoffset: `${283 - (283 * score) / 100}%` }}
              transition={{ duration: 1, ease: "circOut" }}
              className={getStatusColor()}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={score}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                className="space-y-0"
              >
                <span className={`text-4xl md:text-6xl font-bold font-mono tracking-tighter ${getStatusColor()}`}>
                  {score}%
                </span>
                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                  Confidence
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Verdict Badge */}
        {/* Changed: Made text smaller and badge less wide on mobile */}
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative z-20 px-5 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl flex items-center gap-2 md:gap-3 whitespace-nowrap overflow-hidden"
        >
          {status === 'critical' ? (
            <>
              <ShieldAlert className="text-red-500" size={14} />
              <span className="text-[10px] md:text-xs font-bold text-red-500 tracking-widest uppercase">High Variance</span>
            </>
          ) : status === 'warning' ? (
            <>
              <Activity className="text-yellow-500" size={14} />
              <span className="text-[10px] md:text-xs font-bold text-yellow-500 tracking-widest uppercase">HITL Flagged</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="text-accent" size={14} />
              <span className="text-[10px] md:text-xs font-bold text-accent tracking-widest uppercase">Signature Clean</span>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}