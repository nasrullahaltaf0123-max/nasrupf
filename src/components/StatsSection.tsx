import { motion, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Rocket, Eye, Globe } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

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
  const isLight = useTheme();

  if (isLight) {
    return (
      <section className="py-16 md:py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p
            className="text-[10px] uppercase tracking-[0.3em] font-semibold text-center mb-2"
            style={{ color: 'hsl(195 80% 36%)' }}
          >
            Impact & Numbers
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            style={{ color: 'hsl(222 30% 12%)' }}
          >
            Results that speak
          </h2>

          <div
            className="rounded-2xl p-6 md:p-10 grid grid-cols-3 gap-0"
            style={{
              background: 'hsl(0 0% 100%)',
              border: '1px solid hsl(220 16% 88%)',
              boxShadow: '0 1px 3px hsl(0 0% 0% / 0.04), 0 6px 24px hsl(0 0% 0% / 0.06)',
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="text-center py-4 md:py-6 relative"
                style={{
                  borderRight: i < 2 ? '1px solid hsl(220 16% 90%)' : 'none',
                }}
              >
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: 'hsl(195 80% 36% / 0.06)',
                    border: '1px solid hsl(195 80% 36% / 0.1)',
                  }}
                >
                  <s.icon
                    className="w-5 h-5 md:w-6 md:h-6"
                    style={{ color: 'hsl(195 80% 36%)' }}
                  />
                </div>
                <p
                  className="text-3xl md:text-5xl font-extrabold mb-1 tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, hsl(222 47% 18%), hsl(195 80% 36%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </p>
                <p
                  className="text-[10px] md:text-xs uppercase tracking-widest font-semibold"
                  style={{ color: 'hsl(220 10% 50%)' }}
                >
                  {s.label}
                </p>
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
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300"
                style={{
                  background: `hsl(var(${s.color}) / 0.08)`,
                  border: `1px solid hsl(var(${s.color}) / 0.1)`,
                }}
              >
                <s.icon
                  className="w-6 h-6 md:w-7 md:h-7 text-neon-cyan group-hover:scale-110 transition-all duration-300"
                  style={{ filter: 'drop-shadow(0 0 6px hsl(var(--neon-cyan) / 0.4))' }}
                />
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
