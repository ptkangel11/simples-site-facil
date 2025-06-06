// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./src/components/Layout";
import Index from "./src/pages/Index";
import ConfirmarPresenca from "./src/pages/ConfirmarPresenca";
import NotFound from "./src/pages/NotFound";
import PersistentAudioPlayer from "./src/components/PersistentAudioPlayer"; // Importe o player

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/"> {/* Ou seu basename correto */}
        {/* Player de Áudio Persistente */}
        {/* IMPORTANTE: 
          1. Mova o seu arquivo MP3 para a pasta 'public'. 
             Exemplo: 'public/audio/musica-fundo.mp3'
          2. Atualize o 'src' abaixo para o caminho correto a partir da pasta 'public'.
        */}
        <PersistentAudioPlayer src="https://github.com/ptkangel11/simples-site-facil/raw/refs/heads/main/src/components/bed804e5d5a86eb0cbd4730cd2d99f9f_430c5367debce12aed7fe8e7e583aa58.mp3" /> {/* Exemplo de caminho público */}

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="confirmar-presenca" element={<ConfirmarPresenca />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
