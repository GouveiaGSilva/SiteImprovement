import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";

interface CaseCardProps {
  title: string;
  description: string;
  image: string;
  metrics: Array<{ label: string; value: string }>;
  tags: string[];
  onClick?: () => void;
}

export default function CaseCard({
  title,
  description,
  image,
  metrics,
  tags,
  onClick,
}: CaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 hover-elevate"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      data-testid={`case-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="relative aspect-video overflow-hidden bg-black">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white text-center">
            <div className="flex items-center gap-2 justify-center mb-2">
              <span className="text-lg font-semibold">Ver Detalhes</span>
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="p-6 bg-card/40 backdrop-blur-sm">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-white/5 border-white/10"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-zinc-400 mb-4 line-clamp-2">{description}</p>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className="text-xs text-zinc-400">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
