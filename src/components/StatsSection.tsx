import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const mv = useMotionValue(0);
          const unsub = mv.on('change', (v) => setDisplay(Math.round(v)));
          animate(mv, value, { duration: 1.5, ease: 'easeOut' });
          return () => unsub();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}{suffix}</span>;
};

const StatsSection = () => {
  return (
    <section className="py-10 px-4 snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-8 text-center">Stats</h2>
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="rounded-2xl p-4 md:p-6 text-center group transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.7))',
                backdropFilter: 'blur(16px)',
                border: `1px solid hsl(var(${s.color}) / 0.15)`,
                boxShadow: `0 0 15px hsl(var(${s.color}) / 0.08)`,
              }}
            >
              <s.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-neon-cyan group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(var(--neon-cyan)/0.5)] transition-all duration-300" />
              <p className="text-2xl md:text-4xl font-bold gradient-text mb-1">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
