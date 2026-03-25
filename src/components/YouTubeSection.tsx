import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

const channels = [
  { name: 'SlurpNova ASMR', emoji: '🎧' },
  { name: 'Health Capsule BD', emoji: '💊' },
];

const YouTubeSection = () => {
  return (
    <section className="py-6 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">Channels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="rounded-xl p-5 flex items-center gap-4 cursor-pointer group transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1"
              style={{
                background: 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.7))',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid hsl(var(--neon-purple) / 0.15)',
                boxShadow: '0 0 15px hsl(var(--neon-purple) / 0.1), inset 0 1px 0 hsl(var(--neon-purple) / 0.08)',
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:shadow-[0_0_15px_hsl(0_80%_50%/0.3)] transition-all duration-300">
                <Youtube className="w-6 h-6 text-red-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_hsl(0_80%_50%/0.5)] transition-all duration-300" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground group-hover:text-glow transition-all duration-300">{ch.name}</p>
                <p className="text-xs text-muted-foreground">{ch.emoji} YouTube Channel</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default YouTubeSection;
