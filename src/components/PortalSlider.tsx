import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import useHoverSound from '@/hooks/useHoverSound';
import { useIsMobile } from '@/hooks/use-mobile';

const projects = [
  { name: 'NasruShop', url: 'https://nasrushop.lovable.app', emoji: '🛍️', desc: 'A modern e-commerce storefront built with AI — browse, discover, and shop.' },
  { name: 'NasruTools', url: 'https://nasrutools.lovable.app', emoji: '🛠️', desc: 'Handy AI-powered utility tools for everyday productivity and creativity.' },
  { name: 'PromptNovaAI', url: 'https://promptnovaai.lovable.app/', emoji: '🤖', desc: 'AI prompt engineering toolkit — craft, refine, and master your prompts.' },
  { name: 'StudyFlowAI', url: 'https://studyandcareer-ai.lovable.app/', emoji: '📚', desc: 'AI-driven study companion for smarter learning and career planning.' },
  { name: 'Cricket N', url: 'https://cricketnasrumade.lovable.app/', emoji: '🏏', desc: 'Live cricket experience app — scores, stats, and match insights.' },
  { name: 'Nasru Store', url: 'https://nasrustore.netlify.app/#', emoji: '🏪', desc: 'Digital storefront showcasing curated products and collections.' },
];

const PortalSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [burstActive, setBurstActive] = useState(false);
  const [cardRect, setCardRect] = useState<{ x: number; y: number } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { play } = useHoverSound();
  const isMobile = useIsMobile();

  // Easter egg state
  const [portalUnlocked, setPortalUnlocked] = useState(false);
  const [showUnlockText, setShowUnlockText] = useState(false);
  const [screenFlash, setScreenFlash] = useState(false);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clickTimestamps = useRef<number[]>([]);

  const triggerEasterEgg = useCallback(() => {
    if (portalUnlocked) return;
    setPortalUnlocked(true);
    setScreenFlash(true);
    setShowUnlockText(true);
    // Play a deeper unlock sound
    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.15);
      osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.35);
    } catch {}
    setTimeout(() => setScreenFlash(false), 300);
    setTimeout(() => setShowUnlockText(false), 1800);
    setTimeout(() => setPortalUnlocked(false), 2500);
  }, [portalUnlocked]);

  const handlePortalClick = useCallback(() => {
    const now = Date.now();
    clickTimestamps.current.push(now);
    clickTimestamps.current = clickTimestamps.current.filter(t => now - t < 800);
    if (clickTimestamps.current.length >= 3) {
      clickTimestamps.current = [];
      triggerEasterEgg();
    }
  }, [triggerEasterEgg]);

  const handlePortalHoverStart = useCallback(() => {
    if (isMobile) return;
    hoverTimerRef.current = setTimeout(triggerEasterEgg, 2000);
  }, [isMobile, triggerEasterEgg]);

  const handlePortalHoverEnd = useCallback(() => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % projects.length);
  }, []);

  useEffect(() => {
    if (isPaused || modalOpen) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [isPaused, modalOpen, next]);

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Capture card center for origin-based animation
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardRect({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
    // Trigger glow burst
    setBurstActive(true);
    setTimeout(() => setBurstActive(false), 350);
    // Open modal after brief delay for zoom effect
    setTimeout(() => setModalOpen(true), isMobile ? 100 : 200);
  };

  const modalOrigin = cardRect
    ? { originX: cardRect.x / window.innerWidth, originY: cardRect.y / window.innerHeight }
    : { originX: 0.5, originY: 0.5 };

  return (
    <section className="py-4 md:py-8 px-4 relative overflow-hidden">
      {/* Screen flash overlay for easter egg */}
      <AnimatePresence>
        {screenFlash && (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 50%, hsl(var(--neon-cyan) / 0.25), hsl(var(--neon-purple) / 0.15) 40%, transparent 70%)' }}
          />
        )}
      </AnimatePresence>
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
          onMouseEnter={play}
        >
          <div
            className="absolute -inset-10 md:-inset-14 rounded-full -z-10"
            style={{
              background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.12), hsl(var(--neon-purple) / 0.1) 40%, transparent 70%)',
              animation: 'glowPulse 4s ease-in-out infinite',
            }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, hsl(180 100% 50% / 0.7), hsl(195 100% 50% / 0.5), hsl(270 80% 53% / 0.8), hsl(270 80% 53% / 0.3), transparent 60%)',
              animation: 'semiRotate 10s linear infinite',
              filter: 'blur(5px)',
            }}
          />
          <div
            className="absolute inset-1 md:inset-2 rounded-full"
            style={{
              border: '1px solid hsl(var(--neon-cyan) / 0.15)',
              boxShadow: 'inset 0 0 30px hsl(var(--neon-purple) / 0.1), 0 0 15px hsl(var(--neon-cyan) / 0.08)',
              animation: 'glowPulse 3s ease-in-out infinite 0.5s',
            }}
          />
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
            <motion.div
              ref={cardRef}
              key={current}
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{
                opacity: modalOpen && !isMobile ? 0.3 : 1,
                scale: modalOpen && !isMobile ? 1.1 : 1.02,
                y: 0,
              }}
              exit={{ opacity: 0.1, scale: 0.9, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={handleCardClick}
              onMouseEnter={play}
              className="block rounded-2xl p-6 md:p-8 lg:p-10 cursor-pointer group text-center md:text-left relative transition-all duration-[400ms] ease-out hover:scale-105 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(145deg, hsl(var(--muted) / 0.45), hsl(var(--background) / 0.65))',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid hsl(var(--neon-purple) / 0.2)',
                boxShadow: '0 0 40px hsl(var(--neon-purple) / 0.12), 0 0 80px hsl(var(--neon-purple) / 0.05), 0 4px 30px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(var(--neon-purple) / 0.08)',
              }}
            >
              {/* Glow burst on click */}
              <AnimatePresence>
                {burstActive && (
                  <motion.div
                    initial={{ opacity: 0.8, scale: 0.3 }}
                    animate={{ opacity: 0, scale: 2.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                    style={{
                      background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.4), hsl(var(--neon-purple) / 0.3) 40%, transparent 70%)',
                    }}
                  />
                )}
              </AnimatePresence>

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
              <p className="text-muted-foreground text-xs md:text-sm lg:text-base group-hover:text-neon-cyan transition-colors duration-300">Click to explore →</p>
            </motion.div>
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

      {/* ─── Project Modal ─── */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            onClick={() => setModalOpen(false)}
          >
            {/* Backdrop with blur */}
            <motion.div
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(12px)' }}
              exit={{ backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-background/70"
            />

            {/* Modal card — emerges from card position on desktop */}
            <motion.div
              initial={{
                opacity: 0,
                scale: isMobile ? 0.92 : 0.6,
                y: isMobile ? 30 : 0,
              }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: isMobile ? 0.92 : 0.7,
                y: isMobile ? 20 : 0,
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: `${modalOrigin.originX * 100}% ${modalOrigin.originY * 100}%` }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl p-8 z-10"
              {...{
                style: {
                  transformOrigin: `${modalOrigin.originX * 100}% ${modalOrigin.originY * 100}%`,
                  background: 'linear-gradient(145deg, hsl(var(--muted) / 0.6), hsl(var(--background) / 0.8))',
                  backdropFilter: 'blur(32px)',
                  WebkitBackdropFilter: 'blur(32px)',
                  border: '1px solid hsl(var(--neon-purple) / 0.3)',
                  boxShadow: '0 0 60px hsl(var(--neon-purple) / 0.2), 0 0 120px hsl(var(--neon-cyan) / 0.08), 0 8px 40px hsl(0 0% 0% / 0.4)',
                },
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center">
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.35, type: 'spring', stiffness: 300 }}
                  className="text-5xl mb-4 block"
                >
                  {projects[current].emoji}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="text-2xl font-bold text-foreground mb-2 text-glow"
                >
                  {projects[current].name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  className="text-muted-foreground text-sm mb-6 leading-relaxed"
                >
                  {projects[current].desc}
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  href={projects[current].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--neon-purple)), hsl(var(--neon-cyan)))',
                    boxShadow: '0 0 20px hsl(var(--neon-purple) / 0.3)',
                  }}
                >
                  Open Project
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortalSlider;
