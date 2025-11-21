import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import GlowingCard from "@/components/GlowingCard";
import ContactForm from "@/components/ContactForm";
import RainbowButton from "@/components/RainbowButton";
import { Target, Users, Award, TrendingUp, Heart, Lightbulb, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Não vendemos horas trabalhadas. Vendemos ROI, crescimento e resultados mensuráveis.",
  },
  {
    icon: Users,
    title: "Parceria de Verdade",
    description: "Seu sucesso é nosso sucesso. Trabalhamos como extensão do seu time, não como fornecedor.",
  },
  {
    icon: Award,
    title: "Excelência Sempre",
    description: "Somos obcecados por qualidade e estamos sempre buscando a melhor solução, não a mais fácil.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "Experimentar, falhar rápido, aprender e escalar o que funciona. Esse é nosso DNA.",
  },
  {
    icon: Heart,
    title: "Transparência Total",
    description: "Dashboards abertos, comunicação honesta e zero bullshit. Você sempre sabe o que está acontecendo.",
  },
  {
    icon: Lightbulb,
    title: "Inovação Constante",
    description: "Sempre testando novas ferramentas, estratégias e canais para manter você à frente da concorrência.",
  },
];

const stats = [
  { number: "150+", label: "Clientes Ativos" },
  { number: "R$ 50M+", label: "Em Receita Gerada" },
  { number: "300%", label: "ROI Médio" },
  { number: "5 anos", label: "No Mercado" },
];

const timeline = [
  {
    year: "2020",
    title: "A Fundação",
    description: "Ivox Scale nasce da união de especialistas em marketing digital com paixão por dados e resultados.",
  },
  {
    year: "2021",
    title: "Primeiros Clientes",
    description: "Conquistamos nossos 25 primeiros clientes e geramos mais de R$ 5M em receita para eles.",
  },
  {
    year: "2022",
    title: "Expansão",
    description: "Dobramos o time e nos tornamos referência em growth hacking para SaaS B2B.",
  },
  {
    year: "2023",
    title: "Reconhecimento",
    description: "Top 10 agências de performance do Brasil com mais de 100 clientes ativos.",
  },
  {
    year: "2024",
    title: "Hoje",
    description: "150+ clientes, R$ 50M+ gerados e a melhor equipe de growth do mercado.",
  },
];

export default function Sobre() {
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Sobre a{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ivox Scale
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Somos uma agência de growth hacking e marketing digital obcecada por resultados.
            Transformamos empresas ambiciosas em máquinas de crescimento exponencial.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Nossa Missão
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Acreditamos que toda empresa tem potencial de crescimento exponencial. Nossa missão é desbloquear esse potencial através de estratégias baseadas em dados, experimentos rápidos e execução impecável.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Não somos mais uma agência que promete e não entrega. Somos parceiros obcecados pelo seu sucesso, que medem cada centavo investido e celebram cada marco alcançado junto com você.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Nossos Valores
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e cada estratégia que criamos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <GlowingCard className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Nossa Jornada
            </h2>
            <p className="text-xl text-zinc-400">
              De uma pequena startup a uma das principais agências de growth do Brasil.
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-white/10 pl-6 relative">
                  <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px] top-2" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-white/[0.02] relative">


        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Vamos Conversar?
            </h2>
            <p className="text-xl text-zinc-400">
              Entre em contato e descubra como podemos acelerar o crescimento do seu negócio.
            </p>
          </motion.div>

          <GlowingCard className="p-8">
            <ContactForm />
          </GlowingCard>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative">


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Pronto para o próximo nível?
          </h2>
          <p className="text-xl text-zinc-300 mb-12">
            Agende um diagnóstico gratuito e veja as oportunidades de crescimento que você está perdendo.
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
