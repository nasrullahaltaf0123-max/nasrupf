import { motion, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Rocket, Eye, Globe } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const stats = [
  { icon: Rocket, value: 10, suffix: '+', label: 'Projects Built', color: 'hsl(240 65% 55%)' },
  { icon: Eye, value: 100, suffix: 'K+', label: 'Views Generated', color: 'hsl(260 70% 58%)' },
  { icon: Globe, value: 3, suffix: '+', label: 'Live Websites', color: 'hsl(190 85% 45%)' },
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
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        {/* Asymmetric background */}
        <div className="absolute inset-0 -z-10 pointer-events-none" style={{
          background: 'linear-gradient(160deg, hsl(240 30% 97%) 0%, hsl(0 0% 99%) 100%)',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold mb-3" style={{ color: 'hsl(10 80% 62%)' }}>
              Impact
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{
              background: 'linear-gradient(135deg, hsl(230 25% 14%), hsl(10 80% 55%))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Results that speak
            </h2>
          </div>

          {/* Circular stat cards */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, type: 'spring' }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="w-36 h-36 md:w-44 md:h-44 rounded-full flex flex-col items-center justify-center text-center transition-all duration-300"
                style={{
                  background: 'hsl(0 0% 100%)',
                  border: `2px solid ${s.color}18`,
                  boxShadow: `0 4px 24px ${s.color}12, 0 1px 4px hsl(0 0% 0% / 0.04)`,
                }}
              >
                <s.icon className="w-5 h-5 mb-2" style={{ color: s.color }} />
                <p className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: s.color }}>
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-semibold mt-1" style={{ color: 'hsl(230 10% 50%)' }}>
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
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
        <h2 className="section-heading mb-10 text-center">Impact & Numbers</h2>
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }} className="premium-card rounded-2xl p-5 md:p-7 text-center group transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'hsl(var(--neon-cyan) / 0.08)', border: '1px solid hsl(var(--neon-cyan) / 0.1)' }}>
                <s.icon className="w-6 h-6 md:w-7 md:h-7 text-neon-cyan group-hover:scale-110 transition-all duration-300" style={{ filter: 'drop-shadow(0 0 6px hsl(var(--neon-cyan) / 0.4))' }} />
              </div>
              <p className="text-3xl md:text-5xl font-extrabold gradient-text mb-2 tracking-tight"><AnimatedNumber value={s.value} suffix={s.suffix} /></p>
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-semibold">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
