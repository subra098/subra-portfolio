import { useMemo } from "react";

const FloatingShapes = () => {
  const shapes = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        size: 40 + Math.random() * 80,
        left: `${10 + Math.random() * 80}%`,
        top: `${10 + Math.random() * 80}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${5 + Math.random() * 6}s`,
        type: i % 3, // 0=circle 1=square 2=triangle
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((s) => (
        <div
          key={s.id}
          className="absolute animate-float opacity-[0.04]"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            "--delay": s.delay,
            "--duration": s.duration,
            animationDelay: s.delay,
            animationDuration: s.duration,
          } as React.CSSProperties}
        >
          {s.type === 0 && (
            <div className="w-full h-full rounded-full border-2 border-primary" />
          )}
          {s.type === 1 && (
            <div className="w-full h-full rounded-lg border-2 border-accent rotate-45" />
          )}
          {s.type === 2 && (
            <div
              className="w-0 h-0"
              style={{
                borderLeft: `${s.size / 2}px solid transparent`,
                borderRight: `${s.size / 2}px solid transparent`,
                borderBottom: `${s.size}px solid hsl(28 100% 55% / 0.3)`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingShapes;
