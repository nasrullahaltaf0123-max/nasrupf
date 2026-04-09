import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import SparkleField from '@/components/SparkleField';

const steps = [
  { icon: Lightbulb, step: '01', title: 'Idea & Planning', desc: 'Understanding goals & mapping the vision', color: 'hsl(240 65% 55%)' },
  { icon: PenTool, step: '02', title: 'Design & Structure', desc: 'Crafting layouts with premium UI', color: 'hsl(260 70% 58%)' },
  { icon: Code2, step: '03', title: 'Development', desc: 'Building with modern tools & AI', color: 'hsl(190 85% 45%)' },
  { icon: Rocket, step: '04', title: 'Testing & Launch', desc: 'Polish, test, and go live', color: 'hsl(10 80% 62%)' },
];

const MyProcessSection = () => {
  const isLight = useTheme();

  if (isLight) {
    return (
      <section className="py-20 md:py-28 px-4 relative overflow-hidden">
        <SparkleField count={12} light />
        <div className="absolute inset-0 -z-10 pointer-events-none" style={{
          background: 'linear-gradient(165deg, hsl(190 25% 97%) 0%, hsl(0 0% 99%) 40%, hsl(260 20% 97%) 100%)',
        }} />
        {/* Diagonal wave bottom */}
        <svg className="absolute bottom-0 left-0 right-0 h-16 w-full pointer-events-none" viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none">
          <path d="M0 64L60 53C120 43 240 21 360 16C480 11 600 21 720 32C840 43 960 53 1080 48C1200 43 1320 21 1380 10L1440 0V64H0Z" fill="hsl(0, 0%, 99%)" />
        </svg>
        {/* Floating blob */}
        <div className="absolute bottom-20 left-10 w-48 h-48 pointer-events-none" style={{
          background: 'radial-gradient(circle, hsl(190 85% 45% / 0.07), transparent 70%)',
          borderRadius: '50%', filter: 'blur(30px)', animation: 'floatReverse 9s ease-in-out infinite',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold mb-3" style={{ color: 'hsl(190 85% 45%)' }}>My Process</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3" style={{
              background: 'linear-gradient(135deg, hsl(230 25% 14%) 20%, hsl(190 85% 40%) 70%, hsl(162 60% 50%))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              From concept to launch
            </h2>
            <p className="text-sm max-w-md mx-auto" style={{ color: 'hsl(230 10% 48%)' }}>
              A proven workflow refined through dozens of AI-powered products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group relative rounded-3xl p-5 md:p-6 text-center transition-all duration-300 backdrop-blur-sm"
                style={{
                  background: `linear-gradient(145deg, hsl(0 0% 100% / 0.95), ${s.color}05)`,
                  border: `1.5px solid ${s.color}15`,
                  boxShadow: `0 2px 12px ${s.color}08`,
                }}
                whileHover={{ y: -10, boxShadow: `0 20px 60px ${s.color}18` }}
              >
                {/* Top ribbon accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-b-full" style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}80)` }} />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] mb-3 block" style={{ color: s.color }}>
                  Step {s.step}
                </span>
                <div
                  className="w-13 h-13 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: `${s.color}08`, border: `1px solid ${s.color}15` }}
                >
                  <s.icon className="w-5 h-5" style={{ color: s.color }} />
                </div>
                <p className="text-sm font-bold mb-1" style={{ color: 'hsl(230 25% 14%)' }}>{s.title}</p>
                <p className="text-[10px] leading-relaxed hidden md:block" style={{ color: 'hsl(230 10% 48%)' }}>{s.desc}</p>
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
        <h2 className="section-heading mb-3 text-center">My Process</h2>
        <p className="text-muted-foreground text-sm text-center mb-10">From concept to launch — a proven workflow</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {steps.map((s, i) => (
            <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }} className="group premium-card rounded-xl p-5 md:p-6 text-center relative transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] mb-3 block" style={{ color: 'hsl(var(--neon-cyan))', textShadow: '0 0 10px hsl(var(--neon-cyan) / 0.3)' }}>Step {s.step}</span>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'hsl(var(--neon-purple) / 0.06)', border: '1px solid hsl(var(--neon-purple) / 0.1)' }}>
                <s.icon className="w-5 h-5 text-neon-purple group-hover:scale-110 transition-transform duration-300" style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-purple) / 0.4))' }} />
              </div>
              <p className="text-xs md:text-sm font-bold text-foreground mb-1.5">{s.title}</p>
              <p className="text-[10px] text-muted-foreground hidden md:block leading-relaxed">{s.desc}</p>
              {i < 3 && <div className="hidden md:block absolute top-1/2 -right-2.5 w-5 h-px" style={{ background: 'linear-gradient(to right, hsl(var(--neon-purple) / 0.3), transparent)' }} />}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MyProcessSection;
