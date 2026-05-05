import { motion } from 'framer-motion';
import { Play, RotateCcw, Box, Crosshair, Database } from 'lucide-react';

export default function ReplayTeaser() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">3D Packet Reconstruction</h2>
          <p className="text-zinc-500 mt-2 max-w-xl">
            Don't just read logs. Fly through the fight. Argus reconstructs 
            every packet into a <span className="text-accent">Digital Twin</span> replay 
            to visualize hitboxes and reach.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
            SESSION_ID: ARG-992
          </div>
          <div className="px-3 py-1 rounded-md bg-accent/10 border border-accent/20 text-xs font-mono text-accent">
            LIVE_FEED
          </div>
        </div>
      </div>

      {/* The Viewport */}
      <div className="relative aspect-video w-full rounded-[2rem] border border-zinc-800 bg-zinc-950 overflow-hidden group">
        
        {/* CSS Grid Floor (Perspective) */}
        <div className="absolute inset-0 [perspective:1000px]">
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#22d3ee10_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee10_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)_translateY(100px)] opacity-30"
          />
        </div>

        {/* Floating "Entities" (Animated placeholders for players) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Attacker */}
          <motion.div 
            animate={{ x: [-20, 20, -20], y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-16 h-32 border-2 border-accent/50 bg-accent/10 rounded-sm"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-accent whitespace-nowrap">
              TARGET_ALPHA (DMA?)
            </div>
            {/* Reach Vector Line */}
            <div className="absolute top-1/4 left-full w-32 h-[2px] bg-gradient-to-r from-red-500 to-transparent origin-left rotate-[-10deg] opacity-60" />
          </motion.div>

          {/* Victim */}
          <motion.div 
            animate={{ x: [40, 60, 40] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="ml-40 w-16 h-32 border-2 border-zinc-700 bg-zinc-800/30 rounded-sm"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-500 whitespace-nowrap">
              VICTIM_BETA
            </div>
          </motion.div>
        </div>

        {/* UI Overlays */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
          {/* Top Left Stats */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
              <Crosshair size={12} className="text-red-500" /> REACH: 3.82 blocks
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
              <Box size={12} className="text-accent" /> HITBOX_EXPANSION: 0.12%
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="flex items-center justify-between pointer-events-auto">
            <div className="flex gap-4 p-2 rounded-xl bg-zinc-900/80 backdrop-blur-md border border-white/5">
              <button className="p-2 hover:text-accent transition-colors"><RotateCcw size={18} /></button>
              <button className="p-2 hover:text-accent transition-colors"><Play size={18} /></button>
              <div className="w-[1px] h-6 bg-zinc-800 self-center" />
              <div className="px-4 py-2 text-xs font-mono">00:14 / 00:42</div>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/5 text-xs font-bold hover:bg-zinc-800 transition-all">
                <Database size={14} /> EXPORT DATA
              </button>
            </div>
          </div>
        </div>

        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,3px_100%] pointer-events-none" />
      </div>
    </div>
  );
}