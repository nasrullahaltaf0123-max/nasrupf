import { motion } from 'framer-motion';
import { Bot, Globe, Settings, Figma, Package } from 'lucide-react';
import useMobileTap from '@/hooks/useMobileTap';
import { useTheme } from '@/hooks/useTheme';
import SparkleField from '@/components/SparkleField';

const services = [
  { icon: Bot, title: 'AI Tools Development', desc: 'Building intelligent tools powered by AI', color: 'hsl(240 65% 55%)', bg: 'hsl(240 65% 55% / 0.06)' },
  { icon: Globe, title: 'Website Design', desc: 'Modern, responsive web experiences', color: 'hsl(260 70% 58%)', bg: 'hsl(260 70% 58% / 0.06)' },
  { icon: Settings, title: 'Automation Systems', desc: 'Streamlined workflows & processes', color: 'hsl(190 85% 45%)', bg: 'hsl(190 85% 45% / 0.06)' },
  { icon: Figma, title: 'UI/UX Design', desc: 'Beautiful, user-centered interfaces', color: 'hsl(10 80% 62%)', bg: 'hsl(10 80% 62% / 0.06)' },
  { icon: Package, title: 'Digital Product Building', desc: 'End-to-end product creation', color: 'hsl(38 92% 55%)', bg: 'hsl(38 92% 55% / 0.06)' },
];

const WhatIDoSection = () => {
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();
  const isLight = useTheme();

  if (isLight) {
    return (
      <section className="py-20 md:py-28 px-4 relative overflow-hidden">
        <SparkleField count={14} light />
        {/* Warm gradient + wave top */}
        <div className="absolute inset-0 -z-10 pointer-events-none" style={{
          background: 'linear-gradient(180deg, hsl(0 0% 99%) 0%, hsl(240 30% 97%) 40%, hsl(190 20% 97%) 100%)',
        }} />
        <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none -z-10">
          <svg viewBox="0 0 1440 64" fill="none" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0 64L48 53.3C96 43 192 21 288 16C384 11 480 21 576 32C672 43 768 53 864 48C960 43 1056 21 1152 16C1248 11 1344 21 1392 27L1440 32V0H0V64Z" fill="hsl(0, 0%, 99%)" />
          </svg>
        </div>
        {/* Floating blob */}
        <div className="absolute bottom-10 left-0 w-56 h-56 pointer-events-none" style={{
          background: 'radial-gradient(circle, hsl(190 85% 45% / 0.08), transparent 70%)',
          borderRadius: '50%', animation: 'floatSlow 10s ease-in-out infinite', filter: 'blur(40px)',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold mb-3" style={{ color: 'hsl(190 85% 45%)' }}>Services</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3" style={{
              background: 'linear-gradient(135deg, hsl(230 25% 14%) 20%, hsl(190 85% 45%) 70%, hsl(162 60% 50%))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              What I Do
            </h2>
            <p className="text-sm" style={{ color: 'hsl(230 10% 48%)' }}>Specialized services that deliver results</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group rounded-2xl text-center transition-all duration-300 ease-out cursor-default backdrop-blur-sm"
                style={{
                  background: `linear-gradient(145deg, hsl(0 0% 100% / 0.95), ${s.color}05)`,
                  border: `1.5px solid ${s.color}15`,
                  boxShadow: `0 2px 8px ${s.color}06`,
                  padding: isMobile ? '20px 16px' : '28px 20px',
                }}
                whileHover={{ y: -8, boxShadow: `0 16px 48px ${s.color}18, 0 4px 12px ${s.color}10` }}
              >
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: s.bg, border: `1px solid ${s.color}18` }}
                >
                  <s.icon className="w-5 h-5" style={{ color: s.color }} />
                </div>
                <p className="text-xs md:text-sm font-bold mb-1.5" style={{ color: 'hsl(230 20% 15%)' }}>{s.title}</p>
                <p className="text-[10px] md:text-xs hidden md:block leading-relaxed" style={{ color: 'hsl(230 10% 48%)' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-14 md:py-20 px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
        <h2 className="section-heading mb-3 text-center">What I Do</h2>
        <p className="text-muted-foreground text-sm text-center mb-10">Specialized services that deliver results</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className={`group premium-card rounded-xl text-center transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1.5 cursor-default ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`} style={{ padding: isMobile ? '20px 16px' : '24px' }} {...mobileTapProps}>
              <div className="w-11 h-11 md:w-13 md:h-13 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300" style={{ background: 'hsl(var(--neon-cyan) / 0.06)', border: '1px solid hsl(var(--neon-cyan) / 0.08)' }}>
                <s.icon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-all duration-300" style={{ color: 'hsl(var(--neon-cyan))', filter: 'drop-shadow(0 0 5px hsl(var(--neon-cyan) / 0.5))' }} />
              </div>
              <p className="text-xs md:text-sm font-bold mb-1.5" style={{ color: 'hsl(var(--foreground))' }}>{s.title}</p>
              <p className="text-[10px] md:text-xs hidden md:block leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhatIDoSection;
