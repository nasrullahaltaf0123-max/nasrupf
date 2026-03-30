import { motion } from 'framer-motion';
import { Zap, Paintbrush, Bot, Heart, Headphones } from 'lucide-react';
import useMobileTap from '@/hooks/useMobileTap';

const reasons = [
  { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
  { icon: Paintbrush, title: 'Clean & Modern Design', desc: 'Sleek visuals that impress and convert' },
  { icon: Bot, title: 'AI-Powered Solutions', desc: 'Leveraging AI for smarter products' },
  { icon: Heart, title: 'Client-Focused Approach', desc: 'Your vision, my execution' },
  { icon: Headphones, title: 'Ongoing Support', desc: 'Reliable support even after delivery' },
];

const WhyChooseMeSection = () => {
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();

  return (
    <section className="py-14 md:py-20 px-4 snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading mb-3 text-center">Why Choose Me</h2>
        <p className="text-muted-foreground text-sm text-center mb-10">The difference that sets my work apart</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group premium-card rounded-xl p-5 md:p-6 text-center transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1.5 cursor-default ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
              {...mobileTapProps}
            >
              <div
                className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.35)] transition-all duration-300"
                style={{ background: 'hsl(var(--neon-cyan) / 0.06)', border: '1px solid hsl(var(--neon-cyan) / 0.1)' }}
              >
                <r.icon className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-all duration-300" style={{ filter: 'drop-shadow(0 0 5px hsl(var(--neon-cyan) / 0.5))' }} />
              </div>
              <p className="text-xs md:text-sm font-bold text-foreground mb-1.5">{r.title}</p>
              <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed hidden md:block">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseMeSection;
