import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Eye } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';
import profileLightImg from '@/assets/profile-light.jpg';
import { useTheme } from '@/hooks/useTheme';
import SparkleField from '@/components/SparkleField';

/* ─── DATA ─── */
const trustChips = [
  { label: '50+', desc: 'AI Products', icon: '🚀', accent: 'hsl(240 65% 55%)' },
  { label: '10K+', desc: 'Users Reached', icon: '👥', accent: 'hsl(260 70% 58%)' },
  { label: '3+', desc: 'Years Building', icon: '⚡', accent: 'hsl(190 85% 45%)' },
];

const floatingTags = [
  { text: 'AI Tools', x: '-8%', y: '18%', accent: 'hsl(240 65% 55%)' },
  { text: 'Websites', x: '88%', y: '72%', accent: 'hsl(10 80% 62%)' },
  { text: 'Live Ecosystem', x: '78%', y: '12%', accent: 'hsl(190 85% 45%)' },
  { text: '100K+ Views', x: '-4%', y: '78%', accent: 'hsl(38 92% 55%)' },
];

const badges = [
  { label: 'AI Product Architect', accent: 'hsl(240 65% 55%)' },
  { label: 'Visual Builder', accent: 'hsl(260 70% 58%)' },
  { label: 'Founder', accent: 'hsl(10 80% 62%)' },
];

/* ─── DUAL IMAGE — both always mounted, opacity-only swap ─── */
const DualPortrait = memo(({ isLight, className, style }: { isLight: boolean; className?: string; style?: React.CSSProperties }) => (
  <div className={`relative ${className || ''}`} style={style}>
    <img src={profileImg} alt="Md Nasrullah" fetchPriority="high" loading="eager" decoding="async"
      className="absolute inset-0 w-full h-full object-cover rounded-[inherit] transition-opacity duration-[180ms] ease-out will-change-[opacity]"
      style={{ opacity: isLight ? 0 : 1 }} />
    <img src={profileLightImg} alt="Md Nasrullah" fetchPriority="high" loading="eager" decoding="async"
      className="absolute inset-0 w-full h-full object-cover rounded-[inherit] transition-opacity duration-[180ms] ease-out will-change-[opacity]"
      style={{ opacity: isLight ? 1 : 0 }} />
  </div>
));
DualPortrait.displayName = 'DualPortrait';

/* ─── DARK MODE HERO (unchanged) ─── */
const DarkHero = ({ isLight }: { isLight: boolean }) => (
  <section className="min-h-[55vh] flex flex-col items-center justify-center relative px-4 pt-10 pb-2">
    <SparkleField count={14} />
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative mb-5"
      style={{ animation: 'float 4s ease-in-out infinite' }}
    >
      <div className="absolute -inset-8 rounded-full blur-2xl" style={{
        opacity: 0.4,
        background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.3), hsl(var(--neon-purple) / 0.2), transparent 70%)',
        animation: 'glowPulse 4s ease-in-out infinite',
      }} />
      <div className="absolute -inset-3 rounded-full blur-md" style={{
        opacity: 0.6,
        background: 'conic-gradient(from 0deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)), hsl(var(--neon-cyan)))',
        animation: 'glowPulse 3s ease-in-out infinite',
      }} />
      <DualPortrait isLight={isLight} className="w-36 h-36 md:w-48 md:h-48 rounded-full z-10" style={{
        border: '2px solid hsl(var(--background))',
        boxShadow: '0 0 40px hsl(var(--neon-purple) / 0.2), 0 0 80px hsl(var(--neon-cyan) / 0.1)',
      }} />
    </motion.div>
    <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
      className="text-4xl md:text-6xl lg:text-7xl font-extrabold gradient-text mb-2 tracking-tight"
      style={{ filter: 'drop-shadow(0 0 25px hsl(var(--neon-purple) / 0.25))' }}>
      Md Nasrullah
    </motion.h1>
    <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
      className="text-base md:text-xl lg:text-2xl font-bold text-neon-purple mb-2 tracking-wide uppercase"
      style={{ letterSpacing: '0.15em', textShadow: '0 0 10px hsl(var(--neon-purple) / 0.6), 0 0 30px hsl(var(--neon-purple) / 0.3)' }}>
      AI Creator & Visual Builder
    </motion.p>
    <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}
      className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-lg text-center leading-relaxed">
      I build visuals, tools & ideas using AI.
    </motion.p>
  </section>
);

/* ═══════════════════════════════════════════════════════════
   LIGHT MODE HERO — $1M Creative Director Masterpiece
   ═══════════════════════════════════════════════════════════ */
