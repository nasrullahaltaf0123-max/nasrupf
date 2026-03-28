import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Very creative and professional work. Highly recommended for anyone looking for AI-powered solutions.',
    name: 'Satisfied Client',
    role: 'Business Owner',
  },
  {
    text: 'The designs are clean, modern, and the delivery was incredibly fast. Will definitely work together again.',
    name: 'Happy Customer',
    role: 'Content Creator',
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-10 px-4 snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="rounded-2xl p-5 md:p-6 relative group transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.7))',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid hsl(var(--neon-purple) / 0.15)',
                boxShadow: '0 0 20px hsl(var(--neon-purple) / 0.08), 0 4px 20px hsl(0 0% 0% / 0.2)',
              }}
            >
              <Quote className="w-5 h-5 text-neon-purple/40 mb-3" />
              <p className="text-sm text-foreground/90 leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-neon-cyan text-neon-cyan" />
                ))}
              </div>
              <p className="text-xs font-semibold text-foreground">{t.name}</p>
              <p className="text-[10px] text-muted-foreground">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
