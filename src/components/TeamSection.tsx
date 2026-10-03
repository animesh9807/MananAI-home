import React from 'react';
import { User, ShieldCheck } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const team = [
    {
      name: 'Animesh Kansal',
      role: 'Co-founder, Developer',
      initials: 'AK',
      isLead: true,
    },
    {
      name: 'Jayendra Pratap Singh',
      role: 'Co-founder, Developer',
      initials: 'JS',
      isLead: true,
    },
    {
      name: 'Aastha Dua',
      role: 'Co-founder, Developer',
      initials: 'AD',
      isLead: true,
    },
    {
      name: 'Abhishek Chaudhary',
      role: 'Project Advisor, Mentor',
      initials: 'AC',
      isLead: false,
    },
  ];

  return (
    <section id="team" className="relative py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
          The Builders
        </span>
        <h2
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-4xl md:text-5xl lg:text-6xl text-white mt-3 tracking-tight"
        >
          Team
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="liquid-glass rounded-2xl p-6 flex flex-col items-center text-center group hover:bg-white/[0.03] transition-all duration-300"
          >
            {/* Avatar Badge */}
            <div className="w-16 h-16 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/90 font-mono font-bold text-lg mb-4 group-hover:scale-105 group-hover:border-blue-400/40 transition-all shadow-inner">
              {member.initials}
            </div>

            <div className="text-lg font-semibold text-white tracking-tight mb-1">
              {member.name}
            </div>

            <div className="text-xs text-white/60 font-medium">
              {member.role}
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 w-full flex items-center justify-center gap-1.5 text-[11px] text-white/40">
              {member.isLead ? (
                <>
                  <User className="w-3 h-3 text-blue-400/70" />
                  <span>Founding Team</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-3 h-3 text-emerald-400/70" />
                  <span>Advisory &amp; Mentorship</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
