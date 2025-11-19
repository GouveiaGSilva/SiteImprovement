import GlowingCard from "../GlowingCard";
import { Zap } from "lucide-react";

export default function GlowingCardExample() {
  return (
    <div className="p-8">
      <GlowingCard>
        <div className="flex items-start gap-4">
          <div className="w-fit rounded-lg border border-white/10 bg-white/5 p-2 text-white">
            <Zap className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Automação Inteligente
            </h3>
            <p className="text-sm text-zinc-400">
              Seu negócio vendendo 24/7 com sistemas automatizados.
            </p>
          </div>
        </div>
      </GlowingCard>
    </div>
  );
}
