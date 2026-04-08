import { memo } from 'react';
import { motion } from 'framer-motion';
import profileImg from '@/assets/profile.jpg';
import profileLightImg from '@/assets/profile-light.jpg';
import { useTheme } from '@/hooks/useTheme';

const kpiChips = [
  { label: '50+', desc: 'AI Products', color: 'hsl(240 65% 55%)' },
  { label: '10K+', desc: 'Users Reached', color: 'hsl(260 70% 58%)' },
  { label: '3+', desc: 'Years Building', color: 'hsl(190 85% 45%)' },
];

const badges = ['AI Product Architect', 'Visual Builder', 'Founder'];

/* ─── DUAL IMAGE — both always mounted, opacity-only swap ─── */
const DualPortrait = memo(({ isLight, className, style }: { isLight: boolean; className?: string; style?: React.CSSProperties }) => (
  <div className={`relative ${className || ''}`} style={style}>
    <img
      src={profileImg}
      alt="Md Nasrullah"
      fetchPriority="high"
      loading="eager"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover rounded-[inherit] transition-opacity duration-[180ms] ease-out will-change-[opacity]"
      style={{ opacity: isLight ? 0 : 1 }}
    />
    <img
      src={profileLightImg}
      alt="Md Nasrullah"
      fetchPriority="high"
      loading="eager"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover rounded-[inherit] transition-opacity duration-[180ms] ease-out will-change-[opacity]"
      style={{ opacity: isLight ? 1 : 0 }}
    />
  </div>
));
DualPortrait.displayName = 'DualPortrait';

