import { motion } from 'framer-motion';
import profileImg from '@/assets/profile.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center relative px-4 pt-8 pb-4">
      {/* Profile with soft neon glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mb-4"
        style={{ animation: 'float 4s ease-in-out infinite' }}
      >
        <div
          className="absolute -inset-3 rounded-full opacity-60 blur-md"
          style={{
            background: 'conic-gradient(from 0deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)), hsl(var(--neon-cyan)))',
          }}
        />
        <img
          src={profileImg}
          alt="Md Nasrullah"
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-background z-10"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold gradient-text mb-2 tracking-tight"
      >
        Md Nasrullah
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-base md:text-lg font-semibold text-neon-purple text-glow mb-1 tracking-wide"
      >
        AI Creator & Visual Builder
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-muted-foreground text-sm md:text-base max-w-sm text-center"
      >
        I build visuals, tools & ideas using AI.
      </motion.p>
    </section>
  );
};

export default HeroSection;
