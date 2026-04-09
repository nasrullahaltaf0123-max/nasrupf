import { memo, useMemo } from 'react';

const LIGHT_COLORS = [
  'hsl(240 65% 55% / 0.4)',   // royal blue
  'hsl(260 70% 58% / 0.38)',  // violet
  'hsl(190 85% 45% / 0.35)',  // cyan
  'hsl(10 80% 62% / 0.32)',   // coral
  'hsl(38 92% 55% / 0.35)',   // amber
  'hsl(162 60% 50% / 0.3)',   // mint
  'hsl(330 70% 58% / 0.3)',   // pink
];

const DARK_COLORS = [
  'hsl(270 80% 53% / 0.5)',
  'hsl(195 100% 50% / 0.45)',
  'hsl(180 100% 50% / 0.4)',
];

interface Props {
  count?: number;
  light?: boolean;
  /** Constrain sparkles to card/frame edges — adds border-style sparkle feel */
  border?: boolean;
}

const SparkleField = memo(({ count = 12, light = false, border = false }: Props) => {
  const sparkles = useMemo(() =>
    Array.from({ length: count }, (_, i) => {
      let left: number, top: number;
      if (border) {
        // Distribute sparkles around the perimeter
        const side = i % 4;
        const t = Math.random();
        switch (side) {
          case 0: left = t * 100; top = Math.random() * 8; break;        // top
          case 1: left = t * 100; top = 92 + Math.random() * 8; break;   // bottom
          case 2: left = Math.random() * 8; top = t * 100; break;        // left
          default: left = 92 + Math.random() * 8; top = t * 100; break;  // right
        }
      } else {
        left = Math.random() * 100;
        top = Math.random() * 100;
      }
      return {
        id: i,
        left: `${left}%`,
        top: `${top}%`,
        size: border ? 4 + Math.random() * 4 : 4 + Math.random() * 6,
        delay: Math.random() * 5,
        duration: 1.8 + Math.random() * 3,
      };
    }), [count, border]);

  const colors = light ? LIGHT_COLORS : DARK_COLORS;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {sparkles.map(s => (
        <div
          key={s.id}
          className="absolute"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animation: `sparkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
            <path
              d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z"
              fill={colors[s.id % colors.length]}
            />
          </svg>
        </div>
      ))}
    </div>
  );
});

SparkleField.displayName = 'SparkleField';
export default SparkleField;
