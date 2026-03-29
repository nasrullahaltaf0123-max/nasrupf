import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointerClick, ExternalLink, X } from 'lucide-react';
import useHoverSound from '@/hooks/useHoverSound';
import useMobileTap from '@/hooks/useMobileTap';
import { useIsMobile } from '@/hooks/use-mobile';

const orbitIcons = [
  { emoji: '🛠️', label: 'NasruTools', url: 'https://nasrutools.lovable.app' },
  { emoji: '🤖', label: 'PromptNovaAI', url: 'https://promptnovaai.lovable.app/' },
  { emoji: '📚', label: 'StudyFlowAI', url: 'https://studyandcareer-ai.lovable.app/' },
  { emoji: '🏏', label: 'Cricket N', url: 'https://cricketnasrumade.lovable.app/' },
  { emoji: '🛍️', label: 'NasruShop', url: 'https://nasrushop.lovable.app' },
  { emoji: '🏪', label: 'Nasru Store', url: 'https://nasrustore.netlify.app/#' },
];

const allTools = [
  { emoji: '🤖', name: 'PromptNovaAI', desc: 'AI prompt engineering toolkit', url: 'https://promptnovaai.lovable.app/' },
  { emoji: '📚', name: 'StudyFlowAI', desc: 'AI-driven study companion', url: 'https://studyandcareer-ai.lovable.app/' },
  { emoji: '🛠️', name: 'NasruTools', desc: 'AI-powered utility tools', url: 'https://nasrutools.lovable.app' },
  { emoji: '🛍️', name: 'NasruShop', desc: 'Modern AI e-commerce', url: 'https://nasrushop.lovable.app' },
  { emoji: '🏪', name: 'Nasru Store', desc: 'Curated products & collections', url: 'https://nasrustore.netlify.app/#' },
  { emoji: '🏏', name: 'Cricket N', desc: 'Live cricket experience', url: 'https://cricketnasrumade.lovable.app/' },
  { emoji: '🍛', name: 'মাছে ভাতে বাঙ্গালী', desc: 'Bengali food experience', url: 'https://xn--r5bdf0b1bef2b3gccc1a2gd3h.xn--45bl4db.xn--54b7fta0cc/' },
  { emoji: '📖', name: 'Literaria', desc: 'Writers & literature platform', url: 'https://literariahub.lovable.app/' },
];

