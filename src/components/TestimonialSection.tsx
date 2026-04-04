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
                    background: isLight
                      ? 'hsl(var(--muted))'
                      : 'linear-gradient(135deg, hsl(var(--neon-purple) / 0.15), hsl(var(--neon-cyan) / 0.1))',
                    border: isLight
                      ? '1px solid hsl(220 14% 91%)'
                      : '1px solid hsl(var(--neon-purple) / 0.2)',
                    boxShadow: isLight ? 'none' : '0 0 15px hsl(var(--neon-purple) / 0.1)',
                  }}
                >
                  <span className="text-lg font-bold gradient-text">{t.name[0]}</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground">{t.role}</p>
                </div>
              </div>

              <Quote className="w-5 h-5 mb-3" style={{ color: isLight ? 'hsl(220 14% 85%)' : 'hsl(var(--neon-purple) / 0.3)' }} />
              <p className="text-sm text-foreground/85 leading-relaxed mb-5 italic">"{t.text}"</p>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-3.5 h-3.5"
                    style={{
                      fill: isLight ? 'hsl(45 93% 55%)' : 'hsl(var(--neon-cyan))',
                      color: isLight ? 'hsl(45 93% 55%)' : 'hsl(var(--neon-cyan))',
                      filter: isLight ? 'none' : 'drop-shadow(0 0 3px hsl(var(--neon-cyan) / 0.4))',
                    }}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: isLight ? 'hsl(var(--muted))' : 'hsl(var(--muted) / 0.5)',
                    border: isLight ? '1px solid hsl(220 14% 91%)' : '1px solid hsl(var(--neon-purple) / 0.1)',
                    color: isLight ? 'hsl(var(--foreground))' : 'hsl(var(--neon-purple))',
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
