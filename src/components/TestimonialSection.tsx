import { motion } from 'framer-motion';
import { Quote, Star, MapPin } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const testimonials = [
  {
    text: 'The AI-powered tools Nasrullah built completely transformed our workflow. Delivery was lightning fast and the quality exceeded expectations.',
    name: 'Arif Rahman',
    role: 'Founder, Digital Agency',
    project: 'AI Automation Suite',
    location: 'Dhaka, Bangladesh',
  },
  {
    text: 'Clean, modern designs with incredible attention to detail. Our conversion rate increased by 40% after the redesign. Truly premium work.',
    name: 'Sarah Chen',
    role: 'Marketing Director',
    project: 'E-Commerce Platform',
    location: 'Singapore',
  },
];

const TestimonialSection = () => {
  const isLight = useTheme();

  if (isLight) {
    return (
      <section
        className="py-16 md:py-24 px-4"
        style={{ background: 'hsl(220 20% 95%)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p
            className="text-[10px] uppercase tracking-[0.3em] font-semibold text-center mb-2"
            style={{ color: 'hsl(195 80% 36%)' }}
          >
            Testimonials
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            style={{ color: 'hsl(222 30% 12%)' }}
          >
            What clients say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="rounded-2xl p-6 md:p-8 relative group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'hsl(0 0% 100%)',
                  border: '1px solid hsl(220 16% 90%)',
                  boxShadow: '0 1px 3px hsl(0 0% 0% / 0.03), 0 6px 24px hsl(0 0% 0% / 0.05)',
                }}
              >
                {/* Accent line top */}
                <div
                  className="absolute top-0 left-6 right-6 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, hsl(195 80% 36% / 0.3), transparent)' }}
                />

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-3.5 h-3.5"
                      style={{ fill: 'hsl(45 93% 55%)', color: 'hsl(45 93% 55%)' }}
                    />
                  ))}
                </div>

                <Quote className="w-5 h-5 mb-3" style={{ color: 'hsl(220 16% 85%)' }} />
                <p
                  className="text-sm leading-relaxed mb-6 italic"
                  style={{ color: 'hsl(220 15% 30%)' }}
                >
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, hsl(222 47% 18%), hsl(195 80% 36%))',
                    }}
                  >
                    <span className="text-sm font-bold text-white">{t.name[0]}</span>
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-sm font-bold" style={{ color: 'hsl(222 30% 12%)' }}>{t.name}</p>
                    <p className="text-[10px]" style={{ color: 'hsl(220 10% 50%)' }}>{t.role}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: '1px solid hsl(220 16% 92%)' }}>
                  <span
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: 'hsl(195 80% 36% / 0.06)',
                      color: 'hsl(195 80% 36%)',
                      border: '1px solid hsl(195 80% 36% / 0.12)',
                    }}
                  >
                    {t.project}
                  </span>
                  <span className="text-[10px] flex items-center gap-1" style={{ color: 'hsl(220 10% 55%)' }}>
                    <MapPin className="w-2.5 h-2.5" />
                    {t.location}
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="section-heading mb-3 text-center">Client Testimonials</h2>
        <p className="text-muted-foreground text-sm text-center mb-10">What clients say about working with me</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="premium-card rounded-2xl p-6 md:p-7 relative group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--neon-purple) / 0.15), hsl(var(--neon-cyan) / 0.1))',
                    border: '1px solid hsl(var(--neon-purple) / 0.2)',
                    boxShadow: '0 0 15px hsl(var(--neon-purple) / 0.1)',
                  }}
                >
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
                  <Star
                    key={j}
                    className="w-3.5 h-3.5"
                    style={{
                      fill: 'hsl(var(--neon-cyan))',
                      color: 'hsl(var(--neon-cyan))',
                      filter: 'drop-shadow(0 0 3px hsl(var(--neon-cyan) / 0.4))',
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: 'hsl(var(--muted) / 0.5)',
                    border: '1px solid hsl(var(--neon-purple) / 0.1)',
                    color: 'hsl(var(--neon-purple))',
                  }}
                >
                  {t.project}
                </span>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5" />
                  {t.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
