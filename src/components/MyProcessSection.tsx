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
    <section className="py-10 px-4 snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-8 text-center">My Process</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group rounded-xl p-4 md:p-5 text-center relative transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.7))',
                backdropFilter: 'blur(16px)',
                border: '1px solid hsl(var(--neon-purple) / 0.12)',
              }}
            >
              <span
                className="text-[10px] font-bold uppercase tracking-widest mb-2 block"
                style={{ color: 'hsl(var(--neon-cyan))', textShadow: '0 0 8px hsl(var(--neon-cyan) / 0.3)' }}
              >
                Step {s.step}
              </span>
              <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center mx-auto mb-3 group-hover:shadow-[0_0_15px_hsl(var(--neon-purple)/0.3)] transition-all duration-300">
                <s.icon className="w-5 h-5 text-neon-purple group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-xs md:text-sm font-semibold text-foreground mb-1">{s.title}</p>
              <p className="text-[10px] text-muted-foreground hidden md:block">{s.desc}</p>
              {/* Connector line (hidden on last) */}
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-[hsl(var(--neon-purple)/0.3)] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MyProcessSection;
