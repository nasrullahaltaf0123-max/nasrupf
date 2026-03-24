import { motion } from 'framer-motion';
import { FolderOpen, ExternalLink } from 'lucide-react';

const WorkVault = () => {
  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">Digital Lab</h2>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 card-glow rounded-xl px-8 py-5 group transition-all hover:scale-[1.03]"
        >
          <FolderOpen className="w-6 h-6 text-neon-orange" />
          <span className="font-semibold text-foreground">Open Work Vault</span>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
        </a>
      </motion.div>
    </section>
  );
};

export default WorkVault;
