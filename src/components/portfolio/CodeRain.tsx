import { useMemo } from "react";

const codeChars = "01{}[]<>/=;:()#$%&*+-_.?!@^~";

const CodeRain = () => {
  const columns = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${(i / 20) * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${6 + Math.random() * 8}s`,
      chars: Array.from({ length: 12 }, () =>
        codeChars[Math.floor(Math.random() * codeChars.length)]
      ).join("\n"),
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.06]">
      {columns.map((col) => (
        <div
          key={col.id}
          className="absolute top-0 animate-code-rain font-mono text-xs text-primary whitespace-pre leading-5"
          style={{
            left: col.left,
            "--delay": col.delay,
            "--duration": col.duration,
            animationDelay: col.delay,
            animationDuration: col.duration,
          } as React.CSSProperties}
        >
          {col.chars}
        </div>
      ))}
    </div>
  );
};

export default CodeRain;
