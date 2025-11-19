import { TrendingUp, Users, Award, BarChart3 } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "300%", label: "ROI Médio" },
  { icon: Users, value: "150+", label: "Clientes Ativos" },
  { icon: Award, value: "50M+", label: "Em Receita Gerada" },
  { icon: BarChart3, value: "2.5x", label: "Aumento de Conversão" },
];

export default function StatsBar() {
  return (
    <div className="border-y border-white/10 bg-white/5 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
