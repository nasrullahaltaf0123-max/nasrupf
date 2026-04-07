import { motion } from 'framer-motion';
import { Zap, Paintbrush, Bot, Heart, Headphones } from 'lucide-react';
import useMobileTap from '@/hooks/useMobileTap';
import { useTheme } from '@/hooks/useTheme';

const reasons = [
  { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality', color: 'hsl(38 92% 55%)' },
  { icon: Paintbrush, title: 'Clean & Modern Design', desc: 'Sleek visuals that impress and convert', color: 'hsl(260 70% 58%)' },
  { icon: Bot, title: 'AI-Powered Solutions', desc: 'Leveraging AI for smarter products', color: 'hsl(240 65% 55%)' },
  { icon: Heart, title: 'Client-Focused Approach', desc: 'Your vision, my execution', color: 'hsl(10 80% 62%)' },
  { icon: Headphones, title: 'Ongoing Support', desc: 'Reliable support even after delivery', color: 'hsl(190 85% 45%)' },
];

const WhyChooseMeSection = () => {
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();
  const isLight = useTheme();

  if (isLight) {
    return (
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        {/* Offset layered background */}
        <div className="absolute inset-0 -z-10 pointer-events-none" style={{
          background: 'linear-gradient(180deg, hsl(0 0% 99%) 0%, hsl(260 20% 97%) 50%, hsl(0 0% 99%) 100%)',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold mb-3" style={{ color: 'hsl(38 92% 55%)' }}>
              Advantages
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3" style={{
              background: 'linear-gradient(135deg, hsl(230 25% 14%), hsl(38 92% 50%))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Why Choose Me
            </h2>
            <p className="text-sm" style={{ color: 'hsl(230 10% 50%)' }}>The difference that sets my work apart</p>
          </div>

          {/* Capsule blocks — offset layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group rounded-2xl text-center transition-all duration-300 ease-out cursor-default"
                style={{
                  background: 'hsl(0 0% 100%)',
                  border: `1px solid ${r.color}15`,
                  boxShadow: `0 2px 8px ${r.color}08`,
                  padding: isMobile ? '20px 16px' : '28px 20px',
                  marginTop: i % 2 !== 0 ? '16px' : '0',
                }}
                whileHover={{ y: -6, boxShadow: `0 12px 40px ${r.color}15` }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: `${r.color}08`, border: `1px solid ${r.color}12` }}
                >
                  <r.icon className="w-5 h-5" style={{ color: r.color }} />
                </div>
                <p className="text-xs md:text-sm font-bold mb-1.5" style={{ color: 'hsl(230 20% 15%)' }}>{r.title}</p>
                <p className="text-[10px] md:text-xs leading-relaxed hidden md:block" style={{ color: 'hsl(230 10% 50%)' }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-14 md:py-20 px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
        <h2 className="section-heading mb-3 text-center">Why Choose Me</h2>
        <p className="text-muted-foreground text-sm text-center mb-10">The difference that sets my work apart</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className={`group premium-card rounded-xl text-center transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1.5 cursor-default ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`} style={{ padding: isMobile ? '20px 16px' : '24px' }} {...mobileTapProps}>
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'hsl(var(--neon-cyan) / 0.06)', border: '1px solid hsl(var(--neon-cyan) / 0.1)' }}>
                <r.icon className="w-5 h-5 group-hover:scale-110 transition-all duration-300" style={{ color: 'hsl(var(--neon-cyan))', filter: 'drop-shadow(0 0 5px hsl(var(--neon-cyan) / 0.5))' }} />
              </div>
              <p className="text-xs md:text-sm font-bold mb-1.5" style={{ color: 'hsl(var(--foreground))' }}>{r.title}</p>
              <p className="text-[10px] md:text-xs leading-relaxed hidden md:block" style={{ color: 'hsl(var(--muted-foreground))' }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseMeSection;
