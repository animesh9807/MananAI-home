import React from 'react';
import { ExternalLink, Download, Sparkles } from 'lucide-react';
import { downloadTestPdf } from '../utils/downloadPdf';

export const CtaBand: React.FC = () => {
  return (
    <section className="relative py-24 px-6 max-w-5xl mx-auto">
      <div className="liquid-glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-300 bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Classroom Future</span>
          </div>

          <h2
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4"
          >
            See it on a real smartboard
          </h2>

          <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
            Drop in our sample PDF and experience the future of classrooms yourself!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://mananai.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-semibold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-white/90 active:scale-95 transition-all shadow-lg flex items-center gap-2"
            >
              <span>Try it yourself!</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={downloadTestPdf}
              className="liquid-glass text-white font-semibold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-white/10 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download test PDF</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
