import { useState, memo, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, X, ArrowUpRight, Sparkles, Star, Zap } from 'lucide-react';
import useHoverSound from '@/hooks/useHoverSound';
import useMobileTap from '@/hooks/useMobileTap';
import { useTheme } from '@/hooks/useTheme';
import { featuredProducts, type DigitalLabProduct } from '@/data/digitalLabProducts';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import SparkleField from '@/components/SparkleField';
import WeaveBackground from '@/components/WeaveBackground';

const hasBengali = (s: string) => /[\u0980-\u09FF]/.test(s);

const productMeta = [
  { gradient: 'linear-gradient(135deg, hsl(240 65% 55%), hsl(280 70% 60%))', badge: '🔥 Popular', tagColor: 'hsl(240 65% 55%)', tagBg: 'hsl(240 65% 55% / 0.08)', borderGlow: 'hsl(240 65% 55% / 0.25)' },
  { gradient: 'linear-gradient(135deg, hsl(10 80% 55%), hsl(38 92% 55%))', badge: '🍛 Cultural', tagColor: 'hsl(10 80% 55%)', tagBg: 'hsl(10 80% 55% / 0.08)', borderGlow: 'hsl(10 80% 55% / 0.25)' },
  { gradient: 'linear-gradient(135deg, hsl(190 85% 45%), hsl(162 60% 50%))', badge: '⚡ AI Powered', tagColor: 'hsl(190 85% 45%)', tagBg: 'hsl(190 85% 45% / 0.08)', borderGlow: 'hsl(190 85% 45% / 0.25)' },
];

/* ── 3D Tilt Card for Light Mode ── */
const LightProjectCard = memo(({ p, i, onClick }: { p: DigitalLabProduct; i: number; onClick: () => void }) => {
  const { play } = useHoverSound();
  const meta = productMeta[i % productMeta.length];
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };
  const handleMouseLeave = () => { mouseX.set(0.5); mouseY.set(0.5); };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={play}
      className="group relative cursor-pointer"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        className="relative rounded-[28px] overflow-hidden h-full"
        style={{
          rotateX, rotateY,
          transformStyle: 'preserve-3d',
          background: 'hsl(0 0% 100%)',
          border: `1.5px solid hsl(230 15% 92%)`,
          boxShadow: '0 4px 24px hsl(230 20% 80% / 0.3), 0 1px 4px hsl(230 20% 80% / 0.2)',
        }}
        whileHover={{
          boxShadow: `0 20px 60px ${meta.borderGlow}, 0 8px 24px hsl(230 20% 80% / 0.2)`,
          border: `1.5px solid ${meta.borderGlow}`,
        }}
        transition={{ duration: 0.35 }}
      >
        {/* Animated gradient top bar */}
        <div className="h-1.5 w-full relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ background: meta.gradient, backgroundSize: '200% 100%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className="p-6 md:p-7 flex flex-col min-h-[220px] md:min-h-[260px]">
          {/* Badge */}
          <div className="flex items-center justify-between mb-5">
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
              style={{ background: meta.tagBg, color: meta.tagColor, border: `1px solid ${meta.tagColor}15` }}
            >
              {meta.badge}
            </span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className="w-3 h-3" style={{ color: 'hsl(38 92% 55%)', fill: 'hsl(38 92% 55%)' }} />
              ))}
            </div>
          </div>

          {/* Icon + Info */}
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden relative"
              style={{
                background: `linear-gradient(145deg, hsl(0 0% 100%), ${meta.tagBg})`,
                border: `1.5px solid ${meta.tagColor}18`,
                boxShadow: `0 8px 24px ${meta.tagColor}12`,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(105deg, transparent 40%, hsl(0 0% 100% / 0.6) 50%, transparent 60%)' }}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
              />
              <img src={p.icon} alt={p.name} loading="lazy" width={40} height={40} className="w-10 h-10 object-contain relative z-10" />
            </motion.div>
            <div className="flex-1 min-w-0">
              <h3
                className={`text-lg md:text-xl font-extrabold tracking-tight mb-1 ${hasBengali(p.name) ? 'font-bengali' : ''}`}
                style={{ color: 'hsl(230 25% 14%)' }}
              >
                {p.name}
              </h3>
              <p className="text-xs md:text-sm leading-relaxed line-clamp-2" style={{ color: 'hsl(230 10% 48%)' }}>
                {p.subtitle}
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-auto pt-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] font-medium" style={{ color: 'hsl(230 10% 60%)' }}>
              <Zap className="w-3 h-3" style={{ color: meta.tagColor }} />
              Live & Active
            </div>
            <motion.span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-5 py-2.5 rounded-xl transition-all duration-300"
              style={{
                background: meta.gradient,
                color: 'white',
                boxShadow: `0 4px 16px ${meta.tagColor}30`,
              }}
              whileHover={{ scale: 1.06, boxShadow: `0 8px 28px ${meta.tagColor}40` }}
            >
              Explore <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.span>
          </div>
        </div>

        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[28px]"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${meta.tagColor}08, transparent 70%)` }}
        />
      </motion.div>
    </motion.div>
  );
});
LightProjectCard.displayName = 'LightProjectCard';

