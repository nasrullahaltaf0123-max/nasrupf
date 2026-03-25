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
    <section className="py-10 px-4 relative">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0
                ? 'hsl(var(--neon-purple) / 0.35)'
                : 'hsl(var(--neon-cyan) / 0.3)',
              animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10"
      >
        {/* Orbit Circle */}
        <div className="relative flex-shrink-0 w-[180px] h-[180px] md:w-[260px] md:h-[260px] lg:w-[320px] lg:h-[320px]">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 180deg, hsl(270 80% 53% / 0.6), hsl(195 100% 50% / 0.4), hsl(180 100% 50% / 0.3), transparent 50%)',
              animation: 'semiRotate 8s linear infinite',
              filter: 'blur(3px)',
            }}
          />
          {/* Glow pulse behind circle */}
          <div
            className="absolute -inset-4 rounded-full -z-10"
            style={{
              background: 'radial-gradient(circle, hsl(var(--neon-purple) / 0.15), transparent 70%)',
              animation: 'glowPulse 3s ease-in-out infinite',
            }}
          />
          <div className="absolute inset-3 md:inset-4 rounded-full bg-background flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Explore</p>
              <p className="text-base md:text-xl lg:text-2xl font-bold gradient-text">My Creations</p>
            </div>
          </div>
        </div>

        {/* Card Slider */}
        <div
          className="w-full max-w-md md:max-w-xl lg:max-w-2xl relative min-h-[160px] md:min-h-[180px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.a
              key={current}
              href={projects[current].url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="block rounded-2xl p-6 md:p-8 cursor-pointer group transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-center relative"
              style={{
                background: 'linear-gradient(145deg, hsl(var(--muted) / 0.6), hsl(var(--background) / 0.8))',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid hsl(var(--neon-purple) / 0.15)',
                boxShadow: '0 0 20px hsl(var(--neon-purple) / 0.15), inset 0 1px 0 hsl(var(--neon-purple) / 0.1)',
              }}
            >
              {/* Active glow behind card */}
              <div
                className="absolute -inset-1 rounded-2xl -z-10 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(ellipse at center, hsl(var(--neon-purple) / 0.2), transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">{projects[current].emoji}</span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-glow transition-all">
                  {projects[current].name}
                </h3>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-neon-cyan group-hover:rotate-12 transition-all duration-300" />
              </div>
              <p className="text-muted-foreground text-xs md:text-sm">Click to explore →</p>
            </motion.a>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-neon-purple w-6 shadow-[0_0_10px_hsl(270_80%_53%/0.6)]'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
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
