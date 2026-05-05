import { motion } from 'framer-motion';
import { Server, Cpu, Brain, Zap, ShieldCheck } from 'lucide-react';

export default function ArchitectureFlow() {
  return (
    <div className="py-20 relative overflow-hidden">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The <span className="text-accent">Argus</span> Pipeline</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto">
          Distributed processing architecture designed for the 2026 hardware meta. 
          Real-time telemetry with zero main-thread overhead.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Connection Lines (Static Background) */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-800 -translate-y-1/2 hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          
          {/* Step 1: The Collector */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-accent"
              >
                <Server size={32} />
              </motion.div>
              {/* Pulse effect */}
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full animate-pulse -z-10" />
            </div>
            <div>
              <h3 className="text-lg font-bold">The Collector</h3>
              <p className="text-xs text-zinc-500 mt-2">Java 25 / PacketEvents</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-[10px] font-mono">MOVEMENT</span>
                <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-[10px] font-mono">ROTATION</span>
              </div>
            </div>
          </div>

          {/* Step 2: Inference Engine (The Brain) */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative">
              {/* Moving Packets (Arrows) */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden md:block">
                <motion.div
                  animate={{ x: [0, 40], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                >
                  <Zap size={16} className="text-accent fill-accent" />
                </motion.div>
              </div>

              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.8 }}
                className="w-24 h-24 rounded-full bg-accent text-background flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.3)]"
              >
                <Brain size={40} />
              </motion.div>

              <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:block">
                <motion.div
                  animate={{ x: [0, 40], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
                >
                  <ShieldCheck size={16} className="text-accent" />
                </motion.div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-accent">The Brain</h3>
              <p className="text-xs text-zinc-500 mt-2">Python 3.12 / Scikit-Learn</p>
              <p className="text-[11px] text-zinc-400 mt-3 font-mono leading-tight">
                IDENTIFYING SYNTHETIC <br/> INERTIA PATTERNS...
              </p>
            </div>
          </div>

          {/* Step 3: Mitigation */}
          <div className="flex flex-col items-center text-center space-y-6">
            <motion.div 
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white"
            >
              <Cpu size={32} />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold">Evidence UI</h3>
              <p className="text-xs text-zinc-500 mt-2">React / Supabase</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-[10px] font-mono">BANS</span>
                <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-[10px] font-mono">3D REPLAYS</span>
              </div>
            </div>
          </div>

        </div>

        {/* Technical Detail Badge */}
        <div className="mt-16 mx-auto w-fit p-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
          <div className="flex items-center gap-6 text-[10px] font-mono tracking-widest text-zinc-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" /> 
              LATENCY: 12ms
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" /> 
              TPS: 20.0
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zinc-700 rounded-full" /> 
              UPLINK: OKHTTP/ENCRYPTED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}