import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';
import useMobileTap from '@/hooks/useMobileTap';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const channels = [
  {
    name: 'SlurpNova ASMR',
    emoji: '🎧',
    href: 'https://youtube.com/@slurpnovaasmr?si=Hw_CW6pTNRzJZh5M',
    tooltip: 'Satisfying ASMR eating content',
  },
  {
    name: 'Health Capsule BD',
    emoji: '💊',
    href: 'https://youtube.com/@healthcapsuleofficial?si=VdvPiICysf0N6vFM',
    tooltip: 'Health tips & wellness knowledge',
  },
];

const YouTubeSection = () => {
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();
  return (
    <section className="py-10 md:py-14 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="section-heading mb-8">Channels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          <TooltipProvider delayDuration={300}>
            {channels.map((ch, i) => (
              <Tooltip key={ch.name}>
                <TooltipTrigger asChild>
                  <motion.a
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className={`premium-card rounded-xl p-5 md:p-6 flex items-center gap-4 cursor-pointer group transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
                    {...mobileTapProps}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:shadow-[0_0_18px_hsl(0_80%_50%/0.3)] transition-all duration-300"
                      style={{ background: 'hsl(0 80% 50% / 0.08)', border: '1px solid hsl(0 80% 50% / 0.1)' }}
                    >
                      <Youtube className="w-6 h-6 text-red-500 group-hover:scale-110 transition-all duration-300" style={{ filter: 'drop-shadow(0 0 6px hsl(0 80% 50% / 0.5))' }} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-foreground group-hover:text-glow transition-all duration-300">{ch.name}</p>
                      <p className="text-xs text-muted-foreground">{ch.emoji} YouTube Channel</p>
                    </div>
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg"
                  style={{
                    background: 'hsl(var(--muted) / 0.9)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid hsl(var(--neon-cyan) / 0.15)',
                    boxShadow: '0 0 12px hsl(var(--neon-cyan) / 0.1)',
                    color: 'hsl(var(--foreground))',
                  }}
                >
                  {ch.tooltip}
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </motion.div>
    </section>
  );
};

export default YouTubeSection;
