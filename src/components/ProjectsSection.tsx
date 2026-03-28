import { motion } from 'framer-motion';
import { ExternalLink, Bot, UtensilsCrossed, BookOpen, User } from 'lucide-react';
import useHoverSound from '@/hooks/useHoverSound';
import useMobileTap from '@/hooks/useMobileTap';

const projects = [
  {
    icon: Bot,
    name: 'PromptNovaAI',
    tagline: 'AI-powered prompt & tool platform',
    desc: 'Modern AI tool system for generating prompts and automation',
    url: 'https://promptnovaai.lovable.app/',
    color: '--neon-purple',
  },
  {
    icon: UtensilsCrossed,
    name: 'মাছে ভাতে বাঙ্গালী',
    tagline: 'Traditional Bengali Food Website',
    desc: 'A culturally inspired Bengali food experience website',
    url: 'https://xn--r5bdf0b1bef2b3gccc1a2gd3h.xn--45bl4db.xn--54b7fta0cc/',
    color: '--neon-orange',
  },
  {
    icon: BookOpen,
    name: 'Literaria',
    tagline: 'Writers & Literature Platform',
    desc: 'A platform to explore writers and literature',
    url: 'https://literariahub.lovable.app/',
    color: '--neon-cyan',
  },
  {
    icon: User,
    name: 'Personal Portfolio',
    tagline: 'Interactive AI portfolio',
    desc: 'Interactive AI portfolio with animations and tools',
    url: 'https://mdnasrullah.pro.bd/',
    color: '--neon-blue',
  },
];

const ProjectsSection = () => {
  const { play } = useHoverSound();
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();

  return (
    <section className="py-10 px-4 snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group block rounded-2xl p-5 md:p-6 relative overflow-hidden transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
              style={{
                background: 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.7))',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: `1px solid hsl(var(${p.color}) / 0.15)`,
                boxShadow: `0 0 20px hsl(var(${p.color}) / 0.08), inset 0 1px 0 hsl(var(${p.color}) / 0.06)`,
              }}
              onMouseEnter={play}
              {...mobileTapProps}
            >
              {/* Hover glow */}
              <div
                className="absolute -inset-2 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at center, hsl(var(${p.color}) / 0.15), transparent 70%)`,
                  filter: 'blur(25px)',
                }}
              />
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_hsl(var(--neon-cyan)/0.3)] transition-all duration-300"
                  style={{ background: `hsl(var(${p.color}) / 0.1)` }}
                >
                  <p.icon className="w-5 h-5 md:w-6 md:h-6 text-neon-cyan group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm md:text-base font-bold text-foreground truncate group-hover:text-glow transition-all duration-300">
                      {p.name}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-neon-cyan group-hover:rotate-12 transition-all duration-300 flex-shrink-0" />
                  </div>
                  <p className="text-xs text-neon-purple font-medium mb-1">{p.tagline}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <span
                  className="text-[10px] md:text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(${p.color}) / 0.15), hsl(var(--neon-cyan) / 0.1))`,
                    border: `1px solid hsl(var(${p.color}) / 0.2)`,
                    color: `hsl(var(${p.color}))`,
                  }}
                >
                  View Project →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
