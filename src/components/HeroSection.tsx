import { motion } from 'framer-motion';
import profileImg from '@/assets/profile.jpg';
import profileLightImg from '@/assets/profile-light.jpg';
import { useTheme } from '@/hooks/useTheme';

const preloadImage = (src: string) => { const img = new Image(); img.src = src; };
preloadImage(profileImg);
preloadImage(profileLightImg);

const kpiChips = [
  { label: '50+', desc: 'AI Products', color: 'hsl(240 65% 55%)' },
  { label: '10K+', desc: 'Users Reached', color: 'hsl(260 70% 58%)' },
  { label: '3+', desc: 'Years Building', color: 'hsl(190 85% 45%)' },
];

const badges = ['AI Product Architect', 'Visual Builder', 'Founder'];

/* ─── DARK MODE HERO (unchanged) ─── */
const DarkHero = () => (
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

/* ─── LIGHT MODE HERO — Creative Director ─── */
const LightHero = () => (
  <section className="min-h-[80vh] flex items-center justify-center relative px-5 pt-20 pb-12 overflow-hidden">
    {/* Floating decorative blobs */}
    <div
      className="absolute top-10 -left-20 w-72 h-72 pointer-events-none"
      style={{
        background: 'radial-gradient(circle, hsl(240 65% 55% / 0.12), transparent 70%)',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        animation: 'morphBlob 12s ease-in-out infinite, floatSlow 8s ease-in-out infinite',
        filter: 'blur(40px)',
      }}
    />
    <div
      className="absolute bottom-10 -right-16 w-64 h-64 pointer-events-none"
      style={{
        background: 'radial-gradient(circle, hsl(10 80% 62% / 0.1), transparent 70%)',
        borderRadius: '40% 60% 70% 30% / 30% 60% 40% 70%',
        animation: 'morphBlob 14s ease-in-out infinite reverse, floatReverse 10s ease-in-out infinite',
        filter: 'blur(40px)',
      }}
    />
    <div
      className="absolute top-1/3 right-10 w-40 h-40 pointer-events-none"
      style={{
        background: 'radial-gradient(circle, hsl(260 70% 58% / 0.08), transparent 70%)',
        borderRadius: '50%',
        animation: 'floatSlow 6s ease-in-out infinite',
        filter: 'blur(30px)',
      }}
    />

    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
      {/* Left — Editorial Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
      >
        {/* Colorful badges */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
          {badges.map((badge, i) => {
            const colors = [
              { bg: 'hsl(240 65% 55% / 0.08)', border: 'hsl(240 65% 55% / 0.15)', text: 'hsl(240 65% 55%)' },
              { bg: 'hsl(260 70% 58% / 0.08)', border: 'hsl(260 70% 58% / 0.15)', text: 'hsl(260 70% 58%)' },
              { bg: 'hsl(190 85% 45% / 0.08)', border: 'hsl(190 85% 45% / 0.15)', text: 'hsl(190 85% 45%)' },
            ];
            const c = colors[i % colors.length];
            return (
              <motion.span
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="px-3.5 py-1.5 text-[10px] font-bold tracking-[0.12em] uppercase rounded-full border"
                style={{ background: c.bg, borderColor: c.border, color: c.text }}
              >
                {badge}
              </motion.span>
            );
          })}
        </div>

        {/* Name — large editorial */}
        <h1
          className="text-[2.75rem] md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] mb-4 leading-[1.05]"
          style={{
            background: 'linear-gradient(135deg, hsl(230 25% 14%), hsl(240 65% 55%), hsl(260 70% 58%))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Md Nasrullah
        </h1>

        {/* Subtitle with colorful accent */}
        <p className="text-lg md:text-xl lg:text-2xl font-bold mb-5 tracking-wide">
          <span style={{ color: 'hsl(240 65% 55%)' }}>AI Creator</span>
          <span style={{ color: 'hsl(230 15% 60%)' }}> & </span>
          <span style={{ color: 'hsl(260 70% 58%)' }}>Visual Builder</span>
        </p>

        {/* Bio */}
        <p
          className="text-sm md:text-base max-w-md leading-relaxed mb-8"
          style={{ color: 'hsl(230 10% 45%)' }}
        >
          I build visuals, tools & ideas using AI — crafting products that reach thousands and solve real problems.
        </p>

        {/* KPI Chips — colorful capsules */}
        <div className="flex gap-3 flex-wrap justify-center md:justify-start">
          {kpiChips.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.12, type: 'spring', stiffness: 200 }}
              className="px-5 py-3 rounded-2xl flex flex-col items-center min-w-[90px] transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'hsl(0 0% 100%)',
                border: `1.5px solid ${kpi.color}20`,
                boxShadow: `0 2px 12px ${kpi.color}12, 0 1px 3px hsl(0 0% 0% / 0.04)`,
              }}
            >
              <span className="text-xl font-extrabold" style={{ color: kpi.color }}>
                {kpi.label}
              </span>
              <span
                className="text-[9px] font-semibold uppercase tracking-[0.15em]"
                style={{ color: 'hsl(230 10% 50%)' }}
              >
                {kpi.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right — Creative Portrait Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex-shrink-0 order-1 md:order-2"
      >
        {/* Decorative ring */}
        <div
          className="absolute -inset-5 rounded-[2rem]"
          style={{
            background: 'conic-gradient(from 180deg, hsl(240 65% 55% / 0.15), hsl(260 70% 58% / 0.1), hsl(190 85% 45% / 0.1), hsl(10 80% 62% / 0.08), transparent 50%)',
            filter: 'blur(16px)',
            animation: 'floatSlow 6s ease-in-out infinite',
          }}
        />
        {/* Accent dots */}
        <div
          className="absolute -top-3 -right-3 w-6 h-6 rounded-full"
          style={{ background: 'hsl(10 80% 62%)', opacity: 0.6 }}
        />
        <div
          className="absolute -bottom-2 -left-4 w-4 h-4 rounded-full"
          style={{ background: 'hsl(190 85% 45%)', opacity: 0.5 }}
        />
        <div
          className="absolute top-1/2 -right-6 w-3 h-3 rounded-full"
          style={{ background: 'hsl(260 70% 58%)', opacity: 0.4 }}
        />

        {/* Portrait */}
        <div
          className="relative w-44 h-44 md:w-60 md:h-60 rounded-[1.75rem] overflow-hidden"
          style={{
            border: '3px solid hsl(0 0% 100%)',
            boxShadow: '0 8px 40px hsl(240 65% 55% / 0.12), 0 2px 12px hsl(0 0% 0% / 0.06)',
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

const HeroSection = () => {
  const isLight = useTheme();
  return isLight ? <LightHero /> : <DarkHero />;
};

export default HeroSection;
