import { Eye, X, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/50 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-accent font-bold text-xl tracking-tighter">
              <Eye size={24} />
              ARGUS
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed">
              Redefining Minecraft server security through behavioral biometrics and cloud-based AI inference. 
              The future of anti-cheat is here.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-200">Resources</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-200">Community</h4>
            <div className="flex gap-4 text-zinc-500">
              <a href="#" className="hover:text-accent transition-all hover:-translate-y-1" aria-label="Discord">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-all hover:-translate-y-1" aria-label="X (formerly Twitter)">
                <X size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-zinc-600 text-xs gap-4">
          <p>© {currentYear} Project Argus. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            <span className="text-zinc-800" aria-hidden="true">|</span>
            <p className="flex items-center gap-1">
              Status: <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Systems Nominal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}