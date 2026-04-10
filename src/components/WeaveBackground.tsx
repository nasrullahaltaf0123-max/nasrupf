import { memo } from 'react';

/**
 * Colorful animated weave SVG background for light mode sections.
 * Renders low-opacity flowing lines + floating circle outlines.
 */
const WeaveBackground = memo(({ opacity = 0.1, variant = 0 }: { opacity?: number; variant?: number }) => {
  // Rotate path sets by variant for visual variety
  const pathSets = [
    // Variant 0
    [
      { d: 'M0 300 Q200 150 400 300 T800 300', stroke: 'hsl(240 65% 55%)', w: 2, anim: 'weaveFloat', dur: '14s', delay: '0s' },
      { d: 'M0 250 Q250 400 500 250 T800 250', stroke: 'hsl(260 70% 58%)', w: 1.5, anim: 'weaveFloat', dur: '16s', delay: '2s' },
      { d: 'M0 350 Q150 200 350 350 Q550 500 800 350', stroke: 'hsl(190 85% 45%)', w: 2, anim: 'weaveFloat2', dur: '12s', delay: '0s' },
      { d: 'M0 200 Q300 350 600 200 T800 220', stroke: 'hsl(10 80% 62%)', w: 1.5, anim: 'weaveFloat', dur: '18s', delay: '1s' },
      { d: 'M0 400 Q200 280 450 400 Q700 520 800 380', stroke: 'hsl(38 92% 55%)', w: 1.5, anim: 'weaveFloat2', dur: '15s', delay: '3s' },
    ],
    // Variant 1
    [
      { d: 'M0 200 Q300 100 600 250 T800 200', stroke: 'hsl(260 70% 58%)', w: 2, anim: 'weaveFloat2', dur: '15s', delay: '0s' },
      { d: 'M0 400 Q200 300 500 400 T800 380', stroke: 'hsl(190 85% 45%)', w: 1.5, anim: 'weaveFloat', dur: '17s', delay: '1s' },
      { d: 'M0 300 Q350 450 700 300', stroke: 'hsl(38 92% 55%)', w: 1.5, anim: 'weaveFloat2', dur: '13s', delay: '2s' },
      { d: 'M0 150 Q250 300 500 150 T800 180', stroke: 'hsl(162 60% 50%)', w: 2, anim: 'weaveFloat', dur: '19s', delay: '0s' },
      { d: 'M0 450 Q400 350 800 450', stroke: 'hsl(240 65% 55%)', w: 1.5, anim: 'weaveFloat', dur: '14s', delay: '3s' },
    ],
    // Variant 2
    [
      { d: 'M0 350 Q250 200 500 350 T800 320', stroke: 'hsl(10 80% 62%)', w: 2, anim: 'weaveFloat', dur: '16s', delay: '0s' },
      { d: 'M0 180 Q200 320 450 180 Q700 50 800 200', stroke: 'hsl(240 65% 55%)', w: 1.5, anim: 'weaveFloat2', dur: '14s', delay: '1s' },
      { d: 'M0 420 Q300 300 600 420 T800 400', stroke: 'hsl(260 70% 58%)', w: 1.5, anim: 'weaveFloat', dur: '18s', delay: '2s' },
      { d: 'M0 250 Q400 400 800 250', stroke: 'hsl(190 85% 45%)', w: 2, anim: 'weaveFloat2', dur: '12s', delay: '0s' },
      { d: 'M0 100 Q200 250 500 100 T800 130', stroke: 'hsl(330 70% 58%)', w: 1.5, anim: 'weaveFloat', dur: '20s', delay: '4s' },
    ],
  ];

  const paths = pathSets[variant % pathSets.length];

  const circles = [
    { top: '12%', left: '6%', size: 28, color: 'hsl(240 65% 55% / 0.1)', anim: 'weaveFloat', dur: '10s' },
    { top: '60%', right: '8%', size: 22, color: 'hsl(10 80% 62% / 0.1)', anim: 'weaveFloat2', dur: '13s' },
    { bottom: '18%', left: '30%', size: 16, color: 'hsl(190 85% 45% / 0.1)', anim: 'weaveFloat', dur: '11s' },
  ];

  return (
    <>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-5"
        style={{ opacity }}
        viewBox="0 0 800 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {paths.map((p, i) => (
          <path
            key={i}
            d={p.d}
            stroke={p.stroke}
            strokeWidth={p.w}
            style={{ animation: `${p.anim} ${p.dur} ease-in-out infinite ${p.delay}` }}
          />
        ))}
      </svg>
      {circles.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: c.top, left: c.left, right: (c as any).right, bottom: (c as any).bottom,
            width: `${c.size * 4}px`, height: `${c.size * 4}px`,
            border: `1.5px solid ${c.color}`,
            animation: `${c.anim} ${c.dur} ease-in-out infinite`,
          }}
        />
      ))}
    </>
  );
});
WeaveBackground.displayName = 'WeaveBackground';

export default WeaveBackground;
