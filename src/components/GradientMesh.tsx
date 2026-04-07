import { useTheme } from '@/hooks/useTheme';

const GradientMesh = () => {
  const isLight = useTheme();

  if (isLight) {
    // Creative colorful mesh for light mode
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
          style={{
            opacity: 0.4,
            background: `
              radial-gradient(ellipse 700px 500px at 15% 20%, hsl(240 65% 55% / 0.06), transparent),
              radial-gradient(ellipse 500px 400px at 75% 50%, hsl(260 70% 58% / 0.05), transparent),
              radial-gradient(ellipse 600px 300px at 40% 80%, hsl(190 85% 45% / 0.04), transparent),
              radial-gradient(ellipse 400px 400px at 85% 15%, hsl(10 80% 62% / 0.03), transparent)
            `,
            animation: 'meshMove 25s ease-in-out infinite',
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
        style={{
          opacity: 0.3,
          background: `
            radial-gradient(ellipse 600px 600px at 20% 30%, hsl(270 80% 53% / 0.3), transparent),
            radial-gradient(ellipse 500px 500px at 70% 60%, hsl(195 100% 50% / 0.2), transparent),
            radial-gradient(ellipse 400px 400px at 50% 80%, hsl(180 100% 50% / 0.15), transparent)
          `,
          animation: 'meshMove 20s ease-in-out infinite',
        }}
      />
    </div>
  );
};

export default GradientMesh;
