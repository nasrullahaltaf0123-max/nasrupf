import { motion } from 'framer-motion';
import { Quote, Star, MapPin } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import SparkleField from '@/components/SparkleField';
import WeaveBackground from '@/components/WeaveBackground';

const testimonials = [
  {
    text: 'The AI-powered tools Nasrullah built completely transformed our workflow. Delivery was lightning fast and the quality exceeded expectations.',
    name: 'Arif Rahman',
    role: 'Founder, Digital Agency',
    project: 'AI Automation Suite',
    location: 'Dhaka, Bangladesh',
    color: 'hsl(240 65% 55%)',
  },
  {
    text: 'Clean, modern designs with incredible attention to detail. Our conversion rate increased by 40% after the redesign. Truly premium work.',
    name: 'Sarah Chen',
    role: 'Marketing Director',
    project: 'E-Commerce Platform',
    location: 'Singapore',
    color: 'hsl(260 70% 58%)',
  },
];

const TestimonialSection = () => {
  const isLight = useTheme();

  if (isLight) {
    return (
      <section className="py-20 md:py-28 px-4 relative overflow-hidden">
        <SparkleField count={14} light />
        <WeaveBackground variant={1} opacity={0.08} speed={0.13} />
        <div className="absolute inset-0 -z-10 pointer-events-none" style={{
          background: 'linear-gradient(180deg, hsl(260 25% 97%) 0%, hsl(240 30% 96%) 50%, hsl(0 0% 99%) 100%)',
        }} />
        {/* Floating decorative shapes */}
        <div className="absolute top-16 left-10 w-32 h-32 pointer-events-none" style={{
          background: 'radial-gradient(circle, hsl(260 70% 58% / 0.06), transparent 70%)',
          borderRadius: '50%', filter: 'blur(25px)', animation: 'float 7s ease-in-out infinite',
        }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 pointer-events-none rounded-xl rotate-12" style={{
          background: 'radial-gradient(circle, hsl(240 65% 55% / 0.05), transparent 70%)',
          filter: 'blur(20px)', animation: 'floatReverse 9s ease-in-out infinite',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold mb-3" style={{ color: 'hsl(260 70% 58%)' }}>Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{
              background: 'linear-gradient(135deg, hsl(230 25% 14%) 20%, hsl(260 70% 55%) 70%, hsl(240 65% 55%))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              What clients say
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, rotate: i === 0 ? -1.5 : 1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, rotate: i === 0 ? -0.5 : 0.5 }}
                className="rounded-3xl p-6 md:p-8 relative group transition-all duration-300 backdrop-blur-sm"
                style={{
                  background: `linear-gradient(145deg, hsl(0 0% 100% / 0.95), ${t.color}04)`,
                  border: `1.5px solid ${t.color}18`,
                  boxShadow: `0 4px 24px ${t.color}10, 0 1px 3px hsl(0 0% 0% / 0.04)`,
                }}
              >
                {/* Color accent bar */}
                <div className="absolute top-0 left-8 w-14 h-1.5 rounded-b-full" style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color}80)` }} />

                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5" style={{ fill: 'hsl(45 93% 55%)', color: 'hsl(45 93% 55%)' }} />
                  ))}
                </div>

                <Quote className="w-5 h-5 mb-3" style={{ color: `${t.color}40` }} />
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: 'hsl(230 15% 26%)' }}>
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)` }}>
                    <span className="text-sm font-bold text-white">{t.name[0]}</span>
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-sm font-bold" style={{ color: 'hsl(230 25% 14%)' }}>{t.name}</p>
                    <p className="text-[10px]" style={{ color: 'hsl(230 10% 48%)' }}>{t.role}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: `1px solid ${t.color}10` }}>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: `${t.color}08`, color: t.color, border: `1px solid ${t.color}15` }}>
                    {t.project}
                  </span>
                  <span className="text-[10px] flex items-center gap-1" style={{ color: 'hsl(230 10% 52%)' }}>
                    <MapPin className="w-2.5 h-2.5" /> {t.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-14 md:py-20 px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
        <h2 className="section-heading mb-3 text-center">Client Testimonials</h2>
        <p className="text-muted-foreground text-sm text-center mb-10">What clients say about working with me</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} className="premium-card rounded-2xl p-6 md:p-7 relative group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, hsl(var(--neon-purple) / 0.15), hsl(var(--neon-cyan) / 0.1))', border: '1px solid hsl(var(--neon-purple) / 0.2)', boxShadow: '0 0 15px hsl(var(--neon-purple) / 0.1)' }}>
                  <span className="text-lg font-bold gradient-text">{t.name[0]}</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <Quote className="w-5 h-5 mb-3" style={{ color: 'hsl(var(--neon-purple) / 0.3)' }} />
              <p className="text-sm text-foreground/85 leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5" style={{ fill: 'hsl(var(--neon-cyan))', color: 'hsl(var(--neon-cyan))', filter: 'drop-shadow(0 0 3px hsl(var(--neon-cyan) / 0.4))' }} />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: 'hsl(var(--muted) / 0.5)', border: '1px solid hsl(var(--neon-purple) / 0.1)', color: 'hsl(var(--neon-purple))' }}>{t.project}</span>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1"><MapPin className="w-2.5 h-2.5" />{t.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
