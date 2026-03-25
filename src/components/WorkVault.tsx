import { motion } from "framer-motion";
import { FolderOpen, ExternalLink } from "lucide-react";

const WorkVault = () => {
  return (
    <section className="py-6 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">Digital Lab</h2>
        <a
          href="https://drive.google.com/drive/folders/1Cv_Rnev1EzoyB9hnwia7JdY7AfPSAD6H"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 card-glow rounded-xl px-8 py-5 group transition-all duration-400 hover:scale-105 hover:-translate-y-1"
        >
          <FolderOpen className="w-6 h-6 text-neon-orange group-hover:scale-110 transition-transform duration-300" />
          <span className="font-semibold text-foreground">Access My Digital Lab 🚀</span>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-neon-cyan group-hover:rotate-12 transition-all duration-300" />
        </a>
      </motion.div>
    </section>
  );
};

export default WorkVault;