const LightHero = ({ isLight }: { isLight: boolean }) => (
  <section className="min-h-screen flex items-center justify-center relative px-5 pt-16 pb-20 overflow-hidden">
    <SparkleField count={22} light />
    {/* ── BACKGROUND SYSTEM ── */}
    <div className="absolute inset-0 -z-10 pointer-events-none" style={{
      background: 'linear-gradient(170deg, hsl(240 50% 98%) 0%, hsl(0 0% 100%) 25%, hsl(260 40% 97%) 50%, hsl(190 30% 98%) 75%, hsl(10 40% 99%) 100%)',
    }} />

    {/* Large morphing mesh blobs */}
    <div className="absolute -top-20 -left-32 w-[500px] h-[500px] pointer-events-none" style={{
      background: 'radial-gradient(ellipse, hsl(240 65% 55% / 0.12), hsl(260 70% 58% / 0.06), transparent 65%)',
      borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      animation: 'morphBlob 16s ease-in-out infinite',
      filter: 'blur(60px)',
    }} />
    <div className="absolute -bottom-16 -right-24 w-[450px] h-[450px] pointer-events-none" style={{
      background: 'radial-gradient(ellipse, hsl(10 80% 62% / 0.1), hsl(38 92% 55% / 0.05), transparent 65%)',
      borderRadius: '40% 60% 70% 30% / 30% 60% 40% 70%',
      animation: 'morphBlob 18s ease-in-out infinite reverse',
      filter: 'blur(60px)',
    }} />
    <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] pointer-events-none" style={{
      background: 'radial-gradient(circle, hsl(190 85% 45% / 0.08), transparent 65%)',
      borderRadius: '50%',
      animation: 'floatSlow 10s ease-in-out infinite',
      filter: 'blur(45px)',
    }} />
    <div className="absolute top-[60%] left-[10%] w-[200px] h-[200px] pointer-events-none" style={{
      background: 'radial-gradient(circle, hsl(260 70% 58% / 0.07), transparent 65%)',
      borderRadius: '50%',
      animation: 'floatReverse 12s ease-in-out infinite',
      filter: 'blur(40px)',
    }} />

    {/* Subtle geometric accents */}
    <div className="absolute top-[12%] left-[6%] w-20 h-20 rounded-full pointer-events-none" style={{
      background: 'linear-gradient(135deg, hsl(240 65% 55% / 0.08), hsl(260 70% 58% / 0.04))',
      animation: 'float 7s ease-in-out infinite',
    }} />
    <div className="absolute top-[8%] right-[15%] w-12 h-12 rounded-2xl pointer-events-none rotate-12" style={{
      background: 'linear-gradient(135deg, hsl(10 80% 62% / 0.1), hsl(38 92% 55% / 0.06))',
      animation: 'floatReverse 9s ease-in-out infinite',
    }} />
    <div className="absolute bottom-[30%] right-[8%] w-8 h-8 rounded-full pointer-events-none" style={{
      background: 'hsl(190 85% 45% / 0.12)',
      animation: 'float 5s ease-in-out infinite',
    }} />
    <div className="absolute bottom-[15%] left-[20%] w-6 h-6 rounded-lg pointer-events-none rotate-45" style={{
      background: 'hsl(260 70% 58% / 0.1)',
      animation: 'floatSlow 11s ease-in-out infinite',
    }} />

    {/* Floating trust tags (hidden on mobile for cleanliness) */}
    {floatingTags.map((tag, i) => (
      <motion.div
        key={tag.text}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 + i * 0.15, duration: 0.6, type: 'spring' }}
        className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.08em] uppercase pointer-events-none backdrop-blur-md"
        style={{
          left: tag.x, top: tag.y,
          background: `linear-gradient(135deg, hsl(0 0% 100% / 0.85), ${tag.accent}08)`,
          border: `1px solid ${tag.accent}20`,
          color: tag.accent,
          boxShadow: `0 4px 20px ${tag.accent}10`,
          animation: `float ${6 + i * 2}s ease-in-out infinite`,
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: tag.accent }} />
        {tag.text}
      </motion.div>
    ))}

    {/* ── MAIN CONTENT ── */}
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-20 relative z-10">

      {/* ── LEFT: Editorial Content ── */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
      >
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-7 justify-center md:justify-start">
          {badges.map((b, i) => (
            <motion.span
              key={b.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="px-4 py-1.5 text-[10px] font-bold tracking-[0.14em] uppercase rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${b.accent}12, ${b.accent}04)`,
                borderColor: `${b.accent}25`,
                color: b.accent,
                boxShadow: `0 2px 12px ${b.accent}08`,
              }}
            >
              {b.label}
            </motion.span>
          ))}
        </div>

        {/* Headline — multi-line editorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-2"
        >
          <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-extrabold tracking-[-0.04em] leading-[1.05]">
            <span style={{ color: 'hsl(230 25% 14%)' }}>I'm </span>
            <span style={{
              background: 'linear-gradient(135deg, hsl(240 65% 55%), hsl(260 70% 58%), hsl(190 85% 45%))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Nasrullah
            </span>
          </h1>
        </motion.div>

        {/* Role line */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl font-bold mb-5 flex items-center gap-2 flex-wrap justify-center md:justify-start"
        >
          <span style={{ color: 'hsl(240 65% 55%)' }}>AI Creator</span>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(230 15% 80%)' }} />
          <span style={{ color: 'hsl(260 70% 58%)' }}>Visual Architect</span>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(230 15% 80%)' }} />
          <span style={{ color: 'hsl(10 80% 62%)' }}>Founder</span>
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="text-sm md:text-base max-w-lg leading-[1.8] mb-8"
          style={{ color: 'hsl(230 10% 40%)' }}
        >
          Crafting AI-powered products, visual experiences, and digital tools that reach thousands — 
          turning creative vision into real impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex gap-3 mb-10 flex-wrap justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, hsl(240 65% 55%), hsl(260 70% 58%))',
              boxShadow: '0 4px 20px hsl(240 65% 55% / 0.25), 0 1px 4px hsl(0 0% 0% / 0.06)',
            }}
          >
            <Eye className="w-4 h-4" />
            View My Work
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-md"
            style={{
              background: 'hsl(0 0% 100% / 0.7)',
              border: '1.5px solid hsl(230 15% 88%)',
              color: 'hsl(230 25% 14%)',
              boxShadow: '0 2px 12px hsl(0 0% 0% / 0.04)',
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: 'hsl(260 70% 58%)' }} />
            Let's Connect
          </a>
        </motion.div>

        {/* KPI Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex gap-3 flex-wrap justify-center md:justify-start"
        >
          {trustChips.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.95 + i * 0.1, type: 'spring', stiffness: 200 }}
              className="group px-5 py-3 rounded-2xl flex items-center gap-3 min-w-[120px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-md cursor-default"
              style={{
                background: `linear-gradient(145deg, hsl(0 0% 100% / 0.85), ${kpi.accent}06)`,
                border: `1.5px solid ${kpi.accent}18`,
                boxShadow: `0 4px 20px ${kpi.accent}10, 0 1px 3px hsl(0 0% 0% / 0.03)`,
              }}
            >
              <span className="text-lg">{kpi.icon}</span>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold leading-tight" style={{ color: kpi.accent }}>{kpi.label}</span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'hsl(230 10% 50%)' }}>{kpi.desc}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── RIGHT: Clean Portrait with Running Color Lines ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex-shrink-0 order-1 md:order-2"
      >
        {/* Animated running color line ring */}
        <div className="absolute -inset-5 md:-inset-7 rounded-[2.5rem] pointer-events-none" style={{
          border: '2px solid transparent',
          background: 'conic-gradient(from var(--line-angle, 0deg), hsl(240 65% 55% / 0.6), hsl(260 70% 58% / 0.5), hsl(190 85% 45% / 0.5), hsl(10 80% 62% / 0.4), hsl(38 92% 55% / 0.4), hsl(162 60% 50% / 0.3), transparent 60%) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: 'borderSpin 4s linear infinite',
        }} />

        {/* Second ring — counter-rotating */}
        <div className="absolute -inset-3 md:-inset-4 rounded-[2rem] pointer-events-none" style={{
          border: '1.5px solid transparent',
          background: 'conic-gradient(from var(--line-angle, 180deg), hsl(190 85% 45% / 0.5), hsl(162 60% 50% / 0.4), hsl(330 70% 58% / 0.4), hsl(240 65% 55% / 0.3), transparent 50%) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: 'borderSpin 6s linear infinite reverse',
        }} />

        {/* Soft glow behind */}
        <div className="absolute -inset-8 rounded-[3rem] pointer-events-none" style={{
          background: 'radial-gradient(circle, hsl(240 65% 55% / 0.06), hsl(260 70% 58% / 0.04), transparent 70%)',
          animation: 'glowPulse 3s ease-in-out infinite',
        }} />

        {/* Portrait frame — clean */}
        <div
          className="relative w-52 h-52 md:w-72 md:h-72 rounded-[2rem] overflow-hidden"
          style={{
            boxShadow: '0 8px 40px hsl(240 65% 55% / 0.1), 0 2px 8px hsl(0 0% 0% / 0.04)',
          }}
        >
          <DualPortrait isLight={isLight} className="w-full h-full rounded-[inherit]" />
        </div>
      </motion.div>
    </div>

    {/* Bottom wave divider */}
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
      <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
        <path d="M0 80L48 68C96 56 192 32 288 22C384 12 480 16 576 28C672 40 768 60 864 65C960 70 1056 60 1152 48C1248 36 1344 22 1392 15L1440 8V80H0Z" fill="hsl(0 0% 99%)" />
      </svg>
    </div>
  </section>
);

const HeroSection = () => {
  const isLight = useTheme();
  return isLight ? <LightHero isLight={isLight} /> : <DarkHero isLight={isLight} />;
};

export default HeroSection;
