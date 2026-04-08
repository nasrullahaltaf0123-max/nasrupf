import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowUpRight } from 'lucide-react';
import useHoverSound from '@/hooks/useHoverSound';
import useMobileTap from '@/hooks/useMobileTap';
import { useTheme } from '@/hooks/useTheme';
import { featuredProducts, type DigitalLabProduct } from '@/data/digitalLabProducts';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const hasBengali = (s: string) => /[\u0980-\u09FF]/.test(s);

const bentoColors = [
  { bg: 'linear-gradient(145deg, hsl(240 65% 55% / 0.06), hsl(240 65% 55% / 0.02))', accent: 'hsl(240 65% 55%)', border: 'hsl(240 65% 55% / 0.15)' },
  { bg: 'linear-gradient(145deg, hsl(260 70% 58% / 0.06), hsl(260 70% 58% / 0.02))', accent: 'hsl(260 70% 58%)', border: 'hsl(260 70% 58% / 0.15)' },
  { bg: 'linear-gradient(145deg, hsl(190 85% 45% / 0.06), hsl(190 85% 45% / 0.02))', accent: 'hsl(190 85% 45%)', border: 'hsl(190 85% 45% / 0.15)' },
  { bg: 'linear-gradient(145deg, hsl(10 80% 62% / 0.06), hsl(10 80% 62% / 0.02))', accent: 'hsl(10 80% 62%)', border: 'hsl(10 80% 62% / 0.15)' },
  { bg: 'linear-gradient(145deg, hsl(38 92% 55% / 0.06), hsl(38 92% 55% / 0.02))', accent: 'hsl(38 92% 55%)', border: 'hsl(38 92% 55% / 0.15)' },
  { bg: 'linear-gradient(145deg, hsl(162 60% 50% / 0.06), hsl(162 60% 50% / 0.02))', accent: 'hsl(162 60% 50%)', border: 'hsl(162 60% 50% / 0.15)' },
];

