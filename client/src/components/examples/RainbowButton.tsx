import RainbowButton from "../RainbowButton";
import { ArrowRight } from "lucide-react";

export default function RainbowButtonExample() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <RainbowButton>
        Agendar Consulta <ArrowRight className="w-4 h-4" />
      </RainbowButton>
      <RainbowButton to="/">
        Ir para Home
      </RainbowButton>
    </div>
  );
}
