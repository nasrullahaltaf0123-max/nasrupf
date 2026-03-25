import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  { name: 'NasruShop', url: 'https://nasrushop.lovable.app', emoji: '🛍️' },
  { name: 'NasruTools', url: 'https://nasrutools.lovable.app', emoji: '🛠️' },
  { name: 'PromptNovaAI', url: 'https://promptnovaai.lovable.app/', emoji: '🤖' },
  { name: 'StudyFlowAI', url: 'https://studyandcareer-ai.lovable.app/', emoji: '📚' },
  { name: 'Cricket N', url: 'https://cricketnasrumade.lovable.app/', emoji: '🏏' },
  { name: 'Nasru Store', url: 'https://nasrustore.netlify.app/#', emoji: '🏪' },
];

const PortalSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % projects.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="py-6 md:py-10 px-4 relative overflow-hidden">
      {/* Section-wide radial glow (desktop only) */}
      <div
        className="hidden md:block absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, hsl(var(--neon-purple) / 0.08), hsl(var(--neon-cyan) / 0.04) 40%, transparent 70%)',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => {
          const size = 2 + (i % 4) * 1.5;
          const x = ((i * 17 + 11) % 100);
          const y = ((i * 23 + 7) % 100);
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${x}%`,
                top: `${y}%`,
                background: i % 3 === 0
                  ? 'hsl(var(--neon-purple) / 0.5)'
                  : i % 3 === 1
                    ? 'hsl(var(--neon-cyan) / 0.4)'
                    : 'hsl(var(--neon-blue) / 0.35)',
                animation: `float ${3 + (i % 3) * 1.5}s ease-in-out infinite`,
                animationDelay: `${(i * 0.4) % 3}s`,
              }}
            />
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16"
      >
        {/* ─── Orbit Circle ─── */}
        <motion.div
          className="relative flex-shrink-0 w-[180px] h-[180px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] group/circle"
          whileHover={{ scale: 1.04 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {/* Deep outer glow */}
          <div
            className="absolute -inset-10 md:-inset-14 rounded-full -z-10"
            style={{
              background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.12), hsl(var(--neon-purple) / 0.1) 40%, transparent 70%)',
              animation: 'glowPulse 4s ease-in-out infinite',
            }}
          />
          {/* Rotating neon ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, hsl(180 100% 50% / 0.7), hsl(195 100% 50% / 0.5), hsl(270 80% 53% / 0.8), hsl(270 80% 53% / 0.3), transparent 60%)',
              animation: 'semiRotate 10s linear infinite',
              filter: 'blur(5px)',
            }}
          />
          {/* Inner breathing glow ring */}
          <div
            className="absolute inset-1 md:inset-2 rounded-full"
            style={{
              border: '1px solid hsl(var(--neon-cyan) / 0.15)',
              boxShadow: 'inset 0 0 30px hsl(var(--neon-purple) / 0.1), 0 0 15px hsl(var(--neon-cyan) / 0.08)',
              animation: 'glowPulse 3s ease-in-out infinite 0.5s',
            }}
          />
          {/* Inner content circle */}
          <div className="absolute inset-3 md:inset-5 lg:inset-6 rounded-full bg-background flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-1">Explore</p>
              <p className="text-base md:text-2xl lg:text-3xl font-bold gradient-text">My Creations</p>
            </div>
          </div>
        </motion.div>

        {/* ─── Connecting line (desktop only) ─── */}
        <div className="hidden md:block w-16 lg:w-24 h-px relative flex-shrink-0 -mx-7 lg:-mx-10">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, hsl(var(--neon-cyan) / 0.4), hsl(var(--neon-purple) / 0.3), transparent)',
              filter: 'blur(1px)',
            }}
          />
          <div
            className="absolute inset-y-0 left-0 w-2 h-2 -top-[3px] rounded-full"
            style={{ background: 'hsl(var(--neon-cyan) / 0.6)', boxShadow: '0 0 8px hsl(var(--neon-cyan) / 0.4)' }}
          />
        </div>

        {/* ─── Card Slider ─── */}
        <div
          className="w-full flex-1 max-w-md md:max-w-lg lg:max-w-xl relative min-h-[160px] md:min-h-[220px] lg:min-h-[260px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.a
              key={current}
              href={projects[current].url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1.02, y: 0 }}
              exit={{ opacity: 0.1, scale: 0.9, y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="block rounded-2xl p-6 md:p-8 lg:p-10 cursor-pointer group text-center md:text-left relative transition-all duration-[400ms] ease-out hover:scale-105 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(145deg, hsl(var(--muted) / 0.45), hsl(var(--background) / 0.65))',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid hsl(var(--neon-purple) / 0.2)',
                boxShadow: '0 0 40px hsl(var(--neon-purple) / 0.12), 0 0 80px hsl(var(--neon-purple) / 0.05), 0 4px 30px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(var(--neon-purple) / 0.08)',
              }}
            >
              {/* Card glow aura */}
              <div
                className="absolute -inset-3 rounded-2xl -z-10 opacity-40 group-hover:opacity-90 transition-opacity duration-[400ms] ease-out"
                style={{
                  background: 'radial-gradient(ellipse at center, hsl(var(--neon-purple) / 0.2), hsl(var(--neon-cyan) / 0.08) 50%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />
              <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 mb-3">
                <span className="text-3xl md:text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">{projects[current].emoji}</span>
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground group-hover:text-glow transition-all duration-300">
                  {projects[current].name}
                </h3>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-muted-foreground group-hover:text-neon-cyan group-hover:rotate-12 transition-all duration-300" />
              </div>
              <p className="text-muted-foreground text-xs md:text-sm lg:text-base group-hover:text-neon-cyan transition-colors duration-300">Explore Project →</p>
            </motion.a>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center md:justify-start gap-2.5 mt-5 md:ml-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-neon-purple w-7 shadow-[0_0_12px_hsl(270_80%_53%/0.7)]'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PortalSlider;
