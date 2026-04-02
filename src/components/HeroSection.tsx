import { motion } from 'framer-motion';
import profileImg from '@/assets/profile.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-[55vh] flex flex-col items-center justify-center relative px-4 pt-10 pb-2">
      {/* Profile with glow pulse */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mb-5"
        style={{ animation: 'float 4s ease-in-out infinite' }}
      >
        {/* Outer ambient glow */}
        <div
          className="absolute -inset-8 rounded-full opacity-40 blur-2xl"
          style={{
            background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.3), hsl(var(--neon-purple) / 0.2), transparent 70%)',
            animation: 'glowPulse 4s ease-in-out infinite',
          }}
        />
        {/* Spinning ring */}
        <div
          className="absolute -inset-3 rounded-full opacity-60 blur-md"
          style={{
            background: 'conic-gradient(from 0deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)), hsl(var(--neon-cyan)))',
            animation: 'glowPulse 3s ease-in-out infinite',
          }}
        />
        <img
          src={profileImg}
          alt="Md Nasrullah"
          className="relative w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-2 border-background z-10"
          style={{ boxShadow: '0 0 40px hsl(var(--neon-purple) / 0.2), 0 0 80px hsl(var(--neon-cyan) / 0.1)' }}
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold gradient-text mb-2 tracking-tight"
        style={{ filter: 'drop-shadow(0 0 25px hsl(var(--neon-purple) / 0.25))' }}
      >
        Md Nasrullah
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-base md:text-xl lg:text-2xl font-bold text-neon-purple text-glow mb-2 tracking-wide uppercase"
        style={{ letterSpacing: '0.15em' }}
      >
        AI Creator & Visual Builder
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-lg text-center leading-relaxed"
      >
        I build visuals, tools & ideas using AI.
      </motion.p>
    </section>
  );
};

export default HeroSection;