/* ── Dark Mode Card ── */
const DarkProjectCard = memo(({ p, i, onClick }: { p: DigitalLabProduct; i: number; onClick: () => void }) => {
  const { play } = useHoverSound();
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            onClick={onClick}
            className={`group flex flex-col rounded-2xl relative overflow-hidden cursor-pointer transition-all duration-300 ease-out ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
            style={{
              background: `linear-gradient(145deg, hsl(var(--muted) / 0.4), hsl(var(--background) / 0.6))`,
              backdropFilter: 'blur(8px)',
              border: `1px solid hsl(var(${p.accent}) / 0.1)`,
              boxShadow: '0 2px 16px hsl(0 0% 0% / 0.2)',
              padding: isMobile ? '24px 20px' : '32px 28px',
              minHeight: isMobile ? '220px' : '260px',
            }}
            whileHover={{ scale: 1.03, y: -4 }}
            onMouseEnter={play}
            {...mobileTapProps}
          >
            <div className="absolute -inset-2 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(ellipse at center, hsl(var(${p.accent}) / 0.08), transparent 70%)`, filter: 'blur(16px)' }} />
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ background: `hsl(var(${p.accent}) / 0.06)`, border: `1px solid hsl(var(${p.accent}) / 0.08)` }}>
                <img src={p.icon} alt={p.name} loading="lazy" width={36} height={36} className="w-9 h-9 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300" style={{ filter: 'drop-shadow(0 0 3px hsl(var(--neon-cyan) / 0.3))' }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`text-base md:text-lg font-bold truncate mb-1.5 ${hasBengali(p.name) ? 'font-bengali' : ''}`} style={{ color: 'hsl(var(--foreground))' }}>{p.name}</h3>
                <p className="text-xs md:text-sm leading-relaxed line-clamp-2" style={{ color: 'hsl(var(--muted-foreground))' }}>{p.subtitle}</p>
              </div>
            </div>
            <div className="mt-auto pt-6 flex justify-end">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-all duration-300 group-hover:scale-105" style={{ background: `linear-gradient(135deg, hsl(var(${p.accent}) / 0.08), hsl(var(--neon-cyan) / 0.05))`, border: `1px solid hsl(var(${p.accent}) / 0.1)`, color: `hsl(var(${p.accent}))` }}>
                View Details →
              </span>
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="top" className="px-3 py-1.5 text-xs font-semibold rounded-lg" style={{ background: 'hsl(var(--muted) / 0.9)', backdropFilter: 'blur(8px)', border: '1px solid hsl(var(--neon-cyan) / 0.15)', boxShadow: '0 0 12px hsl(var(--neon-cyan) / 0.1)', color: 'hsl(var(--foreground))' }}>
          {p.tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});
