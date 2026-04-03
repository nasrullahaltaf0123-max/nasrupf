import { motion } from "framer-motion";
import { FolderOpen, ExternalLink, Sparkles } from "lucide-react";
import useHoverSound from "@/hooks/useHoverSound";
import useMobileTap from "@/hooks/useMobileTap";
import { useTheme } from "@/hooks/useTheme";

const WorkVault = () => {
  const { play } = useHoverSound();
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();
  const isLight = useTheme();

  return (
    <section className="py-10 md:py-14 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="section-heading mb-3">Digital Lab</h2>
        <p className="text-muted-foreground text-xs mb-6">Exclusive access to experiments & innovation</p>
        <a
          href="https://drive.google.com/drive/folders/1Cv_Rnev1EzoyB9hnwia7JdY7AfPSAD6H"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-3.5 rounded-2xl px-9 py-6 group transition-all duration-400 ease-out hover:scale-[1.04] hover:-translate-y-1.5 relative overflow-hidden ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
          style={{
            background: isLight
              ? 'linear-gradient(145deg, hsl(0 0% 100%), hsl(220 20% 97%))'
              : 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.7))',
            border: isLight
              ? '1px solid hsl(220 13% 88%)'
              : '1px solid hsl(var(--neon-purple) / 0.2)',
            boxShadow: isLight
              ? '0 2px 16px hsl(0 0% 0% / 0.06)'
              : '0 0 30px hsl(var(--neon-purple) / 0.1), 0 8px 24px hsl(0 0% 0% / 0.25)',
            animation: isLight ? 'none' : 'labPulse 3s ease-in-out infinite',
          }}
          onMouseEnter={play}
          {...mobileTapProps}
        >
          {/* Spark particles — only in dark */}
          {!isLight && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              {[...Array(3)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="absolute w-3 h-3 text-neon-cyan/30"
                  style={{
                    top: `${20 + i * 25}%`,
                    left: `${10 + i * 30}%`,
                    animation: `sparkle ${2 + i * 0.5}s ease-in-out infinite ${i * 0.7}s`,
                  }}
                />
              ))}
            </div>
          )}
          <FolderOpen className="w-6 h-6 text-neon-orange group-hover:scale-110 transition-all duration-300" style={{ filter: isLight ? 'none' : 'drop-shadow(0 0 8px hsl(var(--neon-orange) / 0.5))' }} />
          <span className="font-bold text-foreground text-sm md:text-base tracking-wide">Access Innovation Lab</span>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-neon-cyan group-hover:rotate-12 transition-all duration-300" />
        </a>
      </motion.div>
    </section>
  );
};

export default WorkVault;
