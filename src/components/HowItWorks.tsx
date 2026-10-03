import React from 'react';
import { Mic, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Ingest and Speak',
      icon: <Mic className="w-6 h-6 text-blue-400" />,
      description:
        'Upload lecture notes (PDF/PPT) or speak naturally into a Bluetooth mic. Manan AI parses the ongoing topic context in real time.',
      detail: 'Real-time contextual NLP & audio stream processing',
    },
    {
      num: '02',
      title: 'Present',
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      description:
        'Manan surfaces relevant interactive simulations, flowcharts, and simplified explanations in a private drawer. The teacher selects what to display to the class.',
      detail: 'Private teacher preview drawer & 1-click smartboard push',
    },
    {
      num: '03',
      title: 'Check in',
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
      description:
        'Trigger instant check-in quizzes mid-lecture. After class, auto-generated lecture summaries and a contextual AI doubt-solving assistant land straight in the students\' stream.',
      detail: 'Live comprehension heatmaps & AI doubt solver stream',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
          Seamless 3-Step Flow
        </span>
        <h2
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-4xl md:text-5xl lg:text-6xl text-white mt-3 tracking-tight"
        >
          How it works
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="liquid-glass rounded-3xl p-8 flex flex-col justify-between relative group hover:bg-white/[0.03] transition-all duration-300"
          >
            <div>
              {/* Header with Step Number and Icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl font-bold text-white/20 font-mono tracking-tighter">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Bottom note */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
              <span>{step.detail}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
