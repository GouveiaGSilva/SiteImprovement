import { Link } from "wouter";
import { Home as HomeIcon, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import RainbowButton from "@/components/RainbowButton";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background overflow-hidden relative">


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 px-6"
      >
        <div className="text-9xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            404
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Página Não Encontrada
        </h1>
        <p className="text-xl text-zinc-400 mb-12 max-w-md mx-auto">
          Ops! Parece que você se perdeu. A página que você está procurando não existe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <RainbowButton to="/">
            <HomeIcon className="w-5 h-5" />
            Voltar para Home
          </RainbowButton>
          <Link to="/">
            <button className="inline-flex items-center gap-2 h-11 px-8 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all hover-elevate">
              <ArrowLeft className="w-5 h-5" />
              Página Anterior
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
