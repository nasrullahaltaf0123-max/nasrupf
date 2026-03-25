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
    <section className="py-6 md:py-10 px-4 relative">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 5 + 2,
              height: Math.random() * 5 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0
                ? 'hsl(var(--neon-purple) / 0.4)'
                : 'hsl(var(--neon-cyan) / 0.35)',
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
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16"
      >
        {/* Orbit Circle */}
        <div className="relative flex-shrink-0 w-[180px] h-[180px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] group/circle">
          {/* Outer glow */}
          <div
            className="absolute -inset-6 md:-inset-8 rounded-full -z-10 transition-opacity duration-500 group-hover/circle:opacity-100 opacity-60"
            style={{
              background: 'radial-gradient(circle, hsl(var(--neon-purple) / 0.2), hsl(var(--neon-cyan) / 0.08), transparent 70%)',
              animation: 'glowPulse 3s ease-in-out infinite',
            }}
          />
          {/* Rotating ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 180deg, hsl(270 80% 53% / 0.7), hsl(195 100% 50% / 0.5), hsl(180 100% 50% / 0.4), transparent 50%)',
              animation: 'semiRotate 6s linear infinite',
              filter: 'blur(4px)',
            }}
          />
          {/* Inner circle */}
          <div className="absolute inset-3 md:inset-4 lg:inset-5 rounded-full bg-background flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-1">Explore</p>
              <p className="text-base md:text-2xl lg:text-3xl font-bold gradient-text">My Creations</p>
            </div>
          </div>
        </div>

        {/* Card Slider */}
        <div
          className="w-full flex-1 max-w-md md:max-w-xl lg:max-w-2xl relative min-h-[160px] md:min-h-[200px] lg:min-h-[220px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.a
              key={current}
              href={projects[current].url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="block rounded-2xl p-6 md:p-8 lg:p-10 cursor-pointer group transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-center md:text-left relative"
              style={{
                background: 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.7))',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid hsl(var(--neon-purple) / 0.2)',
                boxShadow: '0 0 30px hsl(var(--neon-purple) / 0.15), 0 0 60px hsl(var(--neon-purple) / 0.05), inset 0 1px 0 hsl(var(--neon-purple) / 0.1)',
              }}
            >
              {/* Active glow behind card */}
              <div
                className="absolute -inset-2 rounded-2xl -z-10 opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(ellipse at center, hsl(var(--neon-purple) / 0.25), transparent 70%)',
                  filter: 'blur(25px)',
                }}
              />
              <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 mb-2">
                <span className="text-3xl md:text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">{projects[current].emoji}</span>
                <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-foreground group-hover:text-glow transition-all">
                  {projects[current].name}
                </h3>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-muted-foreground group-hover:text-neon-cyan group-hover:rotate-12 transition-all duration-300" />
              </div>
              <p className="text-muted-foreground text-xs md:text-sm lg:text-base">Click to explore →</p>
            </motion.a>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center md:justify-start gap-2 mt-5 md:ml-8">
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
