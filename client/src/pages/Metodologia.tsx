import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import GlowingCard from "@/components/GlowingCard";
import { Search, Lightbulb, Rocket, BarChart3, ArrowRight } from "lucide-react";
import RainbowButton from "@/components/RainbowButton";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico Profundo",
    description: "Análise completa do seu negócio, concorrência e mercado. Identificamos gaps e oportunidades através de dados reais.",
    details: [
      "Auditoria de marketing atual",
      "Análise de concorrência",
      "Mapeamento da jornada do cliente",
      "Identificação de KPIs críticos",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estratégia Personalizada",
    description: "Criamos um plano de ação único para seu negócio, com metas claras e cronograma realista.",
    details: [
      "Definição de OKRs e metas",
      "Roadmap de implementação",
      "Alocação de recursos",
      "Priorização de iniciativas",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execução & Otimização",
    description: "Implementamos as estratégias com agilidade, testamos hipóteses e otimizamos continuamente.",
    details: [
      "Configuração de ferramentas",
      "Testes A/B constantes",
      "Automações inteligentes",
      "Growth hacking experiments",
    ],
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Análise & Escala",
    description: "Medimos resultados em tempo real, aprendemos com os dados e escalamos o que funciona.",
    details: [
      "Dashboards em tempo real",
      "Relatórios semanais",
      "Ajustes baseados em dados",
      "Escala de campanhas vencedoras",
    ],
  },
];

const principles = [
  {
    title: "Data-Driven",
    description: "Todas as decisões são baseadas em dados reais, não em achismos ou intuição.",
  },
  {
    title: "Growth Mindset",
    description: "Experimentamos rápido, falhamos rápido, aprendemos rápido e escalamos o que funciona.",
  },
  {
    title: "Foco no ROI",
    description: "Cada real investido precisa gerar retorno mensurável e sustentável.",
  },
  {
    title: "Transparência Total",
    description: "Você tem acesso a todas as métricas e pode acompanhar os resultados em tempo real.",
  },
  {
    title: "Parceria de Longo Prazo",
    description: "Não vendemos projetos pontuais. Construímos crescimento sustentável junto com você.",
  },
  {
    title: "Inovação Constante",
    description: "Sempre testando novas tecnologias, canais e estratégias para manter você à frente.",
  },
];

export default function Metodologia() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-6">


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Nossa Metodologia:{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Ciência para Escalar
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Nosso processo é uma fusão de análise de dados profunda, experimentação ágil e otimização contínua para garantir resultados exponenciais.
          </p>
        </motion.div>
      </section>

      {/* Process Steps */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="text-6xl md:text-8xl font-bold text-white/5 mb-4">
                    {step.number}
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-400">
                        <ArrowRight className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 w-full">
                  <GlowingCard className="p-8 min-h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <step.icon className="w-24 h-24 text-purple-500/30 mx-auto mb-4" />
                      <div className="text-lg text-zinc-400">
                        Passo {step.number}
                      </div>
                    </div>
                  </GlowingCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-32 px-6 bg-white/[0.02] relative">


        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Nossos Princípios
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Os valores que guiam cada decisão e estratégia que criamos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <GlowingCard className="h-full">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {principle.description}
                  </p>
                </GlowingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Vamos aplicar essa metodologia no seu negócio?
          </h2>
          <p className="text-xl text-zinc-300 mb-12">
            Agende um diagnóstico gratuito e veja como podemos acelerar seu crescimento.
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
