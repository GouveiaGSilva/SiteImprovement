import { cn } from "@/lib/utils";

interface IridescentBlobProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function IridescentBlob({ className, style }: IridescentBlobProps) {
  return (
    <div
      className={cn(
        "absolute pointer-events-none mix-blend-screen filter blur-[80px] opacity-60 animate-pulse",
        className
      )}
      style={{
        animationDuration: "5000ms",
        ...style,
      }}
    >
      <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500" />
    </div>
  );
}
