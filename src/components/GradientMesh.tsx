const GradientMesh = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30"
        style={{
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
