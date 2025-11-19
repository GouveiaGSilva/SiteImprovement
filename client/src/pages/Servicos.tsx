import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IridescentBlob from "@/components/IridescentBlob";
import FeatureCard from "@/components/FeatureCard";
import RainbowButton from "@/components/RainbowButton";
import { 
  TrendingUp, 
  Zap, 
  Lock, 
  Sparkles, 
  Search, 
  Target,
  Settings,
  BarChart3,
  Users,
  Megaphone,
  Mail,
  Bot
} from "lucide-react";
import { ArrowRight } from "lucide-react";

const mainServices = [
  {
    icon: TrendingUp,
    title: "Tráfego Pago & Performance",
    description: "Gestão completa de campanhas em Google Ads, Meta Ads, LinkedIn Ads e TikTok Ads. Otimização baseada em dados para maximizar ROI.",
    benefits: [
      "Estratégia de lances inteligente",
      "Segmentação avançada de audiências",
      "Otimização contínua de creative",
      "Relatórios detalhados de performance",
    ],
  },
  {
    icon: Zap,
    title: "Automação & CRM",
    description: "Implementação e otimização de fluxos de automação de marketing e vendas. Seu time focando em estratégia enquanto a máquina vende.",
    benefits: [
      "Configuração de RD Station, HubSpot, ActiveCampaign",
      "Fluxos de nutrição automatizados",
      "Lead scoring e qualificação",
      "Integração com ferramentas de vendas",
    ],
  },
  {
    icon: Sparkles,
    title: "Growth Hacking",
    description: "Experimentos rápidos e estratégicos para descobrir as melhores alavancas de crescimento do seu negócio.",
    benefits: [
      "Testes A/B em larga escala",
      "Otimização de funil completo",
      "Hack de crescimento personalizados",
      "Análise de product-market fit",
    ],
  },
  {
    icon: Search,
    title: "SEO & Conteúdo",
    description: "Posicionamento orgânico estratégico e criação de conteúdo que atrai, engaja e converte seu público ideal.",
    benefits: [
      "Auditoria técnica de SEO",
      "Estratégia de palavras-chave",
      "Criação de conteúdo otimizado",
      "Link building white-hat",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & B.I.",
    description: "Transformamos dados complexos em insights acionáveis. Dashboards personalizados para acompanhar tudo em tempo real.",
    benefits: [
      "Configuração de GA4 e GTM",
      "Dashboards personalizados",
      "Análise preditiva de tendências",
      "Consultoria estratégica de dados",
    ],
  },
  {
    icon: Target,
    title: "Consultoria Estratégica",
    description: "Mentoria executiva para CEOs e CMOs que querem construir máquinas de crescimento sustentável.",
    benefits: [
      "Sessões estratégicas mensais",
      "Análise de mercado e concorrência",
      "Planejamento de longo prazo",
      "Acesso direto aos founders",
    ],
  },
];

const additionalServices = [
  {
    icon: Settings,
    title: "Otimização de Conversão (CRO)",
    description: "Análise comportamental, testes e otimizações para aumentar a taxa de conversão do seu site.",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Gestão estratégica de redes sociais com foco em engajamento e geração de leads.",
  },
  {
    icon: Megaphone,
    title: "Branding & Posicionamento",
    description: "Construção e refinamento de marca para se destacar em mercados competitivos.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Estratégias avançadas de email para nutrição, retenção e reativação de clientes.",
  },
  {
    icon: Bot,
    title: "IA & Chatbots",
    description: "Implementação de assistentes virtuais e automações com inteligência artificial.",
  },
  {
    icon: Lock,
    title: "Compliance & LGPD",
    description: "Adequação às normas de proteção de dados e boas práticas de segurança.",
  },
];

export default function Servicos() {
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
            Nossos{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Serviços
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Soluções completas de marketing digital e growth hacking para empresas que querem escalar de forma previsível e sustentável.
          </p>
        </motion.div>
      </section>

      {/* Main Services */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Serviços Principais
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              O core do nosso trabalho: estratégias que transformam negócios.
            </p>
          </motion.div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h4 className="text-sm font-semibold text-zinc-400 mb-4 uppercase tracking-wide">
                      O que está incluído:
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-300">
                          <ArrowRight className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-32 px-6 bg-white/[0.02] relative">
        <IridescentBlob className="w-[400px] h-[400px] top-20 right-0 opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Serviços Complementares
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Soluções adicionais para cobrir todas as frentes do seu crescimento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <FeatureCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <IridescentBlob className="w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Não encontrou exatamente o que precisa?
          </h2>
          <p className="text-xl text-zinc-300 mb-12">
            Criamos soluções personalizadas. Vamos conversar sobre seu desafio específico.
          </p>
          <RainbowButton className="text-lg px-10 h-14">
            Falar com Especialista <ArrowRight className="w-5 h-5" />
          </RainbowButton>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
