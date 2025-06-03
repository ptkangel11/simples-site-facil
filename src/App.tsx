// App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout"; // Importe o novo Layout
import Index from "./pages/Index";
import ConfirmarPresenca from "./pages/ConfirmarPresenca";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/simples-site-facil"> {/* Lembre-se do basename se estiver em subdiretório */}
        <Routes>
          {/* Envolva as rotas que devem ter o fundo comum com o componente Layout */}
          <Route path="/" element={<Layout />}> {/* Layout como elemento pai da rota */}
            <Route index element={<Index />} /> {/* 'index' para a rota padrão do pai '/' */}
            <Route path="confirmar-presenca" element={<ConfirmarPresenca />} />
            {/* Adicione outras rotas aqui que devem ter o mesmo fundo */}
          </Route>

          {/* Rota NotFound pode ficar fora se não precisar do mesmo layout de fundo,
              ou dentro se precisar. Se for uma página simples, pode ser fora. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;