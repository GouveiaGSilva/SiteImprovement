import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RainbowButton from "./RainbowButton";

const navItems = [
  { name: "Metodologia", path: "/metodologia" },
  { name: "Serviços", path: "/servicos" },
  { name: "Cases", path: "/cases" },
  { name: "Sobre", path: "/sobre" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group" data-testid="link-home">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Ivox Scale
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors relative ${
                location === item.path
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
              data-testid={`link-nav-${item.name.toLowerCase()}`}
            >
              {item.name}
              {location === item.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-purple-500"
                />
              )}
            </Link>
          ))}
          <RainbowButton className="h-9 px-5 py-1 text-xs rounded-lg">
            Agendar Diagnóstico
          </RainbowButton>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 hover-elevate rounded-lg"
          data-testid="button-menu-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    location === item.path
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ))}
              <RainbowButton className="w-full">
                Agendar Diagnóstico
              </RainbowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
