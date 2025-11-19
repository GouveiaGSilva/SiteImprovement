import { ArrowRight, TrendingUp, Zap, Lock, Sparkles, Search, Target } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsBar from "@/components/StatsBar";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { FAQList } from "@/components/FAQItem";
import CaseCard from "@/components/CaseCard";
import IridescentBlob from "@/components/IridescentBlob";
import RainbowButton from "@/components/RainbowButton";
import { Button } from "@/components/ui/button";

import testimonial1 from "@assets/generated_images/Female_CEO_headshot_c7fbc800.png";
import testimonial2 from "@assets/generated_images/Male_marketing_director_headshot_80407fb7.png";
import testimonial3 from "@assets/generated_images/Female_entrepreneur_headshot_374756f9.png";
import case1 from "@assets/generated_images/E-commerce_analytics_dashboard_af308884.png";
import case2 from "@assets/generated_images/Real_estate_website_mockup_8d63aac7.png";
import case3 from "@assets/generated_images/SaaS_platform_dashboard_4e2d9346.png";

const features = [
  {
    icon: TrendingUp,
    title: "Tráfego & Performance",
    description: "Aquisição de clientes com precisão cirúrgica. Otimização baseada em dados reais.",
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Seu negócio vendendo 24/7 com CRMs e fluxos que nunca dormem.",
  },
  {
    icon: Lock,
    title: "Segurança de Dados",
    description: "Conformidade total com LGPD e proteção dos seus ativos digitais.",
  },
  {
    icon: Sparkles,
    title: "Growth Hacking",
    description: "Experimentos rápidos para encontrar as alavancas de crescimento exponencial.",
  },
  {
    icon: Search,
    title: "B.I. & Analytics",
    description: "Dashboards em tempo real. Transformamos números complexos em decisões óbvias.",
  },
  {
    icon: Target,
    title: "Estratégia Personalizada",
    description: "Não vendemos pacotes prontos. Criamos soluções únicas para seu negócio.",
  },
];

const testimonials = [
  {
    quote: "A Ivox Scale transformou completamente nossa estratégia de marketing. Em 6 meses, triplicamos nossa base de clientes e o ROI superou todas as expectativas.",
    name: "Ana Paula Costa",
    role: "CEO",
    company: "TechStart",
    image: testimonial1,
  },
  {
    quote: "Profissionalismo e resultados excepcionais. A automação implementada pela equipe liberou nosso time para focar em estratégia, enquanto as vendas cresciam exponencialmente.",
    name: "Carlos Mendes",
    role: "Diretor de Marketing",
    company: "InnovateCo",
    image: testimonial2,
  },
  {
    quote: "Investimento que vale cada centavo. A metodologia data-driven da Ivox nos mostrou oportunidades que nunca tínhamos visto antes.",
    name: "Juliana Santos",
    role: "Fundadora",
    company: "GrowthLab",
    image: testimonial3,
  },
];

const cases = [
  {
    title: "E-commerce de Moda",
    description: "Transformação digital completa com foco em performance e conversão através de tráfego pago estratégico.",
    image: case1,
    metrics: [
      { label: "Aumento de Vendas", value: "+320%" },
      { label: "ROI", value: "450%" },
    ],
    tags: ["E-commerce", "Tráfego Pago", "CRO"],
  },
  {
    title: "Imobiliária Premium",
    description: "Geração de leads qualificados e automação completa do funil de vendas para imóveis de alto padrão.",
    image: case2,
    metrics: [
      { label: "Leads Qualificados", value: "+280%" },
      { label: "Taxa de Conversão", value: "3.2x" },
    ],
    tags: ["Imobiliário", "Leads", "Automação"],
  },
  {
    title: "SaaS B2B",
    description: "Growth hacking e otimização de conversão para plataforma de gestão empresarial.",
    image: case3,
    metrics: [
      { label: "MRR", value: "+410%" },
      { label: "CAC Redução", value: "-45%" },
    ],
    tags: ["SaaS", "Growth", "B2B"],
  },
];

const faqData = [
  {
    question: "Como funciona o processo de onboarding?",
    answer: "Iniciamos com um diagnóstico completo do seu negócio, seguido de um planejamento estratégico personalizado. Em seguida, implementamos as soluções e acompanhamos os resultados em tempo real através de dashboards exclusivos.",
  },
  {
    question: "Qual o investimento mínimo necessário?",
    answer: "O investimento varia de acordo com o escopo do projeto e as necessidades específicas do seu negócio. Oferecemos planos flexíveis a partir de R$ 5.000/mês, sempre focando em maximizar o ROI.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os primeiros resultados geralmente aparecem em 30-60 dias. No entanto, para crescimento sustentável e escalável, recomendamos um compromisso mínimo de 6 meses para implementação completa da estratégia.",
  },
  {
    question: "Vocês trabalham com que tipos de empresas?",
    answer: "Atendemos desde startups até empresas consolidadas, em diversos segmentos: E-commerce, SaaS, Serviços B2B, Educação, Saúde e mais. O importante é ter ambição de crescer e disposição para inovar.",
  },
  {
    question: "Como é medido o sucesso das campanhas?",
    answer: "Utilizamos KPIs específicos para cada negócio: ROI, CAC, LTV, taxa de conversão, MRR, entre outros. Você terá acesso a dashboards em tempo real com todas as métricas relevantes para sua operação.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6">
        <IridescentBlob className="w-[500px] h-[500px] top-20 -left-40" />
        <IridescentBlob className="w-[400px] h-[400px] bottom-40 -right-20" />
        <IridescentBlob className="w-[300px] h-[300px] top-1/2 right-1/3 opacity-40" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <span className="text-sm text-zinc-300">
              🚀 Mais de 150 empresas já escalam com a gente
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Transforme dados em{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              crescimento exponencial
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Growth hacking, automação e marketing digital de alta performance para empresas que não aceitam mediocridade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <RainbowButton className="text-base px-8">
              Agendar Diagnóstico Gratuito <ArrowRight className="w-5 h-5" />
            </RainbowButton>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              data-testid="button-view-cases"
            >
              Ver Cases de Sucesso
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Resultados em 30-60 dias
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500" />
              ROI médio de 300%
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              Suporte dedicado
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Features Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Ecossistema Completo de Growth
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Tudo que você precisa para escalar seu negócio de forma previsível e sustentável.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Resultados que Falam por Si
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Conheça algumas empresas que transformaram seus negócios com nossa metodologia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <CaseCard
                  {...caseItem}
                  onClick={() => console.log(`Case clicked: ${caseItem.title}`)}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <RainbowButton to="/cases">
              Ver Todos os Cases <ArrowRight className="w-4 h-4" />
            </RainbowButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 relative">
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
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Depoimentos reais de empresários que alcançaram resultados extraordinários.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-zinc-400">
              Tire suas dúvidas sobre nossos serviços e metodologia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FAQList items={faqData} />
          </motion.div>
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Pronto para escalar seu negócio?
          </h2>
          <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
            Agende um diagnóstico gratuito e descubra as oportunidades de crescimento que você está perdendo.
          </p>
          <RainbowButton className="text-lg px-10 h-14">
            Agendar Diagnóstico Gratuito <ArrowRight className="w-5 h-5" />
          </RainbowButton>
          
          <p className="text-sm text-zinc-500 mt-8">
            ⚡ Sem compromisso • Análise personalizada • Resultados garantidos
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
