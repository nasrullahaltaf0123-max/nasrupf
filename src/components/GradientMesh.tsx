import { useTheme } from '@/hooks/useTheme';

const GradientMesh = () => {
  const isLight = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
        style={{
          opacity: isLight ? 0.4 : 0.3,
          background: isLight
            ? `
              radial-gradient(ellipse 600px 600px at 20% 30%, hsl(250 65% 52% / 0.06), transparent),
              radial-gradient(ellipse 500px 500px at 70% 60%, hsl(195 80% 42% / 0.05), transparent),
              radial-gradient(ellipse 400px 400px at 50% 80%, hsl(210 80% 48% / 0.04), transparent)
            `
            : `
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
