import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import useHoverSound from '@/hooks/useHoverSound';
import useMobileTap from '@/hooks/useMobileTap';
import { featuredProducts, type DigitalLabProduct } from '@/data/digitalLabProducts';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const hasBengali = (s: string) => /[\u0980-\u09FF]/.test(s);

const ProjectCard = memo(({ p, i, onClick }: { p: DigitalLabProduct; i: number; onClick: () => void }) => {
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
            className={`group block rounded-2xl relative overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
            style={{
              background: 'linear-gradient(145deg, hsl(var(--muted) / 0.4), hsl(var(--background) / 0.6))',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: `1px solid hsl(var(${p.accent}) / 0.1)`,
              boxShadow: `0 2px 16px hsl(0 0% 0% / 0.2)`,
              padding: isMobile ? '24px 20px' : '32px 28px',
              minHeight: isMobile ? '200px' : '240px',
            }}
            onMouseEnter={play}
            {...mobileTapProps}
          >
            <div
              className="absolute -inset-2 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(ellipse at center, hsl(var(${p.accent}) / 0.08), transparent 70%)`,
                filter: 'blur(16px)',
              }}
            />

            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-shadow duration-300 group-hover:shadow-[0_0_14px_hsl(var(--neon-cyan)/0.2)] overflow-hidden"
                style={{
                  background: `hsl(var(${p.accent}) / 0.06)`,
                  border: `1px solid hsl(var(${p.accent}) / 0.08)`,
                }}
              >
                <img
                  src={p.icon}
                  alt={p.name}
                  loading="lazy"
                  width={36}
                  height={36}
                  className="w-9 h-9 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0 0 3px hsl(var(--neon-cyan) / 0.3))' }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`text-base md:text-lg font-bold text-foreground truncate group-hover:text-glow transition-all duration-300 mb-1.5 ${hasBengali(p.name) ? 'font-bengali' : ''}`}>
                  {p.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">{p.subtitle}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
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
            </div>
          </motion.div>
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
          {p.tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

ProjectCard.displayName = 'ProjectCard';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading mb-3 text-center">Featured Digital Products</h2>
        <p className="text-muted-foreground text-sm text-center mb-12 max-w-lg mx-auto leading-relaxed">
          Crafted with precision, powered by AI — each product built to solve real problems.
        </p>
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
              <div className="absolute inset-0 bg-background/80" style={{ backdropFilter: 'blur(8px)' }} />
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md rounded-2xl p-7 md:p-9 z-10"
                style={{
                  background: 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.8))',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid hsl(var(${project.accent}) / 0.15)`,
                  boxShadow: `0 0 30px hsl(var(${project.accent}) / 0.08), 0 8px 32px hsl(0 0% 0% / 0.35)`,
                }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="text-center">
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-5 overflow-hidden"
                    style={{
                      background: `hsl(var(${project.accent}) / 0.06)`,
                      border: `1px solid hsl(var(${project.accent}) / 0.1)`,
                    }}
                  >
                    <img
                      src={project.icon}
                      alt={project.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                      style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.4))' }}
                    />
                  </div>
                  <h3 className={`text-xl md:text-2xl font-extrabold text-foreground mb-1.5 text-glow ${hasBengali(project.name) ? 'font-bengali' : ''}`}>
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{project.subtitle}</p>

                  <div className="flex gap-3 justify-center">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-primary-foreground transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, hsl(var(--neon-purple)), hsl(var(--neon-cyan)))',
                        boxShadow: '0 0 16px hsl(var(--neon-purple) / 0.15), 0 4px 12px hsl(0 0% 0% / 0.25)',
                      }}
                    >
                      Live Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 rounded-xl font-bold text-sm text-foreground transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'hsl(var(--muted) / 0.4)',
                        border: '1px solid hsl(var(--neon-purple) / 0.1)',
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
