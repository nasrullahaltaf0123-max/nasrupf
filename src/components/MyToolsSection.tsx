import { motion } from 'framer-motion';
import { Wrench, ExternalLink } from 'lucide-react';
import useHoverSound from '@/hooks/useHoverSound';
import useMobileTap from '@/hooks/useMobileTap';

const tools = [
  { name: 'NasruTools', url: 'https://nasrutools.lovable.app', emoji: '🛠️', desc: 'AI-powered utility tools' },
  { name: 'PromptNovaAI', url: 'https://promptnovaai.lovable.app/', emoji: '🤖', desc: 'Prompt engineering toolkit' },
  { name: 'StudyFlowAI', url: 'https://studyandcareer-ai.lovable.app/', emoji: '📚', desc: 'Smart study companion' },
];

const MyToolsSection = () => {
  const { play } = useHoverSound();
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();

  return (
    <section className="py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center justify-center gap-2 mb-8">
          <Wrench className="w-5 h-5 text-neon-cyan" />
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">My Tools</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tools.map((t, i) => (
            <motion.a
              key={t.name}
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group block rounded-xl p-5 text-center transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
              style={{
                background: 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.7))',
                backdropFilter: 'blur(16px)',
                border: '1px solid hsl(var(--neon-purple) / 0.15)',
                boxShadow: '0 0 15px hsl(var(--neon-purple) / 0.08)',
              }}
              onMouseEnter={play}
              {...mobileTapProps}
            >
              <span className="text-3xl md:text-4xl block mb-3 group-hover:scale-110 transition-transform duration-300">{t.emoji}</span>
              <h3 className="text-sm md:text-base font-bold text-foreground mb-1 group-hover:text-glow transition-all duration-300">{t.name}</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground mb-3">{t.desc}</p>
              <ExternalLink className="w-4 h-4 text-muted-foreground mx-auto group-hover:text-neon-cyan group-hover:rotate-12 transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MyToolsSection;
