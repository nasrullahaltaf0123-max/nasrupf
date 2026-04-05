import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const steps = [
  { icon: Lightbulb, step: '01', title: 'Idea & Planning', desc: 'Understanding goals & mapping the vision' },
  { icon: PenTool, step: '02', title: 'Design & Structure', desc: 'Crafting layouts with premium UI' },
  { icon: Code2, step: '03', title: 'Development', desc: 'Building with modern tools & AI' },
  { icon: Rocket, step: '04', title: 'Testing & Launch', desc: 'Polish, test, and go live' },
];

const MyProcessSection = () => {
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
            My Process
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-4"
            style={{ color: 'hsl(222 30% 12%)' }}
          >
            From concept to launch
          </h2>
          <p
            className="text-sm text-center mb-12 max-w-md mx-auto"
            style={{ color: 'hsl(220 10% 50%)' }}
          >
            A proven workflow refined through dozens of AI-powered products
          </p>

          {/* Vertical timeline */}
          <div className="relative max-w-lg mx-auto">
            {/* Timeline line */}
            <div
              className="absolute left-6 md:left-7 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(180deg, hsl(195 80% 36% / 0.2), hsl(220 16% 88%), transparent)' }}
            />

            <div className="flex flex-col gap-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex gap-4 md:gap-5 items-start group"
                >
                  {/* Step node */}
                  <div
                    className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:-translate-y-1"
                    style={{
                      background: 'hsl(0 0% 100%)',
                      border: '1px solid hsl(220 16% 88%)',
                      boxShadow: '0 1px 3px hsl(0 0% 0% / 0.04), 0 4px 16px hsl(0 0% 0% / 0.06)',
                    }}
                  >
                    <s.icon className="w-5 h-5" style={{ color: 'hsl(195 80% 36%)' }} />
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 rounded-xl p-4 md:p-5 transition-all duration-300 group-hover:-translate-y-1"
                    style={{
                      background: 'hsl(0 0% 100%)',
                      border: '1px solid hsl(220 16% 90%)',
                      boxShadow: '0 1px 3px hsl(0 0% 0% / 0.03), 0 4px 12px hsl(0 0% 0% / 0.04)',
                    }}
                  >
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1 block"
                      style={{ color: 'hsl(195 80% 36%)' }}
                    >
                      Step {s.step}
                    </span>
                    <p className="text-sm font-bold mb-1" style={{ color: 'hsl(222 30% 12%)' }}>
                      {s.title}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: 'hsl(220 10% 50%)' }}>
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
        <h2 className="section-heading mb-3 text-center">My Process</h2>
        <p className="text-muted-foreground text-sm text-center mb-10">From concept to launch — a proven workflow</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group premium-card rounded-xl p-5 md:p-6 text-center relative transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <span
                className="text-[10px] font-extrabold uppercase tracking-[0.2em] mb-3 block"
                style={{
                  color: 'hsl(var(--neon-cyan))',
                  textShadow: '0 0 10px hsl(var(--neon-cyan) / 0.3)',
                }}
              >
                Step {s.step}
              </span>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300"
                style={{
                  background: 'hsl(var(--neon-purple) / 0.06)',
                  border: '1px solid hsl(var(--neon-purple) / 0.1)',
                }}
              >
                <s.icon
                  className="w-5 h-5 text-neon-purple group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-purple) / 0.4))' }}
                />
              </div>
              <p className="text-xs md:text-sm font-bold text-foreground mb-1.5">{s.title}</p>
              <p className="text-[10px] text-muted-foreground hidden md:block leading-relaxed">{s.desc}</p>
              {i < 3 && (
                <div
                  className="hidden md:block absolute top-1/2 -right-2.5 w-5 h-px"
                  style={{
                    background: 'linear-gradient(to right, hsl(var(--neon-purple) / 0.3), transparent)',
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MyProcessSection;
