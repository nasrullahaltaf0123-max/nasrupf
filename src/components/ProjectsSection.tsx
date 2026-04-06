import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowUpRight } from 'lucide-react';
import useHoverSound from '@/hooks/useHoverSound';
import useMobileTap from '@/hooks/useMobileTap';
import { useTheme } from '@/hooks/useTheme';
import { featuredProducts, type DigitalLabProduct } from '@/data/digitalLabProducts';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const hasBengali = (s: string) => /[\u0980-\u09FF]/.test(s);

const ProjectCard = memo(({ p, i, onClick }: { p: DigitalLabProduct; i: number; onClick: () => void }) => {
  const { play } = useHoverSound();
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();
  const isLight = useTheme();

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
              background: isLight
                ? 'hsl(0 0% 100%)'
                : 'linear-gradient(145deg, hsl(var(--muted) / 0.4), hsl(var(--background) / 0.6))',
              backdropFilter: isLight ? 'none' : 'blur(8px)',
              WebkitBackdropFilter: isLight ? 'none' : 'blur(8px)',
              border: isLight
                ? '1.5px solid hsl(220 13% 88%)'
                : `1px solid hsl(var(${p.accent}) / 0.1)`,
              boxShadow: isLight
                ? '0 1px 3px hsl(0 0% 0% / 0.03), 0 4px 24px hsl(0 0% 0% / 0.05)'
                : '0 2px 16px hsl(0 0% 0% / 0.2)',
              padding: isMobile ? '24px 20px' : '32px 28px',
              minHeight: isMobile ? '220px' : '260px',
              transform: 'translateY(0)',
            }}
            whileHover={isLight ? { y: -6, boxShadow: '0 8px 40px hsl(0 0% 0% / 0.08), 0 2px 8px hsl(0 0% 0% / 0.04)' } : { scale: 1.03, y: -4 }}
            onMouseEnter={play}
            {...mobileTapProps}
          >
            {/* Hover glow — subtle for light, neon for dark */}
            <div
              className="absolute -inset-2 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: isLight
                  ? 'none'
                  : `radial-gradient(ellipse at center, hsl(var(${p.accent}) / 0.08), transparent 70%)`,
                filter: 'blur(16px)',
              }}
            />

            {/* Top accent line for light mode */}
            {isLight && (
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, hsl(195 80% 42% / 0.3), transparent)`,
                }}
              />
            )}

            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 overflow-hidden"
                style={{
                  background: isLight
                    ? 'hsl(220 20% 97%)'
                    : `hsl(var(${p.accent}) / 0.06)`,
                  border: isLight
                    ? '1px solid hsl(220 13% 90%)'
                    : `1px solid hsl(var(${p.accent}) / 0.08)`,
                }}
              >
                <img
                  src={p.icon}
                  alt={p.name}
                  loading="lazy"
                  width={36}
                  height={36}
                  className="w-9 h-9 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: isLight ? 'none' : 'drop-shadow(0 0 3px hsl(var(--neon-cyan) / 0.3))' }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className={`text-base md:text-lg font-bold truncate transition-all duration-300 mb-1.5 ${hasBengali(p.name) ? 'font-bengali' : ''}`}
                  style={{ color: isLight ? 'hsl(220 20% 14%)' : 'hsl(var(--foreground))' }}
                >
                  {p.name}
                </h3>
                <p
                  className="text-xs md:text-sm leading-relaxed line-clamp-2"
                  style={{ color: isLight ? 'hsl(220 10% 50%)' : 'hsl(var(--muted-foreground))' }}
                >
                  {p.subtitle}
                </p>
              </div>
            </div>

            <div className="mt-auto pt-6 flex justify-end">
              {isLight ? (
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: 'hsl(195 80% 42% / 0.06)',
                    border: '1px solid hsl(195 80% 42% / 0.12)',
                    color: 'hsl(195 80% 36%)',
                  }}
                >
                  View Details
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              ) : (
                <span
                  className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(${p.accent}) / 0.08), hsl(var(--neon-cyan) / 0.05))`,
                    border: `1px solid hsl(var(${p.accent}) / 0.1)`,
                    color: `hsl(var(${p.accent}))`,
                  }}
                >
                  View Details →
                </span>
              )}
            </div>
          </motion.div>
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
          {p.tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

ProjectCard.displayName = 'ProjectCard';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const isLight = useTheme();

  return (
    <section
      className="py-16 md:py-24 px-4"
      style={{
        background: isLight
          ? 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(220 20% 97%) 100%)'
          : 'transparent',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {isLight ? (
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-2" style={{ color: 'hsl(195 80% 36%)' }}>
              Flagship Products
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3" style={{ color: 'hsl(220 20% 14%)' }}>
              Featured Digital Products
            </h2>
            <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: 'hsl(220 10% 50%)' }}>
              Crafted with precision, powered by AI — each product built to solve real problems.
            </p>
            <div className="w-12 h-[2px] mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, hsl(195 80% 42%), hsl(250 65% 52%))' }} />
          </div>
        ) : (
          <>
            <h2 className="section-heading mb-3 text-center">Featured Digital Products</h2>
            <p className="text-muted-foreground text-sm text-center mb-12 max-w-lg mx-auto leading-relaxed">
              Crafted with precision, powered by AI — each product built to solve real problems.
            </p>
          </>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredProducts.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} onClick={() => setSelectedProject(i)} />
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (() => {
          const project = featuredProducts[selectedProject];
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100] flex items-center justify-center px-4"
              onClick={() => setSelectedProject(null)}
            >
              <div
                className="absolute inset-0"
                style={{
                  backdropFilter: 'blur(12px)',
                  background: isLight ? 'hsl(220 20% 97% / 0.92)' : 'hsl(var(--background) / 0.8)',
                }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md rounded-2xl p-7 md:p-9 z-10"
                style={{
                  background: isLight
                    ? 'hsl(0 0% 100%)'
                    : 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.8))',
                  backdropFilter: 'blur(16px)',
                  border: isLight
                    ? '1.5px solid hsl(220 13% 88%)'
                    : `1px solid hsl(var(${project.accent}) / 0.15)`,
                  boxShadow: isLight
                    ? '0 8px 40px hsl(0 0% 0% / 0.1), 0 2px 8px hsl(0 0% 0% / 0.04)'
                    : `0 0 30px hsl(var(${project.accent}) / 0.08), 0 8px 32px hsl(0 0% 0% / 0.35)`,
                }}
              >
                {/* Top accent line — light only */}
                {isLight && (
                  <div
                    className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
                    style={{ background: 'linear-gradient(90deg, transparent, hsl(195 80% 42% / 0.4), transparent)' }}
                  />
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{
                    background: isLight ? 'hsl(220 20% 96%)' : 'hsl(var(--muted) / 0.5)',
                    color: isLight ? 'hsl(220 10% 40%)' : 'hsl(var(--muted-foreground))',
                  }}
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="text-center">
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-5 overflow-hidden"
                    style={{
                      background: isLight ? 'hsl(220 20% 97%)' : `hsl(var(${project.accent}) / 0.06)`,
                      border: isLight ? '1px solid hsl(220 13% 90%)' : `1px solid hsl(var(${project.accent}) / 0.1)`,
                    }}
                  >
                    <img
                      src={project.icon}
                      alt={project.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                      style={{ filter: isLight ? 'none' : 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.4))' }}
                    />
                  </div>
                  <h3
                    className={`text-xl md:text-2xl font-extrabold mb-1.5 ${hasBengali(project.name) ? 'font-bengali' : ''}`}
                    style={{ color: isLight ? 'hsl(220 20% 14%)' : 'hsl(var(--foreground))' }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="text-sm mb-6 leading-relaxed"
                    style={{ color: isLight ? 'hsl(220 10% 50%)' : 'hsl(var(--muted-foreground))' }}
                  >
                    {project.subtitle}
                  </p>

                  <div className="flex gap-3 justify-center">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
                      style={{
                        background: isLight
                          ? 'hsl(195 80% 36%)'
                          : 'linear-gradient(135deg, hsl(var(--neon-purple)), hsl(var(--neon-cyan)))',
                        color: 'hsl(0 0% 100%)',
                        boxShadow: isLight
                          ? '0 4px 16px hsl(195 80% 36% / 0.2)'
                          : '0 0 16px hsl(var(--neon-purple) / 0.15), 0 4px 12px hsl(0 0% 0% / 0.25)',
                      }}
                    >
                      Live Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
                      style={{
                        background: isLight ? 'hsl(220 20% 96%)' : 'hsl(var(--muted) / 0.4)',
                        border: isLight ? '1.5px solid hsl(220 13% 88%)' : '1px solid hsl(var(--neon-purple) / 0.1)',
                        color: isLight ? 'hsl(220 20% 14%)' : 'hsl(var(--foreground))',
                      }}
                    >
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
