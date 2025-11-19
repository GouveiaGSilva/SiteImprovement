import { type LucideIcon } from "lucide-react";
import GlowingCard from "./GlowingCard";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <GlowingCard>
      <div className="relative flex flex-col h-full">
        <div className="w-fit rounded-lg border border-white/10 bg-white/5 p-3 text-white mb-4">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>
    </GlowingCard>
  );
}
