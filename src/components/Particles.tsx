import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

const Particles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const isLight = useTheme();

  useEffect(() => {
    const p: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 18 + 12,
      delay: Math.random() * 12,
    }));
    setParticles(p);
  }, []);

  const darkColors = [
    'hsl(270 80% 53% / 0.35)',
    'hsl(195 100% 50% / 0.25)',
    'hsl(180 100% 50% / 0.25)',
  ];

  const lightColors = [
    'hsl(250 65% 52% / 0.12)',
    'hsl(210 80% 48% / 0.1)',
    'hsl(195 80% 42% / 0.1)',
  ];

  const colors = isLight ? lightColors : darkColors;

  return (
    <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            backgroundColor: colors[p.id % colors.length],
            animation: `particleFloat ${p.duration}s linear ${p.delay}s infinite`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
