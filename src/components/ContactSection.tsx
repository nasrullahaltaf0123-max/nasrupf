import { motion } from "framer-motion";
import { Linkedin, Facebook, Rocket, MessageCircle, Mail, ArrowRight } from "lucide-react";
import useHoverSound from "@/hooks/useHoverSound";
import useMobileTap from "@/hooks/useMobileTap";
import { useTheme } from "@/hooks/useTheme";
import SparkleField from '@/components/SparkleField';

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/md-nasrullah-abb499330/", color: 'hsl(210 80% 50%)' },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1AjG3RoZdq/", color: 'hsl(220 70% 50%)' },
];

const ContactSection = () => {
  const { play } = useHoverSound();
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();
  const isLight = useTheme();

  if (isLight) {
    return (
      <section className="py-20 md:py-28 px-4 pb-16 relative overflow-hidden">
        <SparkleField count={16} light />
        {/* Colorful gradient background */}
        <div className="absolute inset-0 -z-10 pointer-events-none" style={{
          background: 'linear-gradient(135deg, hsl(240 35% 97%) 0%, hsl(260 25% 96%) 40%, hsl(190 20% 97%) 100%)',
        }} />
        {/* Floating shape */}
        <div className="absolute top-20 left-0 w-40 h-40 pointer-events-none" style={{
          background: 'radial-gradient(circle, hsl(240 65% 55% / 0.06), transparent 70%)',
          borderRadius: '50%', filter: 'blur(30px)', animation: 'float 8s ease-in-out infinite',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div
            className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden backdrop-blur-sm"
            style={{
              background: 'linear-gradient(145deg, hsl(0 0% 100% / 0.95), hsl(240 30% 98% / 0.9))',
              border: '1.5px solid hsl(240 65% 55% / 0.12)',
              boxShadow: '0 8px 40px hsl(240 65% 55% / 0.1), 0 2px 8px hsl(0 0% 0% / 0.04)',
            }}
          >
            {/* Rainbow gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl" style={{
              background: 'linear-gradient(90deg, hsl(240 65% 55%), hsl(260 70% 58%), hsl(190 85% 45%), hsl(10 80% 62%), hsl(38 92% 55%))',
            }} />

            <p className="text-[11px] uppercase tracking-[0.3em] font-bold mb-3" style={{ color: 'hsl(240 65% 55%)' }}>
              Let's Connect
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3" style={{
              background: 'linear-gradient(135deg, hsl(230 25% 14%) 20%, hsl(240 65% 55%) 60%, hsl(260 70% 58%))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Ready to Build Something Exceptional?
            </h2>
            <p className="text-sm mb-8 max-w-md mx-auto leading-relaxed" style={{ color: 'hsl(230 10% 48%)' }}>
              Let's transform your vision into a premium digital product that drives results.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <motion.a
                href="mailto:nasrullah.altaf2003@gmail.com"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(240 65% 55%), hsl(260 70% 58%))',
                  boxShadow: '0 4px 24px hsl(240 65% 55% / 0.3)',
                }}
              >
                <Rocket className="w-4 h-4" /> Start a Project <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="https://wa.me/8801760208757"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, hsl(230 15% 96%), hsl(162 20% 96%))',
                  color: 'hsl(230 25% 14%)',
                  border: '1.5px solid hsl(162 60% 50% / 0.15)',
                }}
              >
                <MessageCircle className="w-4 h-4" style={{ color: 'hsl(162 60% 50%)' }} /> WhatsApp
              </motion.a>
              <motion.a
                href="mailto:nasrullah.altaf2003@gmail.com"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, hsl(230 15% 96%), hsl(240 20% 96%))',
                  color: 'hsl(230 25% 14%)',
                  border: '1.5px solid hsl(240 65% 55% / 0.12)',
                }}
              >
                <Mail className="w-4 h-4" style={{ color: 'hsl(240 65% 55%)' }} /> Email
              </motion.a>
            </div>

            <div className="w-20 h-px mx-auto mb-6" style={{ background: 'linear-gradient(90deg, transparent, hsl(260 70% 58% / 0.2), hsl(240 65% 55% / 0.15), transparent)' }} />
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4" style={{ color: 'hsl(230 10% 52%)' }}>Find Me Online</p>
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
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl px-5 py-3 flex items-center gap-2.5 group transition-all duration-300"
                  style={{
                    background: `linear-gradient(145deg, hsl(230 15% 96%), ${link.color}06)`,
                    border: `1.5px solid ${link.color}18`,
                  }}
                  onMouseEnter={play}
                  {...mobileTapProps}
                >
                  <link.icon className="w-4 h-4" style={{ color: link.color }} />
                  <span className="font-semibold text-sm" style={{ color: 'hsl(230 25% 14%)' }}>{link.label}</span>
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
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto text-center">
        <h2 className="section-heading mb-3">Ready to Build Something Exceptional?</h2>
        <p className="text-muted-foreground text-sm mb-10 max-w-md mx-auto">Let's transform your vision into a premium digital product that drives results.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <motion.a href="mailto:nasrullah.altaf2003@gmail.com" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-primary-foreground transition-all duration-300" style={{ background: 'linear-gradient(135deg, hsl(var(--neon-purple)), hsl(var(--neon-cyan)))', boxShadow: '0 0 35px hsl(var(--neon-purple) / 0.3), 0 0 70px hsl(var(--neon-cyan) / 0.1), 0 4px 20px hsl(0 0% 0% / 0.3)' }}>
            <Rocket className="w-4 h-4" /> Start a Project
          </motion.a>
          <motion.a href="https://wa.me/8801760208757" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-foreground transition-all duration-300 premium-card">
            <MessageCircle className="w-4 h-4 text-neon-cyan" style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-cyan) / 0.5))' }} /> WhatsApp
          </motion.a>
          <motion.a href="mailto:nasrullah.altaf2003@gmail.com" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-foreground transition-all duration-300 premium-card">
            <Mail className="w-4 h-4 text-neon-purple" style={{ filter: 'drop-shadow(0 0 4px hsl(var(--neon-purple) / 0.5))' }} /> Email
          </motion.a>
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5 font-semibold">Find Me Online</p>
        <div className="flex flex-wrap justify-center gap-3">
          {socialLinks.map((link, i) => (
            <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }} className={`premium-card rounded-xl px-6 py-3.5 flex items-center gap-3 group transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`} onMouseEnter={play} {...mobileTapProps}>
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
