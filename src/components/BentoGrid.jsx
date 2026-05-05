import { Brain, Cloud, Layers, ShieldAlert } from 'lucide-react';
import BentoCard from './BentoCard';

export default function BentoGrid() {
  const features = [
    {
      icon: Brain,
      title: "AI Behavioral Analysis",
      description: "Capturing the mathematical 'fingerprint' of DMA input. We don't scan files; we analyze movement intent through raw packet streams using deep learning models.",
      className: "md:col-span-2 md:row-span-2", // Large Box
      delay: 0.1
    },
    {
      icon: Cloud,
      title: "Zero Server Impact",
      description: "All heavy matrix math happens in the Argus Cloud, keeping your main thread at a constant 20 TPS.",
      className: "md:col-span-2 md:row-span-1", // Medium Box
      delay: 0.2
    },
    {
      icon: Layers,
      title: "Version Agnostic",
      description: "Native support for 1.7.9 through 1.21. Install once, protect everything.",
      className: "md:col-span-1 md:row-span-1", // Small Box
      delay: 0.3
    },
    {
      icon: ShieldAlert,
      title: "Invisible Protection",
      description: "No player-side mods or launchers required. Pure server-side intelligence.",
      className: "md:col-span-1 md:row-span-1", // Small Box
      delay: 0.4
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-0">
      {/* Header for the Grid - Added text-balance for cleaner mobile wrapping */}
      <div className="mb-12 space-y-4 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance leading-tight">
          Engineered for the <span className="text-accent">Hardware Meta.</span>
        </h2>
        <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
          Traditional anti-cheats look for files. Argus looks for the soul in the machine.
        </p>
      </div>

      {/* 
          THE GRID:
          - grid-cols-1: Stacks cards on mobile.
          - md:grid-cols-4: Restores 4-column layout on desktop.
          - md:auto-rows-[200px]: Fixed height only on desktop.
      */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[200px]">
        {features.map((feature, index) => (
          <BentoCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            // Passing a min-height for mobile so cards don't collapse if text is short
            className={`${feature.className} min-h-[220px] md:min-h-0`}
            delay={feature.delay}
          />
        ))}
      </div>
    </section>
  );
}