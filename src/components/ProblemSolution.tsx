import React from 'react';
import { AlertCircle, CheckCircle, Presentation, HelpCircle } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="problem-fix" className="relative py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
          Classroom Reality &amp; Innovation
        </span>
        <h2
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-4xl md:text-5xl lg:text-6xl text-white mt-3 tracking-tight"
        >
          The problem, and the fix
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* The Problem Card */}
        <div className="liquid-glass rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:bg-white/[0.02] transition-colors">
          <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-6">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
              The problem
            </h3>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Lectures built on static slides and passive PDFs make complex ideas
              hard to picture. Hunting for relevant simulations or diagrams
              mid-class disrupts teaching flow, and teachers have no instant way to
              check room-wide comprehension.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3 text-xs text-rose-300/80 font-medium">
            <HelpCircle className="w-4 h-4 text-rose-400" />
            <span>Static slides lose student attention and comprehension</span>
          </div>
        </div>

        {/* What Manan AI does Card */}
        <div className="liquid-glass rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:bg-white/[0.02] transition-colors">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              <Presentation className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
              What Manan AI does
            </h3>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Teacher teaches, Manan suggests, class interacts. Manan AI
              understands your speech and uploaded documents live, pulls verified
              virtual labs, diagrams, and explanations, and lets the teacher push
              them directly to the presentation display.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3 text-xs text-blue-300/90 font-medium">
            <CheckCircle className="w-4 h-4 text-blue-400" />
            <span>Interactive smartboard simulations with teacher in total control</span>
          </div>
        </div>
      </div>
    </section>
  );
};
