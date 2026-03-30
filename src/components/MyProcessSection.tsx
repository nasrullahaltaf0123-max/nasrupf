import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  { icon: Lightbulb, step: '01', title: 'Idea & Planning', desc: 'Understanding goals & mapping the vision' },
  { icon: PenTool, step: '02', title: 'Design & Structure', desc: 'Crafting layouts with premium UI' },
  { icon: Code2, step: '03', title: 'Development', desc: 'Building with modern tools & AI' },
  { icon: Rocket, step: '04', title: 'Testing & Launch', desc: 'Polish, test, and go live' },
];

const MyProcessSection = () => {
  return (
    <section className="py-14 md:py-20 px-4 snap-section">
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
                style={{ color: 'hsl(var(--neon-cyan))', textShadow: '0 0 10px hsl(var(--neon-cyan) / 0.3)' }}
              >
                Step {s.step}
              </span>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_18px_hsl(var(--neon-purple)/0.3)] transition-all duration-300"
                style={{ background: 'hsl(var(--neon-purple) / 0.06)', border: '1px solid hsl(var(--neon-purple) / 0.1)' }}
              >
                <s.icon className="w-5 h-5 text-neon-purple group-hover:scale-110 transition-transform duration-300" style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-purple) / 0.4))' }} />
              </div>
              <p className="text-xs md:text-sm font-bold text-foreground mb-1.5">{s.title}</p>
              <p className="text-[10px] text-muted-foreground hidden md:block leading-relaxed">{s.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-2.5 w-5 h-px bg-gradient-to-r from-[hsl(var(--neon-purple)/0.3)] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MyProcessSection;
