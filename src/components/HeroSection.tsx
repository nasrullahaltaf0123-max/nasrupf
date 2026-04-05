import { motion } from 'framer-motion';
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

const kpiChips = [
  { label: '50+', desc: 'AI Products' },
  { label: '10K+', desc: 'Users Reached' },
  { label: '3+', desc: 'Years Building' },
];

const badges = ['AI Product Architect', 'Visual Builder', 'Founder'];

const HeroSection = () => {
  const isLight = useTheme();

  if (isLight) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center relative px-5 pt-16 pb-8">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left — Authority Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full border"
                  style={{
                    background: 'hsl(220 20% 95%)',
                    borderColor: 'hsl(220 16% 88%)',
                    color: 'hsl(195 80% 36%)',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Name */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 leading-[1.1]"
              style={{
                background: 'linear-gradient(135deg, hsl(222 47% 18%), hsl(195 80% 36%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Md Nasrullah
            </h1>

            {/* Subtitle */}
            <p
              className="text-base md:text-lg lg:text-xl font-semibold mb-4 tracking-wide"
              style={{ color: 'hsl(195 80% 36%)' }}
            >
              AI Creator & Visual Builder
            </p>

            {/* Bio */}
            <p
              className="text-sm md:text-base max-w-md leading-relaxed mb-6"
              style={{ color: 'hsl(220 10% 42%)' }}
            >
              I build visuals, tools & ideas using AI — crafting products that reach thousands and solve real problems.
            </p>

            {/* KPI Chips */}
            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
              {kpiChips.map((kpi) => (
                <div
                  key={kpi.label}
                  className="px-4 py-2.5 rounded-xl flex flex-col items-center min-w-[80px] transition-all duration-300"
                  style={{
                    background: 'hsl(0 0% 100%)',
                    border: '1px solid hsl(220 16% 88%)',
                    boxShadow: '0 1px 3px hsl(0 0% 0% / 0.04), 0 6px 24px hsl(0 0% 0% / 0.06)',
                  }}
                >
                  <span
                    className="text-lg font-bold"
                    style={{ color: 'hsl(222 47% 18%)' }}
                  >
                    {kpi.label}
                  </span>
                  <span
                    className="text-[10px] font-medium uppercase tracking-wider"
                    style={{ color: 'hsl(220 10% 50%)' }}
                  >
                    {kpi.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex-shrink-0 order-1 md:order-2"
          >
            {/* Silver halo */}
            <div
              className="absolute -inset-4 rounded-full"
              style={{
                background: 'conic-gradient(from 180deg, hsl(220 16% 90%), hsl(195 80% 36% / 0.15), hsl(220 16% 90%))',
                filter: 'blur(12px)',
                opacity: 0.5,
              }}
            />
            {/* Portrait container */}
            <div
              className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden"
              style={{
                border: '3px solid hsl(220 16% 92%)',
                boxShadow: '0 8px 40px hsl(0 0% 0% / 0.08), 0 2px 12px hsl(0 0% 0% / 0.04)',
              }}
            >
              <img
                src={profileLightImg}
                alt="Md Nasrullah"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[55vh] flex flex-col items-center justify-center relative px-4 pt-10 pb-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mb-5"
        style={{ animation: 'float 4s ease-in-out infinite' }}
      >
        <div
          className="absolute -inset-8 rounded-full blur-2xl"
          style={{
            opacity: 0.4,
            background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.3), hsl(var(--neon-purple) / 0.2), transparent 70%)',
            animation: 'glowPulse 4s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -inset-3 rounded-full blur-md"
          style={{
            opacity: 0.6,
            background: 'conic-gradient(from 0deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)), hsl(var(--neon-cyan)))',
            animation: 'glowPulse 3s ease-in-out infinite',
          }}
        />
        <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full z-10">
          <img
            src={profileImg}
            alt="Md Nasrullah"
            className="w-full h-full rounded-full object-cover border-2"
            style={{
              borderColor: 'hsl(var(--background))',
              boxShadow: '0 0 40px hsl(var(--neon-purple) / 0.2), 0 0 80px hsl(var(--neon-cyan) / 0.1)',
            }}
          />
        </div>
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
        className="text-base md:text-xl lg:text-2xl font-bold text-neon-purple mb-2 tracking-wide uppercase"
        style={{
          letterSpacing: '0.15em',
          textShadow: '0 0 10px hsl(var(--neon-purple) / 0.6), 0 0 30px hsl(var(--neon-purple) / 0.3)',
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
