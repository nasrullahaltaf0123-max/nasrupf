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
    <section className="py-10 px-4 snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-8 text-center">Why Choose Me</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group rounded-xl p-4 md:p-5 text-center transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 cursor-default ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
              style={{
                background: 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.7))',
                backdropFilter: 'blur(16px)',
                border: '1px solid hsl(var(--neon-cyan) / 0.1)',
                boxShadow: '0 0 12px hsl(var(--neon-purple) / 0.06)',
              }}
              {...mobileTapProps}
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-muted/50 flex items-center justify-center mx-auto mb-3 group-hover:shadow-[0_0_18px_hsl(var(--neon-cyan)/0.35)] transition-all duration-300">
                <r.icon className="w-5 h-5 text-neon-cyan group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_hsl(var(--neon-cyan)/0.5)] transition-all duration-300" />
              </div>
              <p className="text-xs md:text-sm font-semibold text-foreground mb-1">{r.title}</p>
              <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed hidden md:block">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseMeSection;
