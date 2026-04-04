import { motion } from 'framer-motion';
import { useEffect } from 'react';
import profileImg from '@/assets/profile.jpg';
import profileLightImg from '@/assets/profile-light.jpg';
import { useTheme } from '@/hooks/useTheme';

// Preload both images on module load
const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};
preloadImage(profileImg);
preloadImage(profileLightImg);

const HeroSection = () => {
  const isLight = useTheme();

  return (
    <section className="min-h-[55vh] flex flex-col items-center justify-center relative px-4 pt-10 pb-2">
      {/* Profile with crossfade */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mb-5"
        style={{ animation: 'float 4s ease-in-out infinite' }}
      >
        {/* Outer ambient glow */}
        <div
          className="absolute -inset-8 rounded-full blur-2xl"
          style={{
            opacity: isLight ? 0.2 : 0.4,
            background: isLight
              ? 'radial-gradient(circle, hsl(195 80% 42% / 0.15), hsl(220 13% 87% / 0.2), transparent 70%)'
              : 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.3), hsl(var(--neon-purple) / 0.2), transparent 70%)',
            animation: 'glowPulse 4s ease-in-out infinite',
          }}
        />
        {/* Spinning ring */}
        <div
          className="absolute -inset-3 rounded-full blur-md"
          style={{
            opacity: isLight ? 0.25 : 0.6,
            background: isLight
              ? 'conic-gradient(from 0deg, hsl(220 13% 87%), hsl(195 80% 42% / 0.3), hsl(220 13% 87%))'
              : 'conic-gradient(from 0deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)), hsl(var(--neon-cyan)))',
            animation: 'glowPulse 3s ease-in-out infinite',
          }}
        />
        {/* Crossfade image container */}
        <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full z-10">
          <img
            src={profileImg}
            alt="Md Nasrullah"
            className="absolute inset-0 w-full h-full rounded-full object-cover border-2 transition-opacity duration-300 ease-in-out"
            style={{
              opacity: isLight ? 0 : 1,
              borderColor: 'hsl(var(--background))',
              boxShadow: '0 0 40px hsl(var(--neon-purple) / 0.2), 0 0 80px hsl(var(--neon-cyan) / 0.1)',
            }}
          />
          <img
            src={profileLightImg}
            alt="Md Nasrullah"
            className="absolute inset-0 w-full h-full rounded-full object-cover border-2 transition-opacity duration-300 ease-in-out"
            style={{
              opacity: isLight ? 1 : 0,
              borderColor: 'hsl(220 13% 90%)',
              boxShadow: '0 8px 40px hsl(0 0% 0% / 0.08), 0 2px 8px hsl(0 0% 0% / 0.04)',
            }}
          />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold gradient-text mb-2 tracking-tight"
        style={{ filter: isLight ? 'none' : 'drop-shadow(0 0 25px hsl(var(--neon-purple) / 0.25))' }}
      >
        Md Nasrullah
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-base md:text-xl lg:text-2xl font-bold text-neon-purple mb-2 tracking-wide uppercase"
        style={{
          letterSpacing: '0.15em',
          textShadow: isLight ? 'none' : '0 0 10px hsl(var(--neon-purple) / 0.6), 0 0 30px hsl(var(--neon-purple) / 0.3)',
        }}
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
