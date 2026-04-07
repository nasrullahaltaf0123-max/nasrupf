import { motion } from 'framer-motion';
import { Sparkles, Cpu, Palette, Zap } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const highlights = [
  { icon: Cpu, text: 'AI-Powered Tools', color: 'hsl(240 65% 55%)' },
  { icon: Palette, text: 'Modern Design', color: 'hsl(260 70% 58%)' },
  { icon: Zap, text: 'Automation', color: 'hsl(190 85% 45%)' },
  { icon: Sparkles, text: 'Digital Products', color: 'hsl(10 80% 62%)' },
];

const AboutSection = () => {
  const isLight = useTheme();

  if (isLight) {
    return (
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        {/* Diagonal background accent */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(170deg, hsl(0 0% 99%) 0%, hsl(240 30% 97%) 50%, hsl(0 0% 99%) 100%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.3em] font-bold mb-3"
            style={{ color: 'hsl(260 70% 58%)' }}
          >
            Who I Am
          </motion.p>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8"
            style={{
              background: 'linear-gradient(135deg, hsl(230 25% 14%), hsl(240 65% 55%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About Me
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-sm md:text-base lg:text-lg leading-relaxed mb-4 max-w-2xl mx-auto"
            style={{ color: 'hsl(230 15% 30%)' }}
          >
            I am an <span className="font-bold" style={{ color: 'hsl(240 65% 55%)' }}>AI Creator & Visual Builder</span>.
            I build AI-powered tools, websites, and digital experiences that help creators and businesses grow.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: 'hsl(230 10% 50%)' }}
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
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                style={{
                  background: 'hsl(0 0% 100%)',
                  border: `1.5px solid ${item.color}20`,
                  boxShadow: `0 2px 12px ${item.color}10`,
                }}
              >
                <item.icon className="w-4 h-4" style={{ color: item.color }} />
                <span style={{ color: 'hsl(230 20% 20%)' }}>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
  }

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
          I am an <span className="text-neon-purple font-bold" style={{ textShadow: '0 0 10px hsl(var(--neon-purple) / 0.6), 0 0 30px hsl(var(--neon-purple) / 0.3)' }}>AI Creator & Visual Builder</span>.
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
              <item.icon
                className="w-4 h-4 text-neon-cyan"
                style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.4))' }}
              />
              <span className="text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
