import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointerClick, ExternalLink, X, Grid3X3 } from 'lucide-react';
import useHoverSound from '@/hooks/useHoverSound';
import useMobileTap from '@/hooks/useMobileTap';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTheme } from '@/hooks/useTheme';
import { orbitProducts } from '@/data/digitalLabProducts';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const hasBengali = (s: string) => /[\u0980-\u09FF]/.test(s);

/* Tile colors for ecosystem wall */
const tileColors = [
  'hsl(240 65% 55%)', 'hsl(260 70% 58%)', 'hsl(190 85% 45%)',
  'hsl(10 80% 62%)', 'hsl(38 92% 55%)', 'hsl(162 60% 50%)',
  'hsl(340 70% 55%)', 'hsl(200 80% 50%)', 'hsl(280 60% 55%)',
  'hsl(20 85% 55%)', 'hsl(170 70% 45%)', 'hsl(230 55% 50%)',
];

/* ─── LIGHT MODE: Creative Ecosystem Wall ─── */
const EcosystemWall = ({ onExpand }: { onExpand: () => void }) => {
  const { play } = useHoverSound();

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background with diagonal cut */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, hsl(260 30% 97%) 0%, hsl(240 25% 96%) 50%, hsl(190 20% 97%) 100%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.3em] font-bold mb-3" style={{ color: 'hsl(260 70% 58%)' }}>
            Creative Universe
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3" style={{
            background: 'linear-gradient(135deg, hsl(240 65% 55%), hsl(260 70% 58%), hsl(190 85% 45%))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Product Ecosystem
          </h2>
          <p className="text-sm" style={{ color: 'hsl(230 10% 50%)' }}>Every tool, project & experiment I've built</p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4 mb-8">
          {orbitProducts.slice(0, 10).map((item, i) => {
            const color = tileColors[i % tileColors.length];
            return (
              <motion.a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -5, scale: 1.05 }}
                onMouseEnter={play}
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col items-center text-center group rounded-2xl p-3 md:p-4 transition-all duration-300"
                style={{
                  background: 'hsl(0 0% 100%)',
                  border: `1.5px solid ${color}18`,
                  boxShadow: `0 2px 8px ${color}08`,
                }}
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110 overflow-hidden"
                  style={{ background: `${color}08`, border: `1px solid ${color}12` }}
                >
                  <img src={item.icon} alt={item.name} loading="lazy" width={32} height={32} className="w-8 h-8 object-contain" />
                </div>
                <span className={`text-[10px] md:text-xs font-bold truncate w-full ${hasBengali(item.name) ? 'font-bengali' : ''}`} style={{ color: 'hsl(230 20% 15%)' }}>
                  {item.name}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Expand CTA */}
        {orbitProducts.length > 10 && (
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onExpand}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, hsl(240 65% 55%), hsl(260 70% 58%))',
                color: 'white',
                boxShadow: '0 4px 20px hsl(240 65% 55% / 0.2)',
              }}
            >
              <Grid3X3 className="w-4 h-4" />
              View All {orbitProducts.length} Creations
            </motion.button>
          </div>
        )}
      </motion.div>
    </section>
  );
};

