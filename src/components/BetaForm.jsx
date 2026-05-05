import { motion } from 'framer-motion';
import { Send, Users, Server, Hash } from 'lucide-react';

export default function BetaForm() {
  return (
    <section id="access" className="py-24 relative">
      {/* Decorative background glow for the form */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto relative z-10"
      >
        <div className="p-1 border-zinc-800 bg-zinc-900/50 backdrop-blur-2xl rounded-[2.5rem] border shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Request Access</h2>
              <p className="text-zinc-500">
                Project Argus is currently in development, soon to be open for beta. Applications are reviewed once development is in a beta condition.
              </p>
            </div>

            <form 
              action="https://formgrid.dev/api/f/ohb2ku0o" 
              method="POST" 
              className="space-y-6"
            >
              {/* Discord Field */}
              <div className="group space-y-2">
                <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-bold group-focus-within:text-accent transition-colors">
                  <Hash size={14} /> Discord Username
                </label>
                <input 
                  name="discord" 
                  type="text" 
                  placeholder="name#0000" 
                  required
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-zinc-700"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Server Name Field */}
                <div className="group space-y-2">
                  <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-bold group-focus-within:text-accent transition-colors">
                    <Server size={14} /> Server Name
                  </label>
                  <input 
                    name="server" 
                    type="text" 
                    placeholder="Argus Network" 
                    required
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-zinc-700"
                  />
                </div>

                {/* Player Count Field */}
                <div className="group space-y-2">
                  <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-bold group-focus-within:text-accent transition-colors">
                    <Users size={14} /> Avg. Players
                  </label>
                  <input 
                    name="players" 
                    type="number" 
                    placeholder="150" 
                    required
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-zinc-700"
                  />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full group relative flex items-center justify-center gap-2 bg-accent text-background font-bold py-5 rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Submit Application <Send size={18} />
                </span>
              </motion.button>
            </form>
          </div>
        </div>

        {/* Form Footer Note */}
        <p className="mt-6 text-center text-zinc-600 text-xs">
          By submitting, you agree to the Project Argus Beta Terms of Service.
        </p>
      </motion.div>
    </section>
  );
}