/* ─── DARK MODE HERO (unchanged) ─── */
const DarkHero = ({ isLight }: { isLight: boolean }) => (
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
      <DualPortrait
        isLight={isLight}
        className="w-36 h-36 md:w-48 md:h-48 rounded-full z-10"
        style={{
          border: '2px solid hsl(var(--background))',
          boxShadow: '0 0 40px hsl(var(--neon-purple) / 0.2), 0 0 80px hsl(var(--neon-cyan) / 0.1)',
        }}
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

/* ─── LIGHT MODE HERO — Creative Director with colorful mesh ─── */
const LightHero = ({ isLight }: { isLight: boolean }) => (
  <section className="min-h-[85vh] flex items-center justify-center relative px-5 pt-20 pb-12 overflow-hidden">
    {/* Large mesh gradient background */}
    <div className="absolute inset-0 -z-10 pointer-events-none" style={{
      background: 'linear-gradient(160deg, hsl(240 40% 97%) 0%, hsl(260 30% 96%) 30%, hsl(190 25% 97%) 60%, hsl(10 30% 98%) 100%)',
    }} />

    {/* Floating decorative mesh blobs */}
    <div className="absolute top-8 -left-24 w-80 h-80 pointer-events-none" style={{
      background: 'radial-gradient(circle, hsl(240 65% 55% / 0.14), hsl(260 70% 58% / 0.06), transparent 70%)',
      borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      animation: 'morphBlob 12s ease-in-out infinite, floatSlow 8s ease-in-out infinite',
      filter: 'blur(50px)',
    }} />
    <div className="absolute bottom-8 -right-20 w-72 h-72 pointer-events-none" style={{
      background: 'radial-gradient(circle, hsl(10 80% 62% / 0.12), hsl(38 92% 55% / 0.06), transparent 70%)',
      borderRadius: '40% 60% 70% 30% / 30% 60% 40% 70%',
      animation: 'morphBlob 14s ease-in-out infinite reverse, floatReverse 10s ease-in-out infinite',
      filter: 'blur(50px)',
    }} />
    <div className="absolute top-1/4 right-6 w-48 h-48 pointer-events-none" style={{
      background: 'radial-gradient(circle, hsl(190 85% 45% / 0.1), transparent 70%)',
      borderRadius: '50%',
      animation: 'floatSlow 6s ease-in-out infinite',
      filter: 'blur(35px)',
    }} />
    {/* Small floating accent shapes */}
    <div className="absolute top-[15%] left-[12%] w-16 h-16 rounded-full pointer-events-none" style={{
      background: 'linear-gradient(135deg, hsl(260 70% 58% / 0.15), hsl(240 65% 55% / 0.08))',
      animation: 'float 5s ease-in-out infinite',
    }} />
    <div className="absolute bottom-[25%] left-[8%] w-10 h-10 rounded-xl pointer-events-none rotate-12" style={{
      background: 'linear-gradient(135deg, hsl(38 92% 55% / 0.2), hsl(10 80% 62% / 0.1))',
      animation: 'floatReverse 7s ease-in-out infinite',
    }} />

    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
      {/* Left — Editorial Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
      >
        {/* Colorful gradient badges */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
          {badges.map((badge, i) => {
            const colors = [
              { bg: 'linear-gradient(135deg, hsl(240 65% 55% / 0.1), hsl(240 65% 55% / 0.04))', border: 'hsl(240 65% 55% / 0.2)', text: 'hsl(240 65% 55%)' },
              { bg: 'linear-gradient(135deg, hsl(260 70% 58% / 0.1), hsl(260 70% 58% / 0.04))', border: 'hsl(260 70% 58% / 0.2)', text: 'hsl(260 70% 58%)' },
              { bg: 'linear-gradient(135deg, hsl(190 85% 45% / 0.1), hsl(190 85% 45% / 0.04))', border: 'hsl(190 85% 45% / 0.2)', text: 'hsl(190 85% 45%)' },
            ];
            const c = colors[i % colors.length];
            return (
              <motion.span
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="px-4 py-1.5 text-[10px] font-bold tracking-[0.12em] uppercase rounded-full border backdrop-blur-sm"
                style={{ background: c.bg, borderColor: c.border, color: c.text }}
              >
                {badge}
              </motion.span>
            );
          })}
        </div>

        {/* Name — large editorial with colorful gradient */}
        <h1
          className="text-[2.75rem] md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] mb-4 leading-[1.05]"
          style={{
            background: 'linear-gradient(135deg, hsl(230 25% 14%) 20%, hsl(240 65% 55%) 50%, hsl(260 70% 58%) 70%, hsl(190 85% 45%) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Md Nasrullah
        </h1>

        {/* Subtitle with colorful accents */}
        <p className="text-lg md:text-xl lg:text-2xl font-bold mb-5 tracking-wide">
          <span style={{ color: 'hsl(240 65% 55%)' }}>AI Creator</span>
          <span className="mx-2 text-lg" style={{ color: 'hsl(230 15% 75%)' }}>✦</span>
          <span style={{ color: 'hsl(260 70% 58%)' }}>Visual Builder</span>
        </p>

        {/* Bio */}
        <p
          className="text-sm md:text-base max-w-md leading-relaxed mb-8"
          style={{ color: 'hsl(230 10% 42%)' }}
        >
          I build visuals, tools & ideas using AI — crafting products that reach thousands and solve real problems.
        </p>

        {/* KPI Chips — colorful glass capsules */}
        <div className="flex gap-3 flex-wrap justify-center md:justify-start">
          {kpiChips.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.12, type: 'spring', stiffness: 200 }}
              className="px-5 py-3 rounded-2xl flex flex-col items-center min-w-[90px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg backdrop-blur-sm"
              style={{
                background: `linear-gradient(145deg, hsl(0 0% 100% / 0.9), ${kpi.color}06)`,
                border: `1.5px solid ${kpi.color}22`,
                boxShadow: `0 4px 16px ${kpi.color}12, 0 1px 3px hsl(0 0% 0% / 0.04)`,
              }}
            >
              <span className="text-xl font-extrabold" style={{ color: kpi.color }}>
                {kpi.label}
              </span>
              <span
                className="text-[9px] font-semibold uppercase tracking-[0.15em]"
                style={{ color: 'hsl(230 10% 48%)' }}
              >
                {kpi.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right — Creative Portrait Frame with colorful layers */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex-shrink-0 order-1 md:order-2"
      >
        {/* Multi-color decorative ring */}
        <div className="absolute -inset-6 rounded-[2rem]" style={{
          background: 'conic-gradient(from 180deg, hsl(240 65% 55% / 0.18), hsl(260 70% 58% / 0.12), hsl(190 85% 45% / 0.12), hsl(10 80% 62% / 0.1), hsl(38 92% 55% / 0.08), transparent 60%)',
          filter: 'blur(18px)',
          animation: 'floatSlow 6s ease-in-out infinite',
        }} />
        {/* Accent dots — colorful */}
        <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full" style={{ background: 'linear-gradient(135deg, hsl(10 80% 62%), hsl(38 92% 55%))', opacity: 0.7, animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute -bottom-2 -left-5 w-5 h-5 rounded-full" style={{ background: 'linear-gradient(135deg, hsl(190 85% 45%), hsl(162 60% 50%))', opacity: 0.6, animation: 'floatReverse 5s ease-in-out infinite' }} />
        <div className="absolute top-1/2 -right-7 w-3.5 h-3.5 rounded-full" style={{ background: 'hsl(260 70% 58%)', opacity: 0.5, animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute -top-5 left-1/3 w-4 h-4 rounded-lg rotate-45" style={{ background: 'hsl(240 65% 55% / 0.3)', animation: 'floatSlow 8s ease-in-out infinite' }} />

        {/* Portrait with gradient border */}
        <div
          className="relative w-44 h-44 md:w-60 md:h-60 rounded-[1.75rem] overflow-hidden"
          style={{
            border: '3px solid transparent',
            backgroundClip: 'padding-box',
            boxShadow: '0 8px 40px hsl(240 65% 55% / 0.15), 0 2px 12px hsl(260 70% 58% / 0.08), 0 0 0 3px hsl(0 0% 100%), 0 0 0 5px hsl(240 65% 55% / 0.1)',
          }}
        >
          <DualPortrait isLight={isLight} className="w-full h-full rounded-[inherit]" />
        </div>
      </motion.div>
    </div>

    {/* Bottom wave divider */}
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
      <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
        <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 30C840 40 960 50 1080 45C1200 40 1320 20 1380 10L1440 0V60H0Z" fill="hsl(0, 0%, 99%)" />
      </svg>
    </div>
  </section>
);

const HeroSection = () => {
  const isLight = useTheme();
  return isLight ? <LightHero isLight={isLight} /> : <DarkHero isLight={isLight} />;
};

export default HeroSection;
