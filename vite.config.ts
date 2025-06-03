import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Define 'base' com base no modo
  base: mode === 'production'
    // ESSENCIAL: Substitua NOME_DO_SEU_REPOSITORIO pelo nome real do seu repositório no GitHub
    // Se for um site de usuário/organização (ex: seu-usuario.github.io), use '/'
    ? '/simples-site-facil/'
    : '/',
}));