/* ─── DARK MODE: Original Orbit (unchanged) ─── */
const DarkOrbit = ({ onExpand }: { onExpand: () => void }) => {
  const [cursorAnim, setCursorAnim] = useState(false);
  const { play } = useHoverSound();
  const { mobileTapProps, isPressed } = useMobileTap({ enableVibration: true, vibrationMs: 15 });
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorAnim(true);
      setTimeout(() => setCursorAnim(false), 1500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const itemCount = orbitProducts.length;
  const orbitRadius = isMobile ? 140 : 180;
  const containerSize = isMobile ? 360 : 480;
  const coreSize = isMobile ? 100 : 160;
  const iconSize = isMobile ? 48 : 56;

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--neon-purple) / 0.04), hsl(var(--neon-cyan) / 0.02) 40%, transparent 70%)' }} />
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto flex flex-col items-center justify-center">
        <div className="relative" style={{ width: containerSize, height: containerSize }}>
          <div className="absolute rounded-full pointer-events-none" style={{ width: orbitRadius * 2, height: orbitRadius * 2, top: '50%', left: '50%', marginTop: -orbitRadius, marginLeft: -orbitRadius, border: '1px dashed hsl(var(--neon-purple) / 0.08)', willChange: 'transform' }} />
          <div className="absolute" style={{ width: 0, height: 0, top: '50%', left: '50%', animation: 'semiRotate 14s ease-in-out infinite alternate', willChange: 'transform' }}>
            <TooltipProvider delayDuration={200}>
              {orbitProducts.map((item, i) => {
                const angle = -Math.PI / 2 + (i / itemCount) * 2 * Math.PI;
                const x = Math.cos(angle) * orbitRadius;
                const y = Math.sin(angle) * orbitRadius;
                return (
                  <Tooltip key={item.id}>
                    <TooltipTrigger asChild>
                      <motion.a href={item.href} target="_blank" rel="noopener noreferrer" className="absolute cursor-pointer" style={{ left: x - iconSize / 2, top: y - iconSize / 2, width: iconSize, height: iconSize, animation: 'semiRotate 14s ease-in-out infinite alternate-reverse', willChange: 'transform' }} whileHover={{ scale: 1.15 }} onMouseEnter={play} onClick={(e) => e.stopPropagation()}>
                        <div className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden" style={{ background: 'linear-gradient(145deg, hsl(var(--muted) / 0.7), hsl(var(--background) / 0.9))', border: '1px solid hsl(var(--neon-cyan) / 0.12)', boxShadow: '0 2px 10px hsl(0 0% 0% / 0.25), inset 0 1px 0 hsl(var(--foreground) / 0.03)' }}>
                          <img src={item.icon} alt={item.name} loading="lazy" width={32} height={32} className="w-8 h-8 object-contain" style={{ filter: 'drop-shadow(0 0 3px hsl(var(--neon-cyan) / 0.4))' }} />
                        </div>
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="px-3 py-1.5 text-xs font-semibold rounded-lg" style={{ background: 'hsl(var(--muted) / 0.9)', backdropFilter: 'blur(8px)', border: '1px solid hsl(var(--neon-cyan) / 0.15)', boxShadow: '0 0 12px hsl(var(--neon-cyan) / 0.1)', color: 'hsl(var(--foreground))' }}>
                      {item.tooltip}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </TooltipProvider>
          </div>
          <motion.div className={`absolute rounded-full cursor-pointer group ${isPressed ? 'mobile-tap-glow' : ''}`} style={{ width: coreSize, height: coreSize, top: '50%', left: '50%', marginTop: -coreSize / 2, marginLeft: -coreSize / 2, zIndex: 10 }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} onMouseEnter={play} onClick={() => { play(); onExpand(); }} {...mobileTapProps}>
            <div className="absolute -inset-10 md:-inset-14 rounded-full -z-10" style={{ background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.06), hsl(var(--neon-purple) / 0.04) 40%, transparent 70%)', animation: 'glowPulse 4s ease-in-out infinite' }} />
            <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, hsl(180 100% 50% / 0.4), hsl(195 100% 50% / 0.2), hsl(270 80% 53% / 0.5), hsl(270 80% 53% / 0.1), transparent 60%)', animation: 'semiRotate 10s linear infinite', filter: 'blur(4px)', willChange: 'transform' }} />
            <div className="absolute inset-1.5 md:inset-2 rounded-full" style={{ border: '1px solid hsl(var(--neon-cyan) / 0.1)', boxShadow: 'inset 0 0 30px hsl(var(--neon-purple) / 0.06)' }} />
            <div className="absolute inset-3 md:inset-4 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--background))' }}>
              <div className="text-center relative">
                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.35em] mb-1 font-semibold" style={{ color: 'hsl(var(--muted-foreground))' }}>Explore</p>
                <p className="text-xs md:text-xl font-extrabold leading-tight tracking-tight" style={{ background: 'linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>My Creations</p>
                <AnimatePresence>
                  {cursorAnim && !isMobile && (
                    <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: [0, 1, 1, 0], y: [0, 8, 8, 12] }} transition={{ duration: 1.5, times: [0, 0.2, 0.7, 1] }} className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                      <MousePointerClick className="w-4 h-4" style={{ color: 'hsl(var(--neon-cyan))', filter: 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.5))' }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

/* ─── OVERLAY (shared) ─── */
const PortalSlider = () => {
  const [expanded, setExpanded] = useState(false);
  const { play } = useHoverSound();
  const isLight = useTheme();

  return (
    <>
      {isLight
        ? <EcosystemWall onExpand={() => setExpanded(true)} />
        : <DarkOrbit onExpand={() => setExpanded(true)} />
      }

      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[100] flex items-center justify-center" style={{ backdropFilter: 'blur(12px)', background: isLight ? 'hsl(0 0% 100% / 0.9)' : 'hsl(var(--background) / 0.9)' }} onClick={() => setExpanded(false)}>
            <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: 0.15 }} onClick={() => setExpanded(false)} className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors duration-300" style={{ background: isLight ? 'hsl(230 15% 95%)' : 'hsl(var(--muted) / 0.4)', border: isLight ? '1.5px solid hsl(230 15% 88%)' : '1px solid hsl(var(--neon-purple) / 0.1)' }}>
              <X className="w-5 h-5" style={{ color: isLight ? 'hsl(230 15% 30%)' : 'hsl(var(--foreground))' }} />
            </motion.button>
            <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
              <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl md:text-3xl font-extrabold tracking-tight" style={{
                background: isLight ? 'linear-gradient(135deg, hsl(240 65% 55%), hsl(260 70% 58%))' : 'linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>My Creations ✦</motion.h2>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xs mt-1.5" style={{ color: isLight ? 'hsl(230 10% 50%)' : 'hsl(var(--muted-foreground))' }}>Tools, projects & experiments</motion.p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-7 px-6 pt-20 pb-12 max-w-3xl w-full max-h-[80vh] overflow-y-auto" style={{ justifyItems: 'center' }} onClick={(e) => e.stopPropagation()}>
              {orbitProducts.map((item, i) => {
                const color = tileColors[i % tileColors.length];
                return (
                  <motion.a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ delay: 0.08 + i * 0.05, type: 'spring', stiffness: 200, damping: 18 }} whileHover={{ scale: 1.06, y: -4 }} whileTap={{ scale: 0.95 }} onMouseEnter={play} className="flex flex-col items-center text-center group" onClick={(e) => e.stopPropagation()}>
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-2.5 transition-all duration-300 relative overflow-hidden" style={{ background: isLight ? 'hsl(0 0% 100%)' : 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.8))', border: isLight ? `1.5px solid ${color}18` : '1px solid hsl(var(--neon-cyan) / 0.1)', boxShadow: isLight ? `0 2px 12px ${color}10` : '0 2px 10px hsl(0 0% 0% / 0.2)' }}>
                      <img src={item.icon} alt={item.name} loading="lazy" width={36} height={36} className="w-9 h-9 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300" style={{ filter: isLight ? 'none' : 'drop-shadow(0 0 3px hsl(var(--neon-cyan) / 0.4))' }} />
                    </div>
                    <span className={`text-xs md:text-sm font-bold truncate max-w-full ${hasBengali(item.name) ? 'font-bengali' : ''}`} style={{ color: isLight ? 'hsl(230 20% 15%)' : 'hsl(var(--foreground))' }}>{item.name}</span>
                    <span className="text-[10px] mt-0.5 leading-tight line-clamp-1" style={{ color: isLight ? 'hsl(230 10% 50%)' : 'hsl(var(--muted-foreground))' }}>{item.subtitle}</span>
                    <ExternalLink className="w-3 h-3 mt-1.5 transition-colors duration-300" style={{ color: isLight ? color : 'hsl(var(--muted-foreground))' }} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortalSlider;
