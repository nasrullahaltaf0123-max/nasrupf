import { motion } from 'framer-motion';
import { Sparkles, Cpu, Palette, Zap } from 'lucide-react';

const highlights = [
  { icon: Cpu, text: 'AI-Powered Tools' },
  { icon: Palette, text: 'Modern Design' },
  { icon: Zap, text: 'Automation' },
  { icon: Sparkles, text: 'Digital Products' },
];

const AboutSection = () => {
  return (
    <section className="py-10 px-4 snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">About Me</h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-foreground/90 text-sm md:text-base leading-relaxed mb-4 max-w-2xl mx-auto"
          style={{ textShadow: '0 0 20px hsl(var(--neon-purple) / 0.1)' }}
        >
          I am an <span className="text-neon-purple font-semibold text-glow">AI Creator & Visual Builder</span>.
          I build AI-powered tools, websites, and digital experiences that help creators and businesses grow.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          I turn ideas into real digital products using modern design and automation.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.7))',
                backdropFilter: 'blur(12px)',
                border: '1px solid hsl(var(--neon-purple) / 0.15)',
              }}
            >
              <item.icon className="w-3.5 h-3.5 text-neon-cyan" />
              <span className="text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
