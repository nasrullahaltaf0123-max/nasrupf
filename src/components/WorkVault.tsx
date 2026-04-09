import { motion } from "framer-motion";
import { FolderOpen, ExternalLink, Sparkles, ArrowUpRight } from "lucide-react";
import useHoverSound from "@/hooks/useHoverSound";
import useMobileTap from "@/hooks/useMobileTap";
import { useTheme } from "@/hooks/useTheme";
import SparkleField from '@/components/SparkleField';

const WorkVault = () => {
  const { play } = useHoverSound();
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();
  const isLight = useTheme();

  return (
    <section className="py-10 md:py-14 px-4 relative overflow-hidden">
      {isLight && <SparkleField count={10} light />}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="section-heading mb-3">Digital Lab</h2>
        <p className="text-xs mb-6" style={{ color: isLight ? 'hsl(230 10% 48%)' : 'hsl(var(--muted-foreground))' }}>
          Exclusive access to experiments & innovation
        </p>

        {isLight ? (
          <a
            href="https://drive.google.com/drive/folders/1Cv_Rnev1EzoyB9hnwia7JdY7AfPSAD6H"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 rounded-2xl px-10 py-7 group transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1.5 relative backdrop-blur-sm"
            style={{
              background: 'linear-gradient(145deg, hsl(0 0% 100% / 0.95), hsl(260 30% 98% / 0.9))',
              border: '1.5px solid hsl(260 70% 58% / 0.15)',
              boxShadow: '0 4px 20px hsl(260 70% 58% / 0.08), 0 1px 3px hsl(0 0% 0% / 0.04)',
            }}
            onMouseEnter={play}
            {...mobileTapProps}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, hsl(260 70% 58% / 0.08), hsl(240 65% 55% / 0.04))', border: '1px solid hsl(260 70% 58% / 0.12)' }}>
              <FolderOpen className="w-5 h-5" style={{ color: 'hsl(260 70% 58%)' }} />
            </div>
            <div className="text-left">
              <span className="font-bold text-sm md:text-base tracking-wide block" style={{ color: 'hsl(230 20% 15%)' }}>Access Innovation Lab</span>
              <span className="text-[11px]" style={{ color: 'hsl(230 10% 48%)' }}>View experiments & prototypes</span>
            </div>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" style={{ color: 'hsl(260 70% 58%)' }} />
          </a>
        ) : (
          <a
            href="https://drive.google.com/drive/folders/1Cv_Rnev1EzoyB9hnwia7JdY7AfPSAD6H"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3.5 rounded-2xl px-9 py-6 group transition-all duration-400 ease-out hover:scale-[1.04] hover:-translate-y-1.5 relative overflow-hidden ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
            style={{ background: 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.7))', border: '1px solid hsl(var(--neon-purple) / 0.2)', boxShadow: '0 0 30px hsl(var(--neon-purple) / 0.1), 0 8px 24px hsl(0 0% 0% / 0.25)', animation: 'labPulse 3s ease-in-out infinite' }}
            onMouseEnter={play}
            {...mobileTapProps}
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              {[...Array(3)].map((_, i) => (
                <Sparkles key={i} className="absolute w-3 h-3 text-neon-cyan/30" style={{ top: `${20 + i * 25}%`, left: `${10 + i * 30}%`, animation: `sparkle ${2 + i * 0.5}s ease-in-out infinite ${i * 0.7}s` }} />
              ))}
            </div>
            <FolderOpen className="w-6 h-6 text-neon-orange group-hover:scale-110 transition-all duration-300" style={{ filter: 'drop-shadow(0 0 8px hsl(var(--neon-orange) / 0.5))' }} />
            <span className="font-bold text-foreground text-sm md:text-base tracking-wide">Access Innovation Lab</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-neon-cyan group-hover:rotate-12 transition-all duration-300" />
          </a>
        )}
      </motion.div>
    </section>
  );
};

export default WorkVault;
