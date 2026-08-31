import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./src/components/Layout";
import Index from "./src/pages/Index";
import ConfirmarPresenca from "./src/pages/ConfirmarPresenca";
import NotFound from "./src/pages/NotFound";

// 1. Importando as novas páginas dos posts
import PostAnsiedade from "./src/pages/PostAnsiedade";
import PostSono from "./src/pages/PostSono";
import PostCigarro from "./src/pages/PostCigarro";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="confirmar-presenca" element={<ConfirmarPresenca />} />
            
            {/* 2. Novas rotas adicionadas sem a barra (/) no início, seguindo o padrão de rotas filhas */}
            <Route path="post-ansiedade" element={<PostAnsiedade />} />
            <Route path="post-sono" element={<PostSono />} />
            <Route path="post-cigarro" element={<PostCigarro />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;