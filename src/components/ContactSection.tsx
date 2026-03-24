import { motion } from 'framer-motion';
import { Linkedin, Mail, Facebook, MessageCircle } from 'lucide-react';

const links = [
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:shadow-[0_0_20px_hsl(210_80%_50%/0.4)]' },
  { icon: Mail, label: 'Email', href: 'mailto:', color: 'hover:shadow-[0_0_20px_hsl(0_80%_60%/0.4)]' },
  { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:shadow-[0_0_20px_hsl(220_80%_50%/0.4)]' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#', color: 'hover:shadow-[0_0_20px_hsl(140_70%_45%/0.4)]' },
];

const ContactSection = () => {
  return (
    <section className="py-16 px-4 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-8">Let's Connect</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`card-glow rounded-xl px-6 py-4 flex items-center gap-3 transition-all duration-300 hover:scale-105 ${link.color}`}
            >
              <link.icon className="w-5 h-5 text-neon-cyan" />
              <span className="font-medium text-foreground text-sm">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
