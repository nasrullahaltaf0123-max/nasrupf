import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointerClick } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useHoverSound from '@/hooks/useHoverSound';
import useMobileTap from '@/hooks/useMobileTap';
import { useIsMobile } from '@/hooks/use-mobile';

const orbitIcons = [
  { emoji: '🛠️', label: 'Tools' },
  { emoji: '🤖', label: 'AI' },
  { emoji: '📚', label: 'Study' },
  { emoji: '🏏', label: 'Cricket' },
  { emoji: '🛍️', label: 'Shop' },
  { emoji: '🏪', label: 'Store' },
];

const PortalSlider = () => {
  const [cursorAnim, setCursorAnim] = useState(false);
  const [portalUnlocked, setPortalUnlocked] = useState(false);
  const [showUnlockText, setShowUnlockText] = useState(false);
  const [screenFlash, setScreenFlash] = useState(false);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clickTimestamps = useRef<number[]>([]);
  const { play } = useHoverSound();
  const { mobileTapProps: portalTapProps, isPressed: portalPressed } = useMobileTap({ enableVibration: true, vibrationMs: 15 });
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  // Animated cursor hint every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorAnim(true);
      setTimeout(() => setCursorAnim(false), 1500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const triggerEasterEgg = useCallback(() => {
    if (portalUnlocked) return;
    setPortalUnlocked(true);
    setScreenFlash(true);
    setShowUnlockText(true);
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
      return;
    }
    navigate('/creations');
  }, [triggerEasterEgg, navigate]);

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

  const orbitSize = isMobile ? 180 : 300;
  const orbitRadius = isMobile ? 105 : 175;

  return (
    <section className="py-10 md:py-16 px-4 relative overflow-hidden snap-section">
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
        {/* Orbit System */}
        <div className="relative" style={{ width: isMobile ? 260 : 420, height: isMobile ? 260 : 420 }}>
          {/* Orbit track */}
          <div
            className="absolute rounded-full"
            style={{
              width: orbitRadius * 2 + (isMobile ? 40 : 50),
              height: orbitRadius * 2 + (isMobile ? 40 : 50),
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              border: '1px dashed hsl(var(--neon-purple) / 0.12)',
            }}
          />

          {/* Orbiting icons container */}
          <div
            className="absolute"
            style={{
              width: orbitRadius * 2 + (isMobile ? 40 : 50),
              height: orbitRadius * 2 + (isMobile ? 40 : 50),
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: 'semiRotate 22s linear infinite',
            }}
          >
            {orbitIcons.map((icon, i) => {
              const angle = (i / orbitIcons.length) * 360;
              const rad = (angle * Math.PI) / 180;
              const r = orbitRadius + (isMobile ? 10 : 15);
              const x = Math.cos(rad) * r;
              const y = Math.sin(rad) * r;
              return (
                <motion.div
                  key={icon.label}
                  className="absolute cursor-pointer"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    animation: 'semiRotate 22s linear infinite reverse',
                  }}
                  whileHover={{ scale: 1.35 }}
                  onMouseEnter={play}
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
                </motion.div>
              );
            })}
          </div>

          {/* Inner circle — My Creation */}
          <motion.div
            className={`absolute rounded-full cursor-pointer group ${portalPressed ? 'mobile-tap-glow' : ''}`}
            style={{
              width: orbitSize,
              height: orbitSize,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={isMobile ? { scale: 0.96 } : {}}
            animate={portalUnlocked ? { scale: [1, 1.08, 1.02, 1.06, 1] } : {}}
            transition={portalUnlocked ? { duration: 0.6, ease: 'easeInOut' } : { type: 'spring', stiffness: 200, damping: 20 }}
            onMouseEnter={() => { play(); handlePortalHoverStart(); }}
            onMouseLeave={handlePortalHoverEnd}
            onClick={handlePortalClick}
            {...portalTapProps}
          >
            {/* Ambient glow */}
            <div
              className="absolute -inset-10 md:-inset-14 rounded-full -z-10"
              style={{
                background: `radial-gradient(circle, hsl(var(--neon-cyan) / ${portalUnlocked ? '0.35' : '0.1'}), hsl(var(--neon-purple) / ${portalUnlocked ? '0.3' : '0.08'}) 40%, transparent 70%)`,
                animation: 'glowPulse 4s ease-in-out infinite',
              }}
            />
            {/* Spinning gradient ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, hsl(180 100% 50% / 0.6), hsl(195 100% 50% / 0.4), hsl(270 80% 53% / 0.7), hsl(270 80% 53% / 0.2), transparent 60%)',
                animation: `semiRotate ${portalUnlocked ? '4s' : '10s'} linear infinite`,
                filter: 'blur(5px)',
              }}
            />
            {/* Inner border */}
            <div
              className="absolute inset-1.5 md:inset-2 rounded-full transition-all duration-300"
              style={{
                border: `1px solid hsl(var(--neon-cyan) / ${portalUnlocked ? '0.4' : '0.15'})`,
                boxShadow: portalUnlocked
                  ? 'inset 0 0 50px hsl(var(--neon-purple) / 0.25), 0 0 40px hsl(var(--neon-cyan) / 0.2)'
                  : 'inset 0 0 30px hsl(var(--neon-purple) / 0.1), 0 0 15px hsl(var(--neon-cyan) / 0.08)',
                animation: 'glowPulse 3s ease-in-out infinite 0.5s',
              }}
            />
            {/* Center content */}
            <div className="absolute inset-4 md:inset-6 rounded-full bg-background flex items-center justify-center">
              <div className="text-center relative">
                <p className="text-[9px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Explore</p>
                <p className="text-lg md:text-2xl lg:text-3xl font-bold gradient-text">My Creations</p>
                {/* Animated cursor hint */}
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

            {/* Floating unlock text */}
            <AnimatePresence>
              {showUnlockText && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -20, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute left-1/2 -translate-x-1/2 -bottom-8 md:-bottom-10 whitespace-nowrap z-20 pointer-events-none"
                >
                  <span
                    className="text-xs md:text-sm font-bold tracking-wider px-3 py-1.5 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--neon-purple) / 0.2), hsl(var(--neon-cyan) / 0.15))',
                      border: '1px solid hsl(var(--neon-cyan) / 0.3)',
                      color: 'hsl(var(--neon-cyan))',
                      textShadow: '0 0 12px hsl(var(--neon-cyan) / 0.6)',
                      boxShadow: '0 0 20px hsl(var(--neon-purple) / 0.2)',
                    }}
                  >
                    Portal Unlocked ⚡
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PortalSlider;
