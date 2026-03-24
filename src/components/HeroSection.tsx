import { motion } from 'framer-motion';
import profileImg from '@/assets/profile.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center relative px-4 py-16">
      {/* Profile with glowing ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mb-8"
      >
        <div
          className="absolute -inset-2 rounded-full opacity-80"
          style={{
            background: 'conic-gradient(from 0deg, hsl(270 80% 53%), hsl(195 100% 50%), hsl(180 100% 50%), hsl(270 80% 53%))',
            animation: 'ringRotate 4s linear infinite',
            filter: 'blur(6px)',
          }}
        />
        <div className="absolute -inset-2 rounded-full" style={{
          background: 'conic-gradient(from 0deg, hsl(270 80% 53%), hsl(195 100% 50%), hsl(180 100% 50%), hsl(270 80% 53%))',
          animation: 'ringRotate 4s linear infinite',
        }} />
        <img
          src={profileImg}
          alt="Md Nasrullah"
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background z-10"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold gradient-text mb-3 tracking-tight"
      >
        Md Nasrullah
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-lg md:text-xl font-semibold text-glow text-neon-purple mb-2 tracking-wide"
      >
        AI Creator & Visual Builder
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-muted-foreground text-base md:text-lg max-w-md text-center"
      >
        I build visuals, tools & ideas using AI.
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 animate-float"
      >
        <div className="w-5 h-8 rounded-full border-2 border-neon-purple/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-neon-purple/60 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
