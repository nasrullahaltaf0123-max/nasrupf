import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import useHoverSound from '@/hooks/useHoverSound';

const tools = [
  { name: 'NasruTools', url: 'https://nasrutools.lovable.app', emoji: '🛠️' },
  { name: 'PromptNovaAI', url: 'https://promptnovaai.lovable.app/', emoji: '🤖' },
  { name: 'StudyFlowAI', url: 'https://studyandcareer-ai.lovable.app/', emoji: '📚' },
  { name: 'NasruShop', url: 'https://nasrushop.lovable.app', emoji: '🛍️' },
  { name: 'Cricket N', url: 'https://cricketnasrumade.lovable.app/', emoji: '🏏' },
  { name: 'Nasru Store', url: 'https://nasrustore.netlify.app/#', emoji: '🏪' },
];

// Duplicate for seamless infinite scroll
const doubled = [...tools, ...tools];

const ToolStrip = () => {
  const { play } = useHoverSound();

  return (
    <section className="py-8 px-4 snap-section overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-lg md:text-xl font-bold gradient-text text-center mb-6">Built With AI ✦</h2>
        <div className="relative max-w-5xl mx-auto overflow-hidden mask-strip">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {doubled.map((t, i) => (
              <a
                key={`${t.name}-${i}`}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={play}
                className="flex-shrink-0 group flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(145deg, hsl(var(--muted) / 0.4), hsl(var(--background) / 0.6))',
                  border: '1px solid hsl(var(--neon-purple) / 0.12)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{t.emoji}</span>
                <span className="text-sm font-semibold text-foreground whitespace-nowrap group-hover:text-glow transition-all duration-300">{t.name}</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-neon-cyan transition-colors duration-300" />
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ToolStrip;