const LightProjectCard = memo(({ p, i, onClick }: { p: DigitalLabProduct; i: number; onClick: () => void }) => {
  const { play } = useHoverSound();
  const bc = bentoColors[i % bentoColors.length];
  const isLarge = i === 0 || i === 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      onClick={onClick}
      className={`group flex flex-col rounded-3xl relative overflow-hidden cursor-pointer transition-all duration-300 ease-out ${isLarge ? 'sm:col-span-2' : ''}`}
      style={{
        background: bc.bg,
        border: `1.5px solid ${bc.border}`,
        padding: '28px 24px',
        minHeight: isLarge ? '240px' : '200px',
      }}
      whileHover={{ y: -8, boxShadow: `0 20px 60px ${bc.accent}18, 0 4px 16px ${bc.accent}10` }}
      onMouseEnter={play}
    >
      {/* Floating colorful accent blob */}
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-40 pointer-events-none" style={{
        background: `radial-gradient(circle, ${bc.accent}35, transparent 70%)`,
        filter: 'blur(25px)',
      }} />
      <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full opacity-20 pointer-events-none" style={{
        background: `radial-gradient(circle, ${bc.accent}25, transparent 70%)`,
        filter: 'blur(15px)',
      }} />

      <div className="flex items-start gap-4 relative z-10">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 overflow-hidden group-hover:scale-110 group-hover:rotate-3"
          style={{
            background: `linear-gradient(145deg, hsl(0 0% 100%), ${bc.accent}08)`,
            border: `1.5px solid ${bc.border}`,
            boxShadow: `0 4px 16px ${bc.accent}12`,
          }}
        >
          <img src={p.icon} alt={p.name} loading="lazy" width={36} height={36} className="w-9 h-9 object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`text-base md:text-lg font-bold truncate mb-1 ${hasBengali(p.name) ? 'font-bengali' : ''}`} style={{ color: 'hsl(230 25% 14%)' }}>
            {p.name}
          </h3>
          <p className="text-xs md:text-sm leading-relaxed line-clamp-2" style={{ color: 'hsl(230 10% 48%)' }}>
            {p.subtitle}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-5 flex justify-end relative z-10">
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl transition-all duration-300 group-hover:scale-105"
          style={{ background: `${bc.accent}10`, color: bc.accent, border: `1px solid ${bc.accent}18` }}
        >
          Explore <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </motion.div>
  );
});
LightProjectCard.displayName = 'LightProjectCard';

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
    <section className="py-20 md:py-28 px-4 relative overflow-hidden" style={{ background: isLight ? 'transparent' : 'transparent' }}>
      {/* Light mode colorful background */}
      {isLight && (
        <>
          <div className="absolute inset-0 -z-10 pointer-events-none" style={{
            background: 'linear-gradient(180deg, hsl(0 0% 99%) 0%, hsl(260 25% 97%) 50%, hsl(0 0% 99%) 100%)',
          }} />
          <div className="absolute top-20 right-0 w-48 h-48 pointer-events-none" style={{
            background: 'radial-gradient(circle, hsl(260 70% 58% / 0.06), transparent 70%)',
            borderRadius: '50%', filter: 'blur(30px)', animation: 'floatSlow 12s ease-in-out infinite',
          }} />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {isLight ? (
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold mb-3" style={{ color: 'hsl(240 65% 55%)' }}>Flagship Products</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3" style={{
              background: 'linear-gradient(135deg, hsl(230 25% 14%) 20%, hsl(260 70% 58%) 60%, hsl(190 85% 45%))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Featured Digital Products
            </h2>
            <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: 'hsl(230 10% 48%)' }}>
              Crafted with precision, powered by AI — each product built to solve real problems.
            </p>
          </div>
        ) : (
          <>
            <h2 className="section-heading mb-3 text-center">Featured Digital Products</h2>
            <p className="text-muted-foreground text-sm text-center mb-12 max-w-lg mx-auto">Crafted with precision, powered by AI — each product built to solve real problems.</p>
          </>
        )}

        <div className={isLight ? 'grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'}>
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
          const bc = bentoColors[selectedProject % bentoColors.length];
          return (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100] flex items-center justify-center px-4"
              onClick={() => setSelectedProject(null)}
            >
              <div className="absolute inset-0" style={{ backdropFilter: 'blur(16px)', background: isLight ? 'hsl(240 30% 97% / 0.88)' : 'hsl(var(--background) / 0.8)' }} />
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md rounded-3xl p-7 md:p-9 z-10"
                style={{
                  background: isLight ? 'hsl(0 0% 100%)' : `linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.8))`,
                  backdropFilter: 'blur(16px)',
                  border: isLight ? `2px solid ${bc.border}` : `1px solid hsl(var(${project.accent}) / 0.15)`,
                  boxShadow: isLight ? `0 20px 80px ${bc.accent}25, 0 4px 16px hsl(0 0% 0% / 0.06)` : `0 0 30px hsl(var(${project.accent}) / 0.08), 0 8px 32px hsl(0 0% 0% / 0.35)`,
                }}
              >
                {/* Gradient accent top bar */}
                {isLight && <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${bc.accent}, hsl(190 85% 45%))` }} />}
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200" style={{ background: isLight ? 'hsl(230 15% 95%)' : 'hsl(var(--muted) / 0.5)', color: isLight ? 'hsl(230 10% 40%)' : 'hsl(var(--muted-foreground))' }}>
                  <X className="w-4 h-4" />
                </button>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 overflow-hidden" style={{ background: isLight ? bc.bg : `hsl(var(${project.accent}) / 0.06)`, border: isLight ? `1.5px solid ${bc.border}` : `1px solid hsl(var(${project.accent}) / 0.1)` }}>
                    <img src={project.icon} alt={project.name} width={48} height={48} className="w-12 h-12 object-contain" style={{ filter: isLight ? 'none' : 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.4))' }} />
                  </div>
                  <h3 className={`text-xl md:text-2xl font-extrabold mb-1.5 ${hasBengali(project.name) ? 'font-bengali' : ''}`} style={{ color: isLight ? 'hsl(230 25% 14%)' : 'hsl(var(--foreground))' }}>{project.name}</h3>
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: isLight ? 'hsl(230 10% 48%)' : 'hsl(var(--muted-foreground))' }}>{project.subtitle}</p>
                  <div className="flex gap-3 justify-center">
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:scale-105" style={{ background: isLight ? `linear-gradient(135deg, ${bc.accent}, hsl(260 70% 58%))` : 'linear-gradient(135deg, hsl(var(--neon-purple)), hsl(var(--neon-cyan)))', boxShadow: isLight ? `0 4px 20px ${bc.accent}30` : '0 0 16px hsl(var(--neon-purple) / 0.15)' }}>
                      Live Project <ExternalLink className="w-4 h-4" />
                    </a>
                    <button onClick={() => setSelectedProject(null)} className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105" style={{ background: isLight ? 'hsl(230 15% 95%)' : 'hsl(var(--muted) / 0.4)', border: isLight ? '1.5px solid hsl(230 15% 90%)' : '1px solid hsl(var(--neon-purple) / 0.1)', color: isLight ? 'hsl(230 25% 14%)' : 'hsl(var(--foreground))' }}>
                      Close
                    </button>
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
