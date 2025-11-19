import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IridescentBlob from "@/components/IridescentBlob";
import CaseCard from "@/components/CaseCard";
import { Badge } from "@/components/ui/badge";
import RainbowButton from "@/components/RainbowButton";
import { ArrowRight } from "lucide-react";

import case1 from "@assets/generated_images/E-commerce_analytics_dashboard_af308884.png";
import case2 from "@assets/generated_images/Real_estate_website_mockup_8d63aac7.png";
import case3 from "@assets/generated_images/SaaS_platform_dashboard_4e2d9346.png";

const allCases = [
  {
    title: "E-commerce de Moda Premium",
    description: "Transformação digital completa com foco em performance e conversão através de tráfego pago estratégico e otimização de funil.",
    image: case1,
    metrics: [
      { label: "Aumento de Vendas", value: "+320%" },
      { label: "ROI", value: "450%" },
      { label: "CAC Redução", value: "-35%" },
      { label: "Ticket Médio", value: "+85%" },
    ],
    tags: ["E-commerce", "Tráfego Pago", "CRO"],
    category: "E-commerce",
    challenge: "Marca premium com baixa conversão online e CAC muito alto.",
    solution: "Reestruturação completa do funil com segmentação avançada, remarketing estratégico e otimização de landing pages.",
    results: "Em 8 meses, triplicaram o faturamento online enquanto reduziam o custo de aquisição.",
  },
  {
    title: "Imobiliária de Alto Padrão",
    description: "Geração de leads qualificados e automação completa do funil de vendas para imóveis de luxo.",
    image: case2,
    metrics: [
      { label: "Leads Qualificados", value: "+280%" },
      { label: "Taxa de Conversão", value: "3.2x" },
      { label: "Tempo de Venda", value: "-40%" },
      { label: "Ticket Médio", value: "+120%" },
    ],
    tags: ["Imobiliário", "Leads", "Automação"],
    category: "Imobiliário",
    challenge: "Dificuldade em atrair compradores qualificados para imóveis acima de R$ 2M.",
    solution: "Estratégia multicanal com LinkedIn Ads, Google Ads e automação de marketing para nutrição de leads de longo ciclo.",
    results: "Dobraram as vendas de imóveis premium com leads 85% mais qualificados.",
  },
  {
    title: "SaaS B2B - Gestão Empresarial",
    description: "Growth hacking e otimização de conversão para plataforma de gestão empresarial com foco em PMEs.",
    image: case3,
    metrics: [
      { label: "MRR", value: "+410%" },
      { label: "CAC Redução", value: "-45%" },
      { label: "Churn", value: "-28%" },
      { label: "LTV", value: "+195%" },
    ],
    tags: ["SaaS", "Growth", "B2B"],
    category: "SaaS",
    challenge: "Alto churn e dificuldade em escalar aquisição de forma rentável.",
    solution: "Implementação de product-led growth, otimização de onboarding e programa de indicação gamificado.",
    results: "MRR cresceu 4x em 12 meses com melhora significativa em todas as métricas de saúde.",
  },
  {
    title: "Escola Online de Idiomas",
    description: "Escalada de aquisição de alunos através de tráfego pago e automação de vendas educacionais.",
    image: case1,
    metrics: [
      { label: "Novos Alunos", value: "+550%" },
      { label: "ROI", value: "380%" },
      { label: "Taxa de Conversão", value: "+175%" },
      { label: "Retenção", value: "+45%" },
    ],
    tags: ["Educação", "Tráfego Pago", "Automação"],
    category: "Educação",
    challenge: "Saturação de mercado e alta concorrência em mídia paga.",
    solution: "Reposicionamento de marca, funil de webinar otimizado e remarketing comportamental avançado.",
    results: "Tornaram-se referência no segmento com crescimento exponencial sustentável.",
  },
  {
    title: "Clínica Odontológica Premium",
    description: "Transformação digital e geração de leads qualificados para procedimentos de alto valor.",
    image: case2,
    metrics: [
      { label: "Leads Qualificados", value: "+390%" },
      { label: "Ticket Médio", value: "+210%" },
      { label: "Taxa de Agendamento", value: "+145%" },
      { label: "ROI", value: "520%" },
    ],
    tags: ["Saúde", "Leads", "Local"],
    category: "Saúde",
    challenge: "Baixa demanda para procedimentos premium e dificuldade em se diferenciar.",
    solution: "Estratégia de conteúdo educativo, SEO local avançado e campanhas segmentadas por persona.",
    results: "Agenda lotada de procedimentos de alto ticket com público qualificado.",
  },
  {
    title: "Marketplace B2B",
    description: "Crescimento de base de usuários e volume de transações em marketplace de insumos industriais.",
    image: case3,
    metrics: [
      { label: "GMV", value: "+480%" },
      { label: "Usuários Ativos", value: "+310%" },
      { label: "Frequência de Compra", value: "+125%" },
      { label: "NPS", value: "+35pts" },
    ],
    tags: ["Marketplace", "B2B", "Growth"],
    category: "B2B",
    challenge: "Rede de dois lados com baixa liquidez e engajamento.",
    solution: "Estratégias de network effects, programa de indicação B2B e otimização de match entre oferta e demanda.",
    results: "Marketplace tornou-se líquido com crescimento orgânico acelerado.",
  },
];

const categories = ["Todos", "E-commerce", "SaaS", "Imobiliário", "Educação", "Saúde", "B2B"];

export default function Cases() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredCases = selectedCategory === "Todos"
    ? allCases
    : allCases.filter((c) => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-6">
        <IridescentBlob className="w-[500px] h-[500px] top-20 -left-40" />
        <IridescentBlob className="w-[400px] h-[400px] bottom-20 -right-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Cases de{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sucesso
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Empresas reais, resultados reais, crescimento exponencial. Veja como transformamos negócios em máquinas de escala.
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className={`cursor-pointer px-6 py-2 text-sm transition-all hover-elevate ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/5 text-zinc-400 hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
                data-testid={`filter-${category.toLowerCase()}`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCases.map((caseItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <CaseCard
                  {...caseItem}
                  onClick={() => console.log(`Case clicked: ${caseItem.title}`)}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredCases.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-zinc-400">
                Nenhum case encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-white/[0.02] relative">
        <IridescentBlob className="w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Quer resultados assim no seu negócio?
          </h2>
          <p className="text-xl text-zinc-300 mb-12">
            Agende um diagnóstico gratuito e descubra como podemos escalar seu negócio.
          </p>
          <RainbowButton className="text-lg px-10 h-14">
            Agendar Diagnóstico Gratuito <ArrowRight className="w-5 h-5" />
          </RainbowButton>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
