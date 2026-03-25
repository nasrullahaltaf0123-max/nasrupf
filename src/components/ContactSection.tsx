import { motion } from "framer-motion";
import { Linkedin, Mail, Facebook, MessageCircle } from "lucide-react";

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
  return (
    <section className="py-12 px-4 pb-20">
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
              className="card-glow rounded-xl px-5 py-3 flex items-center gap-3 transition-all duration-400 hover:scale-105 hover:-translate-y-1"
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
