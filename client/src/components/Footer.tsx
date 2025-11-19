import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    toast({
      title: "Inscrição realizada!",
      description: "Você receberá nossas novidades em breve.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-black/40 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
              </div>
              <span className="text-xl font-bold text-white">Ivox Scale</span>
            </div>
            <p className="text-sm text-zinc-400 mb-4">
              Growth hacking e marketing digital de alta performance para empresas que querem escalar.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover-elevate transition-colors"
                aria-label="Facebook"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover-elevate transition-colors"
                aria-label="Instagram"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover-elevate transition-colors"
                aria-label="LinkedIn"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover-elevate transition-colors"
                aria-label="Twitter"
                data-testid="link-social-twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/sobre"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                  data-testid="link-footer-sobre"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/cases"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                  data-testid="link-footer-cases"
                >
                  Cases de Sucesso
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Carreira
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/servicos"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                  data-testid="link-footer-servicos"
                >
                  Growth Hacking
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Tráfego Pago
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Automação
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Receba insights exclusivos sobre growth e marketing digital.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/5 border-white/10"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                className="w-full"
                data-testid="button-newsletter-submit"
              >
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            © 2025 Ivox Scale. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
