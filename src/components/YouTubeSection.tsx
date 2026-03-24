import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

const channels = [
  { name: 'SlurpNova ASMR', emoji: '🎧' },
  { name: 'Health Capsule BD', emoji: '💊' },
];

const YouTubeSection = () => {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-8">Channels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="card-glow rounded-xl p-6 flex items-center gap-4 cursor-pointer group transition-all hover:scale-[1.03]"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:shadow-[0_0_15px_hsl(0_80%_50%/0.3)] transition-shadow">
                <Youtube className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">{ch.name}</p>
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
