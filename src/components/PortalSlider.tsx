import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointerClick, ExternalLink, X } from 'lucide-react';
import useHoverSound from '@/hooks/useHoverSound';
import useMobileTap from '@/hooks/useMobileTap';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTheme } from '@/hooks/useTheme';
import { orbitProducts } from '@/data/digitalLabProducts';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const hasBengali = (s: string) => /[\u0980-\u09FF]/.test(s);

const PortalSlider = () => {
  const [cursorAnim, setCursorAnim] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { play } = useHoverSound();
  const { mobileTapProps, isPressed } = useMobileTap({ enableVibration: true, vibrationMs: 15 });
  const isMobile = useIsMobile();
  const isLight = useTheme();

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
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background — executive warm gray for light, neon radial for dark */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: isLight
            ? 'linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(0 0% 100%) 50%, hsl(220 20% 97%) 100%)'
            : 'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--neon-purple) / 0.04), hsl(var(--neon-cyan) / 0.02) 40%, transparent 70%)',
        }}
      />

      {/* Section header — light mode gets executive styling */}
      {isLight && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-2" style={{ color: 'hsl(195 80% 36%)' }}>
            Product Ecosystem
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'hsl(220 20% 14%)' }}>
            Built & Shipped
          </h2>
          <div className="w-12 h-[2px] mx-auto mt-3 rounded-full" style={{ background: 'linear-gradient(90deg, hsl(195 80% 42%), hsl(250 65% 52%))' }} />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto flex flex-col items-center justify-center"
      >
        <div className="relative" style={{ width: containerSize, height: containerSize }}>

          {/* Orbit track ring — silver dashed for light, neon for dark */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: orbitRadius * 2,
              height: orbitRadius * 2,
              top: '50%',
              left: '50%',
              marginTop: -orbitRadius,
              marginLeft: -orbitRadius,
              border: isLight
                ? '1.5px dashed hsl(220 13% 82%)'
                : '1px dashed hsl(var(--neon-purple) / 0.08)',
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
              animation: 'semiRotate 14s ease-in-out infinite alternate',
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
                          animation: 'semiRotate 14s ease-in-out infinite alternate-reverse',
                          willChange: 'transform',
                        }}
                        whileHover={{ scale: 1.15 }}
                        onMouseEnter={play}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div
                          className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden"
                          style={{
                            background: isLight
                              ? 'hsl(0 0% 100%)'
                              : 'linear-gradient(145deg, hsl(var(--muted) / 0.7), hsl(var(--background) / 0.9))',
                            border: isLight
                              ? '1.5px solid hsl(220 13% 88%)'
                              : '1px solid hsl(var(--neon-cyan) / 0.12)',
                            boxShadow: isLight
                              ? '0 2px 8px hsl(0 0% 0% / 0.06), 0 4px 20px hsl(0 0% 0% / 0.04)'
                              : '0 2px 10px hsl(0 0% 0% / 0.25), inset 0 1px 0 hsl(var(--foreground) / 0.03)',
                          }}
                        >
                          <img
                            src={item.icon}
                            alt={item.name}
                            loading="lazy"
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                            style={{ filter: isLight ? 'none' : 'drop-shadow(0 0 3px hsl(var(--neon-cyan) / 0.4))' }}
                          />
                        </div>
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg"
                      style={{
                        background: isLight ? 'hsl(0 0% 100%)' : 'hsl(var(--muted) / 0.9)',
                        backdropFilter: 'blur(8px)',
                        border: isLight ? '1.5px solid hsl(220 13% 85%)' : '1px solid hsl(var(--neon-cyan) / 0.15)',
                        boxShadow: isLight ? '0 4px 20px hsl(0 0% 0% / 0.08)' : '0 0 12px hsl(var(--neon-cyan) / 0.1)',
                        color: isLight ? 'hsl(220 20% 14%)' : 'hsl(var(--foreground))',
                      }}
                    >
                      {item.tooltip}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </TooltipProvider>
          </div>

          {/* Center Core — executive silver ring for light, neon for dark */}
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
            {/* Glow halo */}
            <div
              className="absolute -inset-10 md:-inset-14 rounded-full -z-10"
              style={{
                background: isLight
                  ? 'radial-gradient(circle, hsl(195 80% 42% / 0.05), transparent 70%)'
                  : 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.06), hsl(var(--neon-purple) / 0.04) 40%, transparent 70%)',
                animation: 'glowPulse 4s ease-in-out infinite',
              }}
            />
            {/* Spinning ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: isLight
                  ? 'conic-gradient(from 0deg, hsl(220 13% 85%), hsl(195 80% 42% / 0.25), hsl(250 65% 52% / 0.2), transparent 60%)'
                  : 'conic-gradient(from 0deg, hsl(180 100% 50% / 0.4), hsl(195 100% 50% / 0.2), hsl(270 80% 53% / 0.5), hsl(270 80% 53% / 0.1), transparent 60%)',
                animation: 'semiRotate 10s linear infinite',
                filter: 'blur(4px)',
                willChange: 'transform',
              }}
            />
            {/* Inner border ring */}
            <div
              className="absolute inset-1.5 md:inset-2 rounded-full"
              style={{
                border: isLight ? '1.5px solid hsl(220 13% 88%)' : '1px solid hsl(var(--neon-cyan) / 0.1)',
                boxShadow: isLight ? 'none' : 'inset 0 0 30px hsl(var(--neon-purple) / 0.06)',
              }}
            />
            {/* Center content */}
            <div
              className="absolute inset-3 md:inset-4 rounded-full flex items-center justify-center"
              style={{
                background: isLight ? 'hsl(0 0% 100%)' : 'hsl(var(--background))',
                boxShadow: isLight ? 'inset 0 1px 3px hsl(0 0% 0% / 0.04)' : 'none',
              }}
            >
              <div className="text-center relative">
                <p
                  className="text-[8px] md:text-[10px] uppercase tracking-[0.35em] mb-1 font-semibold"
                  style={{ color: isLight ? 'hsl(220 10% 50%)' : 'hsl(var(--muted-foreground))' }}
                >
                  Explore
                </p>
                <p
                  className="text-xs md:text-xl font-extrabold leading-tight tracking-tight"
                  style={{
                    background: isLight
                      ? 'linear-gradient(135deg, hsl(220 20% 14%), hsl(195 80% 36%))'
                      : 'linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  My Creations
                </p>
                <AnimatePresence>
                  {cursorAnim && !isMobile && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: [0, 1, 1, 0], y: [0, 8, 8, 12] }}
                      transition={{ duration: 1.5, times: [0, 0.2, 0.7, 1] }}
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                    >
                      <MousePointerClick
                        className="w-4 h-4"
                        style={{
                          color: isLight ? 'hsl(195 80% 36%)' : 'hsl(var(--neon-cyan))',
                          filter: isLight ? 'none' : 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.5))',
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* FULLSCREEN OVERLAY — Executive white modal for light, dark glass for dark */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{
              backdropFilter: 'blur(12px)',
              background: isLight ? 'hsl(220 20% 97% / 0.95)' : 'hsl(var(--background) / 0.9)',
            }}
            onClick={() => setExpanded(false)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.15 }}
              onClick={() => setExpanded(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors duration-300"
              style={{
                background: isLight ? 'hsl(0 0% 100%)' : 'hsl(var(--muted) / 0.4)',
                border: isLight ? '1.5px solid hsl(220 13% 85%)' : '1px solid hsl(var(--neon-purple) / 0.1)',
                boxShadow: isLight ? '0 2px 8px hsl(0 0% 0% / 0.06)' : 'none',
              }}
            >
              <X className="w-5 h-5" style={{ color: isLight ? 'hsl(220 20% 30%)' : 'hsl(var(--foreground))' }} />
            </motion.button>

            <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-3xl font-extrabold tracking-tight"
                style={{
                  background: isLight
                    ? 'linear-gradient(135deg, hsl(220 20% 14%), hsl(195 80% 36%))'
                    : 'linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                My Creations ✦
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xs mt-1.5"
                style={{ color: isLight ? 'hsl(220 10% 50%)' : 'hsl(var(--muted-foreground))' }}
              >
                Tools, projects & experiments
              </motion.p>
            </div>

            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-7 px-6 pt-20 pb-12 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
              style={{ justifyItems: 'center' }}
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
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-2.5 transition-all duration-300 relative overflow-hidden"
                    style={{
                      background: isLight
                        ? 'hsl(0 0% 100%)'
                        : 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.8))',
                      border: isLight
                        ? '1.5px solid hsl(220 13% 88%)'
                        : '1px solid hsl(var(--neon-cyan) / 0.1)',
                      boxShadow: isLight
                        ? '0 2px 8px hsl(0 0% 0% / 0.05), 0 4px 20px hsl(0 0% 0% / 0.03)'
                        : '0 2px 10px hsl(0 0% 0% / 0.2), inset 0 1px 0 hsl(var(--foreground) / 0.02)',
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      loading="lazy"
                      width={36}
                      height={36}
                      className="w-9 h-9 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: isLight ? 'none' : 'drop-shadow(0 0 3px hsl(var(--neon-cyan) / 0.4))' }}
                    />
                  </div>
                  <span
                    className={`text-xs md:text-sm font-bold transition-all duration-300 truncate max-w-full ${hasBengali(item.name) ? 'font-bengali' : ''}`}
                    style={{ color: isLight ? 'hsl(220 20% 14%)' : 'hsl(var(--foreground))' }}
                  >
                    {item.name}
                  </span>
                  <span
                    className="text-[10px] mt-0.5 leading-tight line-clamp-1"
                    style={{ color: isLight ? 'hsl(220 10% 50%)' : 'hsl(var(--muted-foreground))' }}
                  >
                    {item.subtitle}
                  </span>
                  <ExternalLink
                    className="w-3 h-3 mt-1.5 transition-colors duration-300"
                    style={{ color: isLight ? 'hsl(220 10% 65%)' : 'hsl(var(--muted-foreground))' }}
                  />
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
