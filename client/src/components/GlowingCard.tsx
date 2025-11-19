import { useRef, useState, useCallback, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowingCard({ children, className }: GlowingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    setOpacity(1);
  }, []);

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-xl border border-white/10 bg-card/40 backdrop-blur-sm p-6 transition-all hover-elevate",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{ opacity }}
      >
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background: `radial-gradient(120px circle at ${position.x}px ${position.y}px, rgba(189,147,249,0.15), transparent 100%)`,
          }}
        />
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "transparent",
            maskImage: `radial-gradient(80px circle at ${position.x}px ${position.y}px, black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(80px circle at ${position.x}px ${position.y}px, black 0%, transparent 100%)`,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50" />
        </div>
      </div>
      {children}
    </div>
  );
}
