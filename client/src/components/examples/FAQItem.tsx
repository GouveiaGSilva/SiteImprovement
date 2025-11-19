import { FAQList } from "../FAQItem";

export default function FAQItemExample() {
  const faqData = [
    {
      question: "Como funciona o processo de onboarding?",
      answer: "Iniciamos com um diagnóstico completo do seu negócio, seguido de um planejamento estratégico personalizado. Em seguida, implementamos as soluções e acompanhamos os resultados em tempo real.",
    },
    {
      question: "Qual o investimento mínimo necessário?",
      answer: "O investimento varia de acordo com o escopo do projeto e as necessidades específicas do seu negócio. Oferecemos planos flexíveis a partir de R$ 5.000/mês.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados geralmente aparecem em 30-60 dias. No entanto, para crescimento sustentável e escalável, recomendamos um compromisso mínimo de 6 meses.",
    },
  ];

  return (
    <div className="p-8 max-w-3xl">
      <FAQList items={faqData} />
    </div>
  );
}
