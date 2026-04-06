import { motion } from 'framer-motion';
import { Zap, Paintbrush, Bot, Heart, Headphones } from 'lucide-react';
import useMobileTap from '@/hooks/useMobileTap';
import { useTheme } from '@/hooks/useTheme';

const reasons = [
  { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality', accent: '45 90% 50%' },
  { icon: Paintbrush, title: 'Clean & Modern Design', desc: 'Sleek visuals that impress and convert', accent: '250 65% 52%' },
  { icon: Bot, title: 'AI-Powered Solutions', desc: 'Leveraging AI for smarter products', accent: '195 80% 36%' },
  { icon: Heart, title: 'Client-Focused Approach', desc: 'Your vision, my execution', accent: '340 70% 50%' },
  { icon: Headphones, title: 'Ongoing Support', desc: 'Reliable support even after delivery', accent: '195 80% 36%' },
];

const WhyChooseMeSection = () => {
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();
  const isLight = useTheme();

  return (
    <section className="py-14 md:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {isLight ? (
          <div className="text-center mb-10">
            <p className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-2" style={{ color: 'hsl(195 80% 36%)' }}>
              Advantages
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2" style={{ color: 'hsl(220 20% 14%)' }}>
              Why Choose Me
            </h2>
            <p className="text-sm" style={{ color: 'hsl(220 10% 50%)' }}>The difference that sets my work apart</p>
            <div className="w-12 h-[2px] mx-auto mt-3 rounded-full" style={{ background: 'linear-gradient(90deg, hsl(195 80% 42%), hsl(250 65% 52%))' }} />
          </div>
        ) : (
          <>
            <h2 className="section-heading mb-3 text-center">Why Choose Me</h2>
            <p className="text-muted-foreground text-sm text-center mb-10">The difference that sets my work apart</p>
          </>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group rounded-xl text-center transition-all duration-300 ease-out cursor-default ${!isLight ? 'premium-card' : ''} ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
              style={isLight ? {
                background: 'hsl(0 0% 100%)',
                border: '1.5px solid hsl(220 13% 88%)',
                boxShadow: '0 1px 3px hsl(0 0% 0% / 0.03), 0 4px 20px hsl(0 0% 0% / 0.04)',
                padding: isMobile ? '20px 16px' : '24px',
              } : {
                padding: isMobile ? '20px 16px' : '24px',
              }}
              whileHover={isLight
                ? { y: -6, boxShadow: '0 8px 32px hsl(0 0% 0% / 0.07)' }
                : { scale: 1.05, y: -6 }
              }
              {...mobileTapProps}
            >
              <div
                className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300"
                style={{
                  background: isLight
                    ? `hsl(${r.accent} / 0.05)`
                    : 'hsl(var(--neon-cyan) / 0.06)',
                  border: isLight
                    ? `1px solid hsl(${r.accent} / 0.1)`
                    : '1px solid hsl(var(--neon-cyan) / 0.1)',
                }}
              >
                <r.icon
                  className="w-5 h-5 group-hover:scale-110 transition-all duration-300"
                  style={{
                    color: isLight ? `hsl(${r.accent})` : 'hsl(var(--neon-cyan))',
                    filter: isLight ? 'none' : 'drop-shadow(0 0 5px hsl(var(--neon-cyan) / 0.5))',
                  }}
                />
              </div>
              <p
                className="text-xs md:text-sm font-bold mb-1.5"
                style={{ color: isLight ? 'hsl(220 20% 14%)' : 'hsl(var(--foreground))' }}
              >
                {r.title}
              </p>
              <p
                className="text-[10px] md:text-xs leading-relaxed hidden md:block"
                style={{ color: isLight ? 'hsl(220 10% 50%)' : 'hsl(var(--muted-foreground))' }}
              >
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseMeSection;
