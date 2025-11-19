import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GlowingCard from "./GlowingCard";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  image,
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <GlowingCard className="h-full flex flex-col">
      <Quote className="w-8 h-8 text-purple-500 mb-4" />
      <p className="text-zinc-300 leading-relaxed mb-6 flex-1">
        "{quote}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <Avatar className="w-12 h-12">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-500 text-white font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold text-white">{name}</div>
          <div className="text-sm text-zinc-400">
            {role} • {company}
          </div>
        </div>
      </div>
    </GlowingCard>
  );
}
