import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Bot, UtensilsCrossed, BookOpen, User, Swords, Heart } from 'lucide-react';
import useHoverSound from '@/hooks/useHoverSound';
import useMobileTap from '@/hooks/useMobileTap';

const projects = [
  {
    icon: Bot,
    name: 'PromptNovaAI',
    tagline: 'AI-powered prompt & tool platform',
    desc: 'Modern AI tool system for generating prompts and automation',
    tools: ['React', 'AI APIs', 'Tailwind CSS'],
    url: 'https://promptnovaai.lovable.app/',
    color: '--neon-purple',
  },
  {
    icon: UtensilsCrossed,
    name: 'মাছে ভাতে বাঙ্গালী',
    tagline: 'Traditional Bengali Food Website',
    desc: 'A culturally inspired Bengali food experience website',
    tools: ['Web Design', 'Cultural UI', 'Responsive'],
    url: 'https://xn--r5bdf0b1bef2b3gccc1a2gd3h.xn--45bl4db.xn--54b7fta0cc/',
    color: '--neon-orange',
  },
  {
    icon: BookOpen,
    name: 'Literaria',
    tagline: 'Writers & Literature Platform',
    desc: 'A platform to explore writers and literature',
    tools: ['React', 'Lovable', 'Modern UI'],
    url: 'https://literariahub.lovable.app/',
    color: '--neon-cyan',
  },
  {
    icon: User,
    name: 'Personal Portfolio',
    tagline: 'Interactive AI portfolio',
    desc: 'Interactive AI portfolio with animations and tools',
    tools: ['React', 'Framer Motion', 'AI'],
    url: 'https://mdnasrullah.pro.bd/',
    color: '--neon-blue',
  },
  {
    icon: Swords,
    name: 'War Chronicles',
    tagline: 'Strategic warfare experience',
    desc: 'An immersive war chronicles and strategy platform',
    tools: ['React', 'AI', 'Game Design'],
    url: '#',
    color: '--neon-purple',
  },
  {
    icon: Heart,
    name: 'JibonFlow | জীবনফ্লো',
    tagline: 'Life management platform',
    desc: 'A holistic life flow and productivity platform',
    tools: ['React', 'AI', 'Wellness'],
    url: '#',
    color: '--neon-cyan',
  },
];

const ProjectCard = ({ p, i, onClick }: { p: typeof projects[0]; i: number; onClick: () => void }) => {
  const { play } = useHoverSound();
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();
  const hasBengali = /[\u0980-\u09FF]/.test(p.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      onClick={onClick}
      className={`group block rounded-2xl p-5 md:p-7 relative overflow-hidden cursor-pointer transition-all duration-400 ease-out hover:scale-[1.03] hover:-translate-y-1.5 ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
      style={{
        background: 'linear-gradient(145deg, hsl(var(--muted) / 0.45), hsl(var(--background) / 0.65))',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: `1px solid hsl(var(${p.color}) / 0.12)`,
        boxShadow: `0 4px 24px hsl(0 0% 0% / 0.25), 0 0 0 1px hsl(var(${p.color}) / 0.05), inset 0 1px 0 hsl(var(--foreground) / 0.03)`,
      }}
      onMouseEnter={play}
      {...mobileTapProps}
    >
      <div
        className="absolute -inset-2 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at center, hsl(var(${p.color}) / 0.12), transparent 70%)`,
          filter: 'blur(30px)',
        }}
      />
      <div className="flex items-start gap-4">
        <div
          className="w-11 h-11 md:w-13 md:h-13 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)] transition-all duration-300"
          style={{ background: `hsl(var(${p.color}) / 0.08)`, border: `1px solid hsl(var(${p.color}) / 0.1)` }}
        >
          <p.icon className="w-5 h-5 md:w-6 md:h-6 text-neon-cyan group-hover:scale-110 transition-transform duration-300" style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.4))' }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`text-sm md:text-base font-bold text-foreground truncate group-hover:text-glow transition-all duration-300 mb-1.5 ${hasBengali ? 'font-bengali' : ''}`}>
            {p.name}
          </h3>
          <p className="text-xs text-neon-purple font-semibold mb-1.5 tracking-wide">{p.tagline}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
        </div>
      </div>
      <div className="mt-5 flex justify-end">
        <span
          className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-all duration-300 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, hsl(var(${p.color}) / 0.12), hsl(var(--neon-cyan) / 0.08))`,
            border: `1px solid hsl(var(${p.color}) / 0.15)`,
            color: `hsl(var(${p.color}))`,
          }}
        >
          View Details →
        </span>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="py-14 md:py-20 px-4 snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading mb-3 text-center">Featured Digital Products</h2>
        <p className="text-muted-foreground text-sm text-center mb-10 max-w-lg mx-auto">Crafted with precision, powered by AI — each product built to solve real problems.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} i={i} onClick={() => setSelectedProject(i)} />
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(16px)' }}
              exit={{ backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-background/75"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl p-7 md:p-9 z-10"
              style={{
                background: 'linear-gradient(145deg, hsl(var(--muted) / 0.55), hsl(var(--background) / 0.8))',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                border: `1px solid hsl(var(${projects[selectedProject].color}) / 0.25)`,
                boxShadow: `0 0 80px hsl(var(${projects[selectedProject].color}) / 0.12), 0 12px 50px hsl(0 0% 0% / 0.45)`,
              }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-muted/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all duration-200"
                style={{ border: '1px solid hsl(var(--neon-purple) / 0.1)' }}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: `hsl(var(${projects[selectedProject].color}) / 0.08)`, border: `1px solid hsl(var(${projects[selectedProject].color}) / 0.12)` }}
                >
                  {(() => { const Icon = projects[selectedProject].icon; return <Icon className="w-7 h-7 text-neon-cyan" style={{ filter: 'drop-shadow(0 0 6px hsl(var(--neon-cyan) / 0.5))' }} />; })()}
                </div>
                <h3 className={`text-xl md:text-2xl font-extrabold text-foreground mb-1.5 text-glow ${/[\u0980-\u09FF]/.test(projects[selectedProject].name) ? 'font-bengali' : ''}`}>
                  {projects[selectedProject].name}
                </h3>
                <p className="text-xs text-neon-purple font-semibold mb-4 tracking-wide">{projects[selectedProject].tagline}</p>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{projects[selectedProject].desc}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-7">
                  {projects[selectedProject].tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-semibold px-3 py-1.5 rounded-full"
                      style={{
                        background: 'hsl(var(--muted) / 0.5)',
                        border: '1px solid hsl(var(--neon-cyan) / 0.12)',
                        color: 'hsl(var(--neon-cyan))',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 justify-center">
                  <a
                    href={projects[selectedProject].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-primary-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--neon-purple)), hsl(var(--neon-cyan)))',
                      boxShadow: '0 0 30px hsl(var(--neon-purple) / 0.25), 0 4px 16px hsl(0 0% 0% / 0.3)',
                    }}
                  >
                    Live Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-xl font-bold text-sm text-foreground transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'hsl(var(--muted) / 0.45)',
                      border: '1px solid hsl(var(--neon-purple) / 0.15)',
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
