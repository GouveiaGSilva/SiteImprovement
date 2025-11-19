import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

export default function FAQItem({ question, answer, value }: FAQItemProps) {
  return (
    <AccordionItem
      value={value}
      className="border-b border-white/10"
      data-testid={`faq-item-${value}`}
    >
      <AccordionTrigger className="text-left text-white hover:text-purple-400 transition-colors py-4">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-zinc-400 pb-4">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}

interface FAQListProps {
  items: Array<{ question: string; answer: string }>;
}

export function FAQList({ items }: FAQListProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <FAQItem
          key={index}
          value={`item-${index}`}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </Accordion>
  );
}
