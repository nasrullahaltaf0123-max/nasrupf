import { motion } from "framer-motion";
import { Linkedin, Facebook, Rocket, MessageCircle, Mail } from "lucide-react";
import useHoverSound from "@/hooks/useHoverSound";
import useMobileTap from "@/hooks/useMobileTap";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-nasrullah-abb499330/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1AjG3RoZdq/",
  },
];

const ContactSection = () => {
  const { play } = useHoverSound();
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();
  return (
    <section className="py-14 md:py-20 px-4 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="section-heading mb-3">Ready to Build Something Exceptional?</h2>
        <p className="text-muted-foreground text-sm mb-10 max-w-md mx-auto">Let's transform your vision into a premium digital product that drives results.</p>

        {/* Primary CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <motion.a
            href="mailto:nasrullah.altaf2003@gmail.com"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-primary-foreground transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--neon-purple)), hsl(var(--neon-cyan)))',
              boxShadow: '0 0 35px hsl(var(--neon-purple) / 0.3), 0 0 70px hsl(var(--neon-cyan) / 0.1), 0 4px 20px hsl(0 0% 0% / 0.3)',
            }}
          >
            <Rocket className="w-4 h-4" />
            Start a Project
          </motion.a>
          <motion.a
            href="https://wa.me/8801760208757"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-foreground transition-all duration-300 premium-card"
          >
            <MessageCircle className="w-4 h-4 text-neon-cyan" style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.5))' }} />
            WhatsApp
          </motion.a>
          <motion.a
            href="mailto:nasrullah.altaf2003@gmail.com"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-foreground transition-all duration-300 premium-card"
          >
            <Mail className="w-4 h-4 text-neon-purple" style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-purple) / 0.5))' }} />
            Email
          </motion.a>
        </div>

        {/* Find Me Online */}
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5 font-semibold">Find Me Online</p>
        <div className="flex flex-wrap justify-center gap-3">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`premium-card rounded-xl px-6 py-3.5 flex items-center gap-3 group transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
              onMouseEnter={play}
              {...mobileTapProps}
            >
              <link.icon className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform duration-300" style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.4))' }} />
              <span className="font-semibold text-foreground text-sm">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
