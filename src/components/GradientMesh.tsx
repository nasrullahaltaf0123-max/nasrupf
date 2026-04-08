import { useTheme } from '@/hooks/useTheme';

const GradientMesh = () => {
  const isLight = useTheme();

  if (isLight) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Multi-color mesh gradient */}
        <div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
          style={{
            opacity: 0.5,
            background: `
              radial-gradient(ellipse 700px 500px at 10% 15%, hsl(240 65% 55% / 0.08), transparent),
              radial-gradient(ellipse 500px 400px at 80% 25%, hsl(260 70% 58% / 0.06), transparent),
              radial-gradient(ellipse 600px 500px at 50% 70%, hsl(190 85% 45% / 0.05), transparent),
              radial-gradient(ellipse 400px 400px at 90% 60%, hsl(10 80% 62% / 0.05), transparent),
              radial-gradient(ellipse 500px 300px at 20% 80%, hsl(162 60% 50% / 0.04), transparent),
              radial-gradient(ellipse 300px 300px at 60% 10%, hsl(38 92% 55% / 0.04), transparent)
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
