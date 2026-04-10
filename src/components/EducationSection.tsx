import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import SparkleField from '@/components/SparkleField';
import WeaveBackground from '@/components/WeaveBackground';

const EducationSection = () => {
  const isLight = useTheme();

  if (isLight) {
    return (
      <section className="py-8 md:py-10 px-4 relative overflow-hidden">
        <SparkleField count={8} light />
        <WeaveBackground variant={1} opacity={0.06} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            className="inline-flex items-center gap-4 rounded-full px-9 py-5 transition-all duration-300 backdrop-blur-sm"
            style={{
              background: 'linear-gradient(145deg, hsl(0 0% 100% / 0.95), hsl(240 30% 98% / 0.9))',
              border: '1.5px solid hsl(240 65% 55% / 0.15)',
              boxShadow: '0 4px 20px hsl(240 65% 55% / 0.08), 0 1px 3px hsl(0 0% 0% / 0.04)',
            }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{
              background: 'linear-gradient(135deg, hsl(240 65% 55% / 0.08), hsl(260 70% 58% / 0.04))',
              border: '1px solid hsl(240 65% 55% / 0.12)',
            }}>
              <GraduationCap className="w-5 h-5" style={{ color: 'hsl(240 65% 55%)' }} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold" style={{ color: 'hsl(230 25% 14%)' }}>Student — Department of English</p>
              <p className="text-xs" style={{ color: 'hsl(230 10% 48%)' }}>Government BM College, Barishal</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-10 px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-4 rounded-full px-9 py-5 transition-all duration-300 hover:scale-105 hover:-translate-y-1 premium-card">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'hsl(var(--neon-cyan) / 0.06)', border: '1px solid hsl(var(--neon-cyan) / 0.1)' }}>
            <GraduationCap className="w-5 h-5" style={{ color: 'hsl(var(--neon-cyan))', filter: 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.4))' }} />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold" style={{ color: 'hsl(var(--foreground))' }}>Student — Department of English</p>
            <p className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>Government BM College, Barishal</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
