import { motion } from 'framer-motion';
import { Youtube, ArrowUpRight } from 'lucide-react';
import useMobileTap from '@/hooks/useMobileTap';
import { useTheme } from '@/hooks/useTheme';
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
  const isLight = useTheme();

  return (
    <section
      className="py-10 md:py-14 px-4"
      style={{
        background: isLight
          ? 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(220 20% 97%) 100%)'
          : 'transparent',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        {isLight ? (
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-2" style={{ color: 'hsl(0 70% 45%)' }}>
              Media
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'hsl(220 20% 14%)' }}>
              Channels
            </h2>
            <div className="w-12 h-[2px] mx-auto mt-3 rounded-full" style={{ background: 'linear-gradient(90deg, hsl(0 70% 50%), hsl(0 80% 60%))' }} />
          </div>
        ) : (
          <h2 className="section-heading mb-8">Channels</h2>
        )}

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
                    className={`rounded-xl flex items-center gap-4 cursor-pointer group transition-all duration-300 ease-out ${!isLight ? 'premium-card' : ''} ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`}
                    style={isLight ? {
                      background: 'hsl(0 0% 100%)',
                      border: '1.5px solid hsl(220 13% 88%)',
                      boxShadow: '0 1px 3px hsl(0 0% 0% / 0.03), 0 4px 20px hsl(0 0% 0% / 0.04)',
                      padding: isMobile ? '20px' : '24px',
                    } : {
                      padding: isMobile ? '20px' : '24px',
                    }}
                    whileHover={isLight
                      ? { y: -4, boxShadow: '0 8px 32px hsl(0 0% 0% / 0.07)' }
                      : { scale: 1.03, y: -4 }
                    }
                    {...mobileTapProps}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0"
                      style={{
                        background: isLight ? 'hsl(0 80% 50% / 0.05)' : 'hsl(0 80% 50% / 0.08)',
                        border: isLight ? '1px solid hsl(0 80% 50% / 0.1)' : '1px solid hsl(0 80% 50% / 0.1)',
                      }}
                    >
                      <Youtube
                        className="w-6 h-6 group-hover:scale-110 transition-all duration-300"
                        style={{
                          color: isLight ? 'hsl(0 80% 45%)' : 'hsl(0 80% 50%)',
                          filter: isLight ? 'none' : 'drop-shadow(0 0 6px hsl(0 80% 50% / 0.5))',
                        }}
                      />
                    </div>
                    <div className="text-left flex-1">
                      <p
                        className="font-bold transition-all duration-300"
                        style={{ color: isLight ? 'hsl(220 20% 14%)' : 'hsl(var(--foreground))' }}
                      >
                        {ch.name}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: isLight ? 'hsl(220 10% 50%)' : 'hsl(var(--muted-foreground))' }}
                      >
                        {ch.emoji} YouTube Channel
                      </p>
                    </div>
                    {isLight && (
                      <ArrowUpRight
                        className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                        style={{ color: 'hsl(0 70% 45%)' }}
                      />
                    )}
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg"
                  style={{
                    background: isLight ? 'hsl(0 0% 100%)' : 'hsl(var(--muted) / 0.9)',
                    backdropFilter: 'blur(8px)',
                    border: isLight ? '1.5px solid hsl(220 13% 85%)' : '1px solid hsl(var(--neon-cyan) / 0.15)',
                    boxShadow: isLight ? '0 4px 20px hsl(0 0% 0% / 0.08)' : '0 0 12px hsl(var(--neon-cyan) / 0.1)',
                    color: isLight ? 'hsl(220 20% 14%)' : 'hsl(var(--foreground))',
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
