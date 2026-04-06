import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const EducationSection = () => {
  const isLight = useTheme();

  return (
    <section className="py-8 md:py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div
          className="inline-flex items-center gap-4 rounded-full px-9 py-5 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          style={isLight ? {
            background: 'hsl(0 0% 100%)',
            border: '1.5px solid hsl(220 13% 88%)',
            boxShadow: '0 2px 8px hsl(0 0% 0% / 0.04), 0 4px 20px hsl(0 0% 0% / 0.05)',
          } : undefined}
          className={`inline-flex items-center gap-4 rounded-full px-9 py-5 transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${!isLight ? 'premium-card' : ''}`}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: isLight ? 'hsl(195 80% 36% / 0.05)' : 'hsl(var(--neon-cyan) / 0.06)',
              border: isLight ? '1px solid hsl(195 80% 36% / 0.1)' : '1px solid hsl(var(--neon-cyan) / 0.1)',
            }}
          >
            <GraduationCap
              className="w-5 h-5"
              style={{
                color: isLight ? 'hsl(195 80% 36%)' : 'hsl(var(--neon-cyan))',
                filter: isLight ? 'none' : 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.4))',
              }}
            />
          </div>
          <div className="text-left">
            <p
              className="text-sm font-bold"
              style={{ color: isLight ? 'hsl(220 20% 14%)' : 'hsl(var(--foreground))' }}
            >
              Student — Department of English
            </p>
            <p
              className="text-xs"
              style={{ color: isLight ? 'hsl(220 10% 50%)' : 'hsl(var(--muted-foreground))' }}
            >
              Government BM College, Barishal
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
