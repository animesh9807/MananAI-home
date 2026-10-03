import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';

export const SmartboardDemo: React.FC = () => {
  const [angle, setAngle] = useState(45);
  const [velocity, setVelocity] = useState(25);
  const [isSimulating, setIsSimulating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);

  // Physics formulas
  const g = 9.8;
  const rad = (angle * Math.PI) / 180;
  const totalTime = (2 * velocity * Math.sin(rad)) / g;
  const maxRange = (velocity * velocity * Math.sin(2 * rad)) / g;
  const maxHeight = (velocity * velocity * Math.sin(rad) * Math.sin(rad)) / (2 * g);

  // Animation draw loop
  const runSimulation = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsSimulating(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const groundY = height - 40;
    const originX = 50;

    // Scale factors
    const scaleX = (width - 100) / 75;
    const scaleY = (height - 80) / 35;

    const startTime = performance.now();
    const animDuration = Math.min(Math.max(totalTime * 400, 1500), 3000);

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / animDuration, 1);
      const simTime = progress * totalTime;

      // Clear
      ctx.clearRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 50; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, groundY);
        ctx.stroke();
      }
      for (let y = groundY; y > 0; y -= 40) {
        ctx.beginPath();
        ctx.moveTo(50, y);
        ctx.lineTo(width - 20, y);
        ctx.stroke();
      }

      // Ground plane
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(30, groundY);
      ctx.lineTo(width - 20, groundY);
      ctx.stroke();

      // Full trajectory ghost path
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      for (let t = 0; t <= totalTime; t += totalTime / 60) {
        const px = originX + (velocity * Math.cos(rad) * t) * scaleX;
        const py = groundY - (velocity * Math.sin(rad) * t - 0.5 * g * t * t) * scaleY;
        if (t === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Active animated arc
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let t = 0; t <= simTime; t += totalTime / 120) {
        const px = originX + (velocity * Math.cos(rad) * t) * scaleX;
        const py = groundY - (velocity * Math.sin(rad) * t - 0.5 * g * t * t) * scaleY;
        if (t === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Projectile head
      const currentX = originX + (velocity * Math.cos(rad) * simTime) * scaleX;
      const currentY = groundY - (velocity * Math.sin(rad) * simTime - 0.5 * g * simTime * simTime) * scaleY;

      // Glow behind head
      const glow = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 12);
      glow.addColorStop(0, 'rgba(96, 165, 250, 0.9)');
      glow.addColorStop(1, 'rgba(96, 165, 250, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(currentX, currentY, 12, 0, Math.PI * 2);
      ctx.fill();

      // Particle
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(currentX, currentY, 4, 0, Math.PI * 2);
      ctx.fill();

      if (progress < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        setIsSimulating(false);
      }
    };

    animRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    runSimulation();
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [angle, velocity]);

  return (
    <section id="smartboard-demo" className="relative py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
          Live Interactive Smartboard
        </span>
        <h2
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-4xl md:text-5xl lg:text-6xl text-white mt-3 tracking-tight"
        >
          See what happens when static slides wake up.
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
          Static slides reduce dynamic physics to flat formulas and bullet points, leaving students to guess how principles actually behave. By manipulating variables live, students instantly connect cause and effect&mdash;watching launch angles shape trajectories in real time. This active, visual immersion replaces rote memorization with lasting physical intuition.
        </p>
      </div>

      <div className="liquid-glass rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
        {/* Smartboard Bar */}
        <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-white">
              SMARTBOARD DISPLAY 01
            </span>
            <span className="liquid-glass px-2.5 py-0.5 rounded-full text-xs text-blue-300">
              Topic: Projectile Motion
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="liquid-glass px-4 py-1.5 rounded-full text-xs font-semibold text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
              <span>{isSimulating ? 'Simulating...' : 'Launch Simulation'}</span>
            </button>
          </div>
        </div>

        {/* Smartboard Split: Live Canvas & AI Copilot Drawer */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Visual Simulation Canvas */}
          <div className="lg:col-span-2 liquid-glass rounded-2xl p-4 flex flex-col justify-between min-h-[320px] relative bg-black/40">
            <canvas
              ref={canvasRef}
              width={650}
              height={320}
              className="w-full h-auto rounded-lg"
            />

            {/* Metrics HUD Overlay */}
            <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/5 text-center">
              <div className="bg-white/[0.02] rounded-xl p-2.5">
                <div className="text-[11px] text-white/50 uppercase tracking-wider">Angle</div>
                <div className="text-base font-semibold text-white">{angle}°</div>
              </div>
              <div className="bg-white/[0.02] rounded-xl p-2.5">
                <div className="text-[11px] text-white/50 uppercase tracking-wider">Max Height</div>
                <div className="text-base font-semibold text-cyan-400">{maxHeight.toFixed(1)} m</div>
              </div>
              <div className="bg-white/[0.02] rounded-xl p-2.5">
                <div className="text-[11px] text-white/50 uppercase tracking-wider">Range</div>
                <div className="text-base font-semibold text-blue-400">{maxRange.toFixed(1)} m</div>
              </div>
            </div>
          </div>

          {/* AI Teacher Copilot Drawer */}
          <div className="flex flex-col gap-4">
            {/* Interactive Teacher Controls */}
            <div className="liquid-glass rounded-2xl p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs font-semibold text-white/80">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-blue-400" />
                  <span>Teacher Parameters</span>
                </span>
                <button
                  onClick={() => {
                    setAngle(45);
                    setVelocity(25);
                  }}
                  className="text-white/40 hover:text-white text-[11px] flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              </div>

              {/* Angle Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-white/70">
                  <span>Launch Angle:</span>
                  <span className="font-mono text-blue-300 font-medium">{angle}°</span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={75}
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>

              {/* Velocity Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-white/70">
                  <span>Initial Velocity (v₀):</span>
                  <span className="font-mono text-cyan-300 font-medium">{velocity} m/s</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={40}
                  value={velocity}
                  onChange={(e) => setVelocity(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>
            </div>

            {/* AI Assistant Live Stream */}
            <div className="liquid-glass rounded-2xl p-5 flex-1 flex flex-col justify-between bg-white/[0.01]">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Live Copilot Insights</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Speech recognized: <span className="text-white font-medium">"Notice that when launch angle is 45°, trajectory range achieves maximum distance."</span>
                </p>
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200">
                  Check-in quiz ready: <span className="font-semibold">"Why does range drop when angle increases to 60°?"</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/50">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Room Sync: Active
                </span>
                <span>Latency: 42ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
