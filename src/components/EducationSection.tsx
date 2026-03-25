import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  return (
    <section className="py-5 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-3 card-glow rounded-full px-8 py-4 transition-all duration-400 hover:scale-105 hover:-translate-y-1">
          <GraduationCap className="w-5 h-5 text-neon-cyan" />
          <div className="text-left">
            <p className="text-sm font-medium text-foreground">Student — Department of English</p>
            <p className="text-xs text-muted-foreground">Government BM College, Barishal</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