const PortalSlider = () => {
  const [cursorAnim, setCursorAnim] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { play } = useHoverSound();
  const { mobileTapProps, isPressed } = useMobileTap({ enableVibration: true, vibrationMs: 15 });
  const isMobile = useIsMobile();

  // Cursor hint every 4s
  useEffect(() => {
    if (expanded) return;
    const interval = setInterval(() => {
      setCursorAnim(true);
      setTimeout(() => setCursorAnim(false), 1500);
    }, 4000);
    return () => clearInterval(interval);
  }, [expanded]);

  const orbitRadius = isMobile ? 105 : 175;
  const coreSize = isMobile ? 160 : 260;

  return (
    <section className="py-10 md:py-16 px-4 relative overflow-hidden snap-section">
      {/* Section radial glow */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--neon-purple) / 0.06), hsl(var(--neon-cyan) / 0.03) 40%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto flex flex-col items-center justify-center"
      >
        {/* Orbit System Container */}
        <div className="relative" style={{ width: isMobile ? 280 : 440, height: isMobile ? 280 : 440 }}>
          {/* Orbit track ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: orbitRadius * 2 + (isMobile ? 44 : 54),
              height: orbitRadius * 2 + (isMobile ? 44 : 54),
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              border: '1px dashed hsl(var(--neon-purple) / 0.12)',
            }}
          />
          {/* Neon trail glow on orbit path */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: orbitRadius * 2 + (isMobile ? 44 : 54),
              height: orbitRadius * 2 + (isMobile ? 44 : 54),
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: 'inset 0 0 20px hsl(var(--neon-cyan) / 0.04), 0 0 15px hsl(var(--neon-purple) / 0.04)',
            }}
          />

          {/* Orbiting icons */}
          <div
            className="absolute"
            style={{
              width: orbitRadius * 2 + (isMobile ? 44 : 54),
              height: orbitRadius * 2 + (isMobile ? 44 : 54),
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: 'semiRotate 22s linear infinite',
            }}
          >
            {orbitIcons.map((icon, i) => {
              const angle = (i / orbitIcons.length) * 360;
              const rad = (angle * Math.PI) / 180;
              const r = orbitRadius + (isMobile ? 12 : 17);
              const x = Math.cos(rad) * r;
              const y = Math.sin(rad) * r;
              return (
                <motion.a
                  key={icon.label}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute cursor-pointer"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    animation: 'semiRotate 22s linear infinite reverse',
                  }}
                  whileHover={{ scale: 1.35 }}
                  onMouseEnter={play}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_18px_hsl(var(--neon-cyan)/0.5)]"
                    style={{
                      background: 'linear-gradient(145deg, hsl(var(--muted) / 0.8), hsl(var(--background) / 0.95))',
                      border: '1px solid hsl(var(--neon-purple) / 0.2)',
                      boxShadow: '0 2px 8px hsl(0 0% 0% / 0.3)',
                    }}
                  >
                    <span className="text-base md:text-xl">{icon.emoji}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Center Core */}
          <motion.div
            className={`absolute rounded-full cursor-pointer group ${isPressed ? 'mobile-tap-glow' : ''}`}
            style={{
              width: coreSize,
              height: coreSize,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onMouseEnter={play}
            onClick={() => { play(); setExpanded(true); }}
            {...mobileTapProps}
          >
            {/* Ambient glow */}
            <div
              className="absolute -inset-10 md:-inset-14 rounded-full -z-10"
              style={{
                background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.1), hsl(var(--neon-purple) / 0.08) 40%, transparent 70%)',
                animation: 'glowPulse 4s ease-in-out infinite',
              }}
            />
            {/* Spinning gradient ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, hsl(180 100% 50% / 0.6), hsl(195 100% 50% / 0.4), hsl(270 80% 53% / 0.7), hsl(270 80% 53% / 0.2), transparent 60%)',
                animation: 'semiRotate 10s linear infinite',
                filter: 'blur(5px)',
              }}
            />
            {/* Inner border */}
            <div
              className="absolute inset-1.5 md:inset-2 rounded-full transition-all duration-300"
              style={{
                border: '1px solid hsl(var(--neon-cyan) / 0.15)',
                boxShadow: 'inset 0 0 30px hsl(var(--neon-purple) / 0.1), 0 0 15px hsl(var(--neon-cyan) / 0.08)',
                animation: 'glowPulse 3s ease-in-out infinite 0.5s',
              }}
            />
            {/* Center content */}
            <div className="absolute inset-4 md:inset-6 rounded-full bg-background flex items-center justify-center">
              <div className="text-center relative">
                <p className="text-[9px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Explore</p>
                <p className="text-lg md:text-2xl lg:text-3xl font-bold gradient-text">My Creations</p>
                {/* Cursor hint */}
                <AnimatePresence>
                  {cursorAnim && !isMobile && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: [0, 1, 1, 0], y: [0, 8, 8, 12] }}
                      transition={{ duration: 1.5, times: [0, 0.2, 0.7, 1] }}
                      className="absolute -bottom-5 left-1/2 -translate-x-1/2"
                    >
                      <MousePointerClick className="w-4 h-4 text-neon-cyan" style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.6))' }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ===== FULLSCREEN TOOL UNIVERSE OVERLAY ===== */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backdropFilter: 'blur(16px)', background: 'hsl(var(--background) / 0.85)' }}
            onClick={() => setExpanded(false)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 }}
              onClick={() => setExpanded(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300 hover:scale-110"
              style={{
                background: 'hsl(var(--muted) / 0.6)',
                border: '1px solid hsl(var(--neon-cyan) / 0.2)',
              }}
            >
              <X className="w-5 h-5 text-foreground" />
            </motion.button>

            {/* Title */}
            <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-xl md:text-3xl font-bold gradient-text"
              >
                My Creations ✦
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-xs text-muted-foreground mt-1"
              >
                Tools, projects & experiments
              </motion.p>
            </div>

            {/* Bubble Grid */}
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-7 p-6 max-w-3xl w-full max-h-[70vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {allTools.map((tool, i) => (
                <motion.a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ delay: 0.1 + i * 0.06, type: 'spring', stiffness: 200, damping: 18 }}
                  whileHover={{ scale: 1.08, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={play}
                  className="flex flex-col items-center text-center group"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Bubble */}
                  <div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-2.5 transition-all duration-300 relative"
                    style={{
                      background: 'linear-gradient(145deg, hsl(var(--muted) / 0.6), hsl(var(--background) / 0.9))',
                      border: '1px solid hsl(var(--neon-purple) / 0.15)',
                      boxShadow: '0 4px 20px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(var(--neon-purple) / 0.08)',
                    }}
                  >
                    {/* Hover glow ring */}
                    <div
                      className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10"
                      style={{
                        background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.15), transparent 70%)',
                        filter: 'blur(8px)',
                      }}
                    />
                    <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">{tool.emoji}</span>
                  </div>
                  <span className={`text-xs md:text-sm font-semibold text-foreground group-hover:text-glow transition-all duration-300 ${/[\u0980-\u09FF]/.test(tool.name) ? 'font-bengali' : ''}`}>
                    {tool.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{tool.desc}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground mt-1 group-hover:text-neon-cyan transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortalSlider;
