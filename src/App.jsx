import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import BentoGrid from './components/BentoGrid';
import ArchitectureFlow from './components/ArchitectureFlow';
import ScoringPreview from './components/ScoringPreview';
import ReplayTeaser from './components/ReplayTeaser';
import BetaForm from './components/BetaForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-zinc-100 selection:bg-accent/30 selection:text-accent overflow-x-hidden">
      
      {/* GLOBAL AMBIENT LIGHTING */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main>
          {/* 1. Hero: The Hook */}
          <Hero />

          {/* 2. Bento Grid: High Level Features */}
          <Section id="features">
            <BentoGrid />
          </Section>

          {/* 3. Architecture Flow: Explaining the Data Pipeline */}
          <Section id="architecture" className="bg-zinc-950/40 rounded-[3rem] border border-zinc-800/30">
            <ArchitectureFlow />
          </Section>

          {/* 4. Scoring Preview: The AI Brain in action */}
          <Section id="intelligence">
            <ScoringPreview />
          </Section>

          {/* 5. Replay Teaser: The Evidence UI */}
          <Section id="replays" className="bg-zinc-950/40 rounded-[3rem] border border-zinc-800/30">
            <ReplayTeaser />
          </Section>

          {/* 6. Beta Form: The Conversion */}
          <Section id="access">
            <BetaForm />
          </Section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;