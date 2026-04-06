import { motion } from 'framer-motion';
import { Bot, Globe, Settings, Figma, Package } from 'lucide-react';
import useMobileTap from '@/hooks/useMobileTap';
import { useTheme } from '@/hooks/useTheme';

const services = [
  { icon: Bot, title: 'AI Tools Development', desc: 'Building intelligent tools powered by AI', accent: '195 80% 36%' },
  { icon: Globe, title: 'Website Design', desc: 'Modern, responsive web experiences', accent: '250 65% 52%' },
  { icon: Settings, title: 'Automation Systems', desc: 'Streamlined workflows & processes', accent: '195 80% 36%' },
  { icon: Figma, title: 'UI/UX Design', desc: 'Beautiful, user-centered interfaces', accent: '250 65% 52%' },
  { icon: Package, title: 'Digital Product Building', desc: 'End-to-end product creation', accent: '195 80% 36%' },
];

const WhatIDoSection = () => {
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();
  const isLight = useTheme();

  return (
    <section
      className="py-14 md:py-20 px-4"
      style={{
        background: isLight
          ? 'linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(0 0% 100%) 100%)'
          : 'transparent',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {isLight ? (
          <div className="text-center mb-10">
            <p className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-2" style={{ color: 'hsl(195 80% 36%)' }}>
              Services
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2" style={{ color: 'hsl(220 20% 14%)' }}>
              What I Do
            </h2>
            <p className="text-sm" style={{ color: 'hsl(220 10% 50%)' }}>Specialized services that deliver results</p>
            <div className="w-12 h-[2px] mx-auto mt-3 rounded-full" style={{ background: 'linear-gradient(90deg, hsl(195 80% 42%), hsl(250 65% 52%))' }} />
          </div>
        ) : (
          <>
            <h2 className="section-heading mb-3 text-center">What I Do</h2>
            <p className="text-muted-foreground text-sm text-center mb-10">Specialized services that deliver results</p>
          </>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group rounded-xl text-center transition-all duration-300 ease-out cursor-default ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
              style={isLight ? {
                background: 'hsl(0 0% 100%)',
                border: '1.5px solid hsl(220 13% 88%)',
                boxShadow: '0 1px 3px hsl(0 0% 0% / 0.03), 0 4px 20px hsl(0 0% 0% / 0.04)',
                padding: isMobile ? '20px 16px' : '24px',
              } : {
                padding: isMobile ? '20px 16px' : '24px',
              }}
              whileHover={isLight
                ? { y: -6, boxShadow: '0 8px 32px hsl(0 0% 0% / 0.07)' }
                : { scale: 1.05, y: -6 }
              }
              {...(isLight ? {} : { className: `group premium-card rounded-xl text-center transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1.5 cursor-default ${isMobile && isPressed ? 'mobile-tap-glow' : ''}` })}
              {...mobileTapProps}
            >
              <div
                className="w-11 h-11 md:w-13 md:h-13 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300"
                style={{
                  background: isLight
                    ? `hsl(${s.accent} / 0.05)`
                    : 'hsl(var(--neon-cyan) / 0.06)',
                  border: isLight
                    ? `1px solid hsl(${s.accent} / 0.1)`
                    : '1px solid hsl(var(--neon-cyan) / 0.08)',
                }}
              >
                <s.icon
                  className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-all duration-300"
                  style={{
                    color: isLight ? `hsl(${s.accent})` : 'hsl(var(--neon-cyan))',
                    filter: isLight ? 'none' : 'drop-shadow(0 0 5px hsl(var(--neon-cyan) / 0.5))',
                  }}
                />
              </div>
              <p
                className="text-xs md:text-sm font-bold mb-1.5"
                style={{ color: isLight ? 'hsl(220 20% 14%)' : 'hsl(var(--foreground))' }}
              >
                {s.title}
              </p>
              <p
                className="text-[10px] md:text-xs hidden md:block leading-relaxed"
                style={{ color: isLight ? 'hsl(220 10% 50%)' : 'hsl(var(--muted-foreground))' }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhatIDoSection;
