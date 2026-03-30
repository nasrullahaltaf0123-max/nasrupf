import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const Particles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      'hsl(270 80% 53% / 0.35)',
      'hsl(195 100% 50% / 0.25)',
      'hsl(180 100% 50% / 0.25)',
    ];
    const p: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 18 + 12,
      delay: Math.random() * 12,
      color: colors[i % colors.length],
    }));
    setParticles(p);
  }, []);

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
            backgroundColor: p.color,
            animation: `particleFloat ${p.duration}s linear ${p.delay}s infinite`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
