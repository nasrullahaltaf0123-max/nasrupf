import { useEffect, useRef, useCallback } from 'react';
import { useTheme } from '@/hooks/useTheme';

const CursorGlow = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);
  const isLight = useTheme();

  const animate = useCallback(() => {
    trailPos.current.x += (pos.current.x - trailPos.current.x) * 0.08;
    trailPos.current.y += (pos.current.y - trailPos.current.y) * 0.08;

    if (mainRef.current) {
      mainRef.current.style.left = `${pos.current.x - 100}px`;
      mainRef.current.style.top = `${pos.current.y - 100}px`;
    }
    if (trailRef.current) {
      trailRef.current.style.left = `${trailPos.current.x - 160}px`;
      trailRef.current.style.top = `${trailPos.current.y - 160}px`;
    }
    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handler = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handler);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handler);
      cancelAnimationFrame(raf.current);
    };
  }, [animate]);

  return (
    <>
      <div
        ref={mainRef}
        className="fixed pointer-events-none z-50 rounded-full hidden md:block"
        style={{
          width: 200,
          height: 200,
          background: isLight
            ? 'radial-gradient(circle, hsl(195 80% 42% / 0.04) 0%, hsl(250 65% 52% / 0.02) 40%, transparent 70%)'
            : 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.07) 0%, hsl(var(--neon-purple) / 0.05) 40%, transparent 70%)',
          willChange: 'left, top',
        }}
      />
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-40 rounded-full hidden md:block"
        style={{
          width: 320,
          height: 320,
          background: isLight
            ? 'radial-gradient(circle, hsl(250 65% 52% / 0.02) 0%, hsl(195 80% 42% / 0.01) 50%, transparent 70%)'
            : 'radial-gradient(circle, hsl(var(--neon-purple) / 0.04) 0%, hsl(var(--neon-cyan) / 0.02) 50%, transparent 70%)',
          filter: 'blur(8px)',
          willChange: 'left, top',
        }}
      />
    </>
  );
};

export default CursorGlow;
