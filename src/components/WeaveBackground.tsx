import { memo, useRef, useEffect, useState, Fragment } from 'react';

/**
 * Colorful weave SVG background for light mode sections.
 * Uses lightweight scroll-based parallax instead of heavy CSS animations.
 */
const WeaveBackground = memo(({ opacity = 0.1, variant = 0, speed = 0.15 }: { opacity?: number; variant?: number; speed?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setOffset(rect.top * speed);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  // Each path has multiple color stops for the animated gradient
  const colorCycles = [
    ['hsl(240 65% 55%)', 'hsl(260 70% 58%)', 'hsl(190 85% 45%)', 'hsl(240 65% 55%)'],
    ['hsl(260 70% 58%)', 'hsl(190 85% 45%)', 'hsl(10 80% 62%)', 'hsl(260 70% 58%)'],
    ['hsl(190 85% 45%)', 'hsl(38 92% 55%)', 'hsl(260 70% 58%)', 'hsl(190 85% 45%)'],
    ['hsl(10 80% 62%)', 'hsl(162 60% 50%)', 'hsl(240 65% 55%)', 'hsl(10 80% 62%)'],
    ['hsl(38 92% 55%)', 'hsl(330 70% 58%)', 'hsl(190 85% 45%)', 'hsl(38 92% 55%)'],
  ];

  const pathSets = [
    [
      { d: 'M0 300 Q200 150 400 300 T800 300', stroke: 'hsl(240 65% 55%)', w: 2.5 },
      { d: 'M0 250 Q250 400 500 250 T800 250', stroke: 'hsl(260 70% 58%)', w: 2 },
      { d: 'M0 350 Q150 200 350 350 Q550 500 800 350', stroke: 'hsl(190 85% 45%)', w: 2.5 },
      { d: 'M0 200 Q300 350 600 200 T800 220', stroke: 'hsl(10 80% 62%)', w: 2 },
      { d: 'M0 400 Q200 280 450 400 Q700 520 800 380', stroke: 'hsl(38 92% 55%)', w: 2 },
    ],
    [
      { d: 'M0 200 Q300 100 600 250 T800 200', stroke: 'hsl(260 70% 58%)', w: 2.5 },
      { d: 'M0 400 Q200 300 500 400 T800 380', stroke: 'hsl(190 85% 45%)', w: 2 },
      { d: 'M0 300 Q350 450 700 300', stroke: 'hsl(38 92% 55%)', w: 2 },
      { d: 'M0 150 Q250 300 500 150 T800 180', stroke: 'hsl(162 60% 50%)', w: 2.5 },
      { d: 'M0 450 Q400 350 800 450', stroke: 'hsl(240 65% 55%)', w: 2 },
    ],
    [
      { d: 'M0 350 Q250 200 500 350 T800 320', stroke: 'hsl(10 80% 62%)', w: 2.5 },
      { d: 'M0 180 Q200 320 450 180 Q700 50 800 200', stroke: 'hsl(240 65% 55%)', w: 2 },
      { d: 'M0 420 Q300 300 600 420 T800 400', stroke: 'hsl(260 70% 58%)', w: 2 },
      { d: 'M0 250 Q400 400 800 250', stroke: 'hsl(190 85% 45%)', w: 2.5 },
      { d: 'M0 100 Q200 250 500 100 T800 130', stroke: 'hsl(330 70% 58%)', w: 2 },
    ],
  ];

  const paths = pathSets[variant % pathSets.length];

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -5 }}>
      <svg
        className="absolute inset-0 w-full h-full"
        style={{
          opacity,
          transform: `translateY(${offset}px) translateZ(0)`,
          willChange: 'transform',
        }}
        viewBox="0 0 800 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {paths.map((p, i) => {
            const colors = colorCycles[i % colorCycles.length];
            return (
              <Fragment key={`defs-${i}`}>
                <linearGradient id={`grad-${variant}-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={colors[0]}>
                    <animate attributeName="stop-color" values={colors.join(';')} dur={`${4 + i * 0.8}s`} repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor={colors[1]}>
                    <animate attributeName="stop-color" values={[...colors.slice(1), colors[0]].join(';')} dur={`${4 + i * 0.8}s`} repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor={colors[2]}>
                    <animate attributeName="stop-color" values={[...colors.slice(2), ...colors.slice(0, 2)].join(';')} dur={`${4 + i * 0.8}s`} repeatCount="indefinite" />
                  </stop>
                </linearGradient>
                <filter id={`glow-${variant}-${i}`}>
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="blur" in2="SourceGraphic" operator="over" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </Fragment>
            );
          })}
        </defs>
        {paths.map((p, i) => (
          <path
            key={i}
            d={p.d}
            stroke={`url(#grad-${variant}-${i})`}
            strokeWidth={p.w}
            strokeLinecap="round"
            filter={`url(#glow-${variant}-${i})`}
            style={{
              animation: `glowPulse ${2 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
});
WeaveBackground.displayName = 'WeaveBackground';

export default WeaveBackground;
