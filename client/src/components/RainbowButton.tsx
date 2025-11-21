import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface RainbowButtonProps {
  children: ReactNode;
  className?: string;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function RainbowButton({
  children,
  className,
  to,
  onClick,
  type = "button",
}: RainbowButtonProps) {
  const Component = to ? Link : "button";
  const linkProps = to ? { to } : { onClick, type };

  const content = (
    <>
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4ade80_0%,#10b981_50%,#4ade80_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-background px-6 py-3 text-sm backdrop-blur-3xl transition-all duration-200 hover:bg-background/80">
        {children}
      </span>
    </>
  );

  return (
    <Component
      className={cn(
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-white transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",
        "bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(#0a0a0a_50%,rgba(10,10,10,0.6)_80%,rgba(10,10,10,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        className
      )}
      {...(linkProps as any)}
      data-testid={to ? "link-rainbow-button" : "button-rainbow"}
    >
      {content}
    </Component>
  );
}