DarkProjectCard.displayName = 'DarkProjectCard';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const isLight = useTheme();

  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      {isLight && (
        <>
          <SparkleField count={16} light />
          <WeaveBackground variant={0} opacity={0.08} speed={0.18} />
          <div className="absolute inset-0 -z-10 pointer-events-none" style={{
            background: 'linear-gradient(180deg, hsl(0 0% 99%) 0%, hsl(260 25% 97%) 50%, hsl(0 0% 99%) 100%)',
          }} />
          <div className="absolute top-20 right-0 w-48 h-48 pointer-events-none" style={{
            background: 'radial-gradient(circle, hsl(260 70% 58% / 0.06), transparent 70%)',
            borderRadius: '50%', filter: 'blur(30px)', animation: 'floatSlow 12s ease-in-out infinite',
          }} />
          <div className="absolute bottom-10 left-0 w-40 h-40 pointer-events-none" style={{
            background: 'radial-gradient(circle, hsl(190 85% 45% / 0.05), transparent 70%)',
            borderRadius: '50%', filter: 'blur(25px)', animation: 'floatSlow 15s ease-in-out infinite reverse',
          }} />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {isLight ? (
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{
                background: 'linear-gradient(135deg, hsl(240 65% 55% / 0.06), hsl(190 85% 45% / 0.06))',
                border: '1px solid hsl(240 65% 55% / 0.12)',
              }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: 'hsl(240 65% 55%)' }} />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold" style={{ color: 'hsl(240 65% 55%)' }}>
                Flagship Products
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4" style={{
              background: 'linear-gradient(135deg, hsl(230 25% 14%) 20%, hsl(260 70% 58%) 60%, hsl(190 85% 45%))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Featured Digital Products
            </h2>
            <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'hsl(230 10% 48%)' }}>
              Crafted with precision, powered by AI — each product built to solve real problems.
            </p>
          </div>
        ) : (
          <>
            <h2 className="section-heading mb-3 text-center">Featured Digital Products</h2>
            <p className="text-muted-foreground text-sm text-center mb-12 max-w-lg mx-auto">Crafted with precision, powered by AI — each product built to solve real problems.</p>
          </>
        )}

        <div className={isLight ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'}>
          {featuredProducts.map((p, i) =>
            isLight
              ? <LightProjectCard key={p.id} p={p} i={i} onClick={() => setSelectedProject(i)} />
              : <DarkProjectCard key={p.id} p={p} i={i} onClick={() => setSelectedProject(i)} />
          )}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject !== null && (() => {
          const project = featuredProducts[selectedProject];
          const meta = productMeta[selectedProject % productMeta.length];
          return (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100] flex items-center justify-center px-4"
              onClick={() => setSelectedProject(null)}
            >
              <div className="absolute inset-0" style={{ backdropFilter: 'blur(20px)', background: isLight ? 'hsl(240 30% 97% / 0.9)' : 'hsl(var(--background) / 0.8)' }} />
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 30 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md rounded-[28px] overflow-hidden z-10"
                style={{
                  background: isLight ? 'hsl(0 0% 100%)' : `linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.8))`,
                  backdropFilter: 'blur(16px)',
                  border: isLight ? `1.5px solid hsl(230 15% 90%)` : `1px solid hsl(var(${project.accent}) / 0.15)`,
                  boxShadow: isLight ? `0 25px 80px hsl(230 30% 60% / 0.2), 0 4px 20px hsl(0 0% 0% / 0.06)` : `0 0 30px hsl(var(${project.accent}) / 0.08), 0 8px 32px hsl(0 0% 0% / 0.35)`,
                }}
              >
                {/* Gradient banner */}
                <div className="h-2 w-full" style={{ background: meta.gradient }} />

                <div className="p-7 md:p-9">
                  <button onClick={() => setSelectedProject(null)} className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110" style={{ background: isLight ? 'hsl(230 15% 95%)' : 'hsl(var(--muted) / 0.5)', color: isLight ? 'hsl(230 10% 40%)' : 'hsl(var(--muted-foreground))' }}>
                    <X className="w-4 h-4" />
                  </button>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0.8 }} animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 overflow-hidden"
                      style={{ background: isLight ? meta.tagBg : `hsl(var(${project.accent}) / 0.06)`, border: isLight ? `1.5px solid ${meta.tagColor}18` : `1px solid hsl(var(${project.accent}) / 0.1)`, boxShadow: `0 8px 24px ${meta.tagColor}15` }}
                    >
                      <img src={project.icon} alt={project.name} width={48} height={48} className="w-12 h-12 object-contain" style={{ filter: isLight ? 'none' : 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.4))' }} />
                    </motion.div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block" style={{ background: meta.tagBg, color: meta.tagColor }}>
                      {meta.badge}
                    </span>
                    <h3 className={`text-xl md:text-2xl font-extrabold mb-1.5 ${hasBengali(project.name) ? 'font-bengali' : ''}`} style={{ color: isLight ? 'hsl(230 25% 14%)' : 'hsl(var(--foreground))' }}>{project.name}</h3>
                    <p className="text-sm mb-7 leading-relaxed" style={{ color: isLight ? 'hsl(230 10% 48%)' : 'hsl(var(--muted-foreground))' }}>{project.subtitle}</p>
                    <div className="flex gap-3 justify-center">
                      <motion.a
                        href={project.href} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300"
                        style={{ background: isLight ? meta.gradient : 'linear-gradient(135deg, hsl(var(--neon-purple)), hsl(var(--neon-cyan)))', boxShadow: isLight ? `0 4px 20px ${meta.tagColor}30` : '0 0 16px hsl(var(--neon-purple) / 0.15)' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Visit Project <ExternalLink className="w-4 h-4" />
                      </motion.a>
                      <button onClick={() => setSelectedProject(null)} className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105" style={{ background: isLight ? 'hsl(230 15% 95%)' : 'hsl(var(--muted) / 0.4)', border: isLight ? '1.5px solid hsl(230 15% 90%)' : '1px solid hsl(var(--neon-purple) / 0.1)', color: isLight ? 'hsl(230 25% 14%)' : 'hsl(var(--foreground))' }}>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
