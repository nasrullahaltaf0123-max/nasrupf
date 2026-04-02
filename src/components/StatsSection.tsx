import { motion, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Rocket, Eye, Globe } from 'lucide-react';

const stats = [
  { icon: Rocket, value: 10, suffix: '+', label: 'Projects Built', color: '--neon-purple' },
  { icon: Eye, value: 100, suffix: 'K+', label: 'Views Generated', color: '--neon-cyan' },
  { icon: Globe, value: 3, suffix: '+', label: 'Live Websites', color: '--neon-blue' },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const controls = animate(0, value, {
            duration: 1.5,
            ease: 'easeOut',
            onUpdate: (v) => setDisplay(Math.round(v)),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}{suffix}</span>;
};

const StatsSection = () => {
  return (
    <section className="py-14 md:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="section-heading mb-10 text-center">Impact & Numbers</h2>
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="premium-card rounded-2xl p-5 md:p-7 text-center group transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)]"
                style={{ background: `hsl(var(${s.color}) / 0.08)`, border: `1px solid hsl(var(${s.color}) / 0.1)` }}
              >
                <s.icon className="w-6 h-6 md:w-7 md:h-7 text-neon-cyan group-hover:scale-110 transition-all duration-300" style={{ filter: 'drop-shadow(0 0 6px hsl(var(--neon-cyan) / 0.4))' }} />
              </div>
              <p className="text-3xl md:text-5xl font-extrabold gradient-text mb-2 tracking-tight">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-semibold">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
