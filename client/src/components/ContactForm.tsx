import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Form submitted:", formData);

    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-zinc-400">
            Nome *
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Seu nome completo"
            className="bg-white/5 border-white/10 focus:border-cyan-500"
            data-testid="input-contact-name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-zinc-400">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="seu@email.com"
            className="bg-white/5 border-white/10 focus:border-cyan-500"
            data-testid="input-contact-email"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-zinc-400">
            Empresa
          </Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nome da sua empresa"
            className="bg-white/5 border-white/10 focus:border-cyan-500"
            data-testid="input-contact-company"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-zinc-400">
            Telefone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            className="bg-white/5 border-white/10 focus:border-cyan-500"
            data-testid="input-contact-phone"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-zinc-400">
          Mensagem *
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Conte-nos sobre seu projeto e objetivos..."
          className="bg-white/5 border-white/10 focus:border-cyan-500 min-h-32 resize-none"
          data-testid="input-contact-message"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto"
        data-testid="button-contact-submit"
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            Enviar Mensagem <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </form>
  );
}
