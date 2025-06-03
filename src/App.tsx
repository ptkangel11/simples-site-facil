// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Index from "./pages/Index";
import ConfirmarPresenca from "./pages/ConfirmarPresenca";
import NotFound from "./pages/NotFound";
import PersistentAudioPlayer from "./components/PersistentAudioPlayer"; // Importe o player

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/simples-site-facil"> {/* Ou seu basename correto */}
        {/* Player de Áudio Persistente */}
        {/* <PersistentAudioPlayer src="" /> Caminho a partir da pasta public */}

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