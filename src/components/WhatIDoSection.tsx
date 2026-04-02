import { motion } from 'framer-motion';
import { Bot, Globe, Settings, Figma, Package } from 'lucide-react';
import useMobileTap from '@/hooks/useMobileTap';

const services = [
  { icon: Bot, title: 'AI Tools Development', desc: 'Building intelligent tools powered by AI' },
  { icon: Globe, title: 'Website Design', desc: 'Modern, responsive web experiences' },
  { icon: Settings, title: 'Automation Systems', desc: 'Streamlined workflows & processes' },
  { icon: Figma, title: 'UI/UX Design', desc: 'Beautiful, user-centered interfaces' },
  { icon: Package, title: 'Digital Product Building', desc: 'End-to-end product creation' },
];

const WhatIDoSection = () => {
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();

  return (
    <section className="py-14 md:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading mb-3 text-center">What I Do</h2>
        <p className="text-muted-foreground text-sm text-center mb-10">Specialized services that deliver results</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group premium-card rounded-xl p-5 md:p-6 text-center transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1.5 cursor-default ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
              {...mobileTapProps}
            >
              <div
                className="w-11 h-11 md:w-13 md:h-13 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_18px_hsl(var(--neon-cyan)/0.3)] transition-all duration-300"
                style={{ background: 'hsl(var(--neon-cyan) / 0.06)', border: '1px solid hsl(var(--neon-cyan) / 0.08)' }}
              >
                <s.icon className="w-5 h-5 md:w-6 md:h-6 text-neon-cyan group-hover:scale-110 transition-all duration-300" style={{ filter: 'drop-shadow(0 0 5px hsl(var(--neon-cyan) / 0.5))' }} />
              </div>
              <p className="text-xs md:text-sm font-bold text-foreground mb-1.5">{s.title}</p>
              <p className="text-[10px] md:text-xs text-muted-foreground hidden md:block leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhatIDoSection;
