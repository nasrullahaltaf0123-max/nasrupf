import { motion } from 'framer-motion';
import { Youtube, ArrowUpRight } from 'lucide-react';
import useMobileTap from '@/hooks/useMobileTap';
import { useTheme } from '@/hooks/useTheme';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import SparkleField from '@/components/SparkleField';
import WeaveBackground from '@/components/WeaveBackground';

const channels = [
  { name: 'SlurpNova ASMR', emoji: '🎧', href: 'https://youtube.com/@slurpnovaasmr?si=Hw_CW6pTNRzJZh5M', tooltip: 'Satisfying ASMR eating content', color: 'hsl(10 80% 62%)' },
  { name: 'Health Capsule BD', emoji: '💊', href: 'https://youtube.com/@healthcapsuleofficial?si=VdvPiICysf0N6vFM', tooltip: 'Health tips & wellness knowledge', color: 'hsl(162 60% 50%)' },
];

const YouTubeSection = () => {
  const { mobileTapProps, isPressed, isMobile } = useMobileTap();
  const isLight = useTheme();

  if (isLight) {
    return (
      <section className="py-14 md:py-20 px-4 relative overflow-hidden">
        <SparkleField count={10} light />
        <WeaveBackground variant={2} opacity={0.07} speed={0.17} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-10">
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold mb-3" style={{ color: 'hsl(0 70% 50%)' }}>Media</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{
              background: 'linear-gradient(135deg, hsl(230 25% 14%) 20%, hsl(0 70% 50%) 70%, hsl(10 80% 62%))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Channels
            </h2>
          </div>

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
                      className="rounded-2xl flex items-center gap-4 cursor-pointer group transition-all duration-300 backdrop-blur-sm"
                      style={{
                        background: `linear-gradient(145deg, hsl(0 0% 100% / 0.95), ${ch.color}05)`,
                        border: `1.5px solid ${ch.color}18`,
                        boxShadow: `0 2px 12px ${ch.color}08`,
                        padding: isMobile ? '20px' : '24px',
                      }}
                      whileHover={{ y: -6, boxShadow: `0 16px 48px ${ch.color}18` }}
                      {...mobileTapProps}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: 'hsl(0 80% 50% / 0.06)', border: '1px solid hsl(0 80% 50% / 0.12)' }}>
                        <Youtube className="w-6 h-6" style={{ color: 'hsl(0 80% 45%)' }} />
                      </div>
                      <div className="text-left flex-1">
                        <p className="font-bold" style={{ color: 'hsl(230 20% 15%)' }}>{ch.name}</p>
                        <p className="text-xs" style={{ color: 'hsl(230 10% 48%)' }}>{ch.emoji} YouTube Channel</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" style={{ color: ch.color }} />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="px-3 py-1.5 text-xs font-semibold rounded-lg" style={{ background: 'hsl(0 0% 100%)', border: '1.5px solid hsl(230 15% 88%)', boxShadow: '0 4px 20px hsl(0 0% 0% / 0.08)', color: 'hsl(230 20% 15%)' }}>
                    {ch.tooltip}
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-14 px-4">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
        <h2 className="section-heading mb-8">Channels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          <TooltipProvider delayDuration={300}>
            {channels.map((ch, i) => (
              <Tooltip key={ch.name}>
                <TooltipTrigger asChild>
                  <motion.a href={ch.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} className={`premium-card rounded-xl flex items-center gap-4 cursor-pointer group transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 ${isMobile && isPressed ? 'mobile-tap-glow' : ''}`} style={{ padding: isMobile ? '20px' : '24px' }} {...mobileTapProps}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(0 80% 50% / 0.08)', border: '1px solid hsl(0 80% 50% / 0.1)' }}>
                      <Youtube className="w-6 h-6 group-hover:scale-110 transition-all duration-300" style={{ color: 'hsl(0 80% 50%)', filter: 'drop-shadow(0 0 6px hsl(0 80% 50% / 0.5))' }} />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-bold" style={{ color: 'hsl(var(--foreground))' }}>{ch.name}</p>
                      <p className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{ch.emoji} YouTube Channel</p>
                    </div>
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent side="top" className="px-3 py-1.5 text-xs font-semibold rounded-lg" style={{ background: 'hsl(var(--muted) / 0.9)', backdropFilter: 'blur(8px)', border: '1px solid hsl(var(--neon-cyan) / 0.15)', boxShadow: '0 0 12px hsl(var(--neon-cyan) / 0.1)', color: 'hsl(var(--foreground))' }}>
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
