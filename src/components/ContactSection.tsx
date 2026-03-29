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
    <section className="py-10 px-4 pb-16 snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">Let's Build Something Powerful 🚀</h2>
        <p className="text-muted-foreground text-sm mb-8">Ready to bring your idea to life? Let's make it happen.</p>

        {/* Primary CTA buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <motion.a
            href="mailto:nasrullah.altaf2003@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-primary-foreground transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--neon-purple)), hsl(var(--neon-cyan)))',
              boxShadow: '0 0 25px hsl(var(--neon-purple) / 0.3), 0 0 50px hsl(var(--neon-cyan) / 0.1)',
            }}
          >
            <Rocket className="w-4 h-4" />
            Hire Me
          </motion.a>
          <motion.a
            href="https://wa.me/8801760208757"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-foreground transition-all duration-300"
            style={{
              background: 'linear-gradient(145deg, hsl(var(--muted) / 0.6), hsl(var(--background) / 0.8))',
              border: '1px solid hsl(var(--neon-cyan) / 0.25)',
              boxShadow: '0 0 15px hsl(var(--neon-cyan) / 0.1)',
            }}
          >
            <MessageCircle className="w-4 h-4 text-neon-cyan" />
            WhatsApp
          </motion.a>
          <motion.a
            href="mailto:nasrullah.altaf2003@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-foreground transition-all duration-300"
            style={{
              background: 'linear-gradient(145deg, hsl(var(--muted) / 0.6), hsl(var(--background) / 0.8))',
              border: '1px solid hsl(var(--neon-purple) / 0.25)',
              boxShadow: '0 0 15px hsl(var(--neon-purple) / 0.1)',
            }}
          >
            <Mail className="w-4 h-4 text-neon-purple" />
            Email
          </motion.a>
        </div>

        {/* Find Me Online */}
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Find Me Online</p>
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
              className={`card-glow rounded-xl px-5 py-3 flex items-center gap-3 group transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_0_18px_hsl(var(--neon-cyan)/0.25),0_0_35px_hsl(var(--neon-purple)/0.1)] ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
              onMouseEnter={play}
              {...mobileTapProps}
            >
              <link.icon className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium text-foreground text-sm">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
