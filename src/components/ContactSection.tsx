import { motion } from "framer-motion";
import { Linkedin, Facebook, Rocket, MessageCircle, Mail, ArrowRight } from "lucide-react";
import useHoverSound from "@/hooks/useHoverSound";
import useMobileTap from "@/hooks/useMobileTap";
import { useTheme } from "@/hooks/useTheme";

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
  const isLight = useTheme();

  if (isLight) {
    return (
      <section className="py-16 md:py-24 px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Executive proposal panel */}
          <div
            className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{
              background: 'hsl(0 0% 100%)',
              border: '1px solid hsl(220 16% 88%)',
              boxShadow: '0 1px 3px hsl(0 0% 0% / 0.04), 0 8px 32px hsl(0 0% 0% / 0.06)',
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: 'linear-gradient(90deg, hsl(222 47% 18%), hsl(195 80% 36%))' }}
            />

            <p
              className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-3"
              style={{ color: 'hsl(195 80% 36%)' }}
            >
              Let's Connect
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: 'hsl(222 30% 12%)' }}
            >
              Ready to Build Something Exceptional?
            </h2>
            <p
              className="text-sm mb-8 max-w-md mx-auto leading-relaxed"
              style={{ color: 'hsl(220 10% 50%)' }}
            >
              Let's transform your vision into a premium digital product that drives results.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <motion.a
                href="mailto:nasrullah.altaf2003@gmail.com"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(222 47% 18%), hsl(195 80% 36%))',
                  boxShadow: '0 4px 16px hsl(222 47% 18% / 0.2)',
                }}
              >
                <Rocket className="w-4 h-4" />
                Start a Project
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="https://wa.me/8801760208757"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
                style={{
                  background: 'hsl(220 20% 95%)',
                  color: 'hsl(222 30% 12%)',
                  border: '1px solid hsl(220 16% 88%)',
                }}
              >
                <MessageCircle className="w-4 h-4" style={{ color: 'hsl(195 80% 36%)' }} />
                WhatsApp
              </motion.a>
              <motion.a
                href="mailto:nasrullah.altaf2003@gmail.com"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
                style={{
                  background: 'hsl(220 20% 95%)',
                  color: 'hsl(222 30% 12%)',
                  border: '1px solid hsl(220 16% 88%)',
                }}
              >
                <Mail className="w-4 h-4" style={{ color: 'hsl(195 80% 36%)' }} />
                Email
              </motion.a>
            </div>

            {/* Silver divider */}
            <div
              className="w-16 h-px mx-auto mb-6"
              style={{ background: 'hsl(220 16% 85%)' }}
            />

            {/* Social links */}
            <p
              className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-4"
              style={{ color: 'hsl(220 10% 55%)' }}
            >
              Find Me Online
            </p>
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
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl px-5 py-3 flex items-center gap-2.5 group transition-all duration-300"
                  style={{
                    background: 'hsl(220 20% 95%)',
                    border: '1px solid hsl(220 16% 88%)',
                  }}
                  onMouseEnter={play}
                  {...mobileTapProps}
                >
                  <link.icon className="w-4 h-4" style={{ color: 'hsl(195 80% 36%)' }} />
                  <span className="font-semibold text-sm" style={{ color: 'hsl(222 30% 12%)' }}>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

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
        <p className="text-muted-foreground text-sm mb-10 max-w-md mx-auto">
          Let's transform your vision into a premium digital product that drives results.
        </p>
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
