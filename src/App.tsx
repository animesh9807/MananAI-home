import React from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { SmartboardDemo } from './components/SmartboardDemo';
import { CtaBand } from './components/CtaBand';
import { TeamSection } from './components/TeamSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-blue-500/30 selection:text-white">
      {/* FULL-SCREEN HERO SECTION - CLEAN, CINEMATIC, NO NAVBAR */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black">
        {/* Full-Screen Looping Background Video with custom JS fade system */}
        <BackgroundVideo />

        {/* Hero Content Area */}
        <Hero />
      </section>

      {/* SEAMLESS SINGLE-PAGE EXPERIENCE WITH ALL CONTENT & LIQUID GLASS UI */}
      <main className="relative z-10 bg-gradient-to-b from-black via-zinc-950 to-black pb-28">
        {/* Background glow orbs for cinematic depth */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-3/4 left-1/3 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

        {/* The Problem, and the Fix */}
        <ProblemSolution />

        {/* How It Works */}
        <HowItWorks />

        {/* Live Interactive Smartboard Physics Lab Demo */}
        <SmartboardDemo />

        {/* See it on a real smartboard (Call-To-Action Band) */}
        <CtaBand />

        {/* Team Section */}
        <TeamSection />
      </main>
    </div>
  );
};

export default App;
