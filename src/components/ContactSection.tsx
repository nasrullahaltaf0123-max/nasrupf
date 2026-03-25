import { motion } from "framer-motion";
import { Linkedin, Mail, Facebook, MessageCircle } from "lucide-react";
import useHoverSound from "@/hooks/useHoverSound";
import useMobileTap from "@/hooks/useMobileTap";

const links = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-nasrullah-abb499330/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:nasrullah.altaf2003@gmail.com",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1AjG3RoZdq/",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/8801760208757",
  },
];

const ContactSection = () => {
  const { play } = useHoverSound();
  return (
    <section className="py-8 px-4 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">Let's Connect</h2>
        <div className="flex flex-wrap justify-center gap-3">
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
              className="card-glow rounded-xl px-5 py-3 flex items-center gap-3 group transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_0_18px_hsl(var(--neon-cyan)/0.25),0_0_35px_hsl(var(--neon-purple)/0.1)]"
              onMouseEnter={play}
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
