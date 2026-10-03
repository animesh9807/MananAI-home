import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center max-w-4xl mx-auto my-auto w-full">
      {/* Brand Title */}
      <h2
        style={{
          textShadow: '0 1px 4px rgba(0,0,0,0.95), 0 2px 12px rgba(0,0,0,0.9)',
        }}
        className="text-base sm:text-lg md:text-xl font-bold tracking-[0.25em] uppercase text-blue-400 mb-4 font-mono"
      >
        Manan AI
      </h2>

      {/* Main Tagline Heading with Instrument Serif & Multi-stage Shadow */}
      <h1
        style={{
          fontFamily: "'Instrument Serif', serif",
          textShadow:
            '0 2px 6px rgba(0,0,0,0.95), 0 6px 24px rgba(0,0,0,0.9), 0 12px 48px rgba(0,0,0,0.85)',
        }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 md:mb-8 tracking-tight leading-[1.06]"
      >
        Turning static lectures into interactive classrooms.
      </h1>

      {/* Subtitle Paragraph with Halo Shadow */}
      <p
        style={{
          textShadow:
            '0 1px 3px rgba(0,0,0,0.95), 0 3px 10px rgba(0,0,0,0.9), 0 6px 25px rgba(0,0,0,0.85)',
        }}
        className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal"
      >
        An AI-powered classroom copilot for real classrooms. It listens to the
        lecture in real time, surfaces curated simulations, visual diagrams, and
        instant quizzes on the smartboard, and leaves the teacher in total control.
      </p>
    </div>
  );
};
