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
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* LEFT: Semi-circle portal */}
          <div className="relative flex-shrink-0 w-48 h-48 md:w-56 md:h-56">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 180deg, hsl(270 80% 53% / 0.6), hsl(195 100% 50% / 0.4), hsl(180 100% 50% / 0.3), transparent 50%)',
                animation: 'semiRotate 8s linear infinite',
                filter: 'blur(2px)',
              }}
            />
            <div className="absolute inset-4 rounded-full bg-background flex items-center justify-center">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Explore</p>
                <p className="text-lg font-bold gradient-text">My Creations</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Slider */}
          <div
            className="flex-1 w-full min-h-[220px] relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.a
                key={current}
                href={projects[current].url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="block card-glow rounded-2xl p-8 md:p-10 cursor-pointer group transition-all duration-300 hover:scale-[1.02]"
                style={{ animation: 'float 4s ease-in-out infinite' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{projects[current].emoji}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-glow transition-all">
                    {projects[current].name}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors ml-auto" />
                </div>
                <p className="text-muted-foreground text-sm">Click to explore →</p>
              </motion.a>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
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
        </div>
      </motion.div>
    </section>
  );
};

export default PortalSlider;
