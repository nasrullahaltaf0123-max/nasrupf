import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  return (
    <section className="py-8 md:py-10 px-4 snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div
          className="inline-flex items-center gap-4 premium-card rounded-full px-9 py-5 transition-all duration-400 hover:scale-105 hover:-translate-y-1"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'hsl(var(--neon-cyan) / 0.06)', border: '1px solid hsl(var(--neon-cyan) / 0.1)' }}
          >
            <GraduationCap className="w-5 h-5 text-neon-cyan" style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.4))' }} />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-foreground">Student — Department of English</p>
            <p className="text-xs text-muted-foreground">Government BM College, Barishal</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
