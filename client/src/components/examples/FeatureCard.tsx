import FeatureCard from "../FeatureCard";
import { Zap } from "lucide-react";

export default function FeatureCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <FeatureCard
        icon={Zap}
        title="Automação Inteligente"
        description="Seu negócio vendendo 24/7 com CRMs e fluxos que nunca dormem."
      />
    </div>
  );
}
