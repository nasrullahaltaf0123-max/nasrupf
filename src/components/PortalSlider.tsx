import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointerClick, ExternalLink, X } from 'lucide-react';
import useHoverSound from '@/hooks/useHoverSound';
import useMobileTap from '@/hooks/useMobileTap';
import { useIsMobile } from '@/hooks/use-mobile';
import { orbitProducts } from '@/data/digitalLabProducts';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const hasBengali = (s: string) => /[\u0980-\u09FF]/.test(s);

const PortalSlider = () => {
  const [cursorAnim, setCursorAnim] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { play } = useHoverSound();
  const { mobileTapProps, isPressed } = useMobileTap({ enableVibration: true, vibrationMs: 15 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (expanded) return;
    const interval = setInterval(() => {
      setCursorAnim(true);
      setTimeout(() => setCursorAnim(false), 1500);
    }, 4000);
    return () => clearInterval(interval);
  }, [expanded]);

  const itemCount = orbitProducts.length;
  const orbitRadius = isMobile ? 140 : 180;
  const containerSize = isMobile ? 360 : 480;
  const coreSize = isMobile ? 100 : 160;
  const iconSize = isMobile ? 48 : 56;

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden snap-section">
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--neon-purple) / 0.04), hsl(var(--neon-cyan) / 0.02) 40%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto flex flex-col items-center justify-center"
      >
        <div className="relative" style={{ width: containerSize, height: containerSize }}>

          {/* Orbit track ring */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: orbitRadius * 2,
              height: orbitRadius * 2,
              top: '50%',
              left: '50%',
              marginTop: -orbitRadius,
              marginLeft: -orbitRadius,
              border: '1px dashed hsl(var(--neon-purple) / 0.08)',
              willChange: 'transform',
            }}
          />

          {/* Rotating orbit wrapper */}
          <div
            className="absolute"
            style={{
              width: 0,
              height: 0,
              top: '50%',
              left: '50%',
              animation: 'semiRotate 30s linear infinite',
              willChange: 'transform',
            }}
          >
            <TooltipProvider delayDuration={200}>
              {orbitProducts.map((item, i) => {
                const angle = -Math.PI / 2 + (i / itemCount) * 2 * Math.PI;
                const x = Math.cos(angle) * orbitRadius;
                const y = Math.sin(angle) * orbitRadius;
                return (
                  <Tooltip key={item.id}>
                    <TooltipTrigger asChild>
                      <motion.a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute cursor-pointer"
                        style={{
                          left: x - iconSize / 2,
                          top: y - iconSize / 2,
                          width: iconSize,
                          height: iconSize,
                          animation: 'semiRotate 30s linear infinite reverse',
                          willChange: 'transform',
                        }}
                        whileHover={{ scale: 1.15 }}
                        onMouseEnter={play}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div
                          className="w-full h-full rounded-full flex items-center justify-center transition-shadow duration-300 hover:shadow-[0_0_18px_hsl(var(--neon-cyan)/0.3)] overflow-hidden"
                          style={{
                            background: 'linear-gradient(145deg, hsl(var(--muted) / 0.7), hsl(var(--background) / 0.9))',
                            border: '1px solid hsl(var(--neon-cyan) / 0.12)',
                            boxShadow: '0 2px 10px hsl(0 0% 0% / 0.25), inset 0 1px 0 hsl(var(--foreground) / 0.03)',
                          }}
                        >
                          <img
                            src={item.icon}
                            alt={item.name}
                            loading="lazy"
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                            style={{ filter: 'drop-shadow(0 0 3px hsl(var(--neon-cyan) / 0.4))' }}
                          />
                        </div>
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg"
                      style={{
                        background: 'hsl(var(--muted) / 0.9)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid hsl(var(--neon-cyan) / 0.15)',
                        boxShadow: '0 0 12px hsl(var(--neon-cyan) / 0.1)',
                        color: 'hsl(var(--foreground))',
                      }}
                    >
                      {item.tooltip}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </TooltipProvider>
          </div>

          {/* Center Core */}
          <motion.div
            className={`absolute rounded-full cursor-pointer group ${isPressed ? 'mobile-tap-glow' : ''}`}
            style={{
              width: coreSize,
              height: coreSize,
              top: '50%',
              left: '50%',
              marginTop: -coreSize / 2,
              marginLeft: -coreSize / 2,
              zIndex: 10,
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onMouseEnter={play}
            onClick={() => { play(); setExpanded(true); }}
            {...mobileTapProps}
          >
            <div
              className="absolute -inset-10 md:-inset-14 rounded-full -z-10"
              style={{
                background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.06), hsl(var(--neon-purple) / 0.04) 40%, transparent 70%)',
                animation: 'glowPulse 4s ease-in-out infinite',
              }}
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, hsl(180 100% 50% / 0.4), hsl(195 100% 50% / 0.2), hsl(270 80% 53% / 0.5), hsl(270 80% 53% / 0.1), transparent 60%)',
                animation: 'semiRotate 10s linear infinite',
                filter: 'blur(4px)',
                willChange: 'transform',
              }}
            />
            <div
              className="absolute inset-1.5 md:inset-2 rounded-full"
              style={{
                border: '1px solid hsl(var(--neon-cyan) / 0.1)',
                boxShadow: 'inset 0 0 30px hsl(var(--neon-purple) / 0.06)',
              }}
            />
            <div className="absolute inset-3 md:inset-4 rounded-full bg-background flex items-center justify-center">
              <div className="text-center relative">
                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-1 font-semibold">Explore</p>
                <p className="text-xs md:text-xl font-extrabold gradient-text leading-tight tracking-tight">My Creations</p>
                <AnimatePresence>
                  {cursorAnim && !isMobile && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: [0, 1, 1, 0], y: [0, 8, 8, 12] }}
                      transition={{ duration: 1.5, times: [0, 0.2, 0.7, 1] }}
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                    >
                      <MousePointerClick className="w-4 h-4 text-neon-cyan" style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.5))' }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* FULLSCREEN OVERLAY */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backdropFilter: 'blur(8px)', background: 'hsl(var(--background) / 0.9)' }}
            onClick={() => setExpanded(false)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.15 }}
              onClick={() => setExpanded(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors duration-300 hover:bg-muted/60"
              style={{ background: 'hsl(var(--muted) / 0.4)', border: '1px solid hsl(var(--neon-purple) / 0.1)' }}
            >
              <X className="w-5 h-5 text-foreground" />
            </motion.button>

            <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-3xl font-extrabold gradient-text tracking-tight"
              >
                My Creations ✦
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xs text-muted-foreground mt-1.5"
              >
                Tools, projects & experiments
              </motion.p>
            </div>

            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-7 p-6 pt-20 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {orbitProducts.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ delay: 0.08 + i * 0.05, type: 'spring', stiffness: 200, damping: 18 }}
                  whileHover={{ scale: 1.06, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={play}
                  className="flex flex-col items-center text-center group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2.5 transition-shadow duration-300 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.8))',
                      border: '1px solid hsl(var(--neon-cyan) / 0.1)',
                      boxShadow: '0 2px 10px hsl(0 0% 0% / 0.2), inset 0 1px 0 hsl(var(--foreground) / 0.02)',
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      loading="lazy"
                      width={36}
                      height={36}
                      className="w-9 h-9 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: 'drop-shadow(0 0 3px hsl(var(--neon-cyan) / 0.4))' }}
                    />
                  </div>
                  <span className={`text-xs md:text-sm font-bold text-foreground group-hover:text-glow transition-all duration-300 ${hasBengali(item.name) ? 'font-bengali' : ''}`}>
                    {item.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{item.subtitle}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground mt-1.5 group-hover:text-neon-cyan transition-colors duration-300" />
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
