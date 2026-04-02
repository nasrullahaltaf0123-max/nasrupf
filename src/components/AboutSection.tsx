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
    <section className="py-14 md:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="section-heading mb-8">About Me</h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-foreground/90 text-sm md:text-base lg:text-lg leading-relaxed mb-4 max-w-2xl mx-auto"
        >
          I am an <span className="text-neon-purple font-bold text-glow">AI Creator & Visual Builder</span>.
          I build AI-powered tools, websites, and digital experiences that help creators and businesses grow.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          I turn ideas into real digital products using modern design and automation.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
              className="premium-card flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              <item.icon className="w-4 h-4 text-neon-cyan" style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.4))' }} />
              <span className="text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